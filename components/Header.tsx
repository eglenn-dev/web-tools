'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const tools = [
    { name: 'Tool 1', href: '/tool1' },
    { name: 'Tool 2', href: '/tool2' },
    { name: 'Tool 3', href: '/tool3' },
    { name: 'Tool 4', href: '/tool4' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#18182c] shadow-lg' : 'bg-transparent'
            }`}>
            <nav className={`container mx-auto px-4 py-4 flex justify-between items-center ${scrolled ? 'py-2' : 'py-4'
                }`}>
                <Link href="/" className="text-2xl font-bold">
                    WebTools
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className={`hover:text-gray-300 ${scrolled ? 'text-white' : 'text-gray-200'}`}>
                        Home
                    </Link>
                    <div className="relative group">
                        <button
                            className={`flex items-center hover:text-gray-300 ${scrolled ? 'text-white' : 'text-gray-200'}`}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Tools <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                {tools.map((tool) => (
                                    <Link
                                        key={tool.name}
                                        href={tool.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {tool.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link href="/about" className={`hover:text-gray-300 ${scrolled ? 'text-white' : 'text-gray-200'}`}>
                        About
                    </Link>
                    <Link href="/contact" className={`hover:text-gray-300 ${scrolled ? 'text-white' : 'text-gray-200'}`}>
                        Contact
                    </Link>
                </div>
                <button className={`md:hidden ${scrolled ? 'text-white' : 'text-gray-200'}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>
            {isOpen && (
                <div className={`md:hidden ${scrolled ? 'bg-gray-800' : 'bg-gray-800 bg-opacity-90'}`}>
                    <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">
                        Home
                    </Link>
                    <div className="relative">
                        <button
                            className="w-full text-left py-2 px-4 text-sm hover:bg-gray-700 flex justify-between items-center"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Tools <ChevronDown className="h-4 w-4" />
                        </button>
                        {isDropdownOpen && (
                            <div className="bg-gray-900 py-2">
                                {tools.map((tool) => (
                                    <Link
                                        key={tool.name}
                                        href={tool.href}
                                        className="block py-2 px-8 text-sm hover:bg-gray-700"
                                    >
                                        {tool.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-700">
                        About
                    </Link>
                    <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-700">
                        Contact
                    </Link>
                </div>
            )}
        </header>
    )
}

