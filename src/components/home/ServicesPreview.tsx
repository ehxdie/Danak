import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiAnchor, FiTruck, FiBox, FiBriefcase } from 'react-icons/fi';

const servicesList = [
  {
    id: 'marine-logistics',
    number: '01',
    title: 'Marine Logistics',
    subtitle: 'Offshore & Coastal Support',
    description: 'Reliable logistics support for offshore and marine operations.',
    image: '/images/services/marine_logistics.png',
    icon: <FiAnchor className="w-5 h-5" />
  },
  {
    id: 'equipment-management',
    number: '02',
    title: 'Equipment Management',
    subtitle: 'Asset Deployment & Support',
    description: 'Management, coordination and support for marine equipment and operational assets.',
    image: '/images/services/equipment_management.png',
    icon: <FiTruck className="w-5 h-5" />
  },
  {
    id: 'procurement-supply',
    number: '03',
    title: 'Procurement & Supply',
    subtitle: 'Global Sourcing & Delivery',
    description: 'Sourcing and supply of marine equipment, materials and operational requirements.',
    image: '/images/services/procurement_supply.png',
    icon: <FiBox className="w-5 h-5" />
  },
  {
    id: 'consultancy-project-support',
    number: '04',
    title: 'Consultancy & Project Support',
    subtitle: 'Strategic Advisory & Governance',
    description: 'Business advisory, regulatory support and project coordination for maritime and offshore operations.',
    image: '/images/services/consultancy_support.png',
    icon: <FiBriefcase className="w-5 h-5" />
  }
];

export const ServicesPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = servicesList[activeTab];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2A52] tracking-tight mb-3">
              Our Services
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Delivering superior maritime solutions, Danak Logistics & Resources Ltd leads with best practices, industry insights, and strategic partnerships.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#0A2A52] text-[#0A2A52] font-semibold text-sm hover:bg-[#0A2A52] hover:text-white transition-all duration-200 shadow-xs"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Tabbed Split Layout Container */}
        <div className="bg-[#F4F8FC] rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Vertical Tabs */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-2.5">
              {servicesList.map((service, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left px-5 py-4.5 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-white text-[#0A2A52] border-l-[5px] border-[#0A2A52] shadow-sm'
                        : 'text-gray-500 hover:text-[#0A2A52] hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-colors ${
                        isActive ? 'bg-[#0A2A52] text-[#D9A441]' : 'bg-slate-200/70 text-gray-600 group-hover:bg-slate-300/80'
                      }`}>
                        {service.icon}
                      </span>
                      <div>
                        <span className={`block text-base font-bold leading-tight ${isActive ? 'text-[#0A2A52]' : 'text-gray-600 group-hover:text-[#0A2A52]'}`}>
                          {service.title}
                        </span>
                      </div>
                    </div>

                    <FiChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-[#0A2A52] translate-x-0' : 'text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Content & High Resolution Photo */}
            <div className="lg:col-span-8 flex flex-col justify-between pt-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {currentService.description}
                    </p>

                    <div>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 text-[#0A2A52] font-bold text-sm hover:text-[#D9A441] transition-colors group"
                      >
                        <span>Explore {currentService.title}</span>
                        <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Card Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-md h-[280px] sm:h-[340px] md:h-[360px] w-full border border-white/50 group">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061427]/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="bg-[#0A2A52]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-[#D9A441]">
                        {currentService.subtitle}
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md text-white font-mono text-[11px]">
                        Danak Operations
                      </span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};



