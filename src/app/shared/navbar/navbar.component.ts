import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements  AfterViewInit {

  active = false;

  constructor(private window: Window) {
  }

  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }

  onclick() {
    this.active = !this.active;
  }

}
