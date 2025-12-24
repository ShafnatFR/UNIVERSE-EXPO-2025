import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHEDULE_DATA, UNIVERSITY_DATA } from '../constants';
import { Calendar, Map, Clock, X, ExternalLink, GraduationCap, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { University } from '../types';

const EventMap: React.FC = () => {
    const [selectedUni, setSelectedUni] = useState<University | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [filter, setFilter] = useState<'All' | 'Tech' | 'General' | 'Science' | 'Arts'>('All');

    // Reset image index when modal opens
    useEffect(() => {
        if (selectedUni) setActiveImageIndex(0);
    }, [selectedUni]);

    const filteredUniversities = filter === 'All' 
        ? UNIVERSITY_DATA 
        : UNIVERSITY_DATA.filter(uni => uni.category === filter);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedUni) return;
        setActiveImageIndex((prev) => (prev + 1) % selectedUni.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedUni) return;
        setActiveImageIndex((prev) => (prev - 1 + selectedUni.images.length) % selectedUni.images.length);
    };

    return (
        <section className="relative z-10 py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Interactive Map Visual */}
                    <div className="flex flex-col h-full order-2 lg:order-1">
                         <div className="mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 font-display">
                                    <Map className="text-pastel-blue w-5 h-5 md:w-6 md:h-6" />
                                    Galactic Map
                                </h3>
                                <p className="text-sm md:text-base text-gray-400">Jelajahi planet universitas.</p>
                            </div>
                            
                            {/* Filter Controls - Scrollable/Wrappable on Mobile */}
                            <div className="flex gap-2 items-start">
                                <Filter size={18} className="text-gray-400 mt-2 shrink-0" />
                                <div className="flex gap-2 flex-wrap">
                                    {['All', 'General', 'Tech', 'Science', 'Arts'].map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setFilter(cat as any)}
                                            className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all border ${
                                                filter === cat 
                                                ? 'bg-pastel-blue text-slate-900 border-pastel-blue' 
                                                : 'bg-transparent text-gray-400 border-gray-600 hover:border-gray-400'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-space-light/30 rounded-3xl p-1 border-2 border-slate-700 relative overflow-hidden flex-grow h-[400px] md:min-h-[500px] backdrop-blur-sm group/map">
                            {/* Grid Background */}
                            <div className="absolute inset-0 opacity-20" 
                                style={{ 
                                    backgroundImage: 'linear-gradient(#4a4a6a 1px, transparent 1px), linear-gradient(90deg, #4a4a6a 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }} 
                            />

                            {/* Particle Effects (Stars/Nebulae) */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(20)].map((_, i) => (
                                    <div 
                                        key={i}
                                        className="absolute bg-white rounded-full opacity-40 animate-pulse"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            width: `${Math.random() * 2 + 1}px`,
                                            height: `${Math.random() * 2 + 1}px`,
                                            animationDuration: `${Math.random() * 3 + 2}s`
                                        }}
                                    />
                                ))}
                                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
                            </div>
                            
                            {/* Interactive Container */}
                            <div className="relative w-full h-full perspective-1000">
                                <AnimatePresence>
                                {filteredUniversities.map((uni, index) => {
                                    const isOrbiting = !!uni.orbit;
                                    
                                    // Base Planet Component
                                    const Planet = (
                                        <motion.button
                                            onClick={() => setSelectedUni(uni)}
                                            className={`
                                                relative flex items-center justify-center group/planet
                                                transition-all duration-300
                                                ${!isOrbiting ? 'absolute transform -translate-x-1/2 -translate-y-1/2' : ''}
                                            `}
                                            style={!isOrbiting ? { top: `${uni.y}%`, left: `${uni.x}%` } : {}}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            whileHover={{ scale: 1.1 }}
                                            // Increase tap target for mobile
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div 
                                                className={`
                                                    ${uni.size} ${uni.color} rounded-full 
                                                    shadow-lg transition-all duration-300
                                                    group-hover/planet:${uni.shadowColor}/80 group-hover/planet:shadow-[0_0_30px_var(--tw-shadow-color)]
                                                    flex items-center justify-center relative z-20
                                                `}
                                            >
                                                {/* Internal Texture/Detail */}
                                                <div className="absolute inset-2 bg-black/10 rounded-full blur-[1px]"></div>
                                            </div>
                                            
                                            {/* Tooltip Name - Always show on desktop hover, handle visibility */}
                                            <span className="absolute -bottom-8 bg-black/80 text-white text-[10px] md:text-xs px-2 py-1 rounded border border-white/20 whitespace-nowrap opacity-0 group-hover/planet:opacity-100 transition-opacity z-30 pointer-events-none hidden md:block">
                                                {uni.name}
                                            </span>
                                        </motion.button>
                                    );

                                    if (isOrbiting && uni.orbit) {
                                        return (
                                            <div 
                                                key={uni.id}
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 pointer-events-none"
                                                style={{
                                                    width: `${uni.orbit.radius * 2}%`,
                                                    height: `${uni.orbit.radius * 2}%`,
                                                }}
                                            >
                                                {/* Rotating Container */}
                                                <div 
                                                    className="w-full h-full animate-[spin_linear_infinite]"
                                                    style={{ 
                                                        animationDuration: `${uni.orbit.duration}s`
                                                    }}
                                                >
                                                    {/* Position planet at top of orbit ring */}
                                                    <div 
                                                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                                                        style={{ 
                                                            animation: `spin ${uni.orbit.duration}s linear infinite reverse` 
                                                        }}
                                                    >
                                                        {Planet}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return <React.Fragment key={uni.id}>{Planet}</React.Fragment>;
                                })}
                                </AnimatePresence>

                                {/* Central Decoration (Sun position hint if UI is there) */}
                                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full blur-sm"></div>
                            </div>

                            {/* Popup Modal - Adjusted for Mobile Full Overlay or nicer popup */}
                            <AnimatePresence>
                                {selectedUni && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                        className="absolute inset-2 md:inset-auto md:bottom-4 md:right-4 md:w-96 bg-white rounded-3xl p-0 shadow-2xl z-50 border-4 border-slate-900 overflow-hidden flex flex-col max-h-[96%]"
                                    >
                                        {/* Gallery Section */}
                                        <div className="relative h-40 md:h-48 bg-gray-200 shrink-0">
                                            <AnimatePresence mode="wait">
                                                <motion.img 
                                                    key={activeImageIndex}
                                                    src={selectedUni.images[activeImageIndex]}
                                                    alt={selectedUni.name}
                                                    className="w-full h-full object-cover"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </AnimatePresence>
                                            
                                            {/* Gallery Controls */}
                                            {selectedUni.images.length > 1 && (
                                                <>
                                                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70">
                                                        <ChevronLeft size={20} />
                                                    </button>
                                                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70">
                                                        <ChevronRight size={20} />
                                                    </button>
                                                </>
                                            )}
                                            
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                                {selectedUni.images.map((_, idx) => (
                                                    <div 
                                                        key={idx} 
                                                        className={`w-1.5 h-1.5 rounded-full ${idx === activeImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                                    />
                                                ))}
                                            </div>

                                            <button 
                                                onClick={() => setSelectedUni(null)}
                                                className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full hover:bg-red-500 transition-colors z-10"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>

                                        {/* Info Section - Scrollable */}
                                        <div className="p-5 md:p-6 overflow-y-auto">
                                            <h4 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-1">{selectedUni.name}</h4>
                                            <span className="inline-block bg-pastel-mauve/30 text-purple-900 text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                                                {selectedUni.category} Planet
                                            </span>
                                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{selectedUni.description}</p>
                                            
                                            <div className="mb-6">
                                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 block flex items-center gap-1">
                                                    <GraduationCap size={14} /> 
                                                    Top Majors:
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedUni.majors.map(major => (
                                                        <span key={major} className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
                                                            {major}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <a 
                                                href={selectedUni.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-lg"
                                            >
                                                Kunjungi Website <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-pastel-yellow rounded-full flex items-center justify-center border-2 border-slate-900">
                                <Clock size={20} className="md:w-6 md:h-6 text-slate-900" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Space Talks</h3>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            {SCHEDULE_DATA.map((item, index) => (
                                <div 
                                    key={item.id}
                                    className="group bg-white rounded-2xl p-5 md:p-6 border-l-8 border-l-pastel-blue hover:border-l-pastel-pink transition-all duration-300"
                                >
                                    {/* Black text enforced inside white card */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 mt-1 font-medium text-sm md:text-base">{item.speaker}</p>
                                        </div>
                                        <span className="self-start sm:self-auto bg-slate-100 px-3 py-1 rounded-lg text-slate-900 text-xs md:text-sm font-bold border border-slate-200 whitespace-nowrap">
                                            {item.time}
                                        </span>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-slate-500 text-xs md:text-sm">
                                        <MapPinIcon />
                                        {item.location}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)

export default EventMap;