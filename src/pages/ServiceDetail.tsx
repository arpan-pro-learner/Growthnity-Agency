import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Video, Palette, Globe, BarChart3, PencilRuler, Search } from 'lucide-react';
import ContactCTA from '../components/sections/ContactCTA';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
  benefits: string[];
  tools: string[];
  process: {
    title: string;
    description: string;
  }[];
  image: string;
}

const servicesData: ServiceData[] = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Professional video editing services for commercials, social media, and corporate videos.',
    icon: <Video size={24} className="text-accent-green" />,
    longDescription: 'Our video editing services transform raw footage into compelling visual narratives. Whether you need social media content, corporate videos, or commercial spots, our team delivers polished, professional results that capture attention and convey your message effectively.',
    benefits: [
      'Professional post-production techniques',
      'Color grading and visual effects',
      'Custom motion graphics and animations',
      'Sound design and audio enhancement',
      'Format optimization for different platforms'
    ],
    tools: [
      'Adobe Premiere Pro',
      'After Effects',
      'DaVinci Resolve',
      'Cinema 4D',
      'Audition'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your vision, goals, and audience.' },
      { title: 'Planning', description: 'Creating a storyboard and editing roadmap.' },
      { title: 'Editing', description: 'Cutting, enhancing, and refining your footage.' },
      { title: 'Review', description: 'Collaborative feedback and revisions.' },
      { title: 'Delivery', description: 'Final exports optimized for your platforms.' }
    ],
    image: 'https://placehold.co/800x600/0B0C2A/00FF88?text=Video+Editing'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visual designs for branding, marketing materials, and social media content.',
    icon: <Palette size={24} className="text-accent-green" />,
    longDescription: 'Our graphic design services help brands make a lasting visual impression. From logo design and brand identity to marketing materials and social media graphics, we create visually compelling assets that communicate your brand message and connect with your audience.',
    benefits: [
      'Cohesive visual brand identity',
      'Unique, memorable designs',
      'Print and digital-ready files',
      'Flexible formats for various applications',
      'Strategic use of visual elements to enhance communication'
    ],
    tools: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Figma',
      'Procreate'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your brand, values, and visual preferences.' },
      { title: 'Concept', description: 'Creating initial design concepts and directions.' },
      { title: 'Refinement', description: 'Iterating on the chosen direction.' },
      { title: 'Finalization', description: 'Perfecting the designs and preparing final assets.' },
      { title: 'Delivery', description: 'Providing files in all required formats.' }
    ],
    image: 'https://placehold.co/800x600/0B0C2A/00FF88?text=Graphic+Design'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom, responsive websites that showcase your brand and drive business results.',
    icon: <Globe size={24} className="text-accent-green" />,
    longDescription: 'Our web development team creates custom websites that are not only visually stunning but also functionally robust. We focus on responsive design, performance optimization, and user experience to ensure your website effectively serves your business goals while providing a seamless experience for your visitors.',
    benefits: [
      'Mobile-responsive design',
      'SEO-friendly architecture',
      'Fast loading speeds',
      'Content management systems',
      'E-commerce capabilities',
      'Custom functionality'
    ],
    tools: [
      'React',
      'Next.js',
      'WordPress',
      'Shopify',
      'Tailwind CSS',
      'Node.js'
    ],
    process: [
      { title: 'Planning', description: 'Defining requirements and creating site architecture.' },
      { title: 'Design', description: 'Creating wireframes and visual designs.' },
      { title: 'Development', description: 'Building the frontend and backend systems.' },
      { title: 'Testing', description: 'Ensuring functionality across devices and browsers.' },
      { title: 'Launch', description: 'Deploying your site and providing training.' }
    ],
    image: 'https://placehold.co/800x600/0B0C2A/00CFFF?text=Web+Development'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to increase your online visibility and conversions.',
    icon: <BarChart3 size={24} className="text-accent-green" />,
    longDescription: 'Our digital marketing services help you reach your target audience and achieve your business objectives. From social media marketing and content creation to paid advertising and email campaigns, we develop data-driven strategies that generate leads, increase brand awareness, and drive conversions.',
    benefits: [
      'Increased online visibility',
      'Targeted audience reach',
      'Higher conversion rates',
      'Better ROI on marketing spend',
      'Data-driven strategy refinement',
      'Cohesive multi-channel approach'
    ],
    tools: [
      'Google Analytics',
      'Meta Business Suite',
      'HubSpot',
      'Mailchimp',
      'SEMrush',
      'Canva'
    ],
    process: [
      { title: 'Research', description: 'Analyzing your market, competitors, and audience.' },
      { title: 'Strategy', description: 'Developing a custom marketing plan.' },
      { title: 'Implementation', description: 'Executing campaigns across relevant channels.' },
      { title: 'Monitoring', description: 'Tracking performance and making adjustments.' },
      { title: 'Reporting', description: 'Providing regular insights and recommendations.' }
    ],
    image: 'https://placehold.co/800x600/0B0C2A/00FF88?text=Digital+Marketing'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, enjoyable digital experiences.',
    icon: <PencilRuler size={24} className="text-accent-green" />,
    longDescription: 'Our UI/UX design services focus on creating intuitive, user-friendly digital experiences. We combine aesthetics with functionality to design interfaces that are visually appealing, easy to navigate, and aligned with user expectations and business goals.',
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Reduced development costs',
      'Lower support requirements',
      'Competitive advantage through superior experience',
      'Consistent brand experience'
    ],
    tools: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Maze',
      'Miro'
    ],
    process: [
      { title: 'Research', description: 'Understanding users through research and interviews.' },
      { title: 'Information Architecture', description: 'Organizing content for optimal user flow.' },
      { title: 'Wireframing', description: 'Creating low-fidelity layouts of key screens.' },
      { title: 'UI Design', description: 'Developing high-fidelity visual designs.' },
      { title: 'Prototyping', description: 'Building interactive prototypes for testing.' },
      { title: 'Handoff', description: 'Preparing design specifications for development.' }
    ],
    image: 'https://placehold.co/800x600/0B0C2A/00CFFF?text=UI/UX+Design'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Boost your search rankings and drive organic traffic to your website.',
    icon: <Search size={24} className="text-accent-green" />,
    longDescription: 'Our SEO optimization services help improve your visibility in search engine results, driving more organic traffic to your website. We use proven techniques and best practices to enhance your site structure, content, and backlink profile, resulting in higher rankings and more qualified leads.',
    benefits: [
      'Higher search engine rankings',
      'Increased organic traffic',
      'Better quality leads',
      'Improved user experience',
      'Enhanced content strategy',
      'Long-term sustainable results'
    ],
    tools: [
      'SEMrush',
      'Ahrefs',
      'Google Search Console',
      'Google Analytics',
      'Screaming Frog',
      'Moz'
    ],
    process: [
      { title: 'Audit', description: 'Analyzing your current SEO performance and identifying issues.' },
      { title: 'Keyword Research', description: 'Identifying valuable search terms for your business.' },
      { title: 'On-Page Optimization', description: 'Improving content, meta tags, and site structure.' },
      { title: 'Off-Page Strategy', description: 'Building quality backlinks and online presence.' },
      { title: 'Technical SEO', description: 'Enhancing site speed, mobile-friendliness, and indexability.' },
      { title: 'Monitoring', description: 'Tracking results and adjusting strategy accordingly.' }
    ],
    image: 'https://placehold.co/800x600/0B0C2A/00FF88?text=SEO+Optimization'
  }
];

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<ServiceData | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundService = servicesData.find((s) => s.id === id);
    
    if (foundService) {
      setService(foundService);
      document.title = `${foundService.title} | Growthnity`;
    }
  }, [id]);
  
  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <p className="text-white">Loading service details...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div className="bg-accent-green/20 p-3 rounded-full">
                  {service.icon}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-6">
                {service.title}
              </h1>
              
              <p className="text-gray-300 text-lg mb-8">
                {service.longDescription}
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-accent-green text-primary font-medium rounded-md px-6 py-3 hover:bg-accent-green/90 transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl  font-bold text-white mb-6">
                Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
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
                    <p className="text-gray-300">{benefit}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl  font-bold text-white mb-6">
                Tools & Technologies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary p-4 rounded-lg border border-gray-800"
                  >
                    <p className="text-white text-center">{tool}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl  font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-gray-300">
              We follow a structured approach to ensure your project is completed efficiently and effectively.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-6 relative">
                  <div className="w-10 h-10 rounded-full bg-accent-green flex items-center justify-center text-primary font-bold relative z-10">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="absolute top-10 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-700 h-full"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl  font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
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

export default ServiceDetail;