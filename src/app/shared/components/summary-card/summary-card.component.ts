import { Component, Input } from '@angular/core';
import { Summary } from '../../models/landing-page.models';
import { faArrowRight, faMapMarkerAlt, faChevronDown, faChevronUp, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent {
  @Input() summary!: Summary;
  isEducationExpanded = false;

  faArrowRight = faArrowRight;
  faMapMarkerAlt = faMapMarkerAlt;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faGraduationCap = faGraduationCap;

  toggleEducation(): void {
    this.isEducationExpanded = !this.isEducationExpanded;
  }
}
