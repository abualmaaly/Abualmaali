"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Languages,
  ChurchIcon as Mosque,
  BookOpen,
  Calculator,
  Leaf,
  Globe,
  FlaskRoundIcon as Flask,
  Scale,
  SpellCheck,
} from "lucide-react"

const iconMap = {
  "fa-language": Languages,
  "fa-mosque": Mosque,
  "fa-book-quran": BookOpen,
  "fa-calculator": Calculator,
  "fa-leaf": Leaf,
  "fa-globe-africa": Globe,
  "fa-flask": Flask,
  "fa-gavel": Scale,
  "fa-spell-check": SpellCheck,
}

interface Subject {
  title: string
  description: string
  icon: keyof typeof iconMap
  content: string
}

interface SubjectCardProps {
  subject: Subject
  onClick: () => void
}

export function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const IconComponent = iconMap[subject.icon] || BookOpen

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className="h-full cursor-pointer group overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="p-6 text-center relative z-10">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-inter">
            {subject.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 font-inter">
            {subject.description}
          </p>

          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-inter"
          >
            اضغط للمشاهدة
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  )
}
