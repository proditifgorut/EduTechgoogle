import React from 'react';
import { 
  FileText, 
  Table, 
  Presentation, 
  ClipboardList, 
  HardDrive, 
  Globe, 
  Mail, 
  Video, 
  MessageSquare, 
  Calendar, 
  StickyNote,
  GraduationCap,
  FileCheck,
  Database,
  Monitor,
  Sparkles,
  Brain
} from 'lucide-react';

interface AppIconProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const AppIcon: React.FC<AppIconProps> = ({ icon, label, color }) => (
  <div className="flex flex-col items-center space-y-2 group cursor-pointer">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center transform transition-all group-hover:scale-110 group-hover:shadow-lg`}>
      {icon}
    </div>
    <span className="text-xs text-gray-300 text-center">{label}</span>
  </div>
);

interface FeatureCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all ${className}`}>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    {children}
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <FeatureCard title="Collaboration and productivity" className="md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-3 gap-4">
              <AppIcon icon={<FileText className="text-white" size={28} />} label="Docs" color="bg-blue-600" />
              <AppIcon icon={<Table className="text-white" size={28} />} label="Sheets" color="bg-green-600" />
              <AppIcon icon={<Presentation className="text-white" size={28} />} label="Slides" color="bg-yellow-600" />
              <AppIcon icon={<ClipboardList className="text-white" size={28} />} label="Forms" color="bg-purple-600" />
              <AppIcon icon={<HardDrive className="text-white" size={28} />} label="Drive" color="bg-yellow-500" />
              <AppIcon icon={<Globe className="text-white" size={28} />} label="Sites" color="bg-red-600" />
              <AppIcon icon={<Mail className="text-white" size={28} />} label="Gmail" color="bg-red-500" />
              <AppIcon icon={<Video className="text-white" size={28} />} label="Meet" color="bg-green-500" />
              <AppIcon icon={<MessageSquare className="text-white" size={28} />} label="Chat" color="bg-blue-500" />
              <AppIcon icon={<Calendar className="text-white" size={28} />} label="Calendar" color="bg-blue-600" />
              <AppIcon icon={<StickyNote className="text-white" size={28} />} label="Keep" color="bg-yellow-500" />
            </div>
          </FeatureCard>

          <FeatureCard title="Classroom management and workflow">
            <div className="grid grid-cols-2 gap-4">
              <AppIcon icon={<GraduationCap className="text-white" size={28} />} label="Google Classroom" color="bg-green-600" />
              <AppIcon icon={<FileCheck className="text-white" size={28} />} label="Assignments" color="bg-blue-600" />
              <AppIcon icon={<Database className="text-white" size={28} />} label="AppSheet" color="bg-purple-600" />
              <AppIcon icon={<Monitor className="text-white" size={28} />} label="Workspace LMS" color="bg-indigo-600" />
            </div>
          </FeatureCard>

          <FeatureCard title="Video conferencing">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center">
                <Video className="text-white mx-auto mb-3" size={40} />
                <h4 className="text-white font-semibold mb-2">Google Meet</h4>
                <p className="text-gray-200 text-sm">HD video calls with up to 250 participants</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
                <div className="bg-white/5 rounded-lg p-2 text-center">
                  <span className="block font-semibold text-white">250+</span>
                  <span>Participants</span>
                </div>
                <div className="bg-white/5 rounded-lg p-2 text-center">
                  <span className="block font-semibold text-white">HD</span>
                  <span>Quality</span>
                </div>
                <div className="bg-white/5 rounded-lg p-2 text-center">
                  <span className="block font-semibold text-white">24/7</span>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard title="AI-Powered Learning" className="md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Brain className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">NotebookLM</h4>
                    <p className="text-purple-200 text-sm">AI Research Assistant</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Transform your documents into interactive learning experiences with AI-powered insights and summaries.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Sparkles className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">Gemini</h4>
                    <p className="text-blue-200 text-sm">Advanced AI Assistant</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Get instant help with writing, research, and problem-solving using Google's most capable AI.
                </p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard title="Security & Privacy">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Enterprise-grade Security</h5>
                  <p className="text-gray-400 text-sm">Protect your data with advanced security features and compliance certifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Privacy Controls</h5>
                  <p className="text-gray-400 text-sm">Granular privacy settings and data ownership controls</p>
                </div>
              </div>
            </div>
          </FeatureCard>

        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your educational experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of educators and students already using our platform to enhance learning and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-white/30 w-full sm:w-auto">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
