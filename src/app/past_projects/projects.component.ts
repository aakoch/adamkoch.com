import { Component, isDevMode } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.pug',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private window: Window, title: Title) {
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
  isDevMode() {
    return isDevMode();
  }
}
