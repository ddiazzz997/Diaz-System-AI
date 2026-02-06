import React from 'react';

const BookingCalendar: React.FC = () => {


    return (
        <section id="booking-section" className="py-20 px-6 relative bg-black border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Reserve su <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-cyan via-logo-purple to-logo-deep">llamada de estrategia de 25 minutos</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Obtenga una estrategia de implementación personalizada y automatice su flujo de trabajo para escalar los ingresos en piloto automático.
                    </p>
                </div>

                <div className="flex items-center justify-center h-[300px]">
                    {/* Premium Booking Button with Advanced Animations */}
                    <a
                        href="https://calendar.app.google/egj5LYZtVeuh7DYH9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group booking-button-float"
                    >
                        {/* Animated Ring Pulses - Multi-layered */}
                        <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 animate-ping"></span>
                        <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 opacity-50 animate-ping" style={{animationDelay: '0.5s'}}></span>
                        <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-25 animate-ping" style={{animationDelay: '1s'}}></span>

                        {/* Outer Glow with Flowing Gradient */}
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 animate-gradient-flow"></div>

                        {/* 3D Shadow for Depth */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/10 transition-all duration-300"></div>

                        {/* Main Button Container with 3D Effect */}
                        <div className="relative px-12 py-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl text-white font-bold text-xl md:text-2xl shadow-[0_8px_32px_rgba(139,92,246,0.4)] group-hover:shadow-[0_12px_48px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-all duration-500 flex items-center gap-4 overflow-hidden border border-white/20">
                            
                            {/* Shimmer Effect Overlay */}
                            <div className="absolute inset-0 shimmer-overlay"></div>
                            
                            {/* Animated Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-slide"></div>

                            {/* Calendar Icon with Bounce */}
                            <svg className="w-8 h-8 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>

                            {/* Text with Gradient */}
                            <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
                                Agendar Llamada
                            </span>

                            {/* Animated Arrow with Trail Effect */}
                            <div className="relative z-10 flex items-center">
                                <span className="text-3xl group-hover:translate-x-3 transition-all duration-500 drop-shadow-lg animate-pulse-subtle">→</span>
                                <span className="absolute text-3xl opacity-0 group-hover:opacity-50 group-hover:translate-x-6 transition-all duration-700 delay-75">→</span>
                            </div>

                            {/* Sparkle Effects */}
                            <div className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full animate-sparkle opacity-0"></div>
                            <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-white rounded-full animate-sparkle opacity-0" style={{animationDelay: '0.3s'}}></div>
                            <div className="absolute top-1/2 right-8 w-1 h-1 bg-white rounded-full animate-sparkle opacity-0" style={{animationDelay: '0.6s'}}></div>
                        </div>

                        {/* Enhanced Bottom Reflection */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-xl rounded-full"></div>
                        
                        {/* Side Glow Accents */}
                        <div className="absolute top-1/2 -left-4 w-8 h-16 bg-blue-500/40 blur-2xl rounded-full -translate-y-1/2 group-hover:bg-blue-500/60 transition-all duration-500"></div>
                        <div className="absolute top-1/2 -right-4 w-8 h-16 bg-pink-500/40 blur-2xl rounded-full -translate-y-1/2 group-hover:bg-pink-500/60 transition-all duration-500"></div>
                    </a>
                </div>

                <style>{`
                    @keyframes ping {
                        0% {
                            transform: scale(1);
                            opacity: 0.75;
                        }
                        50% {
                            transform: scale(1.2);
                            opacity: 0.3;
                        }
                        100% {
                            transform: scale(1.4);
                            opacity: 0;
                        }
                    }
                    
                    .animate-ping {
                        animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                    }

                    @keyframes shimmer-slide {
                        0% {
                            transform: translateX(-100%) skewX(-15deg);
                        }
                        100% {
                            transform: translateX(200%) skewX(-15deg);
                        }
                    }

                    .animate-shimmer-slide {
                        animation: shimmer-slide 3s ease-in-out infinite;
                    }

                    @keyframes gradient-flow {
                        0%, 100% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                    }

                    .animate-gradient-flow {
                        background-size: 200% 200%;
                        animation: gradient-flow 4s ease infinite;
                    }

                    @keyframes float-button {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-8px);
                        }
                    }

                    .booking-button-float {
                        animation: float-button 3s ease-in-out infinite;
                    }

                    @keyframes sparkle {
                        0%, 100% {
                            opacity: 0;
                            transform: scale(0);
                        }
                        50% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    .animate-sparkle {
                        animation: sparkle 2s ease-in-out infinite;
                    }

                    @keyframes pulse-subtle {
                        0%, 100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.8;
                            transform: scale(1.05);
                        }
                    }

                    .animate-pulse-subtle {
                        animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }

                    .shimmer-overlay {
                        background: linear-gradient(
                            90deg,
                            transparent 0%,
                            rgba(255, 255, 255, 0.1) 40%,
                            rgba(255, 255, 255, 0.2) 50%,
                            rgba(255, 255, 255, 0.1) 60%,
                            transparent 100%
                        );
                        background-size: 200% 100%;
                        animation: shimmer-wave 2.5s infinite;
                    }

                    @keyframes shimmer-wave {
                        0% {
                            background-position: -200% 0;
                        }
                        100% {
                            background-position: 200% 0;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default BookingCalendar;
