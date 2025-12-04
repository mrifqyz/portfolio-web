import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Import all shared components
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { FunFactCardComponent } from './components/fun-fact-card/fun-fact-card.component';
import { DeleteConfirmationModalComponent } from './components/delete-confirmation-modal/delete-confirmation-modal.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

const components = [
  SectionHeaderComponent,
  BadgeComponent,
  SkillItemComponent,
  SkillCardComponent,
  ExperienceCardComponent,
  ProjectCardComponent,
  EducationCardComponent,
  FunFactCardComponent,
  SummaryCardComponent,
  CtaSectionComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    DeleteConfirmationModalComponent,
    HeroSectionComponent
  ],
  exports: [
    ...components,
    DeleteConfirmationModalComponent,
    HeroSectionComponent
  ]
})
export class SharedModule { }
