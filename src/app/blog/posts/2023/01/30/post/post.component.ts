import { AfterViewInit, Component, Host, Injectable, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import hljs from '../../../../../../../../node_modules/highlight.js/lib/common';
import { DomSanitizer } from '@angular/platform-browser';
import code from './code.json';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.pug',
  styleUrls: ['./post.component.scss', "../../../../../../../../node_modules/highlight.js/styles/vs.css"]
})
export class PostComponent implements AfterViewInit {

  codeContent?: string;

  constructor() {
    this.codeContent = code.content;
  }

  ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el: Element) => {
      hljs.highlightElement(<HTMLElement>el);
    });
  }
}
