import Image from "next/image";
import HomeHero from "./components/Home-Hero";
import HomeAbout from "./components/Home-About";

export default function Home() {
  return ( 
    <main className="min-h-screen flex flex-col items-center justify-center bg-brand text-white text-center -mt-[85px]">
      <HomeHero />
      <HomeAbout />
      
    </main>
  );
}
