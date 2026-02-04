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
                    <a
                        href="https://calendar.app.google/egj5LYZtVeuh7DYH9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl md:text-2xl font-light hover:text-blue-400 transition-colors underline underline-offset-8 decoration-1"
                    >
                        Agendar Llamada →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BookingCalendar;
