import { AfterViewInit, Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.pug',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements AfterViewInit {
  constructor(private window: Window) {
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
  isDevMode() {
    return isDevMode();
  }
}
