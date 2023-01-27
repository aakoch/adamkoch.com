import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Title } from '@angular/platform-browser';
import run from './index';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.pug',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterViewInit{
  constructor(title: Title) {
    title.setTitle("Adam Koch - Articles - Box Animations")
  }
  ngAfterViewInit(): void {
    run();
  }

}