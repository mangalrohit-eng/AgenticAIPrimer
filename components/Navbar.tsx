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
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/accenture-logo.svg"
              alt="Accenture"
              width={140}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

