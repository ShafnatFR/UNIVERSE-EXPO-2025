import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, School, Users, Rocket } from 'lucide-react';

const RSVPSection: React.FC = () => {
    return (
        <section id="rsvp-section" className="relative z-10 py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Glassmorphic Card Container */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink/20 to-pastel-blue/20 rounded-[2rem] blur-xl"></div>
                    <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-12 overflow-hidden shadow-2xl">
                        
                        {/* Decorative Header Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-pink via-white to-pastel-blue opacity-70"></div>
                        
                        {/* Header */}
                        <div className="text-center mb-8">
                            <span className="inline-block py-1 px-3 rounded-full bg-pastel-yellow/10 border border-pastel-yellow/30 text-pastel-yellow text-xs font-bold tracking-widest uppercase mb-4">
                                Open Recruitment
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                                RSVP PESERTA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-pastel-mauve">
                                    2nd UNIVERSE EXPO
                                </span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm tracking-wide">SMAS BPS&K 1 JAKARTA</p>
                        </div>

                        {/* Content Body */}
                        <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed mb-10 text-center md:text-left">
                            <p className="font-medium text-white text-xl">
                                Halo, Explorer! 🙌🏻
                            </p>
                            <p>
                                UniVerse Expo hadir sebagai ajang yang mempertemukan siswa dengan mahasiswa dari berbagai perguruan tinggi untuk berbagi informasi dan pengalaman seputar dunia perkuliahan.
                            </p>
                            <p>
                                Kami mengundang teman-teman mahasiswa dari <strong className="text-pastel-blue">PTN</strong> serta <strong className="text-pastel-pink">PTS</strong>, untuk bergabung sebagai peserta Universe Expo dan menjadi representasi kampus masing-masing. Di sini, kamu bisa berbagi cerita tentang kehidupan kuliah, jalur masuk, hingga tips memilih jurusan kepada adik-adik SMA.
                            </p>
                        </div>

                        {/* Key Details Grid */}
                        <div className="grid md:grid-cols-2 gap-4 mb-10">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                                <div className="p-3 bg-pastel-blue/20 rounded-full text-pastel-blue">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Periode Pendataan</p>
                                    <p className="text-white font-bold text-lg">27 Des - 2 Jan 2026</p>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                                <div className="p-3 bg-pastel-pink/20 rounded-full text-pastel-pink">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Target Peserta</p>
                                    <p className="text-white font-bold">Mahasiswa PTN & PTS</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col items-center gap-4">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://docs.google.com/forms/d/e/1FAIpQLSefNdvgIlHcoM9j0nuUPkh1a3DNyM9oSWKbDPDOQ_-dpZqzFw/viewform?usp=send_form"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-pastel-pink to-pastel-mauve text-slate-900 font-bold rounded-xl shadow-[0_0_20px_rgba(244,194,194,0.4)] hover:shadow-[0_0_35px_rgba(244,194,194,0.6)] transition-all flex items-center justify-center gap-2 text-lg"
                            >
                                <Rocket size={20} />
                                Daftar Sekarang
                                <ExternalLink size={18} />
                            </motion.a>
                            <p className="text-sm text-gray-500 italic mt-2">
                                Yuk jadi bagian dari perjalanan mereka menemukan masa depan! 🚀
                            </p>
                        </div>

                        {/* Footer decorative */}
                        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col items-center justify-center text-center opacity-60">
                            <div className="flex items-center gap-2 mb-2">
                                <School size={16} />
                                <span className="text-xs font-display tracking-widest font-bold">UNIVERSE EXPO</span>
                            </div>
                            <p className="text-[10px] font-mono">Your Universe, Your Journey</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RSVPSection;