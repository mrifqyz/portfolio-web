import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from './google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imagePath = environment.imagePath;
  title = 'portofolio-web';

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {
    this.googleAnalyticsService.init();
  }
}
