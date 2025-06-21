import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';
import ContactCTA from '../components/sections/ContactCTA';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projectsData: Project[] = [
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
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness',
    category: 'Branding & Web Design',
    image: 'https://placehold.co/600x400/0B0C2A/00CFFF?text=Pulse+Fitness',
    link: '/projects/pulse-fitness'
  },
  {
    id: 'azure-resort',
    title: 'Azure Resort',
    category: 'Video Production',
    image: 'https://placehold.co/600x400/0B0C2A/00FF88?text=Azure+Resort',
    link: '/projects/azure-resort'
  },
  {
    id: 'quantum-finance',
    title: 'Quantum Finance',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/0B0C2A/00CFFF?text=Quantum+Finance',
    link: '/projects/quantum-finance'
  },
  {
    id: 'echo-music',
    title: 'Echo Music',
    category: 'Digital Marketing',
    image: 'https://placehold.co/600x400/0B0C2A/00FF88?text=Echo+Music',
    link: '/projects/echo-music'
  },
  {
    id: 'nova-clothing',
    title: 'Nova Clothing',
    category: 'Branding & Web Design',
    image: 'https://placehold.co/600x400/0B0C2A/00CFFF?text=Nova+Clothing',
    link: '/projects/nova-clothing'
  },
  {
    id: 'velocity-motors',
    title: 'Velocity Motors',
    category: 'Video Production',
    image: 'https://placehold.co/600x400/0B0C2A/00FF88?text=Velocity+Motors',
    link: '/projects/velocity-motors'
  }
];

const categories = [
  'All',
  'Branding & Web Design',
  'Web Development',
  'Digital Marketing',
  'Video Production'
];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Projects | Growthnity';
    
    if (filter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);

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
              Our Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              Explore our portfolio of work across various industries and services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-primary-light border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === category
                    ? 'bg-accent-green text-primary font-medium'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 md:px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default ProjectsPage;