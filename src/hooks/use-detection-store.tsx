"use client"

import { create } from "zustand"
import type { DetectionResult } from "@/hooks/use-hand-detection"

interface DetectionState {
    results: DetectionResult[]
    currentText: string
    addResult: (result: DetectionResult) => void
    clearResults: () => void
    updateCurrentText: (text: string) => void
}

export const useDetectionStore = create<DetectionState>((set) => ({
    results: [],
    currentText: "",

    addResult: (result) =>
        set((state) => ({
            results: [result, ...state.results.slice(0, 19)], // Keep last 20 results
        })),

    clearResults: () => set({ results: [], currentText: "" }),

    updateCurrentText: (text) => set({ currentText: text }),
}))

// Helper hook to combine detection results into text
export function useDetectionText() {
    const { results, currentText, updateCurrentText } = useDetectionStore()

    const addToText = (gesture: string) => {
        updateCurrentText((prev) => {
            // Start a new sentence if text is getting long
            if (prev.length > 100) {
                return gesture
            }
            // Add the gesture to the current text
            return prev ? `${prev} ${gesture}`.toLowerCase() : gesture
        })
    }

    return {
        results,
        currentText,
        addToText,
    }
}

