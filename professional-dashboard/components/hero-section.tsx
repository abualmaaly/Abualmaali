"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Users, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-inter">Welcome to My World</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-inter">
            تصفح المواد الدراسية وابدأ رحلتك التعليمية مع أفضل المحتوى التعليمي المتخصص
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { icon: BookOpen, label: "مواد متنوعة", count: "8+" },
            { icon: Users, label: "طلاب نشطون", count: "1000+" },
            { icon: GraduationCap, label: "دروس شاملة", count: "50+" },
            { icon: Award, label: "جودة عالية", count: "100%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 text-blue-200 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white font-inter">{stat.count}</div>
              <div className="text-blue-200 text-sm font-inter">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
