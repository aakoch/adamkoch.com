import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss', '../css/main.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'adamkoch-angular';
}
