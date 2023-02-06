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


  componentCodeContent?: string;
  serviceCodeContent?: string;

  constructor(private viewContainerRef: ViewContainerRef) {
    this.componentCodeContent = code.component;
    this.serviceCodeContent = code.service;
  }

  ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el: Element) => {
      hljs.highlightElement(<HTMLElement>el);
    });

    
    // this.viewContainerRef.element.nativeElement.innerHTML = this.viewContainerRef.element.nativeElement.innerHTML.replaceAll(/`(.*?)`/g, "<span class='short-code'>$1</span>");
    
    // console.log(this.viewContainerRef.element.nativeElement.innerHTML);


  }
}
