import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Rooms } from "@/components/sections/Rooms";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";
import { Reviews } from "@/components/sections/Reviews";
import { RosarioGuide } from "@/components/sections/RosarioGuide";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Analytics } from "@/components/Analytics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Gallery />
        <Rooms />
        <Services />
        <Studio />
        <Reviews />
        <RosarioGuide />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Analytics />
    </>
  );
}
