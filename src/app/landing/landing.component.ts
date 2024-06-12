import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.pug',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent {
  title = 'Adam Koch - Software Developer and Clean Code Advocate';
}
