import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TechIDigPageComponent } from './tech-i-dig-page/tech-i-dig-page.component';
import { CodePageComponent } from './code/code-page.component';
import { JqComponent } from './code/jq/jq.component';
import { ShellComponent } from './code/shell/shell.component'
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './tech.component';

@NgModule({
  declarations: [
    TechComponent,
    ShellComponent,
    TechIDigPageComponent,
    JqComponent,
    CodePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgOptimizedImage,
    TechRoutingModule,
  ],
  exports: [ ],
  providers: [NgOptimizedImage]
})

export class TechModule { }
