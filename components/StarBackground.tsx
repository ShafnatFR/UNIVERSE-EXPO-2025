import React from 'react';

const StarBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#1a1a2e]">
            {/* Background Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a2e]/50 to-[#1a1a2e]"></div>

            {/* Layer 1: Small, slow moving stars (Drifting) */}
            <div className="absolute inset-0 animate-drift">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={`drift-${i}`}
                        className="absolute bg-white rounded-full opacity-40"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                        }}
                    />
                ))}
            </div>

            {/* Layer 2: Twinkling Stars (Static position, pulsing opacity) */}
            {[...Array(40)].map((_, i) => (
                <div
                    key={`twinkle-${i}`}
                    className="absolute bg-pastel-blue rounded-full animate-twinkle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        opacity: Math.random() * 0.7 + 0.3,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${Math.random() * 2 + 2}s`
                    }}
                />
            ))}

            {/* Layer 3: Meteors (Shooting Stars) */}
            {[...Array(2)].map((_, i) => (
                <div
                    key={`meteor-${i}`}
                    className="absolute h-0.5 w-[100px] bg-gradient-to-r from-transparent via-white to-transparent animate-meteor opacity-0"
                    style={{
                        top: `${Math.random() * 70 - 10}%`, 
                        left: `${Math.random() * 80 + 20}%`, 
                        animationDelay: `${Math.random() * 20 + 5}s`, 
                        animationDuration: `${Math.random() * 5 + 7}s`
                    }}
                >
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></div>
                </div>
            ))}

            {/* Easter Egg: X-Wing Spaceship */}
            <div className="absolute top-0 left-0 animate-ship-pass z-0 opacity-0" style={{ animationDelay: '15s' }}>
                <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" className="text-gray-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    {/* Fuselage */}
                    <path d="M48 10 L52 10 L52 85 L48 85 Z" fill="#e2e8f0" />
                    <path d="M48 10 L50 2 L52 10 Z" fill="#94a3b8" />
                    {/* Engines */}
                    <rect x="35" y="65" width="6" height="15" fill="#cbd5e1" />
                    <rect x="59" y="65" width="6" height="15" fill="#cbd5e1" />
                    {/* Wings */}
                    <path d="M48 45 L15 70 L15 65 L48 40 Z" fill="#94a3b8" />
                    <path d="M52 45 L85 70 L85 65 L52 40 Z" fill="#94a3b8" />
                    {/* Laser Cannons */}
                    <rect x="13" y="45" width="2" height="30" fill="#cbd5e1" />
                    <rect x="85" y="45" width="2" height="30" fill="#cbd5e1" />
                    {/* Engine Glow */}
                    <circle cx="38" cy="80" r="2" fill="#fca5a5" className="animate-pulse" />
                    <circle cx="62" cy="80" r="2" fill="#fca5a5" className="animate-pulse" />
                </svg>
            </div>

             {/* Nebula Effects */}
             <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-float"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
    );
};

export default StarBackground;