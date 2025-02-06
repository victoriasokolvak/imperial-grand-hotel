import { AboutSection } from "@/components/AboutSection";
import { BookingWidget } from "@/components/BookingWidget";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Hero />
      <Header />
      <BookingWidget />
      <AboutSection />
    </div>
  );
};
