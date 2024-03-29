import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import hljs from 'highlight.js/lib/core';
import shell from 'highlight.js/lib/languages/shell';
hljs.registerLanguage('shell', shell);

declare const window: any;

import tippy from 'tippy.js'


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.pug',
  styleUrls: ['./shell.component.scss', "../../../../../node_modules/tippy.js/dist/tippy.css", "../../../../../node_modules/highlight.js/styles/github.css"]
})
export class ShellComponent implements OnInit {

  constructor(pageTitle: Title) {
    pageTitle.setTitle("Adam Koch - Tech - Code Samples - Shell");
  }
  
  ngOnInit(): void {
    tippy('[data-tippy-content]', {placement:'bottom'});
    window.hljs = hljs;
  }

}
