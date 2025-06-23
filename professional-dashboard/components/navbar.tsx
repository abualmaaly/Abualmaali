"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, User, LogOut, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LoginModal } from "./login-modal"
import { SignupModal } from "./signup-modal"

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [currentUser, setCurrentUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light"
    const savedUser = sessionStorage.getItem("currentUser")

    setTheme(savedTheme)
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }

    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const handleLogin = (user) => {
    setCurrentUser(user)
    sessionStorage.setItem("currentUser", JSON.stringify(user))
    setShowLogin(false)
  }

  const handleSignup = (user) => {
    setCurrentUser(user)
    sessionStorage.setItem("currentUser", JSON.stringify(user))
    setShowSignup(false)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    sessionStorage.removeItem("currentUser")
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white font-inter">ابوالمعالي</span>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="rounded-full">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>

              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 rtl:space-x-reverse font-inter">
                      <User className="h-5 w-5" />
                      <span>{currentUser.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleLogout} className="font-inter">
                      <LogOut className="h-4 w-4 ml-2" />
                      تسجيل الخروج
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <Button variant="outline" size="sm" onClick={() => setShowLogin(true)} className="font-inter text-[rgba(41,109,245,1)]">
                    تسجيل الدخول
                  </Button>
                  <Button size="sm" onClick={() => setShowSignup(true)} className="font-inter">
                    إنشاء حساب
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal open={showLogin} onOpenChange={setShowLogin} onLogin={handleLogin} />
      <SignupModal open={showSignup} onOpenChange={setShowSignup} onSignup={handleSignup} />
    </>
  )
}
