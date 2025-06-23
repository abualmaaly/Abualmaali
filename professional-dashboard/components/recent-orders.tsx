import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const orders = [
  {
    id: "#12345",
    customer: "سارة أحمد",
    product: "جهاز لابتوب Dell",
    amount: "4,500 ر.س",
    status: "مكتمل",
    date: "2024-01-15",
  },
  {
    id: "#12346",
    customer: "محمد علي",
    product: "هاتف iPhone 15",
    amount: "3,200 ر.س",
    status: "قيد المعالجة",
    date: "2024-01-14",
  },
  {
    id: "#12347",
    customer: "فاطمة خالد",
    product: "ساعة Apple Watch",
    amount: "1,800 ر.س",
    status: "مشحون",
    date: "2024-01-13",
  },
  {
    id: "#12348",
    customer: "عبدالله محمد",
    product: "سماعات AirPods",
    amount: "650 ر.س",
    status: "ملغي",
    date: "2024-01-12",
  },
]

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الطلبات الأخيرة</CardTitle>
        <CardDescription>آخر الطلبات المستلمة</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{order.id}</span>
                  <Badge
                    variant={
                      order.status === "مكتمل"
                        ? "default"
                        : order.status === "قيد المعالجة"
                          ? "secondary"
                          : order.status === "مشحون"
                            ? "outline"
                            : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{order.customer}</p>
                <p className="text-xs text-gray-500">{order.product}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{order.amount}</p>
                <p className="text-xs text-gray-500">{order.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          عرض جميع الطلبات
        </Button>
      </CardContent>
    </Card>
  )
}
