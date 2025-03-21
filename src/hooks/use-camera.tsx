"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

interface UseCameraOptions {
    onFrame?: (video: HTMLVideoElement) => void
    fps?: number
}

export function useCamera({ onFrame, fps = 30 }: UseCameraOptions = {}) {
    const [isStreaming, setIsStreaming] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const streamRef = useRef<MediaStream | null>(null)
    const requestAnimationRef = useRef<number | null>(null)
    const lastFrameTimeRef = useRef<number>(0)
    const frameIntervalMs = 1000 / fps
    const { toast } = useToast()

    // Function to start processing frames
    const startFrameProcessing = useCallback(() => {
        if (!videoRef.current || !onFrame) return

        const processFrame = (timestamp: number) => {
            if (!videoRef.current) return

            // Calculate time since last frame
            const elapsed = timestamp - lastFrameTimeRef.current

            // Only process frame if enough time has passed (based on FPS)
            if (elapsed >= frameIntervalMs) {
                lastFrameTimeRef.current = timestamp - (elapsed % frameIntervalMs)
                onFrame(videoRef.current)
            }

            requestAnimationRef.current = requestAnimationFrame(processFrame)
        }

        requestAnimationRef.current = requestAnimationFrame(processFrame)
    }, [onFrame, frameIntervalMs])

    // Function to start the camera
    const startCamera = useCallback(async () => {
        try {
            setIsLoading(true)
            setError(null)

            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: "user",
                },
            })

            if (videoRef.current) {
                videoRef.current.srcObject = stream
                streamRef.current = stream

                // Wait for video to be ready
                await new Promise((resolve) => {
                    if (videoRef.current) {
                        videoRef.current.onloadedmetadata = resolve
                    }
                })

                setIsStreaming(true)

                if (onFrame) {
                    startFrameProcessing()
                }

                toast({
                    title: "Camera started",
                    description: "Your camera feed is now active",
                })
            }
        } catch (err) {
            console.error("Error accessing camera:", err)
            setError("Could not access camera. Please update permissions.")
            toast({
                title: "Camera error",
                description: "Could not access your camera. Please check permissions.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }, [onFrame, startFrameProcessing, toast])

    // Function to stop the camera
    const stopCamera = useCallback(() => {
        if (requestAnimationRef.current) {
            cancelAnimationFrame(requestAnimationRef.current)
            requestAnimationRef.current = null
        }

        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop())
            streamRef.current = null
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null
        }

        setIsStreaming(false)
        toast({
            title: "Camera stopped",
            description: "Your camera feed has been stopped",
        })
    }, [toast])

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (requestAnimationRef.current) {
                cancelAnimationFrame(requestAnimationRef.current)
            }

            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop())
            }
        }
    }, [])

    return {
        videoRef,
        isStreaming,
        isLoading,
        error,
        startCamera,
        stopCamera,
    }
}

