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

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onLogin: (user: User) => void
}

export function LoginModal({ open, onOpenChange, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const ADMIN_EMAIL = "abualmaaly11@gmail.com"
    const ADMIN_PASS = "1#2#3#4#Abu"

    if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASS) {
      onLogin({ email, name: "المسؤول", role: "admin" })
    } else {
      onLogin({ email, name: email.split("@")[0], role: "user" })
    }

    setEmail("")
    setPassword("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">تسجيل الدخول</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-right text-[rgba(41,109,245,1)]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-right"
            />
          </div>

          <Button type="submit" className="w-full">
            دخول
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
