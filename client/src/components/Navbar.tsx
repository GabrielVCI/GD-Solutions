import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Navbar Component
 * Design: Minimalist Elegance with Geometric Precision
 * - Clean, sticky header with dark blue background
 * - Responsive mobile menu with smooth animations
 * - Clear navigation hierarchy
 * - Orange accent for active/hover states
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Sobre Nosotros', href: '/nosotros' },
    { label: 'Planes', href: '/planes' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 no-underline">
            {/* Logo */}
            <img
              src="/images/logo-sin-fondo.png"
              alt="GD Solutions"
              className="h-20 w-20 sm:h-40 sm:w-40 object-contain transition-transform duration-200 hover:scale-105"
              loading="eager"
              draggable={false}
            /> 
          </a>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-[#083351] font-medium text-sm hover:text-[#f4832c] transition-colors duration-200 no-underline">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/contacto">
            <a className="btn-primary text-sm no-underline">
              Cotizar Ahora
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-[#f5f5f5] rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#083351]" />
          ) : (
            <Menu className="w-6 h-6 text-[#083351]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e5e5] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-[#083351] font-medium text-base hover:text-[#f4832c] transition-colors duration-200 no-underline block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a
                className="btn-primary text-sm text-center no-underline"
                onClick={() => setIsOpen(false)}
              >
                Inicia Ahora
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
