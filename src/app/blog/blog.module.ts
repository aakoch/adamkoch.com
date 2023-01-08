import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostpreviewComponent } from './post-list/postpreview/postpreview.component';
import { PostcardComponent } from './oldposts/oldpost/oldpost.component';
import { CommentComponent } from './comment/comment.component';
import { OldpostsComponent } from './oldposts/oldposts.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostListComponent,
    PostpreviewComponent,
    PostcardComponent,
    CommentComponent,
    OldpostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
  ]
})
export class BlogModule { }
