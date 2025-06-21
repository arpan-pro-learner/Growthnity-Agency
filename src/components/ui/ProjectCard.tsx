import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
  };
  className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, className = '' }) => {
  return (
    <Link 
      to={project.link}
      className={`block group ${className}`}
    >
      <motion.div 
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-lg bg-primary-dark"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-accent-green text-sm font-medium tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="text-white text-xl md:text-2xl  font-semibold mt-2">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;