import { Component, Input } from '@angular/core';
import { CTASection } from '../../models/landing-page.models';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.scss']
})
export class CtaSectionComponent {
  @Input() cta!: CTASection;
}
