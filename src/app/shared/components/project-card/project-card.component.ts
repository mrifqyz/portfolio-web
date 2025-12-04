import { Component, Input } from '@angular/core';
import { Project } from '../../models/landing-page.models';
import { faCalendar, faStar, faUserTie, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;

  faCalendar = faCalendar;
  faStar = faStar;
  faUserTie = faUserTie;
  faInfoCircle = faInfoCircle;

  getBadgeColor(tech: string): string {
    return 'gray';
  }
}
