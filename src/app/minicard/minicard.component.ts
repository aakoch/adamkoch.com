import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import debounce from 'lodash/debounce';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html', 
  styleUrls: ['./minicard.component.scss']
})
export class MinicardComponent {
  prefetchedLocations: string[] = [];
  @Input() card: any;
  @Input() first: boolean = false;
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
  constructor(private router: Router) {
    this.debouncedPrefetch = debounce(this.prefetch, 10)
  }
  debouncedPrefetch(url: string) {
  }
  goto(gotoLocation: string) {
    this.router.navigate([gotoLocation]);
  }
}
