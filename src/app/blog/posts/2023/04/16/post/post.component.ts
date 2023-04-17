import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import hljs from 'highlight.js/lib/common';
import { JsonLdService } from 'src/app/shared/json-ld.service';
import code from './code_resolved.json';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.pug',
  styleUrls: ['./post.component.scss', '../../../../../../css/mono.scss']
})
export class PostComponent implements OnInit, AfterViewInit {

  landingPageCode: string;
  ssePageCode: string;
  dbUpdatePageCode: string;
  
  constructor(private viewContainerRef: ViewContainerRef, private meta: Meta, private jsonLdService: JsonLdService) {
    this.landingPageCode = code.landing_page;
    this.ssePageCode = code.sse_page;
    this.dbUpdatePageCode = code.db_update_page;
    meta.addTag({ name: "keywords", content: "php,javascript,node,sse,server-sent events" });
  }

  ngOnInit() {
    this.jsonLdService.insertSchema(
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Server-Sent Events implemented with PHP",
        "image": [
        ],
        "datePublished": "2023-04-16T23:50:51.164Z",
        "dateModified": "2023-04-16T23:50:56.617Z",
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
