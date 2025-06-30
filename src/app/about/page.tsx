import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Code, Cpu, MessageSquareText } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="container py-12">
            <div className="mx-auto max-w-4xl space-y-8">                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About SLICE-V1</h1>
                    <p className="text-muted-foreground">Sign Language Interpretation & Communication Engine - Empowering inclusive communication</p>
                </div>

                <div className="space-y-4">
                    <p>
                        SLICE-V1 (Sign Language Interpretation & Communication Engine) is an innovative web application that transforms 
                        sign language gestures into readable text through real-time camera analysis. Utilizing cutting-edge artificial 
                        intelligence and computer vision algorithms, it creates seamless communication bridges between deaf and hearing communities.
                    </p>
                    <p>
                        Our vision is to create a world where communication barriers don't exist. Through state-of-the-art machine learning 
                        models and advanced gesture recognition technology, SLICE-V1 democratizes access to sign language interpretation, 
                        making it available to anyone with a web browser and camera.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Camera className="h-5 w-5" />
                            </div>                            <CardTitle>Real-time Detection</CardTitle>
                            <CardDescription>Instant gesture recognition with precision tracking</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                SLICE-V1 leverages MediaPipe's advanced hand landmark detection and OpenCV's robust computer vision 
                                algorithms to capture and analyze hand movements with millisecond precision, delivering real-time 
                                feedback for seamless sign language interpretation.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <MessageSquareText className="h-4 w-4" />
                            </div>                            <CardTitle>Sign Interpretation</CardTitle>
                            <CardDescription>Intelligent gesture-to-text conversion</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Our sophisticated neural networks analyze hand configurations and movements to accurately translate 
                                American Sign Language gestures into readable text, enabling fluid communication between deaf and 
                                hearing individuals.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Cpu className="h-4 w-4" />
                            </div>                            <CardTitle>AI-Powered</CardTitle>
                            <CardDescription>Deep learning for accurate recognition</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Built on TensorFlow and Keras frameworks, SLICE-V1 employs deep neural networks trained on extensive 
                                sign language datasets to achieve high accuracy in gesture recognition, with continuous learning 
                                capabilities for improved performance over time.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Code className="h-4 w-4" />
                            </div>                            <CardTitle>Open Technology</CardTitle>
                            <CardDescription>Cross-platform accessibility with modern web standards</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Developed using cutting-edge web technologies including Next.js, React, and TensorFlow.js, SLICE-V1 
                                runs seamlessly in any modern browser without requiring specialized software installations or 
                                expensive hardware, ensuring universal accessibility.
                            </p>
                        </CardContent>
                    </Card>
                </div>                <div className="rounded-lg border bg-muted p-6">
                    <h2 className="mb-4 text-xl font-semibold">Technical Architecture</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">Frontend Framework:</span>
                            <span>Next.js 14 with React 18, TypeScript, and Tailwind CSS for responsive design</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">AI & Machine Learning:</span>
                            <span>TensorFlow.js, MediaPipe Hands for real-time hand tracking and gesture classification</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">Computer Vision:</span>
                            <span>OpenCV.js for advanced image processing and hand landmark detection</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 font-semibold">Deployment Platform:</span>
                            <span>Vercel Edge Runtime for global CDN distribution and optimal performance</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

