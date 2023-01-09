import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.pug',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isDevMode() {
    return isDevMode();
  }
}
