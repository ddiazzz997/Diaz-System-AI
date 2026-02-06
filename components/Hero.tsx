import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#0d1321] to-[#0a0f1c]">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-12">

        {/* Main Headline */}
        <div className="max-w-5xl opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
            ✨ Transformación Digital con IA
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Potencia tu negocio
            </span>
            <br />
            <span className="text-white">
              con sistemas de IA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Descubre tus cuellos de botella con IA, despliega sistemas de alto ROI y accede a educación de clase mundial en IA.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#form"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Agenda tu Llamada Estratégica 1:1 ✦</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/50379126169?text=Hola%2C%20quisiera%20solicitar%20una%20asesor%C3%ADa%201%3A1%20para%20dominar%20la%20arquitectura%20de%20sistemas%20de%20IA.%20%C2%BFPodr%C3%ADas%20ayudarme%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Asesoría 1:1
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
          <img
            src="/Logo/Logoo.png"
            alt="Diaz Systems AI"
            className="w-40 md:w-auto h-auto md:h-12"
          />
        </div>

        {/* Hero Dashboard Graphic (Reduced Size) */}
        <div className="relative z-10 w-full max-w-3xl mx-auto mb-0 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] scale-90 origin-top">
          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />

          {/* Main Dashboard Glass Panel */}
          <div className="glass-panel w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-white/10 relative z-10 overflow-hidden flex flex-col shadow-2xl group hover:border-white/20 transition-all duration-500">

            {/* Dashboard Header */}
            <div className="h-10 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] font-mono text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Seguimiento de Ingresos en Vivo
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 relative">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
              />

              {/* Left Column: Profile & LinkedIn */}
              <div className="flex flex-col gap-4 w-full md:w-56 z-10">
                {/* Profile Card */}
                <div className="bg-white/5 rounded-2xl p-3 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full p-[1px] bg-gradient-to-tr from-blue-500 to-purple-500">
                    <img src="/Logo/Foto_de_Perfil_De_Instagram_Odontologa_Profesional_Azul_Celeste-removebg-preview.png" alt="Daniel Díaz" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Daniel Díaz</div>
                    <div className="text-[10px] text-blue-400">Diaz Systems AI</div>
                  </div>
                </div>

                {/* LinkedIn Box */}
                <div className="hidden md:flex bg-[#0077b5]/10 rounded-2xl p-4 border border-[#0077b5]/30 flex-col h-full group/linkedin hover:bg-[#0077b5]/20 transition-all relative overflow-hidden">


                  {/* "Nice little blue something" - Blue Pulse Graph */}
                  <div className="flex-1 flex items-end gap-[2px] mt-2 z-10">
                    {[40, 60, 45, 70, 50, 80, 60, 90, 75, 100].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="w-full bg-blue-400/40 rounded-t-[1px]" />
                    ))}
                  </div>

                  {/* Blue Glow Background */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/20 blur-xl rounded-full" />
                </div>
              </div>

              {/* Right Column: Chart & Stats */}
              <div className="flex-1 flex flex-col z-10 gap-4">
                
                {/* Mobile: Central Metric Card */}
                <div className="md:hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="relative z-10 text-center">
                    <div className="text-6xl font-bold text-white mb-2">150+</div>
                    <div className="text-gray-300 text-xs uppercase tracking-wider">Sistemas IA Desplegados</div>
                  </div>
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full" />
                </div>

                {/* Desktop: Stats Row (3 columns) */}
                <div className="hidden md:grid grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider">Ingresos Totales</div>
                    <div className="text-xl font-bold text-white mt-1">$124,500</div>
                    <div className="text-green-400 text-[10px] mt-1 flex items-center gap-1">
                      <span>▲</span> 12% vs mes anterior
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider">Valor del Pipeline</div>
                    <div className="text-xl font-bold text-white mt-1">$52,000</div>
                    <div className="text-green-400 text-[10px] mt-1 flex items-center gap-1">
                      <span>▲</span> 8% vs mes anterior
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider">Llamadas Agendadas</div>
                    <div className="text-xl font-bold text-white mt-1">48</div>
                    <div className="text-green-400 text-[10px] mt-1 flex items-center gap-1">
                      <span>▲</span> 24% vs mes anterior
                    </div>
                  </div>
                </div>

                {/* Enhanced Graph Area */}
                {/* Weekly Growth Panel (Replaces Blue Graph) */}
                <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col group/chart hover:border-white/20 transition-all">
                  <div className="px-6 pt-5 pb-2 flex items-center justify-between z-10">
                    <div>
                      <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Crecimiento Semanal</div>
                      <div className="text-3xl font-bold text-white">+24.5%</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>

                  {/* Full Width Green Graph */}
                  <div className="flex-1 relative w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-50" />
                    <svg className="absolute inset-0 w-full h-full transform scale-x-105 scale-y-110 origin-bottom" preserveAspectRatio="none" viewBox="0 0 360 200">
                      <defs>
                        <linearGradient id="largeGreenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(74, 222, 128, 0.4)" />
                          <stop offset="100%" stopColor="rgba(74, 222, 128, 0)" />
                        </linearGradient>
                      </defs>
                      <path d="M0,120 L40,100 L80,110 L120,80 L160,90 L200,60 L240,70 L280,40 L320,50 L360,20 V200 H0 Z"
                        fill="url(#largeGreenGradient)"
                      />
                      <path d="M0,120 L40,100 L80,110 L120,80 L160,90 L200,60 L240,70 L280,40 L320,50 L360,20"
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                        className="drop-shadow-lg"
                      />
                    </svg>

                    {/* Interactive Vertical Hover Line */}
                    <div className="absolute inset-x-0 inset-y-0 opacity-0 group-hover/chart:opacity-100 transition-opacity duration-300">
                      <div className="w-[1px] h-full bg-white/20 absolute left-1/2" />
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded border border-white/10">
                        $4,250
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile: Bottom Stats (2 columns) */}
                <div className="md:hidden grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-2">Ingresos Totales</div>
                    <div className="text-2xl font-bold text-white">$124,500</div>
                    <div className="text-green-400 text-[10px] mt-2 flex items-center gap-1">
                      <span>▲</span> 12% vs mes anterior
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-2">Valor del Pipeline</div>
                    <div className="text-2xl font-bold text-white">$52,000</div>
                    <div className="text-green-400 text-[10px] mt-2 flex items-center gap-1">
                      <span>▲</span> 8% vs mes anterior
                    </div>
                  </div>
                </div>

              </div>



            </div>
          </div>

          {/* Floating stats decorations */}
          <div className="absolute -left-12 top-1/4 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-[10px] text-gray-400 uppercase">Tasa de Éxito</div>
          </div>
          <div className="absolute -right-12 bottom-1/4 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-[10px] text-gray-400 uppercase">Disponibilidad</div>
          </div>
        </div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1c] to-transparent pointer-events-none" />

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
