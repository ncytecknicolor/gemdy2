import Image from "next/image";
import { MonitorPlay, Smartphone, Megaphone, ChevronRight, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* NAVEGACIÓN */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <Layers size={28} />
            <span>DynaStudio</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#portafolio" className="hover:text-blue-600 transition-colors">Portafolio</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black mt-16">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80" 
            alt="Fondo del Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Innovación Digital
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Creamos experiencias que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">marcan la diferencia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Desarrollo web de alto rendimiento, diseño de interfaces modernas y estrategias digitales a la medida de tu negocio.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 px-8 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50">
            Cotizar Proyecto <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Soluciones</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Utilizamos tecnologías de vanguardia como Next.js y React para asegurar que tu sitio sea rápido, seguro y escalable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <MonitorPlay size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3">Desarrollo Web</h3>
            <p className="text-gray-600 leading-relaxed">
              Sitios web ultrarrápidos e interactivos renderizados del lado del servidor (SSR) usando el App Router.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Smartphone size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3">Diseño UI/UX</h3>
            <p className="text-gray-600 leading-relaxed">
              Interfaces maquetadas con Tailwind CSS que se adaptan perfectamente a móviles, tablets y escritorio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Megaphone size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3">Marketing Digital</h3>
            <p className="text-gray-600 leading-relaxed">
              Optimización técnica desde el código fuente para garantizar los mejores resultados en motores de búsqueda (SEO).
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} Creado con Next.js y Tailwind CSS.</p>
      </footer>
    </main>
  );
}
