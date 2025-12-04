import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from '../../google-analytics.service';
import { LanguageService } from '../../core/services/language.service';
import { faSun, faMoon, faBars, faTimes, faEnvelope, faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  imagePath = environment.imagePath;
  isMenuOpen = false;
  darkMode = true;  // Default to dark mode
  currentLang = 'en';
  activeSection: string = '';
  private observer?: IntersectionObserver;
  private routerSubscription?: Subscription;
  private sectionChangeTimeout?: any;

  // Font Awesome icons
  faSun = faSun;
  faMoon = faMoon;
  faBars = faBars;
  faTimes = faTimes;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faChevronDown = faChevronDown;

  // Nav labels
  nav: any = {};
  personal: any = {};

  constructor(
    private googleAnalyticsService: GoogleAnalyticsService,
    private languageService: LanguageService,
    private router: Router
  ) {
    languageService.setDefaultLang('en');
  }

  ngOnInit() {
    this.googleAnalyticsService.init();

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.darkMode = savedMode === 'true';
    } else {
      // Default to dark mode
      this.darkMode = true;
    }
    this.applyDarkMode();

    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.currentLang = savedLang;
      this.languageService.use(savedLang);
    }

    // Load nav labels from config
    this.loadNavLabels();

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.initSectionObserver(), 100);
      });
  }

  ngAfterViewInit() {
    this.initSectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.sectionChangeTimeout) {
      clearTimeout(this.sectionChangeTimeout);
    }
  }

  private initSectionObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.activeSection = '';
      return;
    }

    const sectionIds = ['hero', 'summary', 'skills', 'experience', 'projects', 'education', 'fun-facts', 'contact'];

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.sectionChangeTimeout) {
          clearTimeout(this.sectionChangeTimeout);
        }

        this.sectionChangeTimeout = setTimeout(() => {
          const intersectingSections: IntersectionObserverEntry[] = [];

          const sectionIds = ['hero', 'summary', 'skills', 'experience', 'projects', 'education', 'fun-facts', 'contact'];
          sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
              const rect = section.getBoundingClientRect();
              const viewportHeight = window.innerHeight;
              if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.2) {
                intersectingSections.push({
                  target: section,
                  boundingClientRect: rect,
                  intersectionRatio: this.calculateIntersectionRatio(rect, viewportHeight)
                } as any);
              }
            }
          });

          if (intersectingSections.length > 0) {
            const mostVisible = intersectingSections.reduce((prev, current) => {
              return current.intersectionRatio > prev.intersectionRatio ? current : prev;
            });

            this.activeSection = mostVisible.target.id;
          }
        }, 100);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-20% 0px -40% 0px'
      }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        this.observer!.observe(section);
      }
    });

    setTimeout(() => {
      const visibleSection = this.findMostVisibleSection(sectionIds);
      if (visibleSection) {
        this.activeSection = visibleSection;
      }
    }, 100);
  }

  private calculateIntersectionRatio(rect: DOMRect, viewportHeight: number): number {
    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(viewportHeight, rect.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    return visibleHeight / rect.height;
  }

  private findMostVisibleSection(sectionIds: string[]): string | null {
    let maxVisibility = 0;
    let mostVisibleId: string | null = null;

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / viewportHeight;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleId = id;
        }
      }
    });

    return mostVisibleId;
  }

  isSectionActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.applyDarkMode();
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.languageService.use(lang);
    this.loadNavLabels();
  }

  private loadNavLabels() {
    const lang = this.currentLang === 'ja' ? 'ja' : 'en';
    const config = PORTFOLIO_CONFIG;

    this.nav = {
      name: config.personal.name[lang],
      title: config.personal.title[lang],
      home: config.nav.home[lang],
      about: config.nav.about[lang],
      skills: config.nav.skills[lang],
      experience: config.nav.experience[lang],
      projects: config.nav.projects[lang],
      education: config.nav.home[lang],
      contact: config.nav.contact[lang]
    };

    this.personal = {
      name: config.personal.name[lang]
    };
  }

  private applyDarkMode() {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}