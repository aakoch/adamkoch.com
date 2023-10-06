import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Card } from './card.model';
import { Router } from '@angular/router';
import { faFeather, faPencilRuler, faArchive } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.pug',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('iconFlipState', [
      state('normal', style({
        transform: 'rotateY(0deg)'
      })),
      state('highlighted', style({
        transform: 'rotateY(180deg)'
      })),
      state('end', style({
        transform: 'rotateY(360deg)'
      })),
      transition('normal => end', animate(500))
    ])
  ]
})
export class CardComponent {
  iconFlipState = 'normal';
  prefetchedLocations: string[] = [];
  @Input() card: Card | any;
  @Input() first = false;
  faFeather = faFeather;
  faPencilRuler = faPencilRuler;
  faArchive = faArchive;

  constructor(private router: Router) {
  }

  goto(gotoLocation: string) {
      this.router.navigateByUrl(gotoLocation);
  }
  onHover() {
    this.iconFlipState = 'end'
  }
  doMouseLeave() {
    this.iconFlipState = 'normal'
  }

  showNew() {
    try {
      const match = this.card.tagline.match(/(\d{4})-(\d{1,2})-(\d{1,2})/)
      if (match) {
        const lastModified = new Date(match[1], match[2] - 1, match[3])
        return new Date().getTime() - lastModified.getTime() < 1209600000
      }
    }
    catch (e) {
      console.error('Error parsing date: ' + this.card.tagline);
    }

    return false
  }
}

