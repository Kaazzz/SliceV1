"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Camera, CameraOff } from "lucide-react"
import { useCamera } from "@/hooks/use-camera"
import { useHandDetection } from "@/hooks/use-hand-detection"
import { useDetectionStore } from "@/hooks/use-detection-store"

export default function CameraFeed() {
    const { videoRef, isStreaming, isLoading, error, startCamera, stopCamera } = useCamera({
        onFrame: processVideoFrame,
    })

    const { canvasRef, isModelLoaded, processFrame, results } = useHandDetection()

    const { addResult } = useDetectionStore()


    function processVideoFrame(video: HTMLVideoElement) {
        if (isModelLoaded) {
            processFrame(video)
        }
    }


    useEffect(() => {
        if (results.length > 0) {
            const latestResult = results[0]
            addResult(latestResult)
        }
    }, [results, addResult])

    return (
        <div className="relative">
            <video ref={videoRef} autoPlay playsInline muted className="h-full w-full rounded-md bg-black" />
            <canvas ref={canvasRef} className="absolute left-0 top-0 h-full w-full" />
            <div className="absolute bottom-4 right-4 flex gap-2">
                {isStreaming ? (
                    <Button variant="destructive" size="sm" onClick={stopCamera}>
                        <CameraOff className="mr-2 h-4 w-4" />
                        Stop Camera
                    </Button>
                ) : (
                    <Button variant="default" size="sm" onClick={startCamera} disabled={isLoading}>
                        <Camera className="mr-2 h-4 w-4" />
                        {isLoading ? "Starting..." : "Start Camera"}
                    </Button>
                )}
            </div>

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                    <div className="rounded-md bg-destructive p-4 text-destructive-foreground">{error}</div>
                </div>
            )}
        </div>
    )
}

