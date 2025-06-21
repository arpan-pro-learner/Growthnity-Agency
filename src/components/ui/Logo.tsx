import React from 'react';
import { Infinity } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Infinity size={32} className="text-accent-green" />
      <span className="text-white  font-bold text-xl tracking-tight">Growthnity</span>
    </div>
  );
};

export default Logo;