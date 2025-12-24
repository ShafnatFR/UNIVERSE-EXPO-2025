import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { RegistrationFormData } from '../types';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<RegistrationFormData>({
        fullName: '',
        email: '',
        phone: '',
        school: '',
        interest: 'Saintek'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    // Styling constant to ensure exact compliance with prompt for inputs:
    // "warna field inputan selalu putih dengan garis outline hitam atau field abu-abu tulang"
    // "warna teks hitam"
    const inputClasses = "w-full bg-white border-2 border-black rounded-xl px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-pastel-blue/50 focus:border-black transition-all font-medium";
    const labelClasses = "block text-black font-bold mb-2 text-sm uppercase tracking-wide";

    return (
        <section className="relative z-10 py-24 px-4 bg-pastel-mauve/20">
            <div className="max-w-xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-pastel-cream rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(255,255,255,0.1)] border-4 border-white/50"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-2">
                            Boarding Pass 🎫
                        </h2>
                        <p className="text-slate-700">
                            Daftarkan dirimu sekarang untuk mendapatkan akses ke Universe Expo.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-10"
                        >
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-2">You're Ready for Liftoff!</h3>
                            <p className="text-slate-700 mb-6">Tiket elektronik telah dikirim ke email kamu.</p>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="text-black underline font-bold hover:text-purple-700"
                            >
                                Daftar lagi untuk teman
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className={labelClasses}>Nama Lengkap</label>
                                <input 
                                    type="text" 
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Contoh: Budi Angkasa"
                                    required
                                    className={inputClasses}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@sekolah.sch.id"
                                        required
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>WhatsApp</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="0812..."
                                        required
                                        className={inputClasses}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Asal Sekolah</label>
                                <input 
                                    type="text" 
                                    name="school"
                                    value={formData.school}
                                    onChange={handleChange}
                                    placeholder="SMA Negeri 1 Galaxy"
                                    required
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label className={labelClasses}>Minat Utama</label>
                                <div className="relative">
                                    <select 
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                    >
                                        <option value="Saintek">Sains & Teknologi (Saintek)</option>
                                        <option value="Soshum">Sosial & Humaniora (Soshum)</option>
                                        <option value="Arts">Seni & Kreatif</option>
                                        <option value="Undecided">Masih Bingung (Butuh Bimbingan)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                                        <ArrowRight size={20} className="rotate-90" />
                                    </div>
                                </div>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all mt-4"
                            >
                                Ambil Tiket Gratis
                                <ArrowRight size={20} />
                            </motion.button>
                            
                            <p className="text-center text-xs text-slate-500 mt-4">
                                *Dengan mendaftar, kamu setuju untuk memulai perjalanan ini.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationForm;