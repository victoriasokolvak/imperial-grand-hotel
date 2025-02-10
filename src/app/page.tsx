import { AboutSection } from "@/components/AboutSection";
import { BookingWidget } from "@/components/BookingWidget";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RoomChoicesSection } from "@/components/RoomChoicesSection";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Hero />
      <Header />
      <BookingWidget />
      <AboutSection />
      <RoomChoicesSection />
    </div>
  );
};
