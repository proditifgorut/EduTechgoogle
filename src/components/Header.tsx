import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Plus, BrainCircuit, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { profile, login, logout } = useAuth();
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const navButtons = [
    { label: 'Google Workspace for Education', href: '/workspace' },
    { label: 'Google Cloud', href: '/cloud' },
  ];

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      login(credentialResponse.credential);
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BrainCircuit size={18} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg">EduTech</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navButtons.map(item => (
              <NavLink 
                key={item.label} 
                to={item.href} 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
             <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1">
                <Plus size={16} />
                <span>+ Gemini</span>
              </a>
          </div>

          <div className="flex items-center space-x-4">
             <div className="hidden md:flex items-center space-x-4">
                {profile ? (
                  <div className="relative" ref={profileMenuRef}>
                    <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center space-x-2">
                      <img src={profile.picture} alt={profile.name} className="w-8 h-8 rounded-full" />
                    </button>
                    {isProfileMenuOpen && (
                       <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-white/10 rounded-md shadow-lg py-1">
                        <div className="px-4 py-2 border-b border-white/10">
                           <p className="text-sm font-medium text-white truncate">{profile.name}</p>
                           <p className="text-xs text-gray-400 truncate">{profile.email}</p>
                        </div>
                         <button
                           onClick={() => { logout(); setIsProfileMenuOpen(false); }}
                           className="w-full text-left flex items-center space-x-2 px-4 py-2 text-sm text-red-400 hover:bg-white/10"
                         >
                          <LogOut size={16} />
                           <span>Sign Out</span>
                         </button>
                       </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div id="google-signin-button-container">
                      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} theme="outline" size="medium" shape="pill" />
                    </div>
                  </>
                )}
             </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navButtons.map(item => (
                <NavLink key={item.label} to={item.href} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`
                }>{item.label}</NavLink>
              ))}
              <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:bg-white/10 hover:text-white transition-colors block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-1">
                <Plus size={16} />
                <span>+ Gemini</span>
              </a>
              <div className="border-t border-white/10 pt-4 mt-2 space-y-4">
                 {profile ? (
                   <div className="px-3 py-2">
                      <div className="flex items-center space-x-3 mb-3">
                        <img src={profile.picture} alt={profile.name} className="w-10 h-10 rounded-full" />
                        <div>
                           <p className="text-base font-medium text-white truncate">{profile.name}</p>
                           <p className="text-sm text-gray-400 truncate">{profile.email}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => { logout(); setIsMenuOpen(false); }}
                        className="w-full text-left flex items-center space-x-2 px-3 py-2 text-base font-medium text-red-400 hover:bg-white/10 rounded-md"
                      >
                       <LogOut size={18} />
                        <span>Sign Out</span>
                      </button>
                   </div>
                 ) : (
                    <div className="px-3">
                      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} theme="outline" size="large" shape="pill" width="100%" />
                    </div>
                 )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
