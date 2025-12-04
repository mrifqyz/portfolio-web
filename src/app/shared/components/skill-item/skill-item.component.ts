import { Component, Input } from '@angular/core';
import { Skill } from '../../models/landing-page.models';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  @Input() skill!: Skill;

  getBarColor(): string {
    const colorMap: { [key: string]: string } = {
      'blue': '#2563eb',
      'green': '#16a34a',
      'purple': '#9333ea',
      'pink': '#db2777',
      'yellow': '#ca8a04',
      'red': '#dc2626',
      'cyan': '#0891b2',
      'orange': '#ea580c',
      'gray': '#4b5563'
    };
    return colorMap[this.skill.color] || '#2563eb';
  }
}
