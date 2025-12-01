import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  private gtag: any;

  constructor() {
    this.gtag = (window as any).gtag;
  }

  public init() {
    if (environment.gaTrackingId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gaTrackingId}`;
      document.head.appendChild(script);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${environment.gaTrackingId}');
      `;
      document.head.appendChild(script2);
    }
  }

  public event(eventName: string, params: any) {
    if (this.gtag) {
      this.gtag('event', eventName, params);
    }
  }
}
