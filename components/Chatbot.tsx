import React, { useState, useRef, useEffect } from 'react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: 'Hola, soy el asistente IA de Daniel. ¿En qué puedo ayudarte hoy?', sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI delay and response
        setTimeout(() => {
            const input = userMessage.text.toLowerCase();
            let botResponse = "";

            // --- SALES LOGIC BRAIN (Hormozi Style) ---

            // 1. GREETING / INITIAL CONTACT
            if (input.includes('hola') || input.includes('buenas') || input.includes('inicio') || input.includes('hey')) {
                const greetings = [
                    "¡Hola! Qué gusto saludarte. Veo que estás interesado en escalar tu negocio.",
                    "¡Buenas! Bienvenido a Diaz Systems AI. Aquí nos enfocamos en una cosa: resultados medibles.",
                ];
                botResponse = `${greetings[Math.floor(Math.random() * greetings.length)]} Cuéntame, ¿qué desafío te está quitando más tiempo o dinero ahora mismo en tu operación?`;
            }

            // 2. EDUCACIÓN (Direct to WhatsApp)
            else if (input.includes('curso') || input.includes('aprender') || input.includes('arquitectura') || input.includes('educación') || input.includes('comunidad') || input.includes('saber más') || input.includes('enseñar')) {
                botResponse = "¡Excelente elección! Dominar la arquitectura de IA es lo que te separa de depender de agencias para siempre. \\n\\nPara esto, tengo una comunidad privada y asesorías 1:1 donde te enseño exactamente lo que uso. Escríbeme directo a WhatsApp para ver si haces fit con el programa:";

                // Add a specific message with the link after a short delay
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: botResponse,
                    sender: 'bot'
                }]);

                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now() + 2,
                        text: "👉 https://wa.link/stf5gs (Dile a Daniel que vienes del chat de la web)",
                        sender: 'bot'
                    }]);
                    setIsTyping(false);
                }, 1000);
                return; // Exit early to handle the double message manually
            }

            // 3. AUDITORÍA Y PROYECTOS (Qualifying -> Form/Calendar)
            else if (input.includes('precio') || input.includes('costo') || input.includes('servicio') || input.includes('implementar') || input.includes('automatizar') || input.includes('empresa') || input.includes('auditoría') || input.includes('proyecto')) {
                botResponse = "Entiendo. Mira, no vendemos 'paquetes genéricos' porque cada negocio tiene cuellos de botella diferentes. \\n\\nPara darte un presupuesto que tenga sentido (y ROI positivo), necesito que hagamos una radiografía rápida de tu situación actual. \\n\\n¿Te parece bien si llenas un formulario de 30 segundos para ver si podemos ayudarte?";
            }

            else if (input.includes('sí') || input.includes('si') || input.includes('claro') || input.includes('ok') || input.includes('está bien') || input.includes('vale')) {
                botResponse = "¡Perfecto! Esa es la actitud. \\n\\nCompleta este diagnóstico rápido. Si el sistema ve que podemos ayudarte, te generará una Hoja de Ruta gratuita automáticamente:";

                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: botResponse,
                    sender: 'bot'
                }]);

                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now() + 2,
                        text: "👉 Ve al formulario de arriba que dice 'Desbloquea el sistema...'",
                        sender: 'bot'
                    }]);
                    setIsTyping(false);
                }, 1000);
                return;
            }

            // 4. HANDLING DOUBTS / OBJECTIONS
            else if (input.includes('no sé') || input.includes('duda') || input.includes('humano') || input.includes('persona')) {
                botResponse = "Lo entiendo perfectamente. A veces tanta tecnología abruma. \\n\\nMi trabajo es simple: ayudarte a ver dónde estás perdiendo dinero por no automatizar. Si prefieres hablar con un humano directo, agenda una llamada de estrategia aquí abajo. ¿Te paso el link?";
            }

            else if (input.includes('link') || input.includes('calendario') || input.includes('agendar')) {
                botResponse = "Aquí tienes el acceso directo a mi calendario personal:";
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: botResponse,
                    sender: 'bot'
                }]);

                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now() + 2,
                        text: "📅 https://calendar.app.google/egj5LYZtVeuh7DYH9",
                        sender: 'bot'
                    }]);
                    setIsTyping(false);
                }, 1000);
                return;
            }

            // 5. FALLBACK / GENERAL QUESTIONS
            else {
                botResponse = "Interesante punto. Déjame hacerte una pregunta clave para entender mejor: Si pudieras automatizar UNA sola cosa de tu negocio hoy y olvidarte de ella para siempre, ¿cuál sería?";
            }

            const botMessage: Message = {
                id: Date.now() + 1,
                text: botResponse,
                sender: 'bot',
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] max-h-[500px] h-[400px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeInUp_0.3s_ease-out]">
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-white font-medium text-sm">Asistente IA</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.sender === 'user'
                                        ? 'bg-blue-600/80 text-white rounded-br-none'
                                        : 'bg-white/10 text-gray-200 rounded-bl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 bg-white/5">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Escribe un mensaje..."
                                className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="p-2 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all hover:scale-110 active:scale-95"
            >
                {/* Ping Animation only when closed */}
                {!isOpen && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                )}

                <div className="relative z-10 text-white">
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    )}
                </div>
            </button>

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); scale: 0.95; }
          to { opacity: 1; transform: translateY(0); scale: 1; }
        }
      `}</style>
        </div>
    );
};

export default Chatbot;
