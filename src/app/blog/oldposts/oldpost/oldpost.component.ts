import { Component, Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordPressPost } from '../wordpress-post.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
// import { Highlight } from 'ngx-highlightjs';

// declare var hljs: any;

// declare let ShortCode: any;
// import {ShortCode} from "../../../../js/shortcode";
// import * as comment from "./comment";
import { ShortCode } from "src/js/shortcode"

import hljs from '../../../../../node_modules/highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import { DomSanitizer } from '@angular/platform-browser';
hljs.registerLanguage('java', java);

@Injectable()
@Component({
  selector: 'app-oldpost',
  templateUrl: './oldpost.component.pug',
  styleUrls: ['./oldpost.component.scss']
})
export class PostcardComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  @Input() post?: WordPressPost;
  clicked: boolean = false;
  loaded: boolean = false;
  content: any = undefined;
  comments?: any;

  ngOnInit() {
    // console.dir(this.post);
    // console.log(JSON.stringify(Object.keys(!this.post)));
  }

  getData() {

    this.clicked = true;

    var newLink = "/assets/blogposts/" + this?.post?.link?.replace("https://www.adamkoch.com/", "") + "index.json";
    // console.log("newLink=", newLink);

    return this.http.get<any>(newLink).pipe(
      map((postJson: any, idx: number) => {
        // console.log("postJson=", postJson);
        this.content = this.sanitizer.bypassSecurityTrustHtml(new ShortCode().filter(postJson["content:encoded"]).replaceAll("\r\n\r\n", "<br>"));
        this.loaded = true;

        if (postJson["wp:comment"]) {
          postJson["wp:comment"].sort((comment1: {"wp:comment_id": string[]}, comment2: {"wp:comment_id": string[]}) => {
              parseInt(comment1["wp:comment_id"][0]) -
              parseInt(comment2["wp:comment_id"][0])
          });

          this.comments = postJson["wp:comment"];
        }

        // if (history.pushState) {
        //   history.pushState(this.postContent, null, '/posts/' + this.link.replace('https://www.adamkoch.com/', ''))
        // }


      })
    ).subscribe({
      next: (data: any) => {
        setTimeout(() => {
        // console.log("document.querySelectorAll('pre code')=", document.querySelectorAll('pre code'));
        // this.content = data['content:encoded']
        // this.comments = { ...data }

        document.querySelectorAll('pre code').forEach((el : any) => {
          // console.log("el=", el);
          hljs.highlightBlock(el);
        });
        document.querySelectorAll('code pre').forEach((el : any) => {
          // console.log("el=", el);
          el.innerHTML = el.innerHTML.replaceAll("<br>", "\n");
          hljs.highlightBlock(el);
        });
      }, 10);
      }, // success path
      error: error => this.content = error.message, // error path
    });

    // return this.http.get<Config>(this.configUrl)
    //   .pipe(
    //     retry(3), // retry a failed request up to 3 times
    //     catchError(this.handleError) // then handle the error
    //   );

    // this.configService.getConfig()
    //   .subscribe({
    //     next: (data: Config) => this.config = { ...data }, // success path
    //     error: error => this.error = error, // error path
    //   });


    // this.content = fetch(newLink, { mode: 'no-cors'})
    //   .then((response) => {
    //     // console.log("response=", response);
    //     return response.json();
    //   })
    //   .then((postJson) => {
    //     console.log("postJson=", postJson);
    //     this.content = shortcode(postJson["content:encoded"]).replaceAll("\r\n\r\n", "<br>");
    //     this.loaded = true;

    //     if (postJson["wp:comment"]) {
    //       postJson["wp:comment"].sort((comment1: {"wp:comment_id": string[]}, comment2: {"wp:comment_id": string[]}) => {
    //           parseInt(comment1["wp:comment_id"][0]) -
    //           parseInt(comment2["wp:comment_id"][0])
    //       });

    //       this.comments = postJson["wp:comment"];
    //     }

    //     // if (history.pushState) {
    //     //   history.pushState(this.postContent, null, '/posts/' + this.link.replace('https://www.adamkoch.com/', ''))
    //     // }

    //   })
    //   .then(() => {
    //     document.querySelectorAll('pre code').forEach((el : any) => {
    //       hljs.highlightElement(el);
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.comments = new Promise((resolve, reject) => reject("Sorry, there was an error loading the post."));
    //   })
  }
}
