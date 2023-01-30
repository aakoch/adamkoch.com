import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [{ path: '', component: ProjectsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes), NgOptimizedImage],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
