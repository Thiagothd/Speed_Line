import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from './ui/Link';

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">Speedline</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#plans">Planos</Link>
            <Link href="#about">Sobre Nós</Link>
            <Link href="#contact">Contato</Link>
          </nav>
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}