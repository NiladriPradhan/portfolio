import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function MainContent() {
  return (
    <div id="hero" className="bg-black text-white min-h-screen flex flex-col justify-between p-8 ml-4">

      {/* Top section with button */}
      <motion.div
        className="flex justify-between items-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-gray-200"
        >
          INTRODUCE
        </motion.button>

        <motion.button
          className="lg:hidden"
          whileHover={{ rotate: 90 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="flex-grow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          className="text-4xl md:text-7xl font mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Say Hi from <span className="text-green-400">Niladri</span>,
        </motion.h2>

        <motion.h3
          className="text-4xl md:text-7xl font mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Frontend Developer<br className="hidden md:inline" />
        </motion.h3>

        <motion.p
          className="text-gray-400 mb-16 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          I design and code beautifully simple things and I love what I do.<br className="hidden md:inline" />
          Just simple like that!
        </motion.p>
      </motion.div>

      {/* Footer section with bounce animation */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="border border-gray-700 rounded-full p-4 mr-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#project">
            <ArrowDown className="w-6 h-6 cursor-pointer" />
          </a>
        </motion.div>
        <span className="text-sm font-medium">MY PROJECTS</span>
      </motion.div>
    </div>
  )
}
