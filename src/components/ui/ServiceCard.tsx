import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ServiceProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  };
  className?: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, className = '' }) => {
  return (
    <Link 
      to={service.link}
      className={`block group ${className}`}
    >
      <div className="bg-primary-light/200 backdrop-blur-sm p-8 rounded-lg border border-gray-800 h-full transition-all duration-300 hover:border-accent-green/50 hover:translate-y-[-5px]">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-primary/50 p-3 rounded-lg">
            {service.icon}
          </div>
          <ArrowUpRight size={20} className="text-gray-400 group-hover:text-accent-green transition-colors" />
        </div>
        
        <h3 className="text-xl  font-semibold text-white mt-4 mb-2">{service.title}</h3>
        <p className="text-gray-300">{service.description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;