"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Plane } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'Services', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="#" className="flex items-center space-x-2">
                                <div className={`p-2 rounded-xl ${isScrolled ? 'bg-blue-100' : 'bg-white/10'}`}>
                                    <Plane className={`w-6 h-6 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
                                </div>
                                <span className={`font-sora font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}>
                                    Travel<span className="text-blue-500">WithLalhal</span>
                                </span>
                            </a>
                        </motion.div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        whileHover={{ scale: 1.05 }}
                                        className={`
                                            px-4 py-2 rounded-full font-outfit text-sm font-medium
                                            ${isScrolled
                                                ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                            } 
                                            transition-all duration-200
                                        `}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href={"#contact"}
                                    whileHover={{ scale: 1.05 }}
                                    className={`
                                        ml-4 px-6 py-2 rounded-full font-outfit text-sm font-medium
                                        ${isScrolled
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-white text-gray-900 hover:bg-gray-100'
                                        }
                                        transition-colors duration-200
                                    `}
                                >
                                    Contact Now
                                </motion.a>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`p-2 rounded-lg ${isScrolled
                                    ? 'text-gray-900 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100"
                        >
                            <div className="px-4 py-3 space-y-1">
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        whileHover={{ x: 10 }}
                                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-outfit text-sm font-medium rounded-lg hover:bg-blue-50"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-outfit text-sm font-medium hover:bg-blue-700"
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;