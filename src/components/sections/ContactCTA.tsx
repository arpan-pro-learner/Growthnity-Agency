import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RocketIcon } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-green/10 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-accent-green/20 p-3 rounded-full">
              <RocketIcon size={32} className="text-accent-green" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-6 text-white">
            Ready to take your business digital with style, clarity, and results?
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. Our team is ready to transform your ideas into digital reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-accent-green text-primary font-medium rounded-md px-8 py-4 hover:bg-accent-green/90 transition-all duration-300"
            >
              Get a Free Strategy Call
            </Link>
            <a 
              href="mailto:hello@growthnity.com" 
              className="border border-white/30 text-white rounded-md px-8 py-4 hover:bg-white/10 transition-all duration-300"
            >
              hello@growthnity.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;