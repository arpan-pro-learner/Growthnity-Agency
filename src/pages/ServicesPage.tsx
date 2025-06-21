import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Globe, BarChart3, PencilRuler, Search } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import ContactCTA from '../components/sections/ContactCTA';

const servicesData = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Professional video editing services for commercials, social media, and corporate videos.',
    icon: <Video size={24} className="text-accent-green" />,
    link: '/services/video-editing'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visual designs for branding, marketing materials, and social media content.',
    icon: <Palette size={24} className="text-accent-green" />,
    link: '/services/graphic-design'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom, responsive websites that showcase your brand and drive business results.',
    icon: <Globe size={24} className="text-accent-green" />,
    link: '/services/web-development'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to increase your online visibility and conversions.',
    icon: <BarChart3 size={24} className="text-accent-green" />,
    link: '/services/digital-marketing'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, enjoyable digital experiences.',
    icon: <PencilRuler size={24} className="text-accent-green" />,
    link: '/services/ui-ux-design'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Boost your search rankings and drive organic traffic to your website.',
    icon: <Search size={24} className="text-accent-green" />,
    link: '/services/seo-optimization'
  }
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services | Growthnity';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              From strategy to execution, we provide end-to-end digital solutions to help your business thrive in the digital world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl  font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-300">
              We follow a structured approach to ensure every project delivers exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'We learn about your business, goals, and audience.' },
              { number: '02', title: 'Strategy', description: 'We develop a tailored plan to achieve your objectives.' },
              { number: '03', title: 'Creation', description: 'Our team brings your vision to life with precision and creativity.' },
              { number: '04', title: 'Launch & Optimization', description: 'We launch your project and continuously optimize for best results.' }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary p-8 rounded-lg border border-gray-800 relative"
              >
                <span className="text-6xl  font-bold text-accent-green/10 absolute top-4 right-4">{step.number}</span>
                <h3 className="text-xl  font-semibold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-300 relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default ServicesPage;