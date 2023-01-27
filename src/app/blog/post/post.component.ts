import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { catchError, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  data?: SafeHtml;
  title?: string;
  postId?: string;
  clicked: boolean = false;
  content?: SafeHtml;
  loaded: boolean = false;
  comments: any;
  
  constructor(private http: HttpClient, public route: ActivatedRoute, private sanitizer: DomSanitizer, title: Title) {
    // console.dir(route);
    title.setTitle("Adam Koch - Articles - " + route.snapshot.params['year'] + '-' + route.snapshot.params['month'] + '-' + route.snapshot.params['day'])
  }
  ngOnInit(): void {
    // (async () => {
    //   const mydata = await import('../../../assets/' + this.route.snapshot.params['year'] + '/' + this.route.snapshot.params['month'] + '/' + this.route.snapshot.params['day'] + '/index.html');
    //   console.log("mydata=", mydata.default);
    //   this.data = this.sanitizer.bypassSecurityTrustHtml(mydata.default);
    //   this.title = mydata.default.substring(mydata.default.indexOf("<h1>") + 4, mydata.default.indexOf("</h1>"));
    //   let start = mydata.default.indexOf("<div class=\"container post\" id=\"") + 32;
    //   this.postId = mydata.default.substring(start, mydata.default.indexOf("\">", start));
    //   console.log("postId=", this.postId);
    // })();


    this.clicked = true;
    
    var newLink = "/" + this.route.snapshot.params['year'] + '/' + this.route.snapshot.params['month'] + '/' + this.route.snapshot.params['day'] + '/index.html';
    console.log("newLink=", newLink);

    this.http.get<any>(newLink).pipe(
      map((postJson: any, idx: number) => {
        console.log("postJson=", postJson);
        this.content = this.sanitizer.bypassSecurityTrustHtml(postJson);
        this.loaded = true;
      })
    ).subscribe({
      next: (data: any) => {
      }, // success path
      error: error => this.content = error.message, // error path
    });

  }
}
