import { AfterViewInit, Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.pug',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private window: Window) {
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
  isDevMode() {
    return isDevMode();
  }
}
