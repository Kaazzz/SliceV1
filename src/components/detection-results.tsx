"use client"

import { Card } from "@/components/ui/card"
import { useDetectionStore } from "@/hooks/use-detection-store"

export default function DetectionResults() {
    const { results, currentText } = useDetectionStore()

    if (results.length === 0) {
        return (
            <div className="flex h-[300px] items-center justify-center rounded-md border bg-muted p-4 text-center">
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">No gestures detected yet</p>
                    <p className="text-xs text-muted-foreground">Position your hands in the camera view to begin</p>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <div className="rounded-md border bg-muted p-4">
                <p className="text-lg font-medium">{currentText || "Start signing to see text here"}</p>
            </div>

            <div className="h-[200px] space-y-2 overflow-y-auto rounded-md border bg-muted p-2">
                {results.map((result) => (
                    <Card key={result.id} className="p-2 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="font-medium">{result.gesture}</span>
                            <span className="text-xs text-muted-foreground">{result.confidence.toFixed(2)} confidence</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{result.timestamp.toLocaleTimeString()}</div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

