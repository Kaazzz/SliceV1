import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, MessageSquareText, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col">
        {/* HEADER */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between pl-5">
            <div className="flex items-center gap-2">
              <MessageSquareText className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SLICE-V1</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-medium hover:underline">
                Dashboard
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline">
                About
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex flex-1 flex-col items-center justify-center px-4">
          {/* HERO SECTION */}
          <section className="container flex flex-col items-center text-center space-y-6 py-12 md:py-24 lg:py-32">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
              Sign Language Conversion Engine
            </h1>
            <p className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
              Breaking communication barriers with real-time sign language detection and interpretation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </section>

          {/* FEATURE SECTION */}
          <section className="container max-w-5xl py-12 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Real-time Sign Language Detection
                </h2>
                <p className="text-muted-foreground sm:text-lg">
                  SLICE-V1 uses advanced AI and computer vision to detect and interpret sign language gestures in
                  real-time, making communication more accessible for everyone.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center lg:justify-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Camera className="h-3 w-3" />
                    </div>
                    <span>Real-time hand & gesture detection</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <MessageSquareText className="h-3 w-3" />
                    </div>
                    <span>Sign language interpretation</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Settings className="h-3 w-3" />
                    </div>
                    <span>Intuitive & accessible interface</span>
                  </li>
                </ul>
              </div>
              {/* IMAGE SECTION */}
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted flex items-center justify-center">
                <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Demo of sign language detection"
                    width={1280}
                    height={720}
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="secondary" size="lg">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row pl-5">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SLICE-V1. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
  )
}
