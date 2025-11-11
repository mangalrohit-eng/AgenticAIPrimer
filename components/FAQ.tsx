'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can we build this incrementally or does it need to be all at once?',
    answer: 'The architecture supports incremental development. You can start with Foundation (Infrastructure + Data), then add Intelligence (Models + Agents), followed by Integration for automation. Each phase can deliver value while building toward full autonomy.'
  },
  {
    question: 'What if we only have Infrastructure and Data - what can we do?',
    answer: 'With just Infrastructure and Data, you can build traditional data retrieval systems, dashboards, and query tools. However, you won\'t have the intelligent reasoning, autonomous decision-making, or automated actions that define Agentic AI. The AI capabilities require the Intelligence and Agent Framework layers.'
  },
  {
    question: 'How do the 3 teams (GTS, AI&D, Network Systems) coordinate?',
    answer: 'GTS owns infrastructure and operational concerns (compute, security, monitoring). AI&D develops the intelligence layer (models, agents, ML pipelines). Network Systems handles integration with existing telecom systems (APIs, data sources, workflows). Clear interfaces between layers enable teams to work in parallel while integrating at defined checkpoints.'
  },
  {
    question: 'How is this different from traditional automation (like RPA or scripts)?',
    answer: 'Traditional automation follows fixed rules: "If X happens, do Y." Agentic AI can reason, adapt, and handle scenarios it wasn\'t explicitly programmed for. It understands context, plans multi-step solutions, and learns from outcomes. Think: scripted checklist vs. experienced engineer who can troubleshoot novel problems.'
  },
  {
    question: 'Do we need all 9 components for every use case?',
    answer: 'No. Different use cases require different components. Simple use cases might only need 4-5 components (Infrastructure, Data, Models, Memory), while complex automation workflows require 7-8 components including Orchestration, API/Action Layer, and Safety & Compliance.'
  },
  {
    question: 'What happens if we skip Safety & Compliance?',
    answer: 'You can run pilots and demos without it, but production deployment in network operations requires strict change control, audit trails, and safety guardrails. This component ensures agents operate within policies, maintain SLAs, and don\'t create security risks.'
  },
  {
    question: 'Can we use existing tools instead of building everything?',
    answer: 'Yes. The architecture leverages GCP services (Vertex AI, BigQuery, GKE), open-source frameworks (LangGraph, LangChain), and enterprise solutions where appropriate. Custom development is only needed where network operations requirements are truly unique.'
  },
  {
    question: 'What are the main technical challenges?',
    answer: 'Key challenges include: (1) Model selection and evaluation for network-specific tasks. (2) Data quality and availability from various network systems. (3) Integration complexity with legacy OSS/BSS systems. (4) Ensuring safe operations with appropriate guardrails. (5) Building trust and adoption among operational teams.'
  }
]

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First question open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Answers to typical questions we hear from stakeholders
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-ai-blue-300 transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-ai-blue-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

