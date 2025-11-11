'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Eye, 
  Brain, 
  Zap, 
  RefreshCw, 
  Shield 
} from 'lucide-react'

const capabilities = [
  {
    icon: Eye,
    title: 'Perception',
    description: 'Understands context from text, data, and environments',
    networkExample: 'Analyzes ticket description and correlates with network alarms, config history, and similar past incidents'
  },
  {
    icon: Brain,
    title: 'Planning',
    description: 'Breaks down goals into actionable steps',
    networkExample: 'Determines circuit decommission should: check dependencies → notify downstream systems → schedule change window → execute removal'
  },
  {
    icon: Zap,
    title: 'Action',
    description: 'Executes tasks using tools and APIs',
    networkExample: 'Creates decommission order, updates CMDB, triggers workflow in orchestration system, sends notifications'
  },
  {
    icon: RefreshCw,
    title: 'Reflection',
    description: 'Learns from outcomes and adapts behavior',
    networkExample: 'Notices tickets assigned to RF team had 95% success rate vs 70% for general queue, adjusts future routing'
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Operates within defined guardrails and policies',
    networkExample: 'Refuses to decommission circuits with active traffic, escalates to human for approval on critical infrastructure changes'
  }
]

const WhatIsAgenticAI = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="what-is-agentic-ai" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">Agentic AI</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Agentic AI refers to intelligent systems that can autonomously perceive their environment, 
            plan sequences of actions, execute tasks, and learn from experience—all while operating 
            within defined safety boundaries.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-ai-blue-50 to-ai-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <capability.icon className="w-7 h-7 text-ai-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 italic">
                  <span className="font-semibold text-gray-700">Network Example:</span> {capability.networkExample}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conceptual diagram placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 overflow-hidden"
        >
          <div className="relative z-10 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl">Autonomous Agent</h4>
                  <p className="text-sm text-gray-500">Perceive → Plan → Act → Learn</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 max-w-md">
                A continuous cycle of sensing the environment, making decisions, 
                taking actions, and improving through feedback
              </p>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ai-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ai-purple-200/20 rounded-full blur-3xl"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatIsAgenticAI

