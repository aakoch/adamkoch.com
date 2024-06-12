import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.pug',
  styleUrls: ['./code-page.component.scss']
})
export class CodePageComponent {
  constructor(pageTitle: Title) {
    pageTitle.setTitle("Adam Koch - Tech - Code Samples");
  }
}
