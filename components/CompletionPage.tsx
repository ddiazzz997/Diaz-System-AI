
import React from 'react';

const CompletionPage: React.FC = () => {


  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 pb-40 px-6">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-block p-4 rounded-full bg-green-500/10 mb-8 border border-green-500/20 animate-[fadeInUp_0.5s_ease-out_forwards]">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          ¡Hoja de Ruta Enviada!
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
          Revisa tu bandeja de entrada. Mientras tanto...
        </p>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Reserva Tu Llamada de Estrategia Gratuita
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-0">
            Profundicemos en tus resultados y construyamos un plan de acción personalizado.
          </p>
        </div>
      </div>

      {/* Cal.com Calendar Embed */}
      <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl relative z-10 overflow-hidden">
        <div className="flex items-center justify-center h-[200px]">
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

// Extend Window interface for TypeScript


export default CompletionPage;
