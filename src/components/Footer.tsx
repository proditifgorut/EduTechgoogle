import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { label: 'Twitter', icon: Twitter, href: 'https://twitter.com/googlecloud' },
    { label: 'GitHub', icon: Github, href: 'https://github.com/googlecloudplatform' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/showcase/google-cloud/' },
    { label: 'Email', icon: Mail, href: 'mailto:support@google.com' },
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-white font-semibold text-lg">EduTech</span>
            </div>
            <p className="text-gray-400 text-sm">Empowering education through innovative technology and AI-driven solutions.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors text-sm">Security</Link></li>
              <li><Link to="/updates" className="text-gray-400 hover:text-white transition-colors text-sm">Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</Link></li>
              <li><Link to="/help-center" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors text-sm">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label={link.label}>
                  <link.icon size={18} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 EduTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
