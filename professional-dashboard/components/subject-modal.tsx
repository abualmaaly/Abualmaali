"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Edit, Save, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Subject {
  title: string
  description: string
  icon: string
  content: string
}

interface SubjectModalProps {
  subject: Subject | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubjectModal({ subject, open, onOpenChange }: SubjectModalProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState("")
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    const user = sessionStorage.getItem("currentUser")
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
  }, [])

  useEffect(() => {
    if (subject) {
      setEditedContent(subject.content)
    }
  }, [subject])

  const handleSave = () => {
    // Here you would typically save to a database
    console.log("Saving content:", editedContent)
    setIsEditing(false)
    // You could update the subject content here
  }

  if (!subject) return null

  const isAdmin = currentUser?.role === "admin"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
              {subject.title}
            </DialogTitle>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {isAdmin && (
                <Button
                  variant={isEditing ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    if (isEditing) {
                      handleSave()
                    } else {
                      setIsEditing(true)
                    }
                  }}
                  className="font-inter"
                >
                  {isEditing ? <Save className="h-4 w-4 ml-2" /> : <Edit className="h-4 w-4 ml-2" />}
                  {isEditing ? "حفظ" : "تعديل"}
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full w-full">
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isEditing ? "editing" : "viewing"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-lg max-w-none dark:prose-invert"
                >
                  {isEditing ? (
                    <textarea
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      className="w-full h-[60vh] p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 font-inter"
                      placeholder="أدخل محتوى المادة هنا..."
                      dir="rtl"
                    />
                  ) : (
                    <div className="content-area min-h-[60vh]" dangerouslySetInnerHTML={{ __html: subject.content }} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
