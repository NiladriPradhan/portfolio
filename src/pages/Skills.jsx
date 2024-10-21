import { motion, useInView } from "framer-motion"
import { Figma, Framer, Atom, Accessibility, Database } from "lucide-react"
import { useRef } from "react"

const skills = [
  { name: "React", icon: Atom, percentage: 75 },
  { name: "JS", icon: () => <span className="text-2xl font-bold">JS</span>, percentage: 65 },
  
  { name: "HTML", icon: () => <span className="text-2xl font-bold">HTML</span>, percentage: 80 },
  { name: "CSS", icon: () => <span className="text-2xl font-bold">CSS</span>, percentage: 80 },
  { name: "Tailwind-css", icon: () => <span className="text-2xl font-bold">Tailwind-css</span>, percentage: 70 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 }) // Detects when 20% of the section is in view

  return (
    <div ref={ref} id="skills" className="min-h-screen justify-center bg-black text-white p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <nav className="relative z-10 mb-12">
        <motion.button
          className="px-4 py-2 rounded-full border border-gray-600 text-sm hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MY SKILLS
        </motion.button>
      </nav>

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        My <span className="text-green-400">Advantages</span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-transparent border border-gray-50 rounded-bl-full rounded-tr-full w-48 p-6 flex flex-col items-center justify-center aspect-square"
            variants={itemVariants}
          >
            <skill.icon className="w-12 h-12 mb-4" />
            <motion.span
              className="text-3xl font-bold text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {skill.percentage}%
            </motion.span>
            <span className="text-sm text-gray-400 mt-2">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

