import { Wrench, MessageCircle, Settings, ShieldCheck, MapPin } from "lucide-react";
import WizardPlatos from "@/components/WizardPlatos";

export default function Home() {
  // Definimos los grupos de repuestos
  const categorias = [
    { id: "mag", nombre: "Magnetrones", img: "/cat-magnetron.jpg" },
    { id: "fus", nombre: "Fusibles", img: "/cat-fusibles.jpg" },
    { id: "cap", nombre: "Capacitores", img: "/cat-capacitores.jpg" },
    { id: "tra", nombre: "Transformadores", img: "/cat-transformadores.jpg" },
    { id: "pan", nombre: "Paneles", img: "/cat-paneles.jpg" },
    { id: "tar", nombre: "Tarjetas Electrónicas", img: "/cat-tarjetas.jpg" },
    { id: "mot", nombre: "Motores de Platos", img: "/cat-motores.jpg" },
    { id: "ter", nombre: "Termofusibles", img: "/cat-termofusibles.jpg" },
  ];

  const numeroWhatsApp = "593994516888"; // Reemplaza con tu número

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. SECCIÓN HERO (Igual que antes) */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src="/plato-roto.png" alt="Plato roto" className="w-48 h-auto drop-shadow-2xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Se rompió el plato de tu microondas?</h1>
          <p className="text-xl mb-8 text-blue-100">Encuentra el repuesto exacto 100% garantizado en 3 simples pasos.</p>
          <WizardPlatos />
        </div>
      </section>

      {/* 2. SECCIÓN DE REPARACIONES (Nueva) */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Settings className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Reparación Especializada</h3>
            <p className="text-gray-600 text-sm">Servicio técnico profesional para todas las marcas en Guayaquil.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <ShieldCheck className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Garantía Real</h3>
            <p className="text-gray-600 text-sm">Trabajos garantizados con repuestos originales y de alta calidad.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 p-3 rounded-full mb-3">
              <MapPin className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Atención a Domicilio</h3>
            <p className="text-gray-600 text-sm">Coordinamos la visita técnica según tu disponibilidad de tiempo.</p>
          </div>
        </div>
      </section>

      {/* 3. CATÁLOGO POR GRUPOS */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="text-gray-700 w-8 h-8" />
              <h2 className="text-3xl font-bold text-gray-800">Repuestos por Categoría</h2>
            </div>
            <p className="text-gray-600">Exclusivo para técnicos y especialistas. Consulta stock por WhatsApp.</p>
          </div>
          
          <a 
            href={`https://wa.me/${numeroWhatsApp}?text=Hola, necesito información sobre servicios de reparación de microondas.`}
            target="_blank"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition flex items-center gap-2"
          >
            Solicitar Reparación Técnica
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categorias.map((cat) => (
            <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
              <div className="h-32 md:h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.nombre} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300" 
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-800 mb-3 text-sm md:text-base">{cat.nombre}</h3>
                <a 
                  href={`https://wa.me/${numeroWhatsApp}?text=Hola, busco disponibilidad y precios en el grupo de: ${cat.nombre}`}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-xs md:text-sm font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}