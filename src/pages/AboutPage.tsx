import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award, Globe } from 'lucide-react';
import ContactCTA from '../components/sections/ContactCTA';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | Growthnity';
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
              About Growthnity
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              We combine creativity, design, and data-backed strategy to make brands impossible to ignore.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl  font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                At Growthnity, we're on a mission to transform how businesses present themselves online. We believe every brand deserves a digital presence that truly represents its unique value and connects with its audience.
              </p>
              <p className="text-gray-300 text-lg">
                We don't just take you online. We take you to infinity. This means creating digital experiences that not only look stunning but also drive real business results through strategic thinking and creative execution.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://placehold.co/600x400/0B0C2A/00CFFF?text=Our+Mission" 
                alt="Our Mission" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl  font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg">
              These core principles guide everything we do at Growthnity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Star className="text-accent-green\" size={32} />, 
                title: 'Excellence', 
                description: 'We pursue excellence in every project, focusing on quality and attention to detail.' 
              },
              { 
                icon: <Users className="text-accent-green" size={32} />, 
                title: 'Collaboration', 
                description: 'We believe the best results come from close collaboration with our clients.' 
              },
              { 
                icon: <Award className="text-accent-green\" size={32} />, 
                title: 'Innovation', 
                description: 'We constantly explore new technologies and creative approaches.' 
              },
              { 
                icon: <Globe className="text-accent-green" size={32} />, 
                title: 'Impact', 
                description: 'We measure our success by the tangible results we deliver for our clients.' 
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-light p-8 rounded-lg border border-gray-800"
              >
                <div className="bg-primary/50 p-4 rounded-lg inline-flex mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl  font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl  font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-300 text-lg">
              From our humble beginnings to where we are today.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-16 md:left-1/2 w-px bg-gray-700 transform -translate-x-1/2"></div>
            
            {[
              { year: '2018', title: 'Our Beginning', description: 'Growthnity was founded with a vision to help businesses thrive in the digital space.' },
              { year: '2020', title: 'Expanding Services', description: 'Added web development and digital marketing to our core services.' },
              { year: '2022', title: 'Global Reach', description: 'Expanded our client base to include businesses from across the globe.' },
              { year: '2023', title: 'Innovation Focus', description: 'Established our innovation lab to explore emerging technologies and creative solutions.' },
              { year: '2024', title: 'New Horizons', description: 'Launched specialized services in AI-driven marketing and immersive experiences.' }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'
                }`}
              >
                <div className={`w-32 text-center md:text-left md:w-1/2 flex ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} mb-4 md:mb-0`}>
                  <div className="bg-accent-green text-primary px-4 py-2 rounded-md  font-semibold">
                    {event.year}
                  </div>
                </div>
                
                <div className="w-4 h-4 rounded-full bg-accent-green absolute left-16 md:left-1/2 transform -translate-x-1/2 mt-2 md:mt-0"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <h3 className="text-xl  font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-accent-blue/10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent-green/10 blur-[120px]"></div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl  font-bold text-white mb-4">Tools We Use</h2>
            <p className="text-gray-300 text-lg">
              We leverage industry-leading tools and technologies to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {[
              'Adobe', 'Figma', 'Webflow', 'React', 'WordPress', 'Shopify',
              'After Effects', 'Premiere Pro', 'Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp'
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-primary-light p-4 rounded-lg border border-gray-800 flex items-center justify-center h-24"
              >
                <p className="text-gray-300 text-center font-medium">{tool}</p>
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

export default AboutPage;