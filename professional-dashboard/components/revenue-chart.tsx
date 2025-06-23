"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "يناير", revenue: 45000 },
  { month: "فبراير", revenue: 52000 },
  { month: "مارس", revenue: 48000 },
  { month: "أبريل", revenue: 61000 },
  { month: "مايو", revenue: 55000 },
  { month: "يونيو", revenue: 67000 },
  { month: "يوليو", revenue: 73000 },
  { month: "أغسطس", revenue: 69000 },
  { month: "سبتمبر", revenue: 78000 },
  { month: "أكتوبر", revenue: 85000 },
  { month: "نوفمبر", revenue: 82000 },
  { month: "ديسمبر", revenue: 95000 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الإيرادات الشهرية</CardTitle>
        <CardDescription>نمو الإيرادات على مدار العام</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: "الإيرادات",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
