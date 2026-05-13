import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Menu } from "@/components/sections/Menu"
import { Gallery } from "@/components/sections/Gallery"
import { InstagramFeed } from "@/components/sections/InstagramFeed"
import { About } from "@/components/sections/About"
import { Location } from "@/components/sections/Location"
import { Footer } from "@/components/sections/Footer"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <InstagramFeed />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
