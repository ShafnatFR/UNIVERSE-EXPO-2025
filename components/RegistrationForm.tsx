import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Upload, Camera, QrCode, ScanLine, Download, X } from 'lucide-react';
import { RegistrationFormData } from '../types';
import html2canvas from 'html2canvas';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<RegistrationFormData>({
        fullName: '',
        email: '',
        phone: '',
        school: '',
        interest: 'Saintek',
        photoPreview: ''
    });
    
    // State to control the Result Modal
    const [showResultModal, setShowResultModal] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cardResultRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setFormData({ ...formData, photoPreview: objectUrl });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Instead of downloading immediately, we open the static modal
        setShowResultModal(true);
    };

    const handleDownload = async () => {
        if (!cardResultRef.current) return;

        setIsDownloading(true);

        try {
            // Wait a split second to ensure UI is calm
            await new Promise(resolve => setTimeout(resolve, 200));

            const canvas = await html2canvas(cardResultRef.current, {
                backgroundColor: '#1a1a2e', // Force background color
                scale: 3, // High quality
                useCORS: true,
                logging: false,
                allowTaint: true,
            });

            const image = canvas.toDataURL("image/png");
            
            const link = document.createElement("a");
            link.href = image;
            const safeName = (formData.fullName || 'Cadet').replace(/[^a-z0-9]/gi, '_').toLowerCase();
            link.download = `universe_expo_id_${safeName}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
        } catch (error) {
            console.error("Failed to generate ID Card:", error);
            alert("Gagal mengunduh. Coba screenshot manual.");
        } finally {
            setIsDownloading(false);
        }
    };

    // Styling constants
    const inputClasses = "w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-pastel-blue/50 focus:border-slate-900 transition-all font-medium";
    const labelClasses = "block text-slate-900 font-bold mb-2 text-xs uppercase tracking-widest";

    const getAccentColor = (interest: string) => {
        switch(interest) {
            case 'Saintek': return 'bg-pastel-blue';
            case 'Soshum': return 'bg-pastel-pink';
            case 'Arts': return 'bg-pastel-yellow';
            default: return 'bg-gray-400';
        }
    };

    // Static CSS Background for consistent capture
    const staticStarBg = {
        backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 80px 120px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2.5px 2.5px at 110px 50px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 200px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 200px 50px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 250px 150px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 300px 300px, #ffffff, rgba(0,0,0,0))
        `,
        backgroundSize: '400px 400px',
        backgroundRepeat: 'repeat',
        opacity: 0.5
    };

    return (
        <section className="relative z-10 py-24 px-4 bg-pastel-mauve/10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
                        Identity Clearance
                    </h2>
                    <p className="text-gray-300">
                        Buat ID Card penjelajahmu untuk mendapatkan akses masuk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Input Form */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border-4 border-white/50"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div 
                                        onClick={() => fileInputRef.current?.click()}
                                        className="w-16 h-16 bg-white border-2 border-dashed border-slate-400 rounded-full flex items-center justify-center cursor-pointer hover:border-slate-900 hover:bg-slate-50 transition-all shrink-0 overflow-hidden"
                                    >
                                        {formData.photoPreview ? (
                                            <img src={formData.photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <Camera className="text-slate-400" size={24} />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Upload Foto Profil</h4>
                                        <p className="text-xs text-slate-500 mb-2">Format: JPG, PNG. Max 2MB.</p>
                                        <button 
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg font-medium flex items-center gap-1 hover:bg-slate-700 transition-colors"
                                        >
                                            <Upload size={12} /> Pilih File
                                        </button>
                                        <input 
                                            type="file" 
                                            ref={fileInputRef}
                                            onChange={handlePhotoUpload}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="md:col-span-2">
                                        <label className={labelClasses}>Nama Lengkap</label>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Ketik namamu..."
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="email@..."
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
                                    <div className="md:col-span-2">
                                        <label className={labelClasses}>Asal Sekolah</label>
                                        <input 
                                            type="text" 
                                            name="school"
                                            value={formData.school}
                                            onChange={handleChange}
                                            placeholder="SMA..."
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={labelClasses}>Divisi / Minat</label>
                                        <div className="relative">
                                            <select 
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                className={`${inputClasses} appearance-none cursor-pointer`}
                                            >
                                                <option value="Saintek">Science & Tech (Saintek)</option>
                                                <option value="Soshum">Social & Humanity (Soshum)</option>
                                                <option value="Arts">Creative Arts & Design</option>
                                                <option value="Undecided">Cadet (Masih Bingung)</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-900">
                                                <ArrowRight size={20} className="rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all mt-4"
                                >
                                    Cetak ID Card <ScanLine size={20} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Live Preview (Visual Only) */}
                    <div className="lg:col-span-5 order-1 lg:order-2 sticky top-24 hidden lg:block">
                         <div className="text-center mb-4 text-gray-400 text-sm">Preview Tampilan</div>
                         <div className="relative w-full max-w-sm mx-auto aspect-[3/4.5] bg-slate-900 rounded-[20px] overflow-hidden shadow-2xl border border-white/20 transform -rotate-2">
                            {/* Simple visual preview logic identical to Modal but with different styling context if needed */}
                            <div className="absolute inset-0 z-0" style={staticStarBg}></div>
                            <div className="relative z-10 p-6 flex flex-col h-full items-center justify-center text-white opacity-50">
                                <p>Isi formulir untuk melihat ID Card</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* RESULT MODAL - THIS IS WHAT GETS CAPTURED */}
            <AnimatePresence>
                {showResultModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-3xl p-4 md:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto flex flex-col items-center shadow-2xl"
                        >
                            <div className="flex justify-between items-center w-full mb-4">
                                <h3 className="text-xl font-bold text-slate-900">ID Card Preview</h3>
                                <button 
                                    onClick={() => setShowResultModal(false)}
                                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-slate-900"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p className="text-sm text-gray-500 mb-6 text-center">
                                Pastikan data sudah benar. Klik tombol simpan di bawah untuk mengunduh.
                            </p>

                            {/* CAPTURE TARGET AREA */}
                            {/* Rigid sizing, no animations, no tilt */}
                            <div className="w-full flex justify-center mb-6">
                                <div 
                                    ref={cardResultRef}
                                    className="w-[320px] h-[480px] bg-slate-900 relative overflow-hidden shrink-0 shadow-lg text-white"
                                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                                >
                                    {/* Static Background Elements */}
                                    <div className="absolute inset-0 z-0" style={staticStarBg}></div>
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                    {/* Content Container */}
                                    <div className="relative z-10 flex flex-col h-full p-6">
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-1">UNIVERSE EXPO</h3>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                    <span className="text-[10px] font-mono text-green-500">ACCESS GRANTED</span>
                                                </div>
                                            </div>
                                            <QrCode className="text-white opacity-90" size={32} />
                                        </div>

                                        {/* Photo Area */}
                                        <div className="flex justify-center mb-6">
                                            <div className="relative p-1 rounded-full border-2 border-dashed border-white/30 w-32 h-32 flex items-center justify-center">
                                                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 relative z-10">
                                                    {formData.photoPreview ? (
                                                        <img 
                                                            src={formData.photoPreview} 
                                                            alt="ID" 
                                                            className="w-full h-full object-cover"
                                                            crossOrigin="anonymous"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-gray-500 bg-slate-800">
                                                            <span className="text-xs">NO PHOTO</span>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Static Decos */}
                                                <div className="absolute -left-2 top-1/2 w-1 h-6 bg-white/50 -translate-y-1/2"></div>
                                                <div className="absolute -right-2 top-1/2 w-1 h-6 bg-white/50 -translate-y-1/2"></div>
                                            </div>
                                        </div>

                                        {/* Text Info */}
                                        <div className="text-center space-y-4">
                                            <div>
                                                <h2 className="text-2xl font-bold uppercase tracking-wide truncate px-2">
                                                    {formData.fullName || "CADET NAME"}
                                                </h2>
                                                <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-1">
                                                    {formData.email || "ID: UNKNOWN"}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 mt-2 text-left bg-white/10 p-3 rounded-xl border border-white/10">
                                                <div>
                                                    <span className="block text-[9px] text-gray-300 uppercase tracking-wider mb-0.5">Origin</span>
                                                    <span className="block text-sm font-bold truncate leading-tight">{formData.school || "EARTH"}</span>
                                                </div>
                                                <div>
                                                    <span className="block text-[9px] text-gray-300 uppercase tracking-wider mb-0.5">Division</span>
                                                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded text-slate-900 mt-0.5 ${getAccentColor(formData.interest)}`}>
                                                        {formData.interest === 'Undecided' ? 'TRAINEE' : formData.interest.toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-end opacity-70">
                                             <div className="flex gap-0.5 items-end h-5 w-24 opacity-60">
                                                {[...Array(12)].map((_, i) => (
                                                    <div key={i} className={`bg-white w-1 h-${i % 2 === 0 ? 'full' : '1/2'}`}></div>
                                                ))}
                                             </div>
                                             <span className="text-[9px] font-mono">2025-EXP-V1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex w-full gap-3">
                                <button 
                                    onClick={() => setShowResultModal(false)}
                                    className="flex-1 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                                >
                                    Tutup
                                </button>
                                <button 
                                    onClick={handleDownload}
                                    disabled={isDownloading}
                                    className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-xl"
                                >
                                    {isDownloading ? (
                                        <>Memproses...</>
                                    ) : (
                                        <>
                                            Simpan Gambar <Download size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default RegistrationForm;