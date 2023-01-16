import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  data?: SafeHtml;
  title?: string;
  postId ?: string;
  constructor(public route: ActivatedRoute, private sanitizer: DomSanitizer) {
    // console.dir(route);


    // var file:File = new File([], '../../../posts/' + route.snapshot.params['year'] + '/' + route.snapshot.params['month'] + '/' + route.snapshot.params['day'] + '/index.pug');
    // let fileReader = new FileReader();
    // fileReader.onload = (e) => {
    //   console.log("fileReader.result=", fileReader.result);
    // }
    // fileReader.readAsText(file);

    

    // import('../../../posts/' + route.snapshot.params['year'] + '/' + route.snapshot.params['month'] + '/' + route.snapshot.params['day'] + '/index.pug').then(m => console.log(m))
    //   .then((data) => {
    //     console.log("success: ", data)
    //   },
    //   () => {
    //     console.log("failed")
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   })
  }
  ngOnInit(): void {
    (async() => {
    const mydata = await import('../../../assets/' + this.route.snapshot.params['year'] + '/' + this.route.snapshot.params['month'] + '/' + this.route.snapshot.params['day'] + '/index.pug');
    console.log("mydata=", mydata.default);
    this.data = this.sanitizer.bypassSecurityTrustHtml(mydata.default);
    this.title = mydata.default.substring(mydata.default.indexOf("<h1>") + 4, mydata.default.indexOf("</h1>"));
    let start = mydata.default.indexOf("<div class=\"container post\" id=\"") + 32;
    this.postId = mydata.default.substring(start, mydata.default.indexOf("\">", start));
    console.log("postId=", this.postId);
    })();
  }
}
