import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(public route: ActivatedRoute) {
    console.dir(route);
    // () => import('../../../posts/' + route.snapshot.params['year'] + '/' + route.snapshot.params['month'] + '/' + route.snapshot.params['day']).then(m => console.log(m))
  }
}
