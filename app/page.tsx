'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhatIsAgenticAI from '@/components/WhatIsAgenticAI'
import BuildingBlocks from '@/components/BuildingBlocks'
import CurrentStateAnalysis from '@/components/CurrentStateAnalysis'
import BuildJourney from '@/components/BuildJourney'
import UseCases from '@/components/UseCases'
import SuccessFactors from '@/components/SuccessFactors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <WhatIsAgenticAI />
        <BuildingBlocks />
        <CurrentStateAnalysis />
        <BuildJourney />
        <UseCases />
        <SuccessFactors />
        <Footer />
      </main>
    </>
  )
}

