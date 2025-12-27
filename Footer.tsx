import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

import logo from './logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-white mb-4">
                            UNIVERSE EXPO 2025
                        </h2>
                        <p className="text-gray-400 max-w-xs">
                            Your Universe, Your Journey.
                            Event pendidikan paling estetik tahun ini.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <img src={logo} alt="Universe Expo Logo" className="w-24 h-24 rounded-full object-cover border-2 border-white/20" />
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2025 Universe Expo Committee. All rights reserved.</p>
                    {/* <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

const SocialButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pastel-pink hover:text-black transition-all">
        {icon}
    </a>
)

export default Footer;