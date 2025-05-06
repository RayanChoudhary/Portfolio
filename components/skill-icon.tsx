"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface SkillIconProps {
  name: string
  icon: string
}

export function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden">
        <CardContent className="flex flex-col items-center justify-center p-4">
          <div className="relative h-12 w-12">
            <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>
          <p className="mt-2 text-center text-sm font-medium">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
