import { AfterViewInit, Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.pug',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements AfterViewInit {
  constructor(private window: Window) {
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
  isDevMode() {
    return isDevMode();
  }
}
