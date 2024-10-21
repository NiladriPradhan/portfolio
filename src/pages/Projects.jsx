import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cryptoApp from '../img/crypto.jpg';
import youtubeApp from '../img/youtube.jpg';
import ecomerceApp from '../img/ecommerce.jpg';
import linkedinApp from '../img/linkedin.jpg';
import dashboardApp from '../img/dashboard.jpg';



// Updated projects array with image URLs
const projects = [
    {
        name: "CryptoApp",
        image: cryptoApp, // Replace with your image path
    },
    {
        name: "YoutubeApp",
        image: youtubeApp,  // Replace with your image path
        percentage: 85,
    },
    {
        name: "Ecommerce",
        image: ecomerceApp,  // Replace with your image path
        
    },
    {
        name: "LinkedIn",
        image: linkedinApp,  // Replace with your image path
    },
    {
        name: "dashboardApp",
        image: dashboardApp,  // Replace with your image path
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
        },
    },
};

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div
            ref={ref}
            id="project"
            className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden"
        >
            {/* Background motion path */}
            <div className="absolute inset-0 opacity-30 z-0">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
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

            <div className="relative z-10 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    My <span className="text-green-400">Projects</span>
                </motion.h1>

                <motion.div
                    className="flex flex-wrap gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="bg-transparent border border-gray-700 rounded-lg  flex flex-col pb-2 items-center justify-start shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                            variants={itemVariants}
                        >
                            {/* Image container with full width and height */}
                            <div className="w-full h-44 mb-2 flex justify-center items-center overflow-hidden  rounded-t-lg">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-full h-full object-cover" // Ensures the image covers the entire container
                                />
                            </div>

                            <motion.span
                                className="text-4xl font-bold text-green-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                            </motion.span>
                            <span className="text-lg text-gray-300 mt-2">{skill.name}</span>
                        </motion.div>

                    ))}
                </motion.div>
            </div>
        </div>
    );
}
