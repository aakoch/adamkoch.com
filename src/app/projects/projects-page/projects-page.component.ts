import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.pug',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  isDevMode() {
    return isDevMode();
  }
}
