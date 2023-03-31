import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core';

import { Meta } from '@angular/platform-browser';
import hljs from 'highlight.js/lib/common';
import { JsonLdService } from 'src/app/shared/json-ld.service';
import code from './code.json';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.pug',
  styleUrls: ['./post.component.scss', "../../../../../../../../node_modules/highlight.js/styles/vs.css"]
})
export class MotionCanvasComponent implements OnInit, AfterViewInit {

  setupCodeContent: string;
  addCodeContent: string;
  animateCodeContent: string;

  constructor(private viewContainerRef: ViewContainerRef, private meta: Meta, private jsonLdService: JsonLdService) {
    this.setupCodeContent = code.setup;
    this.addCodeContent = code.add;
    this.animateCodeContent = code.animate;
    meta.addTag({ name: "keywords", content: "angular,netlify,rxjs,form,forms,submission" });
  }

  ngOnInit() {
    this.jsonLdService.insertSchema(
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Motion Canvas Fun",
        "image": [
          "assets/img/motion_canvas_logo.svg",
        ],
        "datePublished": "2023-03-30T18:44-05:00",
        "dateModified": "2023-03-30T20:41-06:00",
        "author": [{
          "@type": "Person",
          "name": "Adam Koch",
          "url": "https://www.adamkoch.com/"
        }]
      }, 'structured-data-news');
  }

  ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el: Element) => {
      hljs.highlightElement(<HTMLElement>el);
    });
  }
}
