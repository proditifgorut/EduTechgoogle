import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { GoogleProfile } from '../types';

interface AuthContextType {
  profile: GoogleProfile | null;
  login: (credential: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<GoogleProfile | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('google_auth_token');
    if (storedToken) {
      try {
        const decodedProfile: GoogleProfile = jwtDecode(storedToken);
        if (decodedProfile.exp * 1000 > Date.now()) {
          setProfile(decodedProfile);
        } else {
          localStorage.removeItem('google_auth_token');
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
        localStorage.removeItem('google_auth_token');
      }
    }
  }, []);

  const login = (credential: string) => {
    try {
      const decodedProfile: GoogleProfile = jwtDecode(credential);
      setProfile(decodedProfile);
      localStorage.setItem('google_auth_token', credential);
    } catch (error) {
      console.error("Failed to decode credential:", error);
    }
  };

  const logout = () => {
    setProfile(null);
    localStorage.removeItem('google_auth_token');
  };

  return (
    <AuthContext.Provider value={{ profile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
