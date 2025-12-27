import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const scrollToContent = () => {
        // Trigger Auto Full Screen feature
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                // Ignore error if user blocked it or browser doesn't support
                console.log("Full screen request denied or not supported", err);
            });
        }

        const element = document.getElementById('problem-section');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24 md:pt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <div className="inline-block mb-4 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-pastel-pink/30">
                    <span className="text-pastel-pink font-semibold tracking-wider text-xs md:text-sm">UNIVERSE EXPO 2025</span>
                </div>
                
                {/* Responsive Typography */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-white">
                    Temukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-pastel-mauve">Semestamu</span>,<br />
                    Mulai <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-blue to-white">Perjalananmu</span>.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-pastel-cream/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-2">
                    Bingung mau ke mana setelah lulus? Temui kakak kelasmu yang telah menjelajah lebih dulu. 
                    Dengar cerita nyata, bukan sekadar brosur.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToContent}
                        className="group relative w-full sm:w-auto px-8 py-3.5 md:py-4 bg-gradient-to-r from-pastel-pink to-pastel-mauve rounded-full font-bold text-slate-900 shadow-[0_0_20px_rgba(244,194,194,0.4)] hover:shadow-[0_0_30px_rgba(244,194,194,0.6)] transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                        Mulai Menjelajah 🚀
                    </motion.button>
                </div>
            </motion.div>

            <motion.div 
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-pastel-blue/70 hover:text-white transition-colors"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={scrollToContent}
            >
                <ChevronDown size={28} className="md:w-8 md:h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;