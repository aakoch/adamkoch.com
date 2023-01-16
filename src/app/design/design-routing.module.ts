import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignPageComponent } from './design-page/design-page.component';
import { DesignComponent } from './design.component';
import { NgOptimizedImage } from '@angular/common'

const routes: Routes = [{ path: '', component: DesignComponent, children: [
  { path: '', component: DesignPageComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes), NgOptimizedImage],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
