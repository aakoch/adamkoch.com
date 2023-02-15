import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.pug',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() heading?: String;
  @Input() language?: String;
  @Input() body?: String;
  clazzName?: String;

  ngOnInit() {
    this.clazzName = "language-" + this.language;
  }

}
