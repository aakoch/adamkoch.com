import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.pug',
  styleUrls: ['./landing-page.component.scss', '../../css/bootstrap.scss', '../../css/main.css']
})
export class LandingPageComponent {
  title = 'adamkoch-angular';
}
