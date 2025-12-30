import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, School, Users, Rocket, MessageCircle, Sparkles, Presentation, PartyPopper } from 'lucide-react';

const RSVPSection: React.FC = () => {
    return (
        <section id="rsvp-section" className="relative z-10 py-16 md:py-24 px-4">
            <div className="max-w-5xl mx-auto">
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
                            <motion.span
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block py-2 px-4 rounded-full bg-pastel-yellow/10 border border-pastel-yellow/30 text-pastel-yellow text-xs font-bold tracking-widest uppercase mb-4"
                            >
                                📸 RSVP PESERTA 📢✨
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-pastel-mauve">
                                    2nd UNIVERSE EXPO
                                </span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm tracking-wide">SMAS BPS&K 1 JAKARTA</p>
                        </div>

                        {/* Content Body */}
                        <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                            <p className="font-medium text-white text-xl">
                                Halo, Explorer! 🙌🏻
                            </p>
                            <p>
                                UniVerse Expo hadir sebagai ajang yang mempertemukan siswa dengan mahasiswa dari berbagai perguruan tinggi untuk berbagi informasi dan pengalaman seputar dunia perkuliahan.
                            </p>
                            <p>
                                Kami mengundang teman-teman mahasiswa dari <strong className="text-pastel-blue">PTN</strong> serta <strong className="text-pastel-pink">PTS</strong>, <strong className="text-pastel-yellow">angkatan 2025</strong>, untuk bergabung sebagai peserta Universe Expo dan menjadi representasi kampus masing-masing. Di sini, kamu bisa berbagi cerita tentang kehidupan kuliah, jalur masuk, hingga tips memilih jurusan kepada adik-adik SMA.
                            </p>
                        </div>

                        {/* Alumni Role Card */}
                        <div className="mb-8 bg-gradient-to-br from-pastel-mauve/10 to-pastel-pink/10 border border-pastel-pink/30 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="text-pastel-pink" size={20} />
                                <h3 className="text-lg font-bold text-white">Peran Alumni ngapain sih, guys?</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed mb-3">
                                Alumni akan menjaga <strong className="text-pastel-blue">booth</strong>, melakukan <strong className="text-pastel-pink">parade</strong>, dan ikut meramaikan dalam <strong className="text-pastel-yellow">games & photobooth</strong>! 🤍
                            </p>
                            <div className="flex items-start gap-2 bg-white/5 p-4 rounded-xl border border-white/10">
                                <Presentation className="text-pastel-mauve flex-shrink-0 mt-1" size={18} />
                                <p className="text-sm text-slate-300">
                                    Terdapat <strong className="text-pastel-mauve">mini class</strong> bagi teman-teman yang ingin mengajukan diri untuk menjadi presentator, mohon hubungi <strong>Contact Person</strong> terlampir.
                                </p>
                            </div>
                        </div>

                        {/* Key Details Grid */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-pastel-blue/30 transition-all"
                            >
                                <div className="p-3 bg-pastel-blue/20 rounded-full text-pastel-blue">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Periode Pendataan</p>
                                    <p className="text-white font-bold text-lg">27 Des - 2 Jan 2026</p>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-pastel-pink/30 transition-all"
                            >
                                <div className="p-3 bg-pastel-pink/20 rounded-full text-pastel-pink">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Target Peserta</p>
                                    <p className="text-white font-bold">Mahasiswa Angkatan 2025</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Persons */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <MessageCircle className="text-pastel-yellow" size={20} />
                                <h3 className="text-lg font-bold text-white">Contact Person</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <motion.a
                                    href="https://wa.me/6281646028625"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 hover:border-green-400/50 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        👨‍💼
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">Jogi</p>
                                        <p className="text-sm text-green-400">081646028625</p>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://wa.me/6281219427090"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-xl p-4 flex items-center gap-3 hover:border-purple-400/50 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        👩‍💼
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">Ghaida</p>
                                        <p className="text-sm text-purple-400">081219427090</p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col items-center gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://bit.ly/RSVPPESERTA2NDUNIVERSEEXPO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-pastel-pink via-pastel-mauve to-pastel-blue text-white font-bold rounded-xl shadow-[0_0_30px_rgba(244,194,194,0.5)] hover:shadow-[0_0_50px_rgba(244,194,194,0.8)] transition-all flex items-center justify-center gap-3 text-lg group"
                            >
                                <Rocket className="group-hover:rotate-12 transition-transform" size={22} />
                                Daftar Sekarang
                                <ExternalLink size={20} />
                            </motion.a>
                            <p className="text-sm text-center text-gray-400 italic mt-2 flex items-center gap-2">
                                <PartyPopper size={16} className="text-pastel-yellow" />
                                Yuk jadi bagian dari perjalanan mereka menemukan masa depan‼️🚀
                            </p>
                        </div>

                        {/* Footer decorative */}
                        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col items-center justify-center text-center">
                            <div className="flex items-center gap-2 mb-2">
                                <School size={18} className="text-pastel-pink" />
                                <span className="text-sm font-display tracking-widest font-bold bg-gradient-to-r from-pastel-pink to-pastel-blue bg-clip-text text-transparent">
                                    𝐔𝐧𝐢𝐕𝐞𝐫𝐬𝐞 𝐄𝐱𝐩𝐨
                                </span>
                            </div>
                            <p className="text-xs font-mono text-gray-400 mb-1">SMAS BPS&K 1 JAKARTA</p>
                            <p className="text-xs italic text-pastel-mauve">Your Universe, Your Journey</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RSVPSection;