import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.pug',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent {
  isDevMode() {
    return isDevMode();
  }
}
