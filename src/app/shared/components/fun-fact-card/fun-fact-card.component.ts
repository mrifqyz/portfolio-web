import { Component, Input } from '@angular/core';
import { FunFact } from '../../models/landing-page.models';

@Component({
  selector: 'app-fun-fact-card',
  templateUrl: './fun-fact-card.component.html',
  styleUrls: ['./fun-fact-card.component.scss']
})
export class FunFactCardComponent {
  @Input() funFact!: FunFact;
}
