"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Home, User, Briefcase, LayoutGrid, MessageSquare, Mail } from 'lucide-react'
import MainContent from '../components/MainContent';
import Menubar from '../components/Menubar';
import Sidebar from '../components/Sidebar';

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: '100%' },
    }

    return (
        <div className="bg-black text-white min-h-screen  flex flex-col md:flex-row p-4">
            {/* Left Sidebar */}
            

            <MainContent />

           
            <Menubar />

            {/* Right Sidebar */}
            
            <div className="hidden md:flex flex-col z-10 py-4  space-y-4 justify-center items-center fixed right-10 top-48 w-12 pt-6 border-[0.5px] border-gray-700 bg-neutral-800 rounded-full bg-transparent">
                <div className="relative group">
                    <a href="#hero" className=""><Home className="w-4 h-4" /></a>
                    <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Home
                    </span>
                </div>

                <div className="relative group">
                    <a href="#about" className=""><User className="w-4 h-4" /></a>
                    <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        About
                    </span>
                </div>

                <div className="relative group">
                    <a href="#skills" className=""><Briefcase className="w-4 h-4" /></a>
                    <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Skills
                    </span>
                </div>

                <div className="relative group">
                    <a href="#" className=""><LayoutGrid className="w-4 h-4" /></a>
                    <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Portfolio
                    </span>
                </div>

                <div className="relative group">
                    <a href="#" className=""><MessageSquare className="w-4 h-4" /></a>
                    <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Messages
                    </span>
                </div>

                <div className="relative group">
                    <a href="#" className=""><Mail className="w-4 h-4" /></a>
                    <span className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Contact
                    </span>
                </div>
            </div>

        </div>
    )
}

