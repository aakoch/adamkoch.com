import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { PostComponent as PostComponent20221218 } from './posts/2022/12/18/post/post.component';

const routes: Routes = [
  { path: '2022/12/18', component: PostComponent20221218 },
  { path: 'test', component: PostComponent },
  // { path: ':year/:month/:day', component: PostComponent },
  { path: '', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  // { path: ':year/:month/:day', loadChildren: () => import(`../../../posts/'${route.activated.params['year']}/${month}/${day}/index.pug`).then(m => m.PostComponent) },
  { path: '**', component: BlogComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
