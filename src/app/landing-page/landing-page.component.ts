import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LanguageService } from '../core/services/language.service';
import { I18nDataService } from '../core/services/i18n-data.service';
import { Subject, takeUntil } from 'rxjs';
import {
  faDownload, faChevronDown, faCode, faBolt, faCheckCircle, faArrowRight,
  faServer, faDesktop, faDatabase, faCloud, faTerminal, faCalendar, faCheck,
  faExternalLinkAlt, faFileAlt, faEnvelope, faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  SkillCategory,
  WorkExperience,
  Project,
  Education,
  Summary,
  CTASection,
  HeroSection
} from '../shared/models/landing-page.models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  imagePath = environment.imagePath;
  expandedCards: { [key: string]: boolean } = {
    generous: false,
    doku: false,
    sagara: false,
    tiket: false
  };
  yearsOfExperience: number = 0;
  monthsAtGenerous: number = 0;

  faDownload = faDownload;
  faChevronDown = faChevronDown;
  faCode = faCode;
  faBolt = faBolt;
  faCheckCircle = faCheckCircle;
  faArrowRight = faArrowRight;
  faServer = faServer;
  faDesktop = faDesktop;
  faDatabase = faDatabase;
  faCloud = faCloud;
  faTerminal = faTerminal;
  faCalendar = faCalendar;
  faCheck = faCheck;
  faExternalLinkAlt = faExternalLinkAlt;
  faFileAlt = faFileAlt;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGithub = faGithub;

  heroSection!: HeroSection;
  summary!: Summary;
  skillCategories: SkillCategory[] = [];
  skillsSection: any = {};
  workExperiences: WorkExperience[] = [];
  experienceSection: any = {};
  projects: Project[] = [];
  projectsSection: any = {};
  education!: Education;
  educationSection: any = {};
  // funFacts: FunFact[] = [];
  // funFactsSection: any = {};
  ctaSection!: CTASection;

  constructor(
    private languageService: LanguageService,
    private i18nDataService: I18nDataService
  ) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.calculateExperience();

    this.loadAllData();

    this.languageService.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadAllData();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadAllData(): void {
    this.i18nDataService.getAllLandingPageData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.heroSection = data.hero;
        this.summary = data.summary;

        // Skills
        this.skillCategories = data.skills.categories;
        this.skillsSection = {
          badge: data.skills.badge,
          title: data.skills.title,
          subtitle: data.skills.subtitle
        };

        // Experience
        this.workExperiences = data.experience.items;
        this.experienceSection = {
          badge: data.experience.badge,
          title: data.experience.title,
          subtitle: data.experience.subtitle
        };

        // Projects
        this.projects = data.projects.items;
        this.projectsSection = {
          badge: data.projects.badge,
          title: data.projects.title,
          subtitle: data.projects.subtitle
        };

        // Education
        this.education = data.education;
        this.educationSection = {
          badge: data.education.badge,
          title: data.education.title
        };

        // Fun Facts
        // this.funFacts = data.funFacts.items;
        // this.funFactsSection = {
        //   badge: data.funFacts.badge,
        //   title: data.funFacts.title,
        //   subtitle: data.funFacts.subtitle
        // };

        this.ctaSection = data.cta;
      });
  }

  calculateExperience(): void {
    const startDate = new Date('2019-03-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    this.yearsOfExperience = Math.floor(diffYears);

    const generousStartDate = new Date('2023-06-01');
    const diffTimeGenerous = Math.abs(currentDate.getTime() - generousStartDate.getTime());
    const diffMonths = diffTimeGenerous / (1000 * 60 * 60 * 24 * 30.44);
    this.monthsAtGenerous = Math.floor(diffMonths);
  }

  toggleCard(cardName: string): void {
    this.expandedCards[cardName] = !this.expandedCards[cardName];
  }

  toggleExperience(experience: WorkExperience): void {
    experience.isExpanded = !experience.isExpanded;
  }
}
