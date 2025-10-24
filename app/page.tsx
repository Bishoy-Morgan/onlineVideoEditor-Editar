import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import HowToUse from "@/components/HowToUse";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Features />
      <HowToUse />
      <Footer />
    </div>
  );
}
