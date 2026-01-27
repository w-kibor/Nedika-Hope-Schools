'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, School } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Academy', href: '/academy' },
    { name: 'Junior Secondary', href: '/junior-secondary' },
    { name: 'High School', href: '/high-school' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="p-2 bg-royal-blue rounded-md">
                            <School className="h-8 w-8 text-white" />
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-xl font-bold text-royal-blue leading-none">Nedika Hope</h1>
                            <p className="text-xs text-maroon font-semibold tracking-wider">SCHOOLS</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-royal-blue font-medium transition-colors text-sm uppercase tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/admissions"
                            className="bg-maroon hover:bg-red-900 text-white px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 shadow-md flex items-center"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-royal-blue focus:outline-none"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-royal-blue hover:bg-blue-50"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/admissions"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-maroon text-white px-4 py-3 rounded-md font-bold text-lg"
                                >
                                    Enroll Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
