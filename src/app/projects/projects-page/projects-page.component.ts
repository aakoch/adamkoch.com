import { Component, isDevMode } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.pug',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  constructor(title: Title) {
    title.setTitle('Adam Koch - Projects');
  }
  isDevMode() {
    return isDevMode();
  }
}
