import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [{ path: '', component: ProjectsComponent, children: [
  { path: '', component: ProjectsPageComponent },
  // { path: ':project-name', component: ProjectComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes), NgOptimizedImage],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
