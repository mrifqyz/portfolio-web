import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WorkExperience } from '../../models/landing-page.models';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() experience!: WorkExperience;
  @Input() isExpanded: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  faChevronDown = faChevronDown;

  onCardClick(): void {
    this.toggle.emit();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  getBadgeColor(tech: string): string {
    return 'gray';
  }
}
