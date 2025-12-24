import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Compass, MapPin } from 'lucide-react';

const ProblemSection: React.FC = () => {
    return (
        <section id="problem-section" className="relative z-10 py-16 md:py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                            Terjebak di <br />
                            <span className="text-pastel-mauve">The Black Hole?</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                            Merasa tersesat di antah berantah? Takut salah pilih jurusan? 
                            Tenang, kamu tidak sendirian di ruang hampa ini. Ribuan siswa lain juga sedang mencari sinyal yang tepat.
                        </p>
                        
                        <div className="space-y-3 md:space-y-4">
                            {[
                                { icon: HelpCircle, text: "Bingung passion sebenarnya apa?" },
                                { icon: Compass, text: "Takut prospek kerja di masa depan?" },
                                { icon: MapPin, text: "Gak tau harus mulai dari mana?" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 md:gap-4 bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <div className="p-2 bg-pastel-mauve rounded-full text-slate-900 shrink-0">
                                        <item.icon size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <span className="text-white text-sm md:text-base font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] md:h-[400px] flex items-center justify-center mt-8 md:mt-0"
                    >
                        {/* Visual representation of a black hole / void - Responsive Sizes */}
                        <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-black rounded-full shadow-[0_0_60px_rgba(168,85,247,0.4)] md:shadow-[0_0_100px_rgba(168,85,247,0.4)] z-10 flex items-center justify-center border border-purple-500/20">
                             <span className="text-4xl md:text-6xl animate-pulse">?</span>
                        </div>
                        <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-purple-900/20 rounded-full animate-spin-slow blur-xl"></div>
                        <div className="absolute w-72 h-72 md:w-96 md:h-96 border border-white/10 rounded-full animate-pulse-slow"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;