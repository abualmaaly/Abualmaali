import { HeroSection } from "@/components/hero-section"
import { SearchSection } from "@/components/search-section"
import { SubjectsGrid } from "@/components/subjects-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeroSection />
      <SearchSection />
      <SubjectsGrid />
      <Footer />
    </div>
  )
}
