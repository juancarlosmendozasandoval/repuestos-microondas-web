"use client";

import { useState } from "react";
import { Camera, Ruler, ChefHat } from "lucide-react";

export default function WizardPlatos() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  
  const [datos, setDatos] = useState({
    marca: "",
    ancho: "",
    profundidad: "",
  });

  const numeroWhatsApp = "593963186384"; 

  const irSiguientePaso = () => setStep(step + 1);

  const enviarAWhatsApp = () => {
    const mensaje = `Hola, necesito un plato para un microondas marca ${datos.marca}.%0AEl interior mide ${datos.ancho} cm de ancho por ${datos.profundidad} cm de fondo.%0A(Te envío la foto del interior por aquí).%0A¿Tienen disponibilidad y qué precio tiene?`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setStep(1); 
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg"
      >
        Iniciar Diagnóstico de Plato
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        
        {/* Cabecera del Modal */}
        <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <ChefHat className="w-5 h-5" /> Asistente de Compatibilidad
          </h3>
          <button onClick={() => setIsOpen(false)} className="text-blue-200 hover:text-white font-bold text-xl">
            ×
          </button>
        </div>

        <div className="p-6 text-gray-800">
          
          {/* PASO 1: MARCA */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h4 className="text-xl font-bold mb-4">Paso 1: Marca del Equipo</h4>
              <p className="text-gray-600 mb-4 text-sm">Selecciona la marca de tu microondas para buscar en nuestra base de datos.</p>
              
              <select 
                className="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-blue-600 outline-none"
                value={datos.marca}
                onChange={(e) => setDatos({ ...datos, marca: e.target.value })}
              >
                <option value="">Selecciona una marca...</option>
                <option value="Samsung">Samsung</option>
                <option value="LG">LG</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Mabe">Mabe</option>
                <option value="Indurama">Indurama</option>
                <option value="Whirlpool">Whirlpool</option>
                <option value="Electrolux">Electrolux</option>
                <option value="Daewoo">Daewoo</option>
                <option value="Oster">Oster</option>
                <option value="Black+Decker">Black+Decker</option>
                <option value="Teka">Teka</option>
                <option value="Haceb">Haceb</option>
                <option value="Challenger">Challenger</option>
                <option value="Otra">Otra marca</option>
              </select>
              
              <button 
                disabled={!datos.marca}
                onClick={irSiguientePaso}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg disabled:bg-gray-300 hover:bg-blue-700 transition"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* PASO 2: MEDIDAS */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-blue-600" /> Paso 2: Cavidad Interna
              </h4>
              <p className="text-gray-600 mb-4 text-sm">Mide el interior de tu microondas en centímetros, de pared a pared y desde el fondo hasta el borde.</p>
              
              {/* IMAGEN INSTRUCTIVA DE CÓMO MEDIR */}
              <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex justify-center">
                <img 
                  src="/como-medir.png" 
                  alt="Instrucciones en imagen para medir" 
                  className="w-full max-h-48 object-contain"
                />
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-bold mb-1">Ancho interior (cm)</label>
                  <input 
                    type="number" placeholder="Ej: 28.5" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                    value={datos.ancho}
                    onChange={(e) => setDatos({ ...datos, ancho: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Profundidad interior (cm)</label>
                  <input 
                    type="number" placeholder="Ej: 27" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                    value={datos.profundidad}
                    onChange={(e) => setDatos({ ...datos, profundidad: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <button onClick={() => setStep(1)} className="w-1/3 bg-gray-200 font-bold py-3 rounded-lg hover:bg-gray-300 transition">Atrás</button>
                <button 
                  disabled={!datos.ancho || !datos.profundidad}
                  onClick={irSiguientePaso}
                  className="w-2/3 bg-blue-600 text-white font-bold py-3 rounded-lg disabled:bg-gray-300 hover:bg-blue-700 transition"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {/* PASO 3: FOTO Y CIERRE */}
          {step === 3 && (
            <div className="animate-fade-in text-center">
              <Camera className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <h4 className="text-xl font-bold mb-2">Paso 3: Foto del Eje</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Toma una foto al centro del microondas (donde encaja el plato) como en el siguiente ejemplo:
              </p>

              {/* FOTO DE EJEMPLO DEL EJE */}
              <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex justify-center">
                <img 
                  src="/ejemplo-eje.png" 
                  alt="Ejemplo del eje central del microondas" 
                  className="w-full max-h-40 object-cover"
                />
              </div>

              <p className="text-gray-600 mb-6 text-xs bg-blue-50 p-3 rounded-lg">
                <strong>Nota:</strong> Al hacer clic en continuar, se abrirá WhatsApp para que nos envíes la foto y confirmarte el precio y disponibilidad.
              </p>
              
              <div className="flex gap-2">
                <button onClick={() => setStep(2)} className="w-1/3 bg-gray-200 font-bold py-3 rounded-lg hover:bg-gray-300 transition">Atrás</button>
                <button 
                  onClick={enviarAWhatsApp}
                  className="w-2/3 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  Continuar a WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}