"use client"



import { useState } from "react"

type ToastVariant = "default" | "destructive"

interface ToastProps {
    title: string
    description: string
    variant?: ToastVariant
}

export function useToast() {
    const [toasts, setToasts] = useState<ToastProps[]>([])

    const toast = (props: ToastProps) => {
        setToasts((prev) => [...prev, props])
        // In a real implementation, this would show a toast notification
        console.log(`Toast: ${props.title} - ${props.description}`)
    }

    return { toast, toasts }
}

