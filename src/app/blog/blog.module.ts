import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { PostpreviewComponent } from './postpreview/postpreview.component';
import { PostcardComponent } from './oldposts/oldpost/oldpost.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent as PostComponent20221218 } from './posts/2022/12/18/post/post.component';
import { ExampleFormComponent } from './posts/2023/02/07/post/example-form/example-form.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostpreviewComponent,
    PostcardComponent,
    CommentComponent,
    PostComponent,
    PostComponent20221218,
    ExampleFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  exports: [ PostComponent ],
  providers: [NgOptimizedImage]
})

export class BlogModule { }
