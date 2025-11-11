'use client'

import { motion } from 'framer-motion'
import { Mail, BookOpen, Shield } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text bg-gradient-to-r from-ai-blue-400 to-ai-purple-400 bg-clip-text">
                Agentic AI
              </h3>
              <p className="text-gray-400 text-sm">
                Empowering organizations to build intelligent, 
                autonomous systems that deliver value at scale.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-4">Learn More</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Vertex AI Overview
                  </a>
                </li>
                <li>
                  <a href="https://blog.langchain.dev/langgraph/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    LangGraph Introduction
                  </a>
                </li>
                <li>
                  <a href="https://lilianweng.github.io/posts/2023-06-23-agent/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    LLM Powered Agents
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/abs/2308.11432" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Agentic AI Research
                  </a>
                </li>
                <li>
                  <a href="https://www.accenture.com/us-en/services/applied-intelligence/generative-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Accenture Gen AI
                  </a>
                </li>
              </ul>
            </div>

            {/* Additional Info */}
            <div>
              <h4 className="font-semibold mb-4">About This Portal</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                This educational resource explains the building blocks, requirements, 
                and considerations for implementing Agentic AI in network operations.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Accenture. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

