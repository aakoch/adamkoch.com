import { AfterViewInit, Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.pug',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent { //implements OnChanges {
  
  // constructor(private pageTitle: Title) {
  // }

  // ngOnChanges(): void {
  //   let title = "";
  //   document.querySelectorAll('h1').forEach((el: any) => {
  //     title = el.innerText;
  //   });

  //   this.pageTitle.setTitle("Adam Koch - Articles - " + title)
  // }

}
