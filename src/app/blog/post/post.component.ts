import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { from, fromEvent, interval, Observable, Subject, Subscription } from 'rxjs';
import { concatMap, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { debug } from 'scripts/logging.mjs';
// import { compile, compileFile } from 'pug';

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
  clicks?: Observable<Event>;
  clickSubscription?: Subscription ;

  constructor(private http: HttpClient, public route: ActivatedRoute, private sanitizer: DomSanitizer, title: Title) {
    title.setTitle("Adam Koch - Articles - " + route.snapshot.params['year'] + '-' + route.snapshot.params['month'] + '-' + route.snapshot.params['day'])
  }


  public onChange(event: Event): void {
    // let file = (<HTMLInputElement>event.currentTarget!).files![0];
    // let fileReader: FileReader = new FileReader();
    // let self = this;
    // fileReader.onloadend = function (x) {
    //   self.data = (<any>self.sanitizer.bypassSecurityTrustHtml("<p>" + fileReader.result?.toString() + "</p>")).changingThisBreaksApplicationSecurity;
    //   console.log(self.data);
    // }
    // fileReader.readAsText(file);
  }

  ngOnInit(): void {
    // this.clicked = true;

    // var newLink = "/" + this.route.snapshot.params['year'] + '/' + this.route.snapshot.params['month'] + '/' + this.route.snapshot.params['day'] + '/index.html';

    // // this.content = compileFile("posts/2021/09/08/post/post.component.pug")()


    // this.http.get<any>(newLink).pipe(
    //   map((html: any, idx: number) => {
    //     // this.content = this.sanitizer.bypassSecurityTrustHtml(html);
    //     this.loaded = true;
    //   })
    // ).subscribe({
    //   next: (data: any) => {
    //   }, // success path
    //   error: error => this.content = error.message, // error path
    // });

    // const intervalCount = interval(1000);
    // const takeFive = intervalCount.pipe(take(3));
    // this.clickSubscription = takeFive.subscribe({next: (x: any) => console.log(x), complete: () => console.log("completed")});

    // this.clicks = fromEvent(document, 'click');
    // const result = this.clicks.pipe(switchMap(() => interval(1000).pipe(take(4))), tap(() => this.clickSubscription?.unsubscribe()));
    // this.clickSubscription = result.subscribe(x => console.log(x));

    // this.clicks.subscribe({
    //   next: (data: any) => {
    //     console.log("next");
    //   },
    //   error: error => this.content = error.message, // error path
    //   complete: () => { 
    //     console.log("completed");
    //   }});

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   concatMap(ev => interval(1000).pipe(take(4)))
    // );
    // result.subscribe(x => console.log(x));

  }
}
