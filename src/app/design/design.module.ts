import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { DesignComponent } from './design.component';
import { SharedModule } from '../shared/shared.module';
import { DesignPageComponent } from './design-page/design-page.component';
import { NgOptimizedImage } from '@angular/common'


@NgModule({
  declarations: [
    DesignComponent,
    DesignPageComponent,
  ],
  imports: [
    CommonModule,
    DesignRoutingModule,
    SharedModule,
    NgOptimizedImage,
  ]
})
export class DesignModule { }
