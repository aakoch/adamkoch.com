import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorChangingOutdoorLightComponent } from './color-changing-outdoor-light/color-changing-outdoor-light.component';
import { LightBulbsComponent } from './light-bulbs/light-bulbs.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectsComponent } from './projects.component';
import { SwampFanComponent } from './swamp-fan/swamp-fan.component';
import { RingGameComponent } from './ring-game/ring-game.component';
import { NgOptimizedImage } from '@angular/common'

const routes: Routes = [{ path: '', component: ProjectsComponent, children: [
  { path: '', component: ProjectsPageComponent },
  { path: 'color-changing-outdoor-light', component: ColorChangingOutdoorLightComponent },
  { path: 'light-bulbs', component: LightBulbsComponent },
  { path: 'swamp-fan', component: SwampFanComponent },
  { path: 'ring-game', component: RingGameComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes), NgOptimizedImage],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
