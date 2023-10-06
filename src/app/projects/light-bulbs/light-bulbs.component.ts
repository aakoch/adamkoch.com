import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-light-bulbs',
  templateUrl: './light-bulbs.component.pug',
  styleUrls: ['./light-bulbs.component.scss']
})
export class LightBulbsComponent implements AfterViewInit {
  src = "";

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    const script2 = this.document.createElement("script");
    script2.setAttribute("src", "https://www.tiktok.com/embed.js");
    document.getElementsByTagName("body")[0].appendChild(script2)
    // const that = this;
    // function printEventListeners() {
    //   console.log("event listeners", (that.document as any).eventListeners())
    // }
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(tap( (event: Event) => {
    //   console.log("got event", event);
    // }), first());
    // result.subscribe({ next: x => {console.log(x); printEventListeners();} , error: e => console.error(e), complete: () => { console.log("completed"); printEventListeners(); setTimeout(printEventListeners, 100)} });

  }

}
