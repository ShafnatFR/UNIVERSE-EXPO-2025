import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALUMNI_DATA } from './constants';
import { MessageCircle, Star } from 'lucide-react';

const AlumniSection: React.FC = () => {
    // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT URL
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx.../exec";

    const [alumniData, setAlumniData] = useState<typeof ALUMNI_DATA>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<'All' | 'Saintek' | 'Soshum'>('All');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // If URL is still placeholder, don't fetch or show error
                if (GOOGLE_SHEET_URL.includes("...")) {
                    console.warn("Google Sheet URL not set");
                    setIsLoading(false);
                    return;
                }

                const response = await fetch(GOOGLE_SHEET_URL);
                const data = await response.json();
                // Add IDs if missing, though typically index is enough for key if static
                const formattedData = data.map((item: any, index: number) => ({
                    ...item,
                    id: item.id || `row-${index}`,
                    // Ensure tags is array
                    tags: Array.isArray(item.tags) ? item.tags : []
                }));
                setAlumniData(formattedData);
            } catch (error) {
                console.error("Error fetching alumni data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredAlumni = filter === 'All'
        ? alumniData
        : alumniData.filter(a => a.category === filter);

    return (
        <section className="relative z-10 py-16 md:py-24 px-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-pastel-yellow font-medium tracking-widest text-xs md:text-sm uppercase">The Stars</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4 md:mb-6">
                        Temukan Bintang Pemandumu
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                        Jangan cuma menebak. Lihat mereka yang sudah sampai di sana. Filter berdasarkan minatmu.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-6 md:mt-8">
                        {['All', 'Saintek', 'Soshum'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as any)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-pastel-yellow text-slate-900 shadow-[0_0_15px_rgba(253,253,150,0.5)]'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pastel-yellow"></div>
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AnimatePresence>
                            {filteredAlumni.map((alumni) => (
                                <motion.div
                                    layout
                                    key={alumni.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className={`
                                    relative p-6 rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300
                                    ${alumni.category === 'Saintek' ? 'bg-pastel-blue' : 'bg-pastel-pink'}
                                `}
                                >
                                    {/* Card Content - STRICTLY BLACK TEXT as per prompt */}
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-4">
                                            <img
                                                src={alumni.image}
                                                alt={alumni.name}
                                                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover border-2 border-slate-900"
                                            />
                                            <div className="bg-slate-900 text-white text-[10px] md:text-xs px-2 py-1 rounded-lg">
                                                {alumni.university}
                                            </div>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{alumni.name}</h3>
                                        <p className="text-xs md:text-sm font-semibold text-slate-800 mb-4">{alumni.major}</p>

                                        <div className="bg-white/40 p-3 rounded-xl mb-4 backdrop-blur-sm border border-slate-900/10 flex-grow">
                                            <p className="text-slate-900 italic text-sm">"{alumni.quote}"</p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {alumni.tags.map(tag => (
                                                <span key={tag} className="text-[10px] uppercase font-bold text-slate-600 border border-slate-600 px-2 py-0.5 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button className="w-full py-2 bg-slate-900 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors text-sm">
                                            <MessageCircle size={16} />
                                            Chat Alumni
                                        </button>
                                    </div>

                                    {/* Decoration */}
                                    <Star className="absolute -bottom-4 -right-4 text-white/30 w-24 h-24 rotate-12" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default AlumniSection;