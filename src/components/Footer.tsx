import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Design: Minimalist Elegance with Geometric Precision
 * - Clean, dark blue background with white text
 * - Simple and elegant footer design
 * - Brand identity and navigation links
 * - Contact information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Sobre Nosotros', href: '/nosotros' },
    { label: 'Planes', href: '/planes' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <footer className="bg-[#083351] text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-40 h-20 bg-white rounded flex items-center justify-center">
                <img
                  src="/images/logo-sin-fondo.png"
                  alt="GD Solutions"
                  className="object-contain"
                  loading="eager"
                  draggable={false}
                />               </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Servicios digitales premium y desarrollo web para negocios.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Navegación</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-gray-300 hover:text-[#f4832c] transition-colors duration-200 text-sm no-underline">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Servicios</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-300 hover:text-[#f4832c] transition-colors duration-200 text-sm">
                Desarrollo Web
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f4832c] transition-colors duration-200 text-sm">
                Optimización SEO
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f4832c] transition-colors duration-200 text-sm">
                Marketing Digital 
              </a> 
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:gdsolutionslat@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[#f4832c] transition-colors duration-200 text-sm no-underline"
              >
                <Mail className="w-4 h-4" />
                <span>gdsolutionslat@gmail.com</span>
              </a>
          
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4" />
                <span>República Dominicana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} GD Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to='/legal' className="text-gray-400 hover:text-[#f4832c] transition-colors duration-200 text-sm">
              Política de Privacidad
            </Link>
            <Link to='/terms' className="text-gray-400 hover:text-[#f4832c] transition-colors duration-200 text-sm">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
