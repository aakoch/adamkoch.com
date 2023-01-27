import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { WordPressPost } from './oldposts/wordpress-post.model';
import OLD_POSTS from "../../data/professional_publish.json";
import { Title } from '@angular/platform-browser';

let idx = 5
const fullPosts: WordPressPost[] = sort(OLD_POSTS);
const posts: WordPressPost[] = fullPosts.slice(0, idx)

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
export class BlogComponent implements OnInit, AfterViewInit {
  posts: WordPressPost[] = posts;
  allPosts: WordPressPost[] = fullPosts;

  constructor(private window: Window, title: Title) {
    title.setTitle("Adam Koch - Articles")
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }


}
