import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const products = [
  {
    name: "جهاز لابتوب Dell XPS",
    sales: 145,
    revenue: "652,500 ر.س",
    progress: 85,
  },
  {
    name: "هاتف iPhone 15 Pro",
    sales: 98,
    revenue: "441,600 ر.س",
    progress: 72,
  },
  {
    name: "ساعة Apple Watch Series 9",
    sales: 76,
    revenue: "136,800 ر.س",
    progress: 58,
  },
  {
    name: "سماعات AirPods Pro",
    sales: 54,
    revenue: "48,600 ر.س",
    progress: 41,
  },
]

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>أفضل المنتجات مبيعاً</CardTitle>
        <CardDescription>المنتجات الأكثر مبيعاً هذا الشهر</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product, index) => (
            <div key={product.name} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.sales} مبيعة</p>
                </div>
                <p className="text-sm font-semibold">{product.revenue}</p>
              </div>
              <Progress value={product.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
