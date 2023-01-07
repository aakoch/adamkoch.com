import { Component, Input } from '@angular/core';
import { Card } from '../../card/card.model';

@Component({
  selector: 'app-landing-card-list',
  templateUrl: './landing-card-list.component.html',
  styleUrls: ['./landing-card-list.component.scss']
})
export class LandingCardListComponent {
  @Input() cards: Card[] | null = null;
  

}
