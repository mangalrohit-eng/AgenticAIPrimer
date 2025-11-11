'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MessageSquare,
  Bot,
  Zap,
  ShoppingCart,
  CheckCircle2
} from 'lucide-react'

const useCases = [
  {
    icon: MessageSquare,
    title: 'NMC Ticket Triage',
    description: 'Intelligent triage and routing of Network Management Center tickets based on priority, domain, and historical patterns',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Bot,
    title: 'Circuit Decommission Automation',
    description: 'End-to-end automation of circuit decommissioning workflows with validation checks and dependency management',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Zap,
    title: 'FWA - XXX',
    description: 'Fixed Wireless Access optimization and management (specific use case TBD)',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: ShoppingCart,
    title: 'Supply Chain - yyy',
    description: 'Network equipment supply chain coordination and optimization (specific use case TBD)',
    color: 'from-orange-500 to-orange-600'
  }
]

const UseCases = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="use-cases" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Can We <span className="gradient-text">Do With It?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Once complete, this architecture will enable high-value network operations use cases—from ticket triage to circuit decommissioning to supply chain optimization.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-ai-blue-400 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-ai-blue-600 transition-colors">
                        {useCase.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-full px-6 py-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <p className="text-sm text-green-800 font-semibold">
                All use cases ready for implementation as components become available
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCases

