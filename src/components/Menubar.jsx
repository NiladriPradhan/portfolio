import { useState } from 'react'
import { Home, User, FileText, Briefcase, Cpu, Grid, MessageSquare, Mail, Instagram, Twitter } from 'lucide-react'

export default function Menubar() {
    const [isOpen, setIsOpen] = useState(false) // Sidebar is closed by default

    const menuItems = [
        { icon: <Home className="w-5 h-5" />, label: 'Home', href: '#' },
        { icon: <User className="w-5 h-5" />, label: 'About', href: '#' },
        { icon: <FileText className="w-5 h-5" />, label: 'Resume', href: '#' },
        { icon: <Briefcase className="w-5 h-5" />, label: 'Services', href: '#' },
        { icon: <Cpu className="w-5 h-5" />, label: 'Skills', href: '#' },
        { icon: <Grid className="w-5 h-5" />, label: 'Portfolio', href: '#' },
        { icon: <MessageSquare className="w-5 h-5" />, label: 'Testimonial', href: '#' },
        { icon: <Mail className="w-5 h-5" />, label: 'Contact', href: '#' },
    ]

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 text-gray-400 hover:text-white bg-gray-900 p-2 z-10 rounded-full"
            >
                {isOpen ? <span className='text-2xl'>✖</span> : <span className='text-2xl'> = </span>}
            </button>

            <div className={`fixed inset-y-0 right-0 w-64 bg-gray-900 z-10 text-gray-100 p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-semibold">Menu</h2>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-4 right-4 z-50 text-gray-400 hover:text-white bg-gray-900 p-2 z-10 rounded-full"
                >
                    {isOpen ? <span className='text-2xl'>✖</span> : <span className='text-2xl'> ➖ </span>}
                </button>

                <nav>
                    <ul className="space-y-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-200">
                                    {item.icon}
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto pt-8">
                    <h3 className="text-sm font-semibold mb-4">Social</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zM1.333 12c0-.076.008-.152.01-.228 3.767-.072 7.108-.526 9.875-1.343.46.925.877 1.854 1.265 2.78-2.423.698-4.277 1.738-5.562 3.092-2.286-1.855-3.588-4.295-3.588-6.301zm4.166 8.61c1.283-1.395 3.222-2.431 5.809-3.099.758 1.886 1.388 3.796 1.916 5.711-1.371.352-2.811.547-4.298.547-1.288 0-2.525-.199-3.695-.564.093-.576.18-1.156.268-1.739v-.856zm7.499 2.984c-.511-1.787-1.118-3.57-1.833-5.334 1.757-.331 3.694-.314 5.824.07-.569 2.006-1.804 3.766-3.591 4.964z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
