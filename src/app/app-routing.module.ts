import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Router } from 'express';
import { TechComponent } from './tech/tech.component';
import { CodeComponent } from './tech/code/code.component';
import { JqComponent } from './tech/code/jq/jq.component';
import { ShellComponent } from './tech/code/shell/shell.component';
import { PreloadAllModules } from '@angular/router';
import { TechIDigPageComponent } from './tech/tech-i-dig-page/tech-i-dig-page.component';
import { ContactComponent } from './contact/contact.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'posts', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'past_projects', loadChildren: () => import('./past_projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tech', component: TechComponent, children: [
    { path: '', component: TechIDigPageComponent },
    { path: 'code', children: [
      { path: '', component: CodeComponent },
      { path: 'jq', component: JqComponent },
      { path: 'shell', component: ShellComponent },
    ]},
  ] },
  { path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule) },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: FilenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
