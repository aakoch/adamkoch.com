import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Router } from 'express';
import { TechComponent } from './tech/tech.component';
import { CodeComponent } from './tech/code/code.component';
import { JqComponent } from './tech/code/jq/jq.component';
import { ShellComponent } from './tech/code/shell/shell.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'posts', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tech', component: TechComponent },
  { path: 'tech/code', component: CodeComponent },
  { path: 'tech/code/jq', component: JqComponent },
  { path: 'tech/code/shell', component: ShellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
