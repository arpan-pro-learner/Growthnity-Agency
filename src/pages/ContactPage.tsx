import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact | Growthnity';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would handle the form submission
    alert('Form submitted! In a real app, this would send your message.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
              Let's Connect
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              Ready to take your business to infinity? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-primary-light relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-green/10 blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl  font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <Mail size={20} className="text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <a href="mailto:hello@growthnity.com" className="text-gray-300 hover:text-accent-green transition-colors">
                      hello@growthnity.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <MessageSquare size={20} className="text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919876543210" className="text-gray-300 hover:text-accent-green transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-primary p-8 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-light text-white border border-gray-700 rounded-md focus:outline-none focus:border-accent-green"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-light text-white border border-gray-700 rounded-md focus:outline-none focus:border-accent-green"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light text-white border border-gray-700 rounded-md focus:outline-none focus:border-accent-green"
                  >
                    <option value="">Select a subject</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-light text-white border border-gray-700 rounded-md focus:outline-none focus:border-accent-green"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-accent-green text-primary font-medium py-3 px-4 rounded-md hover:bg-accent-green/90 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl md:text-3xl  font-bold text-white mb-4">Our Location</h2>
            <p className="text-gray-300">
              Visit our office or reach out to us virtually - we're always ready to help your business grow.
            </p>
          </motion.div>
          
          <div className="bg-primary-light p-1 rounded-lg overflow-hidden">
            {/* This would be a Google Map in a real application */}
            <div className="w-full h-[400px] bg-primary-dark rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Interactive map would be displayed here</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              123, Infinity Tower, Digital Street, Web City, Tech Hub, 560001
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;