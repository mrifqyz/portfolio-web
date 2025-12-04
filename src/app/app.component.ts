import { Component } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portofolio-web';

  constructor(private languageService: LanguageService) {
    this.languageService.setDefaultLang('en');

    const browserLang = this.languageService.getBrowserLang();
    const langToUse = browserLang?.match(/en|ja/) ? browserLang : 'en';
    this.languageService.use(langToUse);
  }
}