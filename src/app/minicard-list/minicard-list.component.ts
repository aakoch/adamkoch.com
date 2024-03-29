import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minicard-list',
  templateUrl: './minicard-list.component.pug',
  styleUrls: ['./minicard-list.component.scss']
})
export class MinicardListComponent {
  @Input() links: any[] = [];

  constructor(private router: Router) {
  }

  goto(gotoLocation: string) {
    console.log('goto ' + gotoLocation);
    this.router.navigateByUrl(gotoLocation);
}
}
