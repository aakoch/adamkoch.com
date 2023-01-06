import { Component, Input } from '@angular/core';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-minicard-list',
  templateUrl: './minicard-list.component.html',
  styleUrls: ['./minicard-list.component.scss']
})
export class MinicardListComponent {
  @Input() links: any[] = [];

  goto(gotoLocation: string) {
    console.log('goto ' + gotoLocation);
    document.location.pathname = gotoLocation
}
}
