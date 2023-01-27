import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-light-bulbs',
  templateUrl: './light-bulbs.component.pug',
  styleUrls: ['./light-bulbs.component.scss']
})
export class LightBulbsComponent implements AfterViewInit {
  src: string = "";

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    const script2 = this.document.createElement("script");
    script2.setAttribute("src", "https://www.tiktok.com/embed.js");
    document.getElementsByTagName("body")[0].appendChild(script2)
  }

}
