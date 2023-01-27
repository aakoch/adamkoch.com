import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.pug',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  constructor(pageTitle: Title) {
    pageTitle.setTitle("Adam Koch - Tech - Code Samples");
  }

}
