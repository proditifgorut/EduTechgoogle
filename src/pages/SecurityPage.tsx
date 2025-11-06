import React from 'react';
import { Shield, DatabaseZap, Stamp, UserCog, Siren, KeyRound, Microscope } from 'lucide-react';

interface SecurityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const SecurityPage: React.FC = () => {
  const features = [
    {
      icon: <DatabaseZap size={24} className="text-blue-400" />,
      title: 'Proactive Data Protection',
      description: 'Your data is secured with industry-leading encryption, both at rest and in transit, ensuring it remains confidential and intact.',
    },
    {
      icon: <Stamp size={24} className="text-green-400" />,
      title: 'Compliance & Certifications',
      description: 'We adhere to rigorous global standards, including FERPA, COPPA, and GDPR, to meet your institution\'s compliance needs.',
    },
    {
      icon: <UserCog size={24} className="text-purple-400" />,
      title: 'Granular Privacy Controls',
      description: 'Empower administrators with fine-grained controls over user data, access policies, and service settings to protect privacy.',
    },
    {
      icon: <Siren size={24} className="text-red-400" />,
      title: 'Advanced Threat Detection',
      description: 'Our AI-powered systems continuously monitor for suspicious activity, helping to prevent, detect, and remediate threats in real time.',
    },
    {
      icon: <KeyRound size={24} className="text-yellow-400" />,
      title: 'Secure Identity & Access',
      description: 'Protect user accounts with robust options like secure sign-in, 2-Step Verification, and security key enforcement.',
    },
    {
      icon: <Microscope size={24} className="text-cyan-400" />,
      title: 'Commitment to Transparency',
      description: 'We provide clear policies on how data is used and publish regular reports to maintain trust and transparency with our users.',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
          <Shield size={32} className="text-blue-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Enterprise-Grade Security for Your Institution
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our platform is built on a secure foundation, providing the protection, control, and compliance you need to operate with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <SecurityFeature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default SecurityPage;
