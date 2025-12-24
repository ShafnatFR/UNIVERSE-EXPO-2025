import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radio, Sparkles } from 'lucide-react';
import { INSPIRATIONAL_QUOTES } from '../constants';
import { InspirationalQuote } from '../types';

const InspirationSection: React.FC = () => {
    const [quote, setQuote] = useState<InspirationalQuote | null>(null);

    useEffect(() => {
        // Pick a random quote on mount (client-side only to ensure hydration match if needed, 
        // though strictly React 18+ handles this well, explicit random is safe in useEffect)
        const randomIndex = Math.floor(Math.random() * INSPIRATIONAL_QUOTES.length);
        setQuote(INSPIRATIONAL_QUOTES[randomIndex]);
    }, []);

    if (!quote) return null;

    return (
        <section className="relative z-10 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-r from-space-light to-space-accent rounded-3xl p-1 shadow-[0_0_40px_rgba(244,194,194,0.1)]"
                >
                    {/* Inner Container */}
                    <div className="bg-[#1a1a2e] rounded-[1.4rem] p-8 md:p-12 text-center relative overflow-hidden border border-white/5">
                        
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pastel-pink to-transparent opacity-50"></div>
                        <Sparkles className="absolute top-6 right-6 text-pastel-yellow w-6 h-6 animate-pulse" />
                        <Sparkles className="absolute bottom-6 left-6 text-pastel-blue w-4 h-4 animate-pulse" style={{ animationDelay: '1s' }} />

                        {/* Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pastel-cream text-xs font-medium tracking-widest mb-6 uppercase">
                            <Radio size={14} className="animate-pulse" />
                            Incoming Signal
                        </div>

                        {/* Quote Text */}
                        <h3 className="text-2xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-6 leading-relaxed">
                            "{quote.text}"
                        </h3>

                        {/* Author */}
                        <div className="flex flex-col items-center">
                            <span className="text-pastel-pink font-bold text-lg">{quote.author}</span>
                            <span className="text-gray-500 text-sm">{quote.role}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InspirationSection;