import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface SectionHeader {
  emoji: string;
  label: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
}

export interface Skill {
  name: string;
  level: string;
  width: number;
  color: string;
}

export interface SkillCategory {
  name: string;
  icon: IconDefinition;
  iconColor: string;
  skills: Skill[];
}

export interface WorkExperience {
  logo: string;
  title: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  type: string;
  duration: string;
  techStack: string[];
  collapsedAchievements: string[];
  expandedAchievements: string[];
  isExpanded?: boolean;
}

export interface ProjectLink {
  type: 'repo' | 'liveDemo' | 'website' | 'docs';
  label: string;
  icon: IconDefinition;
  href: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  role: string;
  about: string;
  image: string;
  badge: string;
  isFeatured: boolean;
  techStack: string[];
  links: ProjectLink[];
}

export interface Education {
  logo: string;
  degree: string;
  institution: string;
  link: string;
  gpa: string;
  yearRange: string;
  achievements: string[];
}

export interface FunFact {
  title: string;
  description: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface SummaryMetric {
  icon: IconDefinition;
  value: string;
  label: string;
  colorClass: string;
}

export interface Summary {
  badge: string;
  title: string;
  titleHighlight: string;
  roleIcon: IconDefinition;
  roleTitle: string;
  roleDescription: string;
  metrics: SummaryMetric[];
  location: string;
  locationLabel: string;
  education: {
    degree: string;
    institution: string;
    graduatedYear: string;
    thesis: string;
  };
  viewEducationText: string;
  hideEducationText: string;
  image: string;
  experienceYears: string;
  experienceLabel: {
    yearsOf: string;
    experience: string;
  };
}

export interface CTAButton {
  icon: IconDefinition;
  label: string;
  href: string;
  type: 'primary' | 'secondary';
  download?: boolean;
}

export interface CTASection {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export interface HeroButton {
  label: string;
  href?: string;
  routerLink?: string;
  icon?: IconDefinition;
  type: 'primary' | 'secondary' | 'outline';
  download?: boolean;
}

export interface SocialLink {
  icon: string;
  href: string;
  name: string;
  hoverBg: string;
}

export interface HeroSection {
  avatar: string;
  greeting: string;
  name: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  subtitle: string;
  buttons: HeroButton[];
  socialLinks: SocialLink[];
}
