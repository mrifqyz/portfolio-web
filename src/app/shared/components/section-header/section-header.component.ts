import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() emoji: string = '';
  @Input() label: string = '';
  @Input() titlePart1: string = '';
  @Input() titleHighlight: string = '';
  @Input() titlePart2: string = '';
  @Input() description: string = '';
}
