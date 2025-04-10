"use client";

import { Hero } from "../home/hero";
import { Footer } from "../layout/footer";
import { Header } from "../layout/header";
import { SaleBanner } from "../layout/side-banner";

export default function HomePage() {
   return (
      <main className="min-h-screen bg-black text-white">
         <SaleBanner />
         <Header />
         <Hero />
         <Footer />
      </main>
   );
}
