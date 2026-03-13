import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Collections from "../components/sections/Collections";
import Experience from "../components/sections/Experience";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Collections />
      <Experience />
    </main>
  );
}