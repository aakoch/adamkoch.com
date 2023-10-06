import { Component, Injectable, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';

// import { Md5 } from 'ts-md5/dist/md5';
const md5 = new Md5();

@Injectable()
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.pug',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  author: any;
  date: any;
  content: any;
  email: any;
  hash: any;
  url: any = "fake";

  ngOnInit() {
    this.hash = Md5.hashStr(this.email.toLowerCase().trim());
  }
}
