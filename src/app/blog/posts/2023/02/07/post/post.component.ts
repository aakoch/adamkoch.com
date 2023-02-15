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
export class PostComponent implements OnInit, AfterViewInit {

  componentCodeContent: string;
  serviceCodeContent: string;
  serviceStartCodeContent: string;

  constructor(private viewContainerRef: ViewContainerRef, private meta: Meta, private jsonLdService: JsonLdService) {
    this.componentCodeContent = code.component;
    this.serviceCodeContent = code.service;
    this.serviceStartCodeContent = code.serviceStart;
    meta.addTag({ name: "keywords", content: "angular,netlify,rxjs,form,forms,submission" });
  }

  ngOnInit() {
    this.jsonLdService.insertSchema(
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "How to submit a template form with Angular on Netlify using RxJS Observables",
        "image": [
          "assets/img/Angular_full_color_logo.svg",
          "assets/img/Netlify_logo.svg",
          "assets/img/RxJs_Logo_Basic.svg"
        ],
        "datePublished": "2023-02-07T18:44-05:00",
        "dateModified": "2023-02-14T20:41-06:00",
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
