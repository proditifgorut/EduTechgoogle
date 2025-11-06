import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslations();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-white font-semibold text-lg">{t('header.title')}</span>
            </div>
            <p className="text-gray-400 text-sm">{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.features')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.pricing')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.security')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.updates')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.documentation')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.community')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="GitHub">
                <Github size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="Email">
                <Mail size={18} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.terms')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
