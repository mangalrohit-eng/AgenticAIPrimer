'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { 
  Server,
  Cpu,
  GitBranch,
  Database,
  Plug,
  Workflow,
  ShieldCheck,
  Activity,
  Users,
  LucideIcon,
  ArrowRight,
  ArrowDown,
  MessageSquare,
  FileSearch,
  BarChart3,
  Mail,
  Calendar,
  ShoppingCart,
  HeadphonesIcon,
  FileText,
  Search,
  Bot,
  Zap
} from 'lucide-react'

interface BuildingBlock {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
  layer: 'foundation' | 'data' | 'core' | 'orchestration' | 'integration' | 'crosscutting' | 'human'
  technologies: Array<{
    name: string
    category: 'gcp' | 'opensource' | 'enterprise'
  }>
  owner: 'GTS' | 'AI&D' | 'Network Systems' | 'All Teams'
  status: 'available' | 'in-progress' | 'unknown'
}

const blocks: BuildingBlock[] = [
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Foundation for AI workloads',
    details: [
      'Scalable compute (GPUs, CPUs)',
      'Distributed storage systems',
      'High-bandwidth networking',
      'Container orchestration'
    ],
    layer: 'foundation',
    technologies: [
      { name: 'GKE (Kubernetes)', category: 'gcp' },
      { name: 'Compute Engine', category: 'gcp' },
      { name: 'Cloud Storage', category: 'gcp' },
      { name: 'Cloud CDN', category: 'gcp' }
    ],
    owner: 'GTS',
    status: 'available'
  },
  {
    icon: Cpu,
    title: 'Models',
    description: 'Core intelligence engines',
    details: [
      'Large Language Models (LLMs)',
      'Embedding models',
      'Fine-tuned domain models',
      'Multimodal capabilities'
    ],
    layer: 'core',
    technologies: [
      { name: 'Vertex AI', category: 'gcp' },
      { name: 'Gemini Pro', category: 'gcp' },
      { name: 'PaLM 2', category: 'gcp' },
      { name: 'Text-Embedding', category: 'gcp' }
    ],
    owner: 'AI&D',
    status: 'available'
  },
  {
    icon: GitBranch,
    title: 'Agent Framework',
    description: 'Decision-making backbone',
    details: [
      'Task planning algorithms',
      'Tool selection & calling',
      'Error handling & retries',
      'Chain-of-thought reasoning'
    ],
    layer: 'core',
    technologies: [
      { name: 'LangGraph', category: 'opensource' },
      { name: 'LangChain', category: 'opensource' },
      { name: 'Agent Builder', category: 'gcp' },
      { name: 'Vertex AI Agents', category: 'gcp' }
    ],
    owner: 'AI&D',
    status: 'unknown'
  },
  {
    icon: Database,
    title: 'Memory & Knowledge',
    description: 'Persistent information storage',
    details: [
      'Vector databases',
      'RAG (Retrieval Augmented Generation)',
      'Knowledge graphs',
      'Semantic search'
    ],
    layer: 'data',
    technologies: [
      { name: 'Vertex AI Vector Search', category: 'gcp' },
      { name: 'BigQuery', category: 'gcp' },
      { name: 'Firestore', category: 'gcp' },
      { name: 'Pinecone', category: 'enterprise' }
    ],
    owner: 'AI&D',
    status: 'available'
  },
  {
    icon: Plug,
    title: 'Data Connectivity',
    description: 'Access to information sources',
    details: [
      'Database connectors',
      'Document stores',
      'API integrations',
      'Real-time data streams'
    ],
    layer: 'data',
    technologies: [
      { name: 'Cloud SQL', category: 'gcp' },
      { name: 'Pub/Sub', category: 'gcp' },
      { name: 'Firestore', category: 'gcp' },
      { name: 'Dataflow', category: 'gcp' }
    ],
    owner: 'Network Systems',
    status: 'available'
  },
  {
    icon: Workflow,
    title: 'API/Action Layer',
    description: 'Execution interfaces',
    details: [
      'Tool registry',
      'Function calling',
      'Guarded actions',
      'Permission management'
    ],
    layer: 'integration',
    technologies: [
      { name: 'Cloud Functions', category: 'gcp' },
      { name: 'Cloud Run', category: 'gcp' },
      { name: 'Apigee', category: 'gcp' },
      { name: 'API Gateway', category: 'gcp' }
    ],
    owner: 'Network Systems',
    status: 'in-progress'
  },
  {
    icon: Workflow,
    title: 'Orchestration',
    description: 'Workflow coordination',
    details: [
      'Task queues',
      'Workflow engines',
      'Event-driven triggers',
      'Async processing'
    ],
    layer: 'orchestration',
    technologies: [
      { name: 'Cloud Composer', category: 'gcp' },
      { name: 'Workflows', category: 'gcp' },
      { name: 'Eventarc', category: 'gcp' },
      { name: 'Cloud Tasks', category: 'gcp' }
    ],
    owner: 'GTS',
    status: 'in-progress'
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    description: 'Governance and security',
    details: [
      'Policy enforcement',
      'PII redaction',
      'Audit logging',
      'Compliance checks'
    ],
    layer: 'crosscutting',
    technologies: [
      { name: 'Cloud DLP', category: 'gcp' },
      { name: 'IAM & Admin', category: 'gcp' },
      { name: 'Security Command Center', category: 'gcp' },
      { name: 'Cloud Armor', category: 'gcp' }
    ],
    owner: 'GTS',
    status: 'available'
  },
  {
    icon: Activity,
    title: 'Observability',
    description: 'Monitoring and insights',
    details: [
      'Distributed tracing',
      'Performance dashboards',
      'Evaluation datasets',
      'Anomaly detection'
    ],
    layer: 'crosscutting',
    technologies: [
      { name: 'Cloud Monitoring', category: 'gcp' },
      { name: 'Cloud Logging', category: 'gcp' },
      { name: 'Cloud Trace', category: 'gcp' },
      { name: 'Error Reporting', category: 'gcp' }
    ],
    owner: 'GTS',
    status: 'available'
  },
  {
    icon: Users,
    title: 'Human-in-the-Loop',
    description: 'Human oversight mechanisms',
    details: [
      'Approval gates',
      'Feedback collection',
      'Manual interventions',
      'Quality review processes'
    ],
    layer: 'human',
    technologies: [
      { name: 'Cloud Console', category: 'gcp' },
      { name: 'Vertex AI Pipelines', category: 'gcp' },
      { name: 'AppSheet', category: 'gcp' },
      { name: 'Custom UI', category: 'opensource' }
    ],
    owner: 'All Teams',
    status: 'unknown'
  }
]

interface BlockCardProps {
  block: BuildingBlock
  isInView: boolean
  delay: number
}

const BlockCard = ({ block, isInView, delay }: BlockCardProps) => {
  const Icon = block.icon
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Owner color mapping
  const ownerColors = {
    'GTS': 'bg-blue-500 text-white',
    'AI&D': 'bg-purple-500 text-white',
    'Network Systems': 'bg-green-500 text-white',
    'All Teams': 'bg-gray-500 text-white'
  }

  // Status indicator
  const statusColors = {
    'available': 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    'unknown': 'bg-gray-400'
  }
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 cursor-pointer transition-all duration-300 border border-ai-blue-200 hover:border-ai-blue-500 hover:shadow-lg hover:scale-105 relative">
          {/* Status indicator dot */}
          <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${statusColors[block.status]}`} title={block.status}></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg mb-1 bg-ai-blue-100 group-hover:bg-gradient-ai transition-all">
              <Icon className="w-4 h-4 text-ai-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-[10px] leading-tight mb-1">{block.title}</h3>
            {/* Owner badge */}
            <span className={`text-[8px] px-1.5 py-0.5 rounded ${ownerColors[block.owner]} font-semibold`}>
              {block.owner}
            </span>
          </div>
        </div>
      </motion.div>
      
      {/* Hover tooltip - rendered via portal to document body */}
      {mounted && isHovered && createPortal(
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed w-80 bg-gray-900 text-white rounded-xl p-5 pointer-events-none"
          style={{
            zIndex: 999999,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 3px rgba(161, 0, 255, 0.5)',
          }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-900"></div>
          
          <h4 className="font-bold text-sm mb-2 text-ai-blue-400">{block.title}</h4>
          <p className="text-xs text-gray-300 mb-3">{block.description}</p>
          
          {/* Capabilities */}
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-400 mb-2">Capabilities:</p>
            <ul className="space-y-1.5 text-xs text-gray-200">
              {block.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-ai-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="border-t border-gray-700 pt-3">
            <p className="text-xs font-semibold text-gray-400 mb-2">Sample Technologies (GCP):</p>
            <div className="flex flex-wrap gap-1.5">
              {block.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold ${
                    tech.category === 'gcp'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : tech.category === 'opensource'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}
                >
                  {tech.category === 'gcp' && (
                    <span className="mr-1">☁️</span>
                  )}
                  {tech.category === 'opensource' && (
                    <span className="mr-1">🔓</span>
                  )}
                  {tech.category === 'enterprise' && (
                    <span className="mr-1">⚡</span>
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>,
        document.body
      )}
    </>
  )
}

const BuildingBlocks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'need'>('all')

  const getBlocksByLayer = (layer: BuildingBlock['layer']) => 
    blocks.filter(b => {
      if (statusFilter === 'all') return b.layer === layer
      if (statusFilter === 'available') return b.layer === layer && b.status === 'available'
      if (statusFilter === 'need') return b.layer === layer && b.status !== 'available'
      return false
    })

  return (
    <section className="py-6 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            What Do We <span className="gradient-text">Need?</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto mb-4">
            10 essential components in a layered architecture • We have 6, We still need 4 • Hover for details
          </p>

          {/* Status Filter Toggle */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-gray-600">Filter by Status:</span>
            <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  statusFilter === 'all'
                    ? 'bg-ai-blue-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All (10)
              </button>
              <button
                onClick={() => setStatusFilter('available')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1 ${
                  statusFilter === 'available'
                    ? 'bg-green-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                What We Have (6)
              </button>
              <button
                onClick={() => setStatusFilter('need')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1 ${
                  statusFilter === 'need'
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                What We Need (4)
              </button>
            </div>
          </div>
        </div>

        {/* Architecture Diagram - Layered Cake Style */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Cross-Cutting Concerns - Horizontal at top */}
          <div className="mb-3 pb-3 border-b border-dashed border-gray-300">
            <div className="text-center mb-2">
              <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-bold">
                Cross-Cutting: All Layers
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {getBlocksByLayer('crosscutting').map((block, idx) => (
                <BlockCard
                  key={block.title}
                  block={block}
                  isInView={isInView}
                  delay={0.1 + idx * 0.05}
                />
              ))}
            </div>
          </div>

          {/* Layer 1: Human Oversight & Final Actions - TOP */}
          <div className="mb-2 relative z-10">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">
                Layer 1: Human Oversight
              </span>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-2 border border-green-200 shadow-md">
              <div className="grid grid-cols-1 gap-2">
                {getBlocksByLayer('human').map((block, idx) => (
                  <BlockCard
                    key={block.title}
                    block={block}
                    isInView={isInView}
                    delay={0.1 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-1">
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* Layer 2: Action & Orchestration - EXECUTION */}
          <div className="mb-2 relative z-10">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[10px] font-bold">
                Layer 2: Action & Orchestration
              </span>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-2 border border-purple-200 shadow-md">
              <div className="grid grid-cols-2 gap-2">
                {[...getBlocksByLayer('orchestration'), ...getBlocksByLayer('integration')].map((block, idx) => (
                  <BlockCard
                    key={block.title}
                    block={block}
                    isInView={isInView}
                    delay={0.2 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-1">
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* Layer 3: Agent Intelligence - BRAIN */}
          <div className="mb-2 relative z-10">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">
                Layer 3: Agent Intelligence
              </span>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-2 border border-blue-200 shadow-md">
              <div className="grid grid-cols-2 gap-2">
                {getBlocksByLayer('core').map((block, idx) => (
                  <BlockCard
                    key={block.title}
                    block={block}
                    isInView={isInView}
                    delay={0.3 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-1">
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* Layer 4: Data & Memory - KNOWLEDGE */}
          <div className="mb-2 relative z-10">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-bold">
                Layer 4: Data & Memory
              </span>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-2 border border-indigo-200 shadow-md">
              <div className="grid grid-cols-2 gap-2">
                {getBlocksByLayer('data').map((block, idx) => (
                  <BlockCard
                    key={block.title}
                    block={block}
                    isInView={isInView}
                    delay={0.4 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-1">
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* Layer 5: Infrastructure - FOUNDATION */}
          <div className="relative z-10">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <span className="inline-block px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full text-[10px] font-bold">
                Layer 5: Infrastructure Foundation
              </span>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-2 border border-gray-300 shadow-md">
              <div className="grid grid-cols-1 gap-2">
                {getBlocksByLayer('foundation').map((block, idx) => (
                  <BlockCard
                    key={block.title}
                    block={block}
                    isInView={isInView}
                    delay={0.5 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  )
}

export default BuildingBlocks

