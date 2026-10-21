import Image from "next/image";
import HomeHero from "./components/Home-Hero";

export default function Home() {
  return ( 
    <main className="min-h-screen flex flex-col items-center justify-center bg-brand text-white px-6 text-center">
      <HomeHero />
      
    </main>
  );
}
