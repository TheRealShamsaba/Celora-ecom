import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
}
