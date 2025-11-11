'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/brand/accenture-logo.svg"
              alt="Accenture"
              width={140}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Title */}
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold text-gray-900">
              Understanding <span className="gradient-text">Agentic AI</span>
            </h1>
          </div>

          {/* Optional: Add navigation links here if needed */}
          <div className="flex items-center space-x-4">
            {/* Placeholder for future nav items */}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

