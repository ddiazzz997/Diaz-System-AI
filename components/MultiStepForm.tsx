
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  employees: string;
  revenue: string;
  ownership: string;
}

interface MultiStepFormProps {
  onComplete: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    employees: '',
    revenue: '',
    ownership: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const webhookUrl = 'https://script.google.com/macros/s/AKfycbw6hRBe5R8aeNwCmGEF2NYLmn-qT9BojztAl1mLj0kfnP7o6gaNz179A4YPwt-3nLzN/exec';

  const employeeOptions = [
    'Yo y proveedores',
    '2 a 4',
    '5 a 9',
    '10 a 19',
    '20 a 49',
    '50 a 99',
    '100 a 249',
    '250 a 500'
  ];

  const revenueOptions = [
    'Menos de $100k',
    '$100k a $250k',
    '$250k a $500k',
    '$500k a $1M',
    '$1M a $3M',
    '$3M a $10M'
  ];

  const ownershipOptions = [
    "Soy el propietario mayoritario (>51%)",
    "Soy socio 50/50",
    "Soy propietario minoritario (<50%)",
    "Soy un empleado"
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Por favor completa este campo obligatorio.';
      if (!formData.lastName.trim()) newErrors.lastName = 'Por favor completa este campo obligatorio.';
    } else if (step === 2) {
      if (!formData.email.trim()) newErrors.email = 'Por favor completa este campo obligatorio.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Por favor ingresa una dirección de correo válida.';
      }
    } else if (step === 3) {
      if (!formData.employees) newErrors.employees = 'Por favor selecciona una opción.';
    } else if (step === 4) {
      if (!formData.revenue) newErrors.revenue = 'Por favor selecciona una opción.';
    } else if (step === 5) {
      if (!formData.ownership) newErrors.ownership = 'Por favor selecciona una opción.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 5) {
        handleSubmit();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // If no webhook URL is configured, just complete
    if (!webhookUrl) {
      onComplete();
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Apps Script
        headers: {
          'Content-Type': 'text/plain', // Avoid preflight
        },
        body: JSON.stringify(formData),
      });
      onComplete();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar tu información. Por favor, inténtalo de nuevo.');
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="relative w-full">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-gray-800 rounded-full w-full overflow-hidden mb-8">
        <div
          className="h-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / 5) * 100}%` }}
        />
      </div>

      <div className="pt-8">
        {/* Step 1: Name */}
        {currentStep === 1 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">Empecemos con tu nombre</h3>
              <p className="text-gray-500 text-sm">Pregunta 1 de 5</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Nombre</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  placeholder="Juan"
                  className={`w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600 ${errors.firstName ? 'border-red-500/50' : ''
                    }`}
                />
                {errors.firstName && <p className="text-red-400 text-xs pl-2">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Apellido</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  placeholder="Pérez"
                  className={`w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600 ${errors.lastName ? 'border-red-500/50' : ''
                    }`}
                />
                {errors.lastName && <p className="text-red-400 text-xs pl-2">{errors.lastName}</p>}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Iniciar Mi Hoja de Ruta
            </button>
          </div>
        )}

        {/* Step 2: Email */}
        {currentStep === 2 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">¿A dónde deberíamos enviarlo?</h3>
              <p className="text-gray-500 text-sm">Pregunta 2 de 5</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Correo de Trabajo</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="nombre@empresa.com"
                className={`w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600 ${errors.email ? 'border-red-500/50' : ''
                  }`}
              />
              {errors.email && <p className="text-red-400 text-xs pl-2">{errors.email}</p>}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-white text-black py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Siguiente Paso
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Employees */}
        {currentStep === 3 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">Tamaño del Equipo</h3>
              <p className="text-gray-500 text-sm">Pregunta 3 de 5</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Número de Empleados</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {employeeOptions.map(opt => (
                  <button
                    key={opt}
                    onClick={() => {
                      updateField('employees', opt);
                      // Slight delay to show selection before auto-advancing could be nice, 
                      // but generic select behavior is safer. We'll just select it.
                    }}
                    className={`p-4 rounded-xl border text-left transition-all ${formData.employees === opt
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {errors.employees && <p className="text-red-400 text-xs pl-2">{errors.employees}</p>}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleBack}
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-white text-black py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Siguiente Paso
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Revenue */}
        {currentStep === 4 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">Ingresos Actuales</h3>
              <p className="text-gray-500 text-sm">Pregunta 4 de 5</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Ingresos Anuales</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {revenueOptions.map(opt => (
                  <button
                    key={opt}
                    onClick={() => updateField('revenue', opt)}
                    className={`p-4 rounded-xl border text-left transition-all ${formData.revenue === opt
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {errors.revenue && <p className="text-red-400 text-xs pl-2">{errors.revenue}</p>}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleBack}
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-white text-black py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Siguiente Paso
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Ownership */}
        {currentStep === 5 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">Paso Final</h3>
              <p className="text-gray-500 text-sm">Pregunta 5 de 5</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-2 mb-6">
              <p className="text-gray-400 text-sm">Resumen:</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Empleados</span>
                <span className="text-white font-medium">{formData.employees}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Ingresos</span>
                <span className="text-white font-medium">{formData.revenue}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Estructura de Propiedad</label>
              <div className="space-y-3">
                {ownershipOptions.map(opt => (
                  <button
                    key={opt}
                    onClick={() => updateField('ownership', opt)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${formData.ownership === opt
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {errors.ownership && <p className="text-red-400 text-xs pl-2">{errors.ownership}</p>}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleBack}
                disabled={isSubmitting}
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-50"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Calculando...' : 'Generar Mi Hoja de Ruta'}
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MultiStepForm;
