import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#problem-section' },
        { name: 'Alumni', href: '#alumni' },
        { name: 'Schedule', href: '#schedule' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a2e]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-xl font-display font-bold text-white tracking-widest">
                    UNIVERSE
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-medium text-gray-300 hover:text-pastel-pink transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-white text-slate-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-pastel-blue transition-colors">
                        Register
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a2e] border-b border-white/10 p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-pastel-pink py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;