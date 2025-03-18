import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Download, Info, Settings } from "lucide-react"
import CameraFeed from "@/components/camera-feed"
import DetectionResults from "@/components/detection-results"
import LoadingCamera from "@/components/loading-camera"

export default function DashboardPage() {
    return (
        <div className="container py-6">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">Real-time sign language detection and interpretation</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Info className="mr-2 h-4 w-4" />
                        Help
                    </Button>
                    <Button variant="outline" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                    </Button>
                    <Button size="sm">
                        <Camera className="mr-2 h-4 w-4" />
                        Start Detection
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Camera Feed</CardTitle>
                        <CardDescription>Position your hands within the frame for best detection results</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video overflow-hidden rounded-md border bg-muted">
                            <Suspense fallback={<LoadingCamera />}>
                                <CameraFeed />
                            </Suspense>
                        </div>
                    </CardContent>
                </Card>

                <div className="col-span-1 grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Detection Results</CardTitle>
                            <CardDescription>Real-time interpretation of detected gestures</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="text">
                                <TabsList className="mb-4">
                                    <TabsTrigger value="text">Text</TabsTrigger>
                                    <TabsTrigger value="debug">Debug</TabsTrigger>
                                </TabsList>
                                <TabsContent value="text">
                                    <DetectionResults />
                                </TabsContent>
                                <TabsContent value="debug">
                                    <div className="h-[300px] rounded-md border bg-muted p-4">
                    <pre className="text-xs">
                      <code>
                        {`// Debug information
Hand detected: true
Confidence: 0.92
Landmarks: [
  { x: 0.123, y: 0.456, z: 0.789 },
  { x: 0.234, y: 0.567, z: 0.890 },
  ...
]`}
                      </code>
                    </pre>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Actions</CardTitle>
                            <CardDescription>Save or export your detection results</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="outline">
                                    <Download className="mr-2 h-4 w-4" />
                                    Export Results
                                </Button>
                                <Button variant="outline">Clear History</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

