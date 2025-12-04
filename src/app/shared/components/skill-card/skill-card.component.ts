import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../models/landing-page.models';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() category!: SkillCategory;
}
