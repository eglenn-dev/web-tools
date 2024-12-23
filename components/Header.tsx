'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const tools = [
    { name: 'WebP Converter', href: '/tools/webp' },
    { name: 'JS Minifier', href: '/minify/js' },
    { name: 'CSS Minifier', href: '/minify/css' },
    { name: 'QR Code', href: '/tools/qr' },
    { name: 'Typing Test', href: '/tools/typing-test' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);


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


    const closeMenu = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const closeMobileMenuAndDropdown = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
        setIsMobileDropdownOpen(false);
    };


    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#18182c] shadow-lg' : 'bg-transparent'
            }`}>
            <nav className={`container mx-auto px-4 py-4 flex justify-between items-center ${scrolled ? 'py-2' : 'py-4'
                }`}>
                <Link href="/" className="text-2xl font-bold text-white" onClick={closeMenu}>
                    WebTools
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className={`hover:text-gray-300 ${scrolled ? 'text-white' : 'text-gray-200'}`} onClick={closeMenu}>
                        Home
                    </Link>
                    <div className="relative group" ref={dropdownRef}>
                        <button
                            className={`flex items-center hover:text-gray-300 ${scrolled ? 'text-white' : 'text-gray-200'}`}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            onMouseEnter={() => setIsDropdownOpen(true)}
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
                                        onClick={closeMenu}
                                    >
                                        {tool.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <button className={`md:hidden ${scrolled ? 'text-white' : 'text-gray-200'}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
                </button>
            </nav>
            {isOpen && (
                <div ref={mobileMenuRef} className={`md:hidden text-white ${scrolled ? 'bg-gray-800' : 'bg-gray-800 bg-opacity-90'}`}>
                    <Link href="/" className="block py-4 px-6 text-md hover:bg-gray-700" onClick={closeMobileMenuAndDropdown}>
                        Home
                    </Link>
                    <div className="relative">
                        <button
                            className="w-full text-left py-4 px-6 text-base hover:bg-gray-700 flex justify-between items-center"
                            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        >
                            Tools <ChevronDown className={`h-5 w-5 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMobileDropdownOpen && (
                            <div className="bg-gray-900 py-2">
                                {tools.map((tool) => (
                                    <Link
                                        key={tool.name}
                                        href={tool.href}
                                        className="block py-3 px-10 text-base hover:bg-gray-700"
                                        onClick={closeMobileMenuAndDropdown}
                                    >
                                        {tool.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}