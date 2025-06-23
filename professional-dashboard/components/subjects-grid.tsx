"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SubjectCard } from "./subject-card"
import { SubjectModal } from "./subject-modal"
import { subjects } from "@/lib/subjects-data"

export function SubjectsGrid() {
  const [filteredSubjects, setFilteredSubjects] = useState(subjects)
  const [selectedSubject, setSelectedSubject] = useState<(typeof subjects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubjectClick = (subject: (typeof subjects)[0]) => {
    setSelectedSubject(subject)
    setIsModalOpen(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter">المواد الدراسية</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-inter">اختر المادة التي تريد دراستها</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSubjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SubjectCard subject={subject} onClick={() => handleSubjectClick(subject)} />
            </motion.div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400 font-inter">لم يتم العثور على المادة المطلوبة</p>
          </motion.div>
        )}
      </div>

      <SubjectModal subject={selectedSubject} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  )
}
