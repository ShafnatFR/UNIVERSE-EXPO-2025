import React, { useState, useEffect } from 'react';
import { Menu, X, Maximize, Minimize } from 'lucide-react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        
        // Listener untuk mendeteksi perubahan mode fullscreen (misal user tekan ESC)
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#problem-section' },
        { name: 'Info RSVP', href: '#rsvp' },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 80; // Approximate height of the fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else if (href === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a2e]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-xl font-display font-bold text-white tracking-widest cursor-pointer"
                >
                    UNIVERSE
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-sm font-medium text-gray-300 hover:text-pastel-pink transition-colors uppercase tracking-wide cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    {/* Full Screen Toggle Button */}
                    <button 
                        onClick={toggleFullscreen}
                        className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    >
                        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                    </button>

                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSefNdvgIlHcoM9j0nuUPkh1a3DNyM9oSWKbDPDOQ_-dpZqzFw/viewform?usp=send_form"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-pastel-blue transition-colors"
                    >
                        Join as Rep
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button 
                        onClick={toggleFullscreen}
                        className="text-white p-1"
                    >
                         {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                    </button>
                    <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a2e] border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-gray-300 hover:text-pastel-pink py-2 font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                     <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSefNdvgIlHcoM9j0nuUPkh1a3DNyM9oSWKbDPDOQ_-dpZqzFw/viewform?usp=send_form"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center bg-white text-slate-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-pastel-blue transition-colors mt-2"
                    >
                        Join as Rep
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;