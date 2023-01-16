import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'
import debounce from 'lodash/debounce';
import moment from 'moment';
import { Card } from './card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
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
  @Input() first: boolean = false;

  constructor(private router: Router) {
    this.debouncedPrefetch = debounce(this.prefetch, 10)
  }

  goto(gotoLocation: string) {
      this.router.navigateByUrl(gotoLocation);
  }

  prefetch(gotoLocation: string) {
    // console.log('calling prefetch');
    // if (this.prefetchedLocations.includes(gotoLocation))
    //   return;
    // let link = document.createElement("link")
    // link.setAttribute("rel", "prefetch")
    // link.setAttribute("href", gotoLocation)
    // document.body.appendChild(link)
    // this.prefetchedLocations.push(gotoLocation)
  }
  debouncedPrefetch(url: string) {
  }
  onHover() {
    this.iconFlipState = 'end'
  }
  doMouseLeave() {
    this.iconFlipState = 'normal'
  }

  showNew() { 
    try {
      let match = this.card.tagline.match(/\d{4}-\d{1,2}-\d{1,2}/)
      if (match) {
        let lastModified = moment(match[0])
        return moment.duration(moment().diff(lastModified)).weeks() < 2
      }
    }
    catch (e) {
      console.error('Error parsing date: ' + this.card.tagline);
    }

    return false
  }
}

