'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  CheckCircle2,
  Clock
} from 'lucide-react'

interface ComponentCardProps {
  item: {
    name: string
    detail: string
    technologies: string[]
  }
  index: number
  categoryIndex: number
}

const ComponentCard = ({ item, index, categoryIndex }: ComponentCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative bg-white/80 rounded-lg p-4 border border-gray-200 hover:border-ai-blue-400 hover:shadow-md transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="font-semibold text-sm text-gray-900 mb-1">{item.name}</div>
      <div className="text-xs text-gray-600">{item.detail}</div>

      {/* Hover Tooltip */}
      {isHovered && (
        <div className="absolute left-full top-0 ml-4 z-50 w-72 bg-white rounded-lg shadow-2xl border-2 border-ai-purple-500 p-4">
          <h4 className="font-bold text-sm text-gray-900 mb-3">{item.name}</h4>
          
          <div className="mb-3">
            <p className="text-xs text-gray-600 mb-2">{item.detail}</p>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-700 mb-2">Technologies:</div>
            <div className="space-y-1">
              {item.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                    🔷 {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const CurrentStateAnalysis = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    {
      title: 'What We Have Today',
      icon: CheckCircle2,
      iconColor: 'text-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-300',
      items: [
        { 
          name: 'Infrastructure', 
          detail: 'Scalable compute, storage, and networking foundation',
          technologies: ['GKE (Kubernetes)', 'Compute Engine', 'Cloud Storage', 'Cloud CDN']
        },
        { 
          name: 'Data Connectivity', 
          detail: 'Access to information sources and databases',
          technologies: ['Cloud SQL', 'Pub/Sub', 'Firestore', 'Dataflow']
        },
        { 
          name: 'Memory & Knowledge', 
          detail: 'Persistent information storage and retrieval',
          technologies: ['Vertex AI Vector Search', 'BigQuery', 'Firestore', 'Pinecone']
        },
        { 
          name: 'Human-in-the-Loop', 
          detail: 'Human oversight and intervention mechanisms',
          technologies: ['Cloud Console', 'Vertex AI Pipelines', 'AppSheet', 'Custom UI']
        },
        { 
          name: 'Observability', 
          detail: 'Monitoring and insights into system behavior',
          technologies: ['Cloud Monitoring', 'Cloud Logging', 'Cloud Trace', 'Error Reporting']
        },
        { 
          name: 'Safety & Compliance', 
          detail: 'Governance and security controls',
          technologies: ['Cloud DLP', 'IAM & Admin', 'Security Command Center', 'Cloud Armor']
        }
      ]
    },
    {
      title: 'What We Need',
      icon: Clock,
      iconColor: 'text-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      items: [
        { 
          name: 'Models', 
          detail: 'Core intelligence engines for understanding and generation',
          technologies: ['Vertex AI', 'Gemini Pro', 'PaLM 2', 'Text-Embedding']
        },
        { 
          name: 'Agent Framework', 
          detail: 'Decision-making backbone for autonomous operations',
          technologies: ['LangGraph', 'LangChain', 'Agent Builder', 'Vertex AI Agents']
        },
        { 
          name: 'API/Action Layer', 
          detail: 'Execution interfaces for network systems',
          technologies: ['Cloud Functions', 'Cloud Run', 'Apigee', 'API Gateway']
        },
        { 
          name: 'Orchestration', 
          detail: 'Workflow coordination across systems',
          technologies: ['Cloud Composer', 'Workflows', 'Eventarc', 'Cloud Tasks']
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where Are We <span className="gradient-text">Today?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              6 components ready, 2 in progress, 2 to be determined
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`bg-gradient-to-br ${category.bgColor} rounded-xl p-6 border-2 ${category.borderColor}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0">
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <ComponentCard key={idx} item={item} index={idx} categoryIndex={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CurrentStateAnalysis

