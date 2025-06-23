"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Users,
  Settings,
  FileText,
  ShoppingCart,
  TrendingUp,
  Calendar,
  Mail,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: BarChart3, label: "لوحة التحكم", href: "/", active: true },
  { icon: Users, label: "إدارة المستخدمين", href: "/users" },
  { icon: ShoppingCart, label: "الطلبات", href: "/orders" },
  { icon: TrendingUp, label: "التقارير", href: "/reports" },
  { icon: FileText, label: "المحتوى", href: "/content" },
  { icon: Calendar, label: "التقويم", href: "/calendar" },
  { icon: Mail, label: "الرسائل", href: "/messages" },
  { icon: Bell, label: "الإشعارات", href: "/notifications" },
  { icon: Settings, label: "الإعدادات", href: "/settings" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && <h1 className="text-xl font-bold text-gray-800">نظام الإدارة</h1>}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  item.active
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="font-medium">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
