import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';
import { LandingComponent } from './landing/landing.component';
import { MinicardtestComponent } from './landing/minicardtest/minicardtest.component';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    // console.log('routerState.url = ' + routerState.url);

    let title = this.buildTitle(routerState);
    if (title === undefined) {
      const indexOfSecondSlash = routerState.url.indexOf('/', 1)
      title = routerState.url.substring(1, 2).toLocaleUpperCase() + routerState.url.substring(2, indexOfSecondSlash == -1 ? routerState.url.length : indexOfSecondSlash).replaceAll("_", " ");
    }
    if (title !== undefined) {
      this.title.setTitle(`Adam Koch - ${title}`);
    }
  }
}

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'posts', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'past_projects', loadChildren: () => import('./past_projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tech', loadChildren: () => import('./tech/tech.module').then(m => m.TechModule) },
  { path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule) },
  { path: 'contact', title: 'Contact Me', component: ContactComponent },
  { path: 'minicardtest', component: MinicardtestComponent },
  { path: '**', component: FilenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ]
})
export class AppRoutingModule {

}
