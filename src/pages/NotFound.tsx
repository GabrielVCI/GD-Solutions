import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * 404 Not Found Page
 * Design: Minimalist Elegance with Geometric Precision
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="flex-1 flex items-center justify-center py-24 md:py-32">
        <div className="container text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-[#083351] mb-4">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#083351] mb-6">
            Página no Encontrada
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lo sentimos, la página que estás buscando no existe. 
          </p>
          <Link href="/">
            <a className="btn-primary inline-flex items-center gap-2 no-underline">
              <ArrowLeft className="w-5 h-5" />
              Ir a la página principal
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
