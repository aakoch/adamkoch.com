import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent as PostComponent20210908 } from './2021/09/08/post/post.component';
import { PostComponent as PostComponent20210917 } from './2021/09/17/post/post.component';
import { PostComponent as PostComponent20211014 } from './2021/10/14/post/post.component';
import { PostComponent as PostComponent20211022 } from './2021/10/22/post/post.component';
import { PostComponent as PostComponent20211222 } from './2021/12/22/post/post.component';
import { PostComponent as PostComponent20220430 } from './2022/04/30/post/post.component';
import { PostComponent as PostComponent20220619 } from './2022/06/19/post/post.component';
import { PostComponent as PostComponent20220627 } from './2022/06/27/post/post.component';

const routes: Routes = [
  { path: '2022/06/27', title: 'Roe v Wade', component: PostComponent20220627 },
  { path: '2022/06/19', title: 'Engineering Process', component: PostComponent20220619 },
  { path: '2022/04/30', title: 'Lucid Gloves', component: PostComponent20220430 },
  { path: '2021/12/22', title: 'GitHub Username', component: PostComponent20211222 },
  { path: '2021/10/22', title: 'Spring Cloud Contracts', component: PostComponent20211022 },
  { path: '2021/10/14', title: 'Recruiter Tips', component: PostComponent20211014 },
  { path: '2021/09/17', title: 'My Stack', component: PostComponent20210917 },
  { path: '2021/09/08', title: 'Moving off Wordpress and on to Netlify', component: PostComponent20210908 }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgOptimizedImage],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
