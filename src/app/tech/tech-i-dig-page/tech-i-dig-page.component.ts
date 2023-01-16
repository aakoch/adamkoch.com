import { AfterViewInit, Component, PlatformRef } from '@angular/core';

@Component({
  selector: 'app-tech-i-dig-page',
  templateUrl: './tech-i-dig-page.component.pug',
  styleUrls: ['./tech-i-dig-page.component.scss']
})
export class TechIDigPageComponent implements AfterViewInit {
  constructor(private window: Window) {
  }
  ngAfterViewInit() {
    (<any>this.window).google.search.cse.element.go()
  }
}

