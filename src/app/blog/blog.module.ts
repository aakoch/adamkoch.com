import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    BlogComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
