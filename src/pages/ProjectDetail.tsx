import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ContactCTA from '../components/sections/ContactCTA';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  images: string[];
}

const projectsData: Project[] = [
  {
    id: 'cosmic-brew',
    title: 'Cosmic Brew',
    client: 'Cosmic Brew Coffee Co.',
    category: 'Branding & Web Design',
    description: 'A complete brand identity and e-commerce website for an artisanal coffee company with an astronomical theme.',
    challenge: 'Cosmic Brew needed a distinctive brand identity and online store that would stand out in a crowded market and convey their unique astronomical theme while driving coffee sales.',
    solution: 'We developed a comprehensive brand identity with space-inspired visuals and an intuitive e-commerce platform that showcases their product line while telling their brand story.',
    results: [
      '127% increase in online sales',
      '45% growth in social media following',
      '32% improvement in customer retention',
      'Featured in Coffee Enthusiast Magazine'
    ],
    tools: ['Adobe Illustrator', 'Shopify', 'Figma', 'After Effects'],
    images: [
      'https://placehold.co/800x600/0B0C2A/00FF88?text=Cosmic+Brew+1',
      'https://placehold.co/800x600/0B0C2A/00CFFF?text=Cosmic+Brew+2',
      'https://placehold.co/800x600/0B0C2A/00FF88?text=Cosmic+Brew+3'
    ]
  },
  {
    id: 'nexus-tech',
    title: 'Nexus Tech',
    client: 'Nexus Technologies Inc.',
    category: 'Web Development',
    description: 'A modern, responsive website for a tech startup that showcases their innovative products and attracts investors.',
    challenge: 'Nexus Tech needed a high-performance website that would effectively communicate their complex technological solutions while attracting potential investors and customers.',
    solution: 'We built a custom React-based website with interactive product demonstrations, detailed case studies, and a sleek interface that highlights their technological expertise.',
    results: [
      '89% increase in lead generation',
      '4.2x improvement in user engagement metrics',
      'Secured Series A funding within 6 months of launch',
      '56% reduction in bounce rate'
    ],
    tools: ['React', 'Next.js', 'GSAP', 'Tailwind CSS'],
    images: [
      'https://placehold.co/800x600/0B0C2A/00CFFF?text=Nexus+Tech+1',
      'https://placehold.co/800x600/0B0C2A/00FF88?text=Nexus+Tech+2',
      'https://placehold.co/800x600/0B0C2A/00CFFF?text=Nexus+Tech+3'
    ]
  },
  {
    id: 'verde-organics',
    title: 'Verde Organics',
    client: 'Verde Organics Ltd.',
    category: 'Digital Marketing',
    description: 'A comprehensive digital marketing strategy for an organic skincare brand focusing on sustainability.',
    challenge: 'Verde Organics needed to increase their market presence and communicate their commitment to sustainability while competing with established skincare brands with larger marketing budgets.',
    solution: 'We developed a content-rich digital marketing strategy focused on education, sustainability, and transparency, leveraging social media, email marketing, and influencer partnerships.',
    results: [
      '215% increase in online revenue',
      '78% growth in email subscription list',
      '3.7x return on ad spend',
      'Successfully entered 3 new international markets'
    ],
    tools: ['HubSpot', 'Meta Business Suite', 'Mailchimp', 'Google Analytics'],
    images: [
      'https://placehold.co/800x600/0B0C2A/00FF88?text=Verde+Organics+1',
      'https://placehold.co/800x600/0B0C2A/00CFFF?text=Verde+Organics+2',
      'https://placehold.co/800x600/0B0C2A/00FF88?text=Verde+Organics+3'
    ]
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProject = projectsData.find((p) => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | Growthnity`;
    }
  }, [id]);
  
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <p className="text-white">Loading project details...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-gray-400 hover:text-accent-green transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary-light text-accent-green px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
              <span className="bg-primary-light text-gray-300 px-3 py-1 rounded-full text-sm">
                {project.client}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-6">
              {project.title}
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Project Images */}
      <section className="py-12 bg-primary-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden"
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl  font-bold text-white mb-6">The Challenge</h2>
              <p className="text-gray-300 text-lg">{project.challenge}</p>
              
              <h2 className="text-2xl md:text-3xl  font-bold text-white mt-12 mb-6">The Solution</h2>
              <p className="text-gray-300 text-lg">{project.solution}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl  font-bold text-white mb-6">Results</h2>
              <ul className="space-y-4 mb-12">
                {project.results.map((result, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1 text-accent-green">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-lg">{result}</p>
                  </motion.li>
                ))}
              </ul>
              
              <h2 className="text-2xl md:text-3xl  font-bold text-white mb-6">Tools Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-primary-light text-gray-300 px-4 py-2 rounded-md text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent-green text-primary font-medium rounded-md px-6 py-3 hover:bg-accent-green/90 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default ProjectDetail;