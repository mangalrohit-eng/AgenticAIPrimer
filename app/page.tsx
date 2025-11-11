'use client'

import PasswordProtection from '@/components/PasswordProtection'
import HeroSection from '@/components/HeroSection'
import WhatIsAgenticAI from '@/components/WhatIsAgenticAI'
import BuildingBlocks from '@/components/BuildingBlocks'
import CurrentStateAnalysis from '@/components/CurrentStateAnalysis'
import BuildJourney from '@/components/BuildJourney'
import UseCases from '@/components/UseCases'
import SuccessFactors from '@/components/SuccessFactors'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <PasswordProtection>
      <main className="min-h-screen">
        <HeroSection />
        <WhatIsAgenticAI />
        <BuildingBlocks />
        <CurrentStateAnalysis />
        <BuildJourney />
        <UseCases />
        <SuccessFactors />
        <FAQ />
        <Footer />
      </main>
    </PasswordProtection>
  )
}

