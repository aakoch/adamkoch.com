import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ColorChangingOutdoorLightComponent } from './color-changing-outdoor-light/color-changing-outdoor-light.component';
import { LightBulbsComponent } from './light-bulbs/light-bulbs.component';
import { SwampFanComponent } from './swamp-fan/swamp-fan.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsPageComponent,
    ColorChangingOutdoorLightComponent,
    LightBulbsComponent,
    SwampFanComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    NgOptimizedImage,
  ]
})
export class ProjectsModule { }
