'use client'

import ParticleBackground from "@/app/components/ParticleBackground"
import Navbar from "@/app/components/layout/Navbar"
import Footer from "@/app/components/layout/Footer"
import Hero from "@/app/components/sections/Hero"
import Skills from "@/app/components/sections/Skills"
import Projects from "@/app/components/sections/Projects"
import Experience from "@/app/components/sections/Experience"
import Contact from "@/app/components/sections/Contact"
import About from "@/app/components/sections/About"

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-[#667eea] selection:text-white">
      <ParticleBackground />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <Footer />
    </main>
  )
}