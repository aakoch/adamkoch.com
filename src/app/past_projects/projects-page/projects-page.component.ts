import { AfterViewInit, Component, isDevMode } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.pug',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements AfterViewInit {
  constructor(private window: Window, title: Title) {
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
  isDevMode() {
    return isDevMode();
  }
}
