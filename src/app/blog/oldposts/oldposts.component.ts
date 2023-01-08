import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Injectable, Input, isDevMode, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { WordPressPost } from './wordpress-post.model';

@Component({
  selector: 'app-oldposts',
  templateUrl: './oldposts.component.html',
  styleUrls: ['./oldposts.component.scss']
})
@Injectable()
export class OldpostsComponent implements OnInit, OnDestroy {
  
  @Input() allPosts: WordPressPost[] = [];

  @Input() posts: WordPressPost[] = [];

  idx: number = 5;
  
  constructor() { 
    if (isDevMode()) {
      console.log("Oldpossts: constructor() this.posts.length=", this.posts.length);
      console.log("Oldpossts: constructor() this.allPosts.length=", this.allPosts.length);
    }
  }

  ngOnInit(): void {
    if (isDevMode()) {
      console.log("Oldpossts: ngOnInit() this.posts.length=", this.posts.length);
      console.log("Oldpossts: ngOnInit() this.allPosts.length=", this.allPosts.length);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // debugger;
    // let pos: [number, number] = viewportScroller.getScrollPosition();
    
    // if (isDevMode()) {
    //   console.log("onScroll this.posts.length=", this.posts.length);
    //   console.log("onScroll this.allPosts.length=", this.allPosts.length);
    // }
    if (event.target.scrollingElement.scrollTop + 20 >= event.target.scrollingElement.scrollHeight - window.innerHeight) {
      // if (isDevMode()) { console.log("loadMore()"); }
      this.loadMore();
    }
  }

  loadMore() {
    if (isDevMode()) { console.log("idx=", this.idx); }
    let more = this.allPosts.slice(this.idx, this.idx + 5)
    let count = this.posts.push(...more)
    this.idx += 5

    // if (isDevMode()) { console.log("new idx=", this.idx); }

    if (isDevMode()) {
      console.log("this.allPosts.length=", this.allPosts.length);
      console.log("this.posts.length=", this.posts.length);
    }

    // if (this.allPosts.length <= this.posts.length) {
    //   document.removeEventListener('scroll', this.onScroll)
    // }
  }

  ngOnDestroy(): void {
    // document.removeEventListener('scroll', this.onScroll)
  }
}