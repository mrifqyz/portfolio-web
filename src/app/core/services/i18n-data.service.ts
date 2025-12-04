import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  faDownload, faCode, faBolt, faCheckCircle, faArrowRight,
  faServer, faDesktop, faDatabase, faCloud, faTerminal,
  faEnvelope, faPhone, faExternalLinkAlt, faBook, faRocket
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Injectable({
  providedIn: 'root'
})
export class I18nDataService {
  private imagePath = environment.imagePath;

  constructor(private languageService: LanguageService) {}

  /**
   * Helper to get current language ('en' or 'ja')
   */
  private getCurrentLang(): 'en' | 'ja' {
    const currentLang = this.languageService.currentLang || this.languageService.defaultLang || 'en';
    return currentLang === 'ja' ? 'ja' : 'en';
  }

  /**
   * Helper to get translated text from config object
   */
  private getTranslated(obj: any): any {
    const lang = this.getCurrentLang();
    return obj[lang] || obj.en || obj;
  }

  /**
   * Get hero section data
   */
  getHeroSection(): Observable<any> {
    const config = PORTFOLIO_CONFIG;

    return of({
      avatar: this.imagePath + config.hero.avatar,
      greeting: this.getTranslated(config.hero.greeting),
      name: this.getTranslated(config.personal.name),
      titlePart1: this.getTranslated(config.hero.titlePart1),
      titleHighlight: this.getTranslated(config.hero.titleHighlight),
      titlePart2: this.getTranslated(config.hero.titlePart2),
      subtitle: this.getTranslated(config.hero.subtitle),
      buttons: [
        {
          label: this.getTranslated(config.nav.about),
          routerLink: '/about-me',
          type: 'primary'
        },
        {
          label: this.getTranslated(config.common.viewWork),
          href: '#projects',
          type: 'secondary'
        },
        {
          label: this.getTranslated(config.common.resume),
          href: this.getTranslated(config.personal.resumeFile),
          icon: faDownload,
          type: 'outline',
          download: true
        }
      ],
      socialLinks: config.hero.socialLinks.map(link => ({
        icon: this.imagePath + link.icon,
        href: link.url,
        name: link.platform,
        hoverBg: link.hoverColor
      }))
    });
  }

  /**
   * Get summary section data
   */
  getSummarySection(): Observable<any> {
    const config = PORTFOLIO_CONFIG;

    return of({
      badge: this.getTranslated(config.summary.badge),
      title: this.getTranslated(config.summary.title).split(' ')[0],
      titleHighlight: this.getTranslated(config.summary.title).split(' ').slice(1).join(' '),
      roleIcon: faCode,
      roleTitle: this.getTranslated(config.personal.title),
      roleDescription: this.getTranslated(config.summary.description).replace('{{years}}', config.summary.experienceYears),
      metrics: [
        {
          icon: faBolt,
          value: '90%',
          label: 'Latency Reduction',
          colorClass: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
        },
        {
          icon: faCheckCircle,
          value: '100ms',
          label: 'API Response Time',
          colorClass: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
        }
      ],
      location: this.getTranslated(config.personal.location),
      locationLabel: this.getTranslated(config.common.currentLocation),
      education: {
        degree: this.getTranslated(config.education.degree),
        institution: this.getTranslated(config.education.institution),
        graduatedYear: config.education.graduatedYear,
        thesis: this.getTranslated(config.education.thesis)
      },
      viewEducationText: this.getTranslated(config.common.viewEducation),
      hideEducationText: this.getTranslated(config.common.hideEducation),
      image: this.imagePath + config.summary.image,
      experienceYears: config.summary.experienceYears,
      experienceLabel: {
        yearsOf: this.getTranslated(config.common.yearsOf),
        experience: this.getTranslated(config.common.experience)
      }
    });
  }

  /**
   * Get skills data
   */
  getSkills(): Observable<any> {
    const config = PORTFOLIO_CONFIG;
    const iconMap: any = {
      server: faServer,
      desktop: faDesktop,
      database: faDatabase,
      cloud: faCloud,
      terminal: faTerminal
    };

    // Proficiency level mapping
    const proficiencyMap: any = {
      95: this.getTranslated(config.common.proficiency.expert),
      90: this.getTranslated(config.common.proficiency.advanced),
      85: this.getTranslated(config.common.proficiency.advanced),
      80: this.getTranslated(config.common.proficiency.advanced),
      75: this.getTranslated(config.common.proficiency.intermediate),
      70: this.getTranslated(config.common.proficiency.intermediate),
      65: this.getTranslated(config.common.proficiency.intermediate),
      50: this.getTranslated(config.common.proficiency.beginner)
    };

    return of({
      categories: config.skills.categories.map(cat => ({
        name: this.getTranslated(cat.name),
        icon: iconMap[cat.icon],
        iconColor: cat.icon === 'server' ? 'blue' : cat.icon === 'desktop' ? 'purple' : cat.icon === 'database' ? 'green' : cat.icon === 'cloud' ? 'orange' : 'gray',
        skills: cat.skills.map(skill => ({
          name: skill.name,
          level: proficiencyMap[skill.level] || this.getTranslated(config.common.proficiency.intermediate),
          width: skill.level,
          color: skill.color
        }))
      }))
    });
  }

  /**
   * Get work experience data
   */
  getWorkExperience(): Observable<any[]> {
    const config = PORTFOLIO_CONFIG;

    return of(config.experience.items.map(exp => ({
      logo: this.imagePath + exp.logo,
      title: this.getTranslated(exp.position),
      company: this.getTranslated(exp.company),
      companyLink: exp.companyLink,
      startDate: exp.startDate,
      endDate: this.getTranslated(exp.endDate),
      duration: this.getTranslated(exp.duration).replace('{{months}}', '6'),
      techStack: exp.techStack,
      collapsedAchievements: this.getTranslated(exp.collapsedAchievements),
      expandedAchievements: this.getTranslated(exp.expandedAchievements),
      isExpanded: false
    })));
  }

  /**
   * Get projects data
   */
  getProjects(): Observable<any[]> {
    const config = PORTFOLIO_CONFIG;

    // Map link types to icons
    const linkIconMap: any = {
      repo: (link: any) => link.label.toLowerCase().includes('gitlab') ? faGitlab : faGithub,
      liveDemo: () => faRocket,
      website: () => faExternalLinkAlt,
      docs: () => faBook
    };

    return of(config.projects.items.map(project => ({
      title: this.getTranslated(project.title),
      date: project.date,
      description: this.getTranslated(project.description),
      role: this.getTranslated(project.role),
      about: this.getTranslated(project.about),
      image: this.imagePath + project.image,
      badge: project.badge,
      isFeatured: project.isFeatured,
      techStack: project.techStack,
      links: project.links.map(link => ({
        type: link.type,
        label: link.label,
        icon: linkIconMap[link.type] ? linkIconMap[link.type](link) : faGithub,
        href: link.url
      }))
    })));
  }

  /**
   * Get education data
   */
  getEducation(): Observable<any> {
    const config = PORTFOLIO_CONFIG.education;

    return of({
      logo: this.imagePath + config.logo,
      degree: this.getTranslated(config.degree),
      institution: this.getTranslated(config.institution),
      link: config.link,
      gpa: config.gpa,
      yearRange: this.getTranslated(config.duration),
      achievements: this.getTranslated(config.achievements)
    });
  }

  /**
   * Get fun facts data
   */
  getFunFacts(): Observable<any[]> {
    const config = PORTFOLIO_CONFIG;

    return of(config.funFacts.items.map(fact => ({
      title: this.getTranslated(fact.title),
      description: this.getTranslated(fact.description),
      emoji: fact.emoji,
      gradientFrom: fact.gradientFrom,
      gradientTo: fact.gradientTo
    })));
  }

  /**
   * Get CTA section data
   */
  getCtaSection(): Observable<any> {
    const config = PORTFOLIO_CONFIG;

    return of({
      title: this.getTranslated(config.cta.title),
      description: this.getTranslated(config.cta.description),
      buttons: [
        {
          icon: faEnvelope,
          label: this.getTranslated(config.common.contactMe),
          href: `mailto:${config.personal.email}`,
          type: 'primary'
        },
        {
          icon: faPhone,
          label: this.getTranslated(config.common.callMe),
          href: `tel:${config.personal.phone}`,
          type: 'secondary'
        },
        {
          icon: faDownload,
          label: this.getTranslated(config.common.downloadResume),
          href: this.getTranslated(config.personal.resumeFile),
          type: 'secondary',
          download: true
        }
      ]
    });
  }

  /**
   * Load all landing page data at once
   */
  getAllLandingPageData(): Observable<any> {
    const config = PORTFOLIO_CONFIG;

    return combineLatest([
      this.getHeroSection(),
      this.getSummarySection(),
      this.getSkills(),
      this.getWorkExperience(),
      this.getProjects(),
      this.getEducation(),
      this.getFunFacts(),
      this.getCtaSection()
    ]).pipe(
      map(([hero, summary, skills, experience, projects, education, funFacts, cta]) => ({
        hero,
        summary,
        skills: {
          ...skills,
          badge: this.getTranslated(config.skills.badge),
          title: this.getTranslated(config.skills.title),
          subtitle: this.getTranslated(config.common.comprehensiveToolkit)
        },
        experience: {
          items: experience,
          badge: this.getTranslated(config.experience.badge),
          title: this.getTranslated(config.experience.title),
          subtitle: this.getTranslated(config.common.buildingHighPerformance)
        },
        projects: {
          items: projects,
          badge: this.getTranslated(config.projects.badge),
          title: this.getTranslated(config.projects.title),
          subtitle: this.getTranslated(config.common.collectionOfProjects)
        },
        education: {
          ...education,
          badge: this.getTranslated(config.education.badge),
          title: this.getTranslated(config.education.title)
        },
        funFacts: {
          items: funFacts,
          badge: this.getTranslated(config.funFacts.badge),
          title: this.getTranslated(config.funFacts.title),
          subtitle: this.getTranslated(config.common.whenNotCoding)
        },
        cta
      }))
    );
  }
}
