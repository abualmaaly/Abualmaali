"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface SearchSectionProps {
  onSearch?: (query: string) => void
}

export function SearchSection({ onSearch }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  return (
    <section className="py-12 -mt-10 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Input
                type="search"
                placeholder="ابحث عن مادة دراسية..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-6 text-lg rounded-full border-0 shadow-2xl bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 font-inter"
                dir="rtl"
              />
              <Button type="submit" size="sm" className="absolute left-2 top-2 h-10 w-10 rounded-full">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
