import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import run from './index';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.pug',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    run();
  }

}