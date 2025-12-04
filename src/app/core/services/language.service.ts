import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  public currentLang$ = this.currentLangSubject.asObservable();

  private _defaultLang = 'en';

  constructor() {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'ja')) {
      this.currentLangSubject.next(savedLang);
    }
  }

  setDefaultLang(lang: string): void {
    this._defaultLang = lang;
  }

  get defaultLang(): string {
    return this._defaultLang;
  }

  get currentLang(): string {
    return this.currentLangSubject.value;
  }

  use(lang: string): void {
    if (lang === 'en' || lang === 'ja') {
      this.currentLangSubject.next(lang);
      localStorage.setItem('language', lang);
    }
  }

  getBrowserLang(): string | undefined {
    if (typeof navigator !== 'undefined' && navigator.language) {
      return navigator.language.split('-')[0];
    }
    return undefined;
  }

  get onLangChange(): Observable<string> {
    return this.currentLang$;
  }
}
