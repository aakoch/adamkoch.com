import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent as PostComponent20220627 } from './2022/06/27/post/post.component';
import { PostComponent as PostComponent20220619 } from './2022/06/19/post/post.component';
import { PostComponent as PostComponent20220430 } from './2022/04/30/post/post.component';
import { PostComponent as PostComponent20211222 } from './2021/12/22/post/post.component';
import { PostComponent as PostComponent20211022 } from './2021/10/22/post/post.component';
import { PostComponent as PostComponent20211014 } from './2021/10/14/post/post.component';
import { PostComponent as PostComponent20210917 } from './2021/09/17/post/post.component';
import { PostComponent as PostComponent20210908 } from './2021/09/08/post/post.component';
import { SharedModule } from '../../shared/shared.module';
import { PostComponent } from './2023/01/30/post/post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent20220627,
    PostComponent20220619,
    PostComponent20220430,
    PostComponent20211222,
    PostComponent20211022,
    PostComponent20211014,
    PostComponent20210917,
    PostComponent20210908,
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    NgOptimizedImage,
  ],
  exports: []
})
export class PostsModule { }
