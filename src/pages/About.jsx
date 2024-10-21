"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 }) // Detects when 20% of the section is in view

  return (
    <motion.div 
      ref={ref}
      id="about"
      className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll position
      variants={containerVariants}
    >
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0 0 L100 100 M100 0 L0 100" 
            stroke="white" 
            strokeWidth="0.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      <motion.nav className="relative z-10 mb-12" variants={itemVariants}>
        <motion.button 
          className="px-4 py-2 rounded-full border border-gray-600 text-sm hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ABOUT
        </motion.button>
      </motion.nav>
      
      <motion.main className="relative z-10 max-w-4xl" variants={itemVariants}>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          variants={itemVariants}
        >
          Every great design begins with an even <motion.span 
            className="text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >better story</motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-400 text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          Since beginning my journey as a freelance designer nearly 8 years ago, I've
          done remote work for agencies, consulted for startups, and collaborated with
          talented people to create digital products for both business and consumer use.
          I'm quietly confident, naturally curious, and perpetually working on improving
          my chops one design problem at a time.
        </motion.p>
      </motion.main>
    </motion.div>
  )
}
