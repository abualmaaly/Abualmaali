"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { RecentOrders } from "@/components/recent-orders"
import { TopProducts } from "@/components/top-products"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم الرئيسية</h1>
          <p className="text-gray-600 mt-1">نظرة عامة على أداء النشاط التجاري</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">تصدير التقرير</Button>
          <Button>إضافة جديد</Button>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <Card>
          <CardHeader>
            <CardTitle>الأهداف الشهرية</CardTitle>
            <CardDescription>تقدم الأهداف لهذا الشهر</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>المبيعات</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>العملاء الجدد</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>الإيرادات</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders />
        <TopProducts />
      </div>
    </div>
  )
}
