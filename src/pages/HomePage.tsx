import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Video, Palette, Globe, BarChart3 } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';
import ContactCTA from '../components/sections/ContactCTA';
import FloatingButton from '../components/ui/FloatingButton';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Cinematic storytelling through professional video editing and post-production.',
    icon: <Video size={24} className="text-accent-green" />,
    link: '/services/video-editing'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visuals that communicate your brand message effectively.',
    icon: <Palette size={24} className="text-accent-green" />,
    link: '/services/graphic-design'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies and best practices.',
    icon: <Globe size={24} className="text-accent-green" />,
    link: '/services/web-development'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to increase your online visibility and conversions.',
    icon: <BarChart3 size={24} className="text-accent-green" />,
    link: '/services/digital-marketing'
  }
];

const featuredProjects = [
  {
    id: 'cosmic-brew',
    title: 'Cosmic Brew',
    category: 'Branding & Web Design',
    image: 'https://placehold.co/600x400/0B0C2A/00FF88?text=Cosmic+Brew',
    link: '/projects/cosmic-brew'
  },
  {
    id: 'nexus-tech',
    title: 'Nexus Tech',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/0B0C2A/00CFFF?text=Nexus+Tech',
    link: '/projects/nexus-tech'
  },
  {
    id: 'verde-organics',
    title: 'Verde Organics',
    category: 'Digital Marketing',
    image: 'https://placehold.co/600x400/0B0C2A/00FF88?text=Verde+Organics',
    link: '/projects/verde-organics'
  }
];

const HomePage: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (servicesRef.current) {
        gsap.from('.service-card', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          }
        });
      }

      if (projectsRef.current) {
        gsap.from('.project-card', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          }
        });
      }

      ScrollTrigger.refresh();
    }, 0); // Ensures DOM is fully rendered

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <HeroSection />
      <FloatingButton />

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-20 md:py-28 bg-gradient-to-b from-primary to-primary-dark relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-white/100 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Creative solutions tailored to your business needs. We help you stand out in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                className="service-card"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-accent-green hover:text-accent-green/90 transition-colors font-medium group"
            >
              Explore All Services
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="py-20 md:py-28 bg-primary-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Check out some of our recent work that demonstrates our capabilities and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="project-card"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center text-accent-blue hover:text-accent-blue/90 transition-colors font-medium group"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default HomePage;