import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroSection } from '../../models/landing-page.models';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  standalone: true
})
export class HeroSectionComponent {
  @Input() hero!: HeroSection;

  faChevronDown = faChevronDown;
}
