import React from 'react';
import { 
  FileText, Table, Presentation, ClipboardList, Globe, Mail, Video, MessageSquare, Calendar, Film, Users, GraduationCap, FileCheck, SearchCheck, Puzzle, Chrome, Laptop, BookOpenCheck, Sparkles, AppWindow, HardDrive
} from 'lucide-react';

const featureLinks: Record<string, string> = {
  docs: 'https://docs.google.com/create',
  sheets: 'https://sheets.google.com/create',
  slides: 'https://slides.google.com/create',
  forms: 'https://forms.google.com/create',
  sites: 'https://sites.google.com/create',
  calendar: 'https://calendar.google.com',
  appsheet: 'https://www.appsheet.com',
  vids: 'https://workspace.google.com/vids/',
  assignments: 'https://edu.google.com/workspace-for-education/editions/plus/assignments-originality-reports/',
  originality: 'https://edu.google.com/workspace-for-education/editions/plus/assignments-originality-reports/',
  workspaceLTI: 'https://support.google.com/edu/classroom/answer/13813523?hl=en',
  classroom: 'https://classroom.google.com',
  gmail: 'https://mail.google.com',
  chat: 'https://chat.google.com',
  groups: 'https://groups.google.com',
  drive: 'https://drive.google.com',
  meet: 'https://meet.google.com',
  chrome: 'https://www.google.com/chrome/',
  chromebook: 'https://www.google.com/chromebook/',
  notebookLM: 'https://notebooklm.google.com/',
  gemini: 'https://gemini.google.com/'
};


interface AppIconProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const AppIcon: React.FC<AppIconProps> = ({ icon, label, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-sm text-gray-200">{label}</span>
  </a>
);

interface FeatureCategoryProps {
  title: string;
  children: React.ReactNode;
  gridCols?: string;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ title, children, gridCols = 'grid-cols-2' }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4 h-full flex flex-col">
    <h4 className="text-base font-semibold text-white mb-3 px-2">{title}</h4>
    <div className={`grid ${gridCols} gap-1`}>
      {children}
    </div>
  </div>
);

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="sm:col-span-2 xl:col-span-1">
        <FeatureCategory title="Collaboration and productivity">
          <AppIcon icon={<FileText className="text-blue-400" />} label="Docs" href={featureLinks.docs} />
          <AppIcon icon={<Table className="text-green-400" />} label="Sheets" href={featureLinks.sheets} />
          <AppIcon icon={<Presentation className="text-yellow-400" />} label="Slides" href={featureLinks.slides} />
          <AppIcon icon={<ClipboardList className="text-purple-400" />} label="Forms" href={featureLinks.forms} />
          <AppIcon icon={<Globe className="text-blue-400" />} label="Sites" href={featureLinks.sites} />
          <AppIcon icon={<Calendar className="text-cyan-400" />} label="Calendar" href={featureLinks.calendar} />
          <AppIcon icon={<AppWindow className="text-indigo-400" />} label="AppSheet Core" href={featureLinks.appsheet} />
          <AppIcon icon={<Film className="text-red-400" />} label="Vids" href={featureLinks.vids} />
        </FeatureCategory>
      </div>

      <div>
        <FeatureCategory title="Classroom management and plagiarism detection" gridCols="grid-cols-1">
          <AppIcon icon={<FileCheck className="text-blue-400" />} label="Assignments" href={featureLinks.assignments} />
          <AppIcon icon={<SearchCheck className="text-yellow-400" />} label="Originality reports" href={featureLinks.originality} />
          <AppIcon icon={<Puzzle className="text-purple-400" />} label="Workspace LTI™" href={featureLinks.workspaceLTI} />
          <AppIcon icon={<GraduationCap className="text-green-400" />} label="Classroom" href={featureLinks.classroom} />
        </FeatureCategory>
      </div>

      <div>
        <FeatureCategory title="Email and messaging" gridCols="grid-cols-1">
          <AppIcon icon={<Mail className="text-red-400" />} label="Gmail" href={featureLinks.gmail} />
          <AppIcon icon={<MessageSquare className="text-green-400" />} label="Chat" href={featureLinks.chat} />
          <AppIcon icon={<Users className="text-blue-400" />} label="Groups" href={featureLinks.groups} />
        </FeatureCategory>
      </div>

      <div className="grid grid-rows-2 gap-4">
        <FeatureCategory title="Storage" gridCols="grid-cols-1">
          <AppIcon icon={<HardDrive className="text-yellow-400" />} label="Drive" href={featureLinks.drive} />
        </FeatureCategory>
        <FeatureCategory title="Video conferencing" gridCols="grid-cols-1">
          <AppIcon icon={<Video className="text-green-400" />} label="Meet" href={featureLinks.meet} />
        </FeatureCategory>
      </div>

      <div className="sm:col-span-2 lg:col-span-1">
        <FeatureCategory title="Hardware & OS">
          <AppIcon icon={<Chrome className="text-green-400" />} label="chrome" href={featureLinks.chrome} />
          <AppIcon icon={<Laptop className="text-gray-400" />} label="chromebook plus" href={featureLinks.chromebook} />
        </FeatureCategory>
      </div>

      <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
        <FeatureCategory title="AI">
          <AppIcon icon={<BookOpenCheck className="text-purple-400" />} label="NotebookLM" href={featureLinks.notebookLM} />
          <AppIcon icon={<Sparkles className="text-blue-400" />} label="Gemini" href={featureLinks.gemini} />
        </FeatureCategory>
      </div>
    </div>
  );
};

export default FeatureGrid;
