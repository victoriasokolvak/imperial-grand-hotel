import { AboutSection } from "@/components/AboutSection";
import { BookingWidget } from "@/components/BookingWidget";
import { Discount } from "@/components/Discount";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { RoomChoicesSection } from "@/components/RoomChoicesSection";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Hero />
      <Header />
      <BookingWidget />
      <AboutSection />
      <RoomChoicesSection />
      <ReviewsSection />
      <TeamSection />
      <Discount />
    </div>
  );
};
