import type { Service } from '../types/service';

export const servicesData: Service[] = [
  {
    id: 'marine-logistics',
    title: 'Marine Logistics',
    slug: 'marine-logistics',
    description: 'Comprehensive offshore vessel management, cargo handling, and port operation support.',
    icon: 'FiAnchor',
    features: ['Vessel chartering', 'Offshore supply', 'Cargo & port logistics']
  },
  {
    id: 'equipment-management',
    title: 'Equipment Management',
    slug: 'equipment-management',
    description: 'Provision and maintenance of specialized heavy marine and offshore machinery.',
    icon: 'FiTruck',
    features: ['Heavy equipment rental', 'Preventive maintenance', 'Operational support']
  },
  {
    id: 'procurement-supply',
    title: 'Procurement & Supply',
    slug: 'procurement-supply',
    description: 'End-to-end supply chain sourcing for industrial and offshore marine equipment.',
    icon: 'FiBox',
    features: ['Global vendor sourcing', 'Quality assurance', 'Timely delivery']
  },
  {
    id: 'consultancy-project-support',
    title: 'Consultancy & Project Support',
    slug: 'consultancy-project-support',
    description: 'Expert technical advisory and end-to-end management for maritime projects.',
    icon: 'FiTrendingUp',
    features: ['Project management', 'Regulatory compliance', 'Risk assessment']
  }
];
