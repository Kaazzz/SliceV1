export default function LoadingCamera() {
    return (
        <div className="flex aspect-video items-center justify-center rounded-md border bg-muted">
            <div className="flex flex-col items-center gap-2 text-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="text-sm text-muted-foreground">Initializing camera...</p>
            </div>
        </div>
    )
}

