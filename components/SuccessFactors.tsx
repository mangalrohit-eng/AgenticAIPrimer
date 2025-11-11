'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ShieldAlert, 
  TrendingUp, 
  Gauge,
  CheckCircle2
} from 'lucide-react'

const factors = [
  {
    icon: ShieldAlert,
    title: 'Governance & Safety',
    description: 'Ensure reliable and compliant operations',
    points: [
      'Network change management integration',
      'Comprehensive audit trails for all agent actions',
      'SLA monitoring and enforcement',
      'Integration with existing OSS/BSS systems',
      'Compliance with telecom regulatory requirements'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Evolve with feedback and learning',
    points: [
      'Regular model retraining with network-specific data',
      'NOC team feedback integration',
      'Ticket resolution accuracy tracking',
      'A/B testing of routing strategies',
      'Performance benchmarking against SLAs'
    ]
  },
  {
    icon: Gauge,
    title: 'Scalability & Cost',
    description: 'Optimize for growth and efficiency',
    points: [
      'Handle peak traffic periods (outage events)',
      'Cost-aware LLM usage (caching, prompt optimization)',
      'Load balancing across network regions',
      'Graceful degradation during system failures',
      'NOC readiness and training programs'
    ]
  }
]

const bestPractices = [
  'Start with low-risk use cases (ticket triage before automation)',
  'Build robust testing with real network scenarios',
  'Implement progressive rollout (single region → full network)',
  'Maintain human oversight for critical infrastructure changes',
  'Document agent behavior and network-specific edge cases',
  'Plan for model updates without disrupting 24/7 operations',
  'Establish clear escalation paths to NOC supervisors',
  'Monitor costs and LLM usage with real-time alerts'
]

const SuccessFactors = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Do We <span className="gradient-text">Sustain It?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Long-term success requires robust governance, continuous improvement, and the ability to scale operations while maintaining safety and compliance standards.
          </p>
        </div>

        {/* Three column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-ai-blue-50 to-ai-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-md">
                <factor.icon className="w-8 h-8 text-ai-blue-600" />
              </div>

              {/* Title and description */}
              <h3 className="text-2xl font-bold mb-3">{factor.title}</h3>
              <p className="text-gray-600 mb-6">{factor.description}</p>

              {/* Points list */}
              <ul className="space-y-3">
                {factor.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ai-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default SuccessFactors

