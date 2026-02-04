import React from 'react';

const ValueProps: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 space-y-32 py-32 relative z-10">

        {/* Section 1: Auditoría */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* ROI Calculator Card */}
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-gray-400">Valor mensual</span>
                  <span className="text-2xl font-bold text-green-400">$32,500</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Generación de clientes potenciales</span>
                    <span className="font-bold text-white">15 horas</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Comunicación con el cliente</span>
                    <span className="font-bold text-white">12 horas</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Calificación de clientes potenciales</span>
                    <span className="font-bold text-white">8 horas</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Publicaciones en redes sociales</span>
                    <span className="font-bold text-white">6 horas</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <div className="text-2xl font-bold text-white mb-1">$390k+</div>
                    <div className="text-xs text-blue-200">Valor anual proyectado</div>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                    <div className="text-2xl font-bold text-white mb-1">13x</div>
                    <div className="text-xs text-purple-200">ROI Año 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
              01. Auditoría
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Encuentra las<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">mayores oportunidades</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Analizamos la estructura actual de su negocio para identificar cuellos de botella operativos y áreas de ineficiencia. Recibirá un diagnóstico técnico objetivo que define la viabilidad de implementar inteligencia artificial en sus procesos, junto con una hoja de ruta clara que proyecta el impacto en su rentabilidad antes de iniciar cualquier desarrollo.
            </p>
          </div>
        </div>

        {/* Section 2: Daily Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium uppercase tracking-wider">
              02. PROYECTOS PERSONALIZADOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Escalar sin<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">contratar más personas</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Diseñamos e implementamos la infraestructura necesaria para aumentar su capacidad de producción sin elevar sus costos fijos. Integramos dashboards estratégicos para visualizar resultados en tiempo real y tomar decisiones con agilidad, aplicativos personalizados que fortalecen su oferta comercial y sistemas de IA dedicados a automatizar tareas y flujos de trabajo repetitivos, permitiendo que su operación funcione de manera fluida y constante.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Visual Representation of Daily Content */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0" />
                <div className="space-y-3 flex-1">
                  <div className="h-4 bg-white/20 rounded w-1/3" />
                  <div className="h-16 bg-white/5 rounded border border-white/5 p-3">
                    <div className="h-2 bg-white/10 rounded w-full mb-2" />
                    <div className="h-2 bg-white/10 rounded w-2/3" />
                  </div>
                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="w-4 h-4 bg-blue-500/20 rounded-full" />
                      <span>1,240 Me Gusta</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="w-4 h-4 bg-green-500/20 rounded-full" />
                      <span>48 Comentarios</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-white text-sm font-medium">Nuevo Lead Capturado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Educación */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">TIEMPO AHORRADO MENSUALMENTE</p>
                    <h3 className="text-4xl font-bold text-white">80-320 horas</h3>
                  </div>
                  <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    Por sistema
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-900/20 p-4 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-white mb-1">4,3 millones</div>
                    <div className="text-xs text-gray-400">de dólares</div>
                    <div className="text-[10px] text-gray-500 mt-1">Ingresos generados por el cliente</div>
                  </div>
                  <div className="bg-green-900/20 p-4 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-gray-400">ROI garantizado</div>
                  </div>
                </div>

                {/* Bar Chart Visualization */}
                <div className="flex items-end gap-2 h-32 pt-4 mt-4">
                  <div className="w-full bg-white/5 rounded-t h-[20%]" />
                  <div className="w-full bg-white/5 rounded-t h-[35%]" />
                  <div className="w-full bg-white/5 rounded-t h-[50%]" />
                  <div className="w-full bg-white/5 rounded-t h-[65%]" />
                  <div className="w-full bg-white/5 rounded-t h-[80%]" />
                  <div className="w-full bg-green-500 rounded-t shadow-[0_0_20px_rgba(34,197,94,0.3)] h-[100%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-wider">
              03. EDUCACIÓN
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dominar la<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">arquitectura de sistemas de IA</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Elimine la dependencia de terceros y domine las herramientas que mueven el mercado hoy. Acceda a la arquitectura técnica de las empresas líderes a través de nuestras asesorías privadas diseñadas para resolver sus desafíos específicos, y únase a nuestra comunidad de fundadores (apertura próximamente) para liderar la implementación de sistemas inteligentes dentro de su propia industria.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.link/stf5gs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                Solicitar asesoría 1:1
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                Únete a la comunidad
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: Acerca de Daniel Díaz */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-1 relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-2 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="Logo/Foto_de_Perfil_De_Instagram_Odontologa_Profesional_Azul_Celeste-removebg-preview.png"
                alt="Daniel Díaz"
                className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="order-2 md:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
              ACERCA DE
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Daniel Díaz
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed italic border-l-4 border-blue-500/30 pl-6">
              "Tras estudiar a los mayores referentes de Latinoamérica y el mundo, entendí que el éxito de un negocio no radica en acumular herramientas de moda ni en crear agentes sin un propósito claro. El crecimiento real no se logra con más tecnología, sino con mejores sistemas: estructuras diseñadas con absoluta claridad y rapidez operativa que aseguran un retorno de inversión (ROI) totalmente medible y cuantificable."
            </p>

            <div className="grid grid-cols-3 gap-4">
              {/* TikTok */}
              <a href="https://www.tiktok.com/@danieldiaz.ia?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center hover:bg-white/10 transition-colors group">
                <svg className="w-8 h-8 text-white group-hover:text-pink-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/danieldiaz.ia/" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center hover:bg-white/10 transition-colors group">
                <svg className="w-8 h-8 text-white group-hover:text-pink-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/daniel-d%C3%ADaz-b36680187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center hover:bg-white/10 transition-colors group">
                <svg className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ValueProps;
