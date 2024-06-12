import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { WordPressPost } from './oldposts/wordpress-post.model';
import OLD_POSTS from "../../data/professional_publish.json";
import { Title } from '@angular/platform-browser';

const fullPosts: WordPressPost[] = sort(OLD_POSTS);
let initialPosts: WordPressPost[] = fullPosts.slice(0, 5)

function sort(posts: WordPressPost[]) {
  return posts.sort((post1: any, post2: any) => {
    // console.log(post1.title.slice(0, 1));

    // by title:
    // return post1.title.slice(0, 1).localeCompare(post2.title.slice(0, 1));

    // by date:
    // console.log(Date.parse(post1["wp:post_date"]))
    return Date.parse(post2["wp:post_date"]) - Date.parse(post1["wp:post_date"]); // descending

    // by id:
    // return post1["wp:post_id"] - post2["wp:post_id"];
  });
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.pug',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {
  posts: WordPressPost[] = initialPosts;
  allPosts: WordPressPost[] = fullPosts;

  idx = 5;

  constructor(private window: Window, title: Title) {
    title.setTitle("Adam Koch - Articles")
  }

  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.scrollingElement.scrollTop + 20 >= event.target.scrollingElement.scrollHeight - window.innerHeight) {
      this.loadMore();
    }
  }

  loadMore() {
    console.log("load more. idx = " + this.idx)
    this.idx += 5
    this.posts = fullPosts.slice(0, this.idx)
    console.log("posts = " + this.posts)
  }

}

