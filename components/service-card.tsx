"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Code, Database, Layout, Palette, Zap } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const icons = {
    Code: <Code className="h-10 w-10 text-primary" />,
    Database: <Database className="h-10 w-10 text-primary" />,
    Palette: <Palette className="h-10 w-10 text-primary" />,
    BarChart: <BarChart className="h-10 w-10 text-primary" />,
    Layout: <Layout className="h-10 w-10 text-primary" />,
    Zap: <Zap className="h-10 w-10 text-primary" />,
  }

  const IconComponent = icons[icon as keyof typeof icons]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardHeader>
          {IconComponent}
          <CardTitle className="mt-4">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
