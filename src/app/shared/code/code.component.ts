import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.pug',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() heading?: string;
  @Input() language?: string;
  @Input() body?: string;
  clazzName?: string;

  ngOnInit() {
    this.clazzName = "language-" + this.language;
  }

}
