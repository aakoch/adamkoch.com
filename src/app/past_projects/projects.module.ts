import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectsPageComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    NgOptimizedImage,
  ]
})
export class ProjectsModule { }
