import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Code, Cpu, MessageSquareText } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="container py-12">
            <div className="mx-auto max-w-4xl space-y-8">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About SLICE-V1</h1>
                    <p className="text-muted-foreground">Sign Language Conversion Engine - Breaking communication barriers</p>
                </div>

                <div className="space-y-4">
                    <p>
                        SLICE-V1 (Sign Language Conversion Engine) is a web application designed to detect and interpret sign
                        language gestures in real-time using a camera. Powered by advanced AI and computer vision technologies, it
                        aims to bridge communication gaps by converting gestures into text.
                    </p>
                    <p>
                        Our mission is to make communication more accessible for everyone, regardless of hearing ability. By
                        leveraging the latest advancements in machine learning and computer vision, we've created a tool that can
                        recognize and interpret sign language in real-time.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Camera className="h-4 w-4" />
                            </div>
                            <CardTitle>Real-time Detection</CardTitle>
                            <CardDescription>Advanced computer vision for gesture recognition</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                SLICE-V1 uses OpenCV and Mediapipe to detect hand movements and gestures in real-time, providing
                                immediate visual feedback on the detected signs.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <MessageSquareText className="h-4 w-4" />
                            </div>
                            <CardTitle>Sign Interpretation</CardTitle>
                            <CardDescription>Converting gestures to meaningful text</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Our machine learning models are trained to recognize common sign language gestures and convert them into
                                text, making communication more accessible.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Cpu className="h-4 w-4" />
                            </div>
                            <CardTitle>AI-Powered</CardTitle>
                            <CardDescription>Machine learning at the core</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                SLICE-V1 leverages Keras for machine learning capabilities, enabling accurate recognition of sign
                                language patterns and continuous improvement over time.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Code className="h-4 w-4" />
                            </div>
                            <CardTitle>Open Technology</CardTitle>
                            <CardDescription>Built with modern web technologies</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Our application is built using Next.js, TensorFlow.js, and other modern web technologies, making it
                                accessible across devices without requiring special hardware.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="rounded-lg border bg-muted p-6">
                    <h2 className="mb-4 text-xl font-semibold">Technical Specifications</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">Frontend:</span>
                            <span>Next.js, React, Tailwind CSS</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">Machine Learning:</span>
                            <span>TensorFlow.js, Mediapipe</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">Computer Vision:</span>
                            <span>OpenCV.js</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">Deployment:</span>
                            <span>Vercel</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

