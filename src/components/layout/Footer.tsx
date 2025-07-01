import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 mt-4 max-w-xs">
              We don't just take you online. We take you to infinity.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/agency.growthnity/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-green transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-green transition-colors">
                <Twitter size={20} />
              </a> */}
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-green transition-colors">
                <Linkedin size={20} />
              </a> */}
              <a href="mailto:growthnity@gmail.com" className="text-gray-400 hover:text-accent-green transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg  font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-accent-green transition-colors flex items-center"
                  >
                    {item}
                    <ArrowUpRight size={14} className="ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg  font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Video Editing', 
                'Graphic Design', 
                'Web Development', 
                'UI/UX Design',
                'Digital Marketing',
                'SEO Optimization'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to={`/services/${service.toLowerCase().replace(/\s/g, '-')}`} 
                    className="text-gray-300 hover:text-accent-green transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg  font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <a href="mailto:growthnity@gmail.com" className="hover:text-accent-green transition-colors">
                  growthnity@gmail.com
                </a>
              </li>
              <li className="text-gray-300">
                <a href="tel:+919696723190" className="hover:text-accent-green transition-colors">
                  +91 96967 23190
                </a>
              </li>
              <li className="text-gray-300">
                363/191 Hasanganj<br />
                Behind Bawli Chowki<br />
                Lucknow, 226017
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Growthnity. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;