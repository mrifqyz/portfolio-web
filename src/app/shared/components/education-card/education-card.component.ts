import { Component, Input } from '@angular/core';
import { Education } from '../../models/landing-page.models';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent {
  @Input() education!: Education;

  faCheck = faCheck;
}
