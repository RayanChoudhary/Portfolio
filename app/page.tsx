"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ServiceCard } from "@/components/service-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { SkillIcon } from "@/components/skill-icon"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Portfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hi, I'm <span className="text-primary">Muhammad Rayan</span>
                </h1>
                <p className="text-xl text-muted-foreground">Frontend Developer & UI/UX Implementer</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build modern, responsive web applications with Next.js, TypeScript, and cutting-edge frontend
                technologies.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#contact">Hire Me</Link>
                </Button>
                <Link href="/resume.pdf" passHref>
                  <Button variant="outline" size="lg" className="gap-1">
                    <Download size={16} />
                    Download Resume
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/11.jpg"
                alt="Muhammad Rayan"
                fill
                className="object-cover"
                priority
              />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                I'm a passionate frontend developer with expertise in building modern web applications.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <p className="text-lg">
                With over 2 years of experience in web development, I specialize in creating responsive, user-friendly
                interfaces that deliver exceptional user experiences. I'm passionate about clean code, performance
                optimization, and staying up-to-date with the latest web technologies.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and tutorials.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-center text-2xl font-bold">My Skills</h3>
              <div className="w-full grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <SkillIcon name="Next.js" icon="/download.png" />
                <SkillIcon name="TypeScript" icon="/typescript.png" />
                <SkillIcon name="React" icon="/react.png" />
                <SkillIcon name="Tailwind CSS" icon="/tailwind.png" />
                <SkillIcon name="Node.js" icon="/node.png" />
                <SkillIcon name="GraphQL" icon="/graphql.png" />
                <SkillIcon name="Streamlit" icon="/streamlit.png" />
                <SkillIcon name="Figma" icon="/figma.png" />
                <SkillIcon name="Git" icon="/github.png" />
                <SkillIcon name="REST APIs" icon="/restapi.png" />
                <SkillIcon name="Vercel" icon="/vercel.png" />
                <SkillIcon name="Python" icon="/python.png" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services I Offer</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                I provide a range of services to help you build and improve your web presence.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Web Development"
                description="Building responsive, modern websites and web applications using Next.js, React, and TypeScript."
                icon="Code"
              />
              <ServiceCard
                title="API Integration"
                description="Connecting your frontend to backend services, third-party APIs, and data sources."
                icon="Database"
              />
              <ServiceCard
                title="UI/UX Implementation"
                description="Turning design mockups into pixel-perfect, responsive interfaces with smooth animations."
                icon="Palette"
              />
              <ServiceCard
                title="Custom Dashboard Development"
                description="Creating interactive, data-driven dashboards with charts, tables, and real-time updates."
                icon="BarChart"
              />
              <ServiceCard
                title="Landing Pages"
                description="Designing and developing high-converting landing pages optimized for performance and SEO."
                icon="Layout"
              />
              <ServiceCard
                title="Performance Optimization"
                description="Improving load times, Core Web Vitals, and overall performance of your web applications."
                icon="Zap"
              />
            </div>
          </div>
        </section>

        

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                    <p className="text-muted-foreground">
                      Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href="mailto:ryyanchoudhary9@gmail.com">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                          <span className="sr-only">Email</span>
                        </Link>
                      </Button>
                      <span>ryyanchoudhary9@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href="https://www.linkedin.com/in/muhammad-rayan-063815218/" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <span>linkedin.com/in/muhammad-rayan-063815218/</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href="https://github.com/RayanChoudhary" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <span>github.com/RayanChoudhary</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
  {/* Snapchat */}
  <Button variant="outline" size="icon" asChild>
    <Link
      href="https://www.snapchat.com/web?web_client_id=2f724456-cbbc-441c-b45c-1ba80b9f936d"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-snapchat"
      >
        <path d="M12 2c2.1 0 3.9 1.2 4.9 3 .6 1.2.9 2.5.8 3.8 1.5.1 2.8.4 3.3.7.6.4.6 1.3-.2 1.6-2.2.8-2.4 2.8-1.8 3.8.3.4.2 1-.2 1.3-1.1.8-2.3.9-3.4 1.1-.5.9-1.5 2.5-3.4 2.5s-2.9-1.6-3.4-2.5c-1.1-.2-2.3-.3-3.4-1.1-.4-.3-.5-.9-.2-1.3.6-1-.1-3-1.8-3.8-.7-.3-.8-1.2-.2-1.6.5-.3 1.8-.6 3.3-.7-.1-1.3.2-2.6.8-3.8C8.1 3.2 9.9 2 12 2z" />
      </svg>
      <span className="sr-only">Snapchat</span>
    </Link>
  </Button>

  {/* Instagram */}
  <Button variant="outline" size="icon" asChild>
    <Link
      href="https://www.instagram.com/ryyanchouudhary"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-instagram"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
      <span className="sr-only">Instagram</span>
    </Link>
  </Button>

  {/* Facebook */}
  <Button variant="outline" size="icon" asChild>
    <Link
      href="https://www.facebook.com/Rayansanghera"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-facebook"
      >
        <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
      </svg>
      <span className="sr-only">Facebook</span>
    </Link>
  </Button>
</div>

                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Muhammad Rayan. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
