import { AfterViewInit, Component, PlatformRef, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tech-i-dig-page',
  templateUrl: './tech-i-dig-page.component.pug',
  styleUrls: ['./tech-i-dig-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechIDigPageComponent implements AfterViewInit {
  constructor(private window: Window, title: Title) {
    title.setTitle('Adam Koch - Tech');
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
}

