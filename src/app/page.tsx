import { BookingWidget } from "@/components/BookingWidget";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center">
      <Hero />
      <Header />
      <BookingWidget />
    </div>
  );
};
