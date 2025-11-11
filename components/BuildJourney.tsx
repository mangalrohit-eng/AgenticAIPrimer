'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  CheckCircle2,
  Circle,
  ArrowRight
} from 'lucide-react'

interface Phase {
  number: number
  name: string
  status: 'complete' | 'current' | 'future'
  components: string[]
  capabilities: string[]
  exampleUseCases: string[]
}

const phases: Phase[] = [
  {
    number: 1,
    name: 'Foundation',
    status: 'complete',
    components: ['Infrastructure', 'Data Connectivity'],
    capabilities: [
      'Store and retrieve network data',
      'Access existing systems and databases',
      'Basic data processing and transformation'
    ],
    exampleUseCases: ['Dashboards']
  },
  {
    number: 2,
    name: 'Intelligence',
    status: 'complete',
    components: ['Models', 'Memory & Knowledge'],
    capabilities: [
      'Understand natural language questions',
      'Generate context-aware responses',
      'Reason about network issues'
    ],
    exampleUseCases: ['Network Research Concierge']
  },
  {
    number: 3,
    name: 'Action',
    status: 'future',
    components: ['Agent Framework', 'API/Action Layer', 'Orchestration', 'Human-in-the-Loop'],
    capabilities: [
      'Execute automated workflows',
      'Coordinate multi-step processes',
      'Take actions in network systems',
      'Human oversight and control'
    ],
    exampleUseCases: []
  }
]

const BuildJourney = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getStatusColor = (status: Phase['status']) => {
    switch (status) {
      case 'complete':
        return 'from-green-500 to-green-600'
      case 'current':
        return 'from-blue-500 to-blue-600'
      case 'future':
        return 'from-gray-400 to-gray-500'
    }
  }

  const getStatusIcon = (status: Phase['status']) => {
    return status === 'complete' ? (
      <CheckCircle2 className="w-6 h-6 text-white" />
    ) : (
      <Circle className="w-6 h-6 text-white" />
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Do We <span className="gradient-text">Get There?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              3-phase incremental path from foundation to full Agentic AI capabilities
            </p>
          </div>

          {/* Journey Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-400 to-gray-300" style={{ top: '4rem' }}></div>

            {/* Phases */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Phase Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${getStatusColor(phase.status)} flex items-center justify-center shadow-lg ${phase.status === 'current' ? 'ring-4 ring-blue-300 animate-pulse' : ''}`}>
                      {getStatusIcon(phase.status)}
                    </div>
                  </div>

                  {/* Phase Card */}
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-500 mb-1">Phase {phase.number}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.name}</h3>
                      {phase.status === 'current' && (
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                          In Progress
                        </span>
                      )}
                      {phase.status === 'complete' && (
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                          ✓ Complete
                        </span>
                      )}
                    </div>

                    {/* Components */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-600 mb-2">Components:</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.components.map((comp, idx) => (
                          <span key={idx} className="text-xs bg-ai-blue-50 text-ai-blue-700 px-2 py-1 rounded border border-ai-blue-200">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-600 mb-2">What You Can Do:</h4>
                      <ul className="space-y-1">
                        {phase.capabilities.map((cap, idx) => (
                          <li key={idx} className="text-xs text-gray-700 flex items-start">
                            <span className="text-ai-blue-500 mr-2">•</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example Use Cases */}
                    {phase.exampleUseCases.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-xs font-semibold text-gray-600 mb-2">Example Use Cases:</h4>
                        <div className="text-xs text-gray-600 italic">
                          {phase.exampleUseCases.join(', ')}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Arrow (only between cards, not after last one) */}
                  {index < phases.length - 1 && (
                    <div className="hidden lg:flex justify-center items-center absolute right-0 top-16 transform translate-x-1/2 z-20">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each phase builds on the previous one, delivering incremental value while working toward full autonomous capabilities. 
              You don't need to wait until Phase 4 to see benefits.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BuildJourney

