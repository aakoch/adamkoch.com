import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

// import { compile, compileFile } from 'pug';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  data?: SafeHtml;
  title?: string;
  postId?: string;
  clicked = false;
  content?: SafeHtml;
  loaded = false;
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

}
