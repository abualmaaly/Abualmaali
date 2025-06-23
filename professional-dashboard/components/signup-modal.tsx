"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface User {
  email: string
  name: string
  role: "admin" | "user"
}

interface SignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSignup: (user: User) => void
}

export function SignupModal({ open, onOpenChange, onSignup }: SignupModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    onSignup({ email, name, role: "user" })

    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">إنشاء حساب جديد</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">الاسم</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-right"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-email">البريد الإلكتروني</Label>
            <Input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-right"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password">كلمة المرور</Label>
            <Input
              id="signup-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-right"
            />
          </div>

          <Button type="submit" className="w-full">
            إنشاء الحساب
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
