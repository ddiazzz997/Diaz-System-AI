import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/Logo/Logoo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Desarrollo de sistemas de IA personalizados y automatización para empresas que desean crecer.
              </p>
              <a
                href="mailto:ddiaz.consultor.ia@gmail.com"
                className="block text-white hover:text-blue-400 transition-colors font-medium mt-4"
              >
                ddiaz.consultor.ia@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:justify-end">
            <a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Casos de Estudio</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Metodología</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Precios</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Iniciar Sesión</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Diaz Systems AI ®. Todos los Derechos Reservados.
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
