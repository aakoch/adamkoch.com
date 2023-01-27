import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jq',
  templateUrl: './jq.component.pug',
  styleUrls: ['./jq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JqComponent {

  constructor(pageTitle: Title, route: ActivatedRoute) {
    console.log(route.snapshot.data);
    pageTitle.setTitle("Adam Koch - Tech - Code Samples - JQ");
  }

}
