import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ALUMNI_DATA } from './constants';
import { MessageCircle, Star, Filter } from 'lucide-react';

const AlumniSection: React.FC = () => {
    // Removed Google Sheets fetch - using local data instead
    const [alumniData] = useState<typeof ALUMNI_DATA>(ALUMNI_DATA);
    const [isLoading] = useState(false);

    // Multi-criteria filters
    const [selectedUniversity, setSelectedUniversity] = useState<string>('All');
    const [selectedMajor, setSelectedMajor] = useState<string>('All');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Lazy loading state
    const [visibleCount, setVisibleCount] = useState(12); // Show 12 cards initially
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const CARDS_PER_BATCH = 12;

    // Extract unique values for filters
    const uniqueUniversities = useMemo(() => {
        const universities = Array.from(new Set(alumniData.map(a => a.university))).sort();
        return ['All', ...universities];
    }, [alumniData]);

    const uniqueMajors = useMemo(() => {
        const majors = Array.from(new Set(alumniData.map(a => a.major))).sort();
        return ['All', ...majors];
    }, [alumniData]);

    const uniqueCategories = useMemo(() => {
        const categories = Array.from(new Set(alumniData.map(a => a.category))).sort();
        return ['All', ...categories];
    }, [alumniData]);

    // Multi-criteria filtering
    const filteredAlumni = useMemo(() => {
        return alumniData.filter(alumni => {
            const matchUniversity = selectedUniversity === 'All' || alumni.university === selectedUniversity;
            const matchMajor = selectedMajor === 'All' || alumni.major === selectedMajor;
            const matchCategory = selectedCategory === 'All' || alumni.category === selectedCategory;
            return matchUniversity && matchMajor && matchCategory;
        });
    }, [alumniData, selectedUniversity, selectedMajor, selectedCategory]);

    // Lazy loaded alumni (progressive rendering)
    const visibleAlumni = useMemo(() => {
        return filteredAlumni.slice(0, visibleCount);
    }, [filteredAlumni, visibleCount]);

    const hasMore = visibleCount < filteredAlumni.length;

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!loadMoreRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setVisibleCount(prev => prev + CARDS_PER_BATCH);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [hasMore]);

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(CARDS_PER_BATCH);
    }, [selectedUniversity, selectedMajor, selectedCategory]);

    // Reset all filters
    const resetFilters = () => {
        setSelectedUniversity('All');
        setSelectedMajor('All');
        setSelectedCategory('All');
    };

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

                    {/* Multi-Criteria Filter Section */}
                    <div className="mt-6 md:mt-8 space-y-4">
                        <div className="flex items-center justify-center gap-2 text-pastel-yellow mb-4">
                            <Filter size={20} />
                            <span className="font-semibold">Filter Alumni</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {/* University Filter */}
                            <div className="space-y-2">
                                <label className="text-white text-sm font-medium block">University</label>
                                <select
                                    value={selectedUniversity}
                                    onChange={(e) => setSelectedUniversity(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-pastel-yellow focus:outline-none focus:ring-2 focus:ring-pastel-yellow/50 transition-all"
                                >
                                    {uniqueUniversities.map(uni => (
                                        <option key={uni} value={uni} className="bg-slate-800 text-white">
                                            {uni}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Major Filter */}
                            <div className="space-y-2">
                                <label className="text-white text-sm font-medium block">Program Studi</label>
                                <select
                                    value={selectedMajor}
                                    onChange={(e) => setSelectedMajor(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-pastel-yellow focus:outline-none focus:ring-2 focus:ring-pastel-yellow/50 transition-all"
                                >
                                    {uniqueMajors.map(major => (
                                        <option key={major} value={major} className="bg-slate-800 text-white">
                                            {major}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Category Filter */}
                            <div className="space-y-2">
                                <label className="text-white text-sm font-medium block">Kategori</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-pastel-yellow focus:outline-none focus:ring-2 focus:ring-pastel-yellow/50 transition-all"
                                >
                                    {uniqueCategories.map(cat => (
                                        <option key={cat} value={cat} className="bg-slate-800 text-white">
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Filter Info & Reset */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                            <p className="text-pastel-yellow text-sm">
                                Menampilkan <span className="font-bold">{visibleAlumni.length}</span> dari {filteredAlumni.length} alumni{filteredAlumni.length !== alumniData.length && ` (${alumniData.length} total)`}
                            </p>
                            {(selectedUniversity !== 'All' || selectedMajor !== 'All' || selectedCategory !== 'All') && (
                                <button
                                    onClick={resetFilters}
                                    className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all text-sm font-medium"
                                >
                                    Reset Filter
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pastel-yellow"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {visibleAlumni.map((alumni, index) => (
                            <motion.div
                                key={alumni.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index < 12 ? index * 0.05 : 0,
                                    ease: "easeOut"
                                }}
                                className={`
                                    relative p-6 rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300
                                    ${alumni.category === 'Saintek' ? 'bg-pastel-blue' : 'bg-pastel-pink'}
                                `}
                            >
                                {/* Card Content - STRICTLY BLACK TEXT as per prompt */}
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        {/* Avatar Image - Hidden but kept for future use 
                                        <img
                                            src={alumni.image}
                                            alt={alumni.name}
                                            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover border-2 border-slate-900"
                                        />
                                        */}
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
                    </div>
                )}

                {/* Lazy loading trigger - invisible element */}
                {hasMore && (
                    <div ref={loadMoreRef} className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pastel-yellow"></div>
                        <span className="ml-3 text-pastel-yellow text-sm">Memuat lebih banyak...</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AlumniSection;