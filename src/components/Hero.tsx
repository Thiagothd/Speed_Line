import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Internet Rápida e Estável
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Conecte-se ao futuro com fibra óptica de alta velocidade
            </p>
            <Button href="#plans">
              Veja Nossos Planos
            </Button>
          </div>
          <div className="mt-12 md:mt-0">
            <Rocket className="h-48 w-48 text-white animate-bounce" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}