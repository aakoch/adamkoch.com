import { AfterViewInit, Component, PlatformRef, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech-i-dig-page',
  templateUrl: './tech-i-dig-page.component.pug',
  styleUrls: ['./tech-i-dig-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechIDigPageComponent implements AfterViewInit {
  externalLinkAlt: IconProp = faExternalLinkAlt;
  angleDoubleRight: IconProp = faAngleDoubleRight;
  constructor(private window: Window, title: Title) {
    title.setTitle('Adam Koch - Tech');
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
}

