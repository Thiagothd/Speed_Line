import React from 'react';
import { Wifi, Video, Users } from 'lucide-react';
import { Button } from './ui/Button';

const plans = [
  {
    name: 'Básico',
    speed: '100MB',
    description: 'Navegação básica',
    price: 'R$ 89,90',
    icon: Wifi,
    features: ['Ideal para navegação', 'Redes sociais', 'E-mails'],
  },
  {
    name: 'Plus',
    speed: '150MB',
    description: 'Ideal para streaming e jogos',
    price: 'R$ 119,90',
    icon: Video,
    features: ['Streaming em HD', 'Jogos online', 'Home office'],
  },
  {
    name: 'Ultra',
    speed: '300MB',
    description: 'Ultra velocidade para toda a família',
    price: 'R$ 159,90',
    icon: Users,
    features: ['Streaming em 4K', 'Downloads rápidos', 'Múltiplos dispositivos'],
  },
];

export function Plans() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Planos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <plan.icon className="h-12 w-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">{plan.speed}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="text-3xl font-bold mb-6">{plan.price}</div>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Contratar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}