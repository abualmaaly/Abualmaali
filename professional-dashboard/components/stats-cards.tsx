import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShoppingCart, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  {
    title: "إجمالي الإيرادات",
    value: "245,000 ر.س",
    change: "+12.5%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    title: "العملاء النشطون",
    value: "1,234",
    change: "+8.2%",
    changeType: "increase",
    icon: Users,
  },
  {
    title: "الطلبات الجديدة",
    value: "89",
    change: "-2.1%",
    changeType: "decrease",
    icon: ShoppingCart,
  },
  {
    title: "معدل النمو",
    value: "23.5%",
    change: "+5.4%",
    changeType: "increase",
    icon: TrendingUp,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="flex items-center text-xs mt-1">
              {stat.changeType === "increase" ? (
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={stat.changeType === "increase" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
              <span className="text-gray-500 mr-1">من الشهر الماضي</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
