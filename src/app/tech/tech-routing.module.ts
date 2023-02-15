import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodePageComponent } from './code/code-page.component';
import { JqComponent } from './code/jq/jq.component';
import { TechIDigPageComponent } from './tech-i-dig-page/tech-i-dig-page.component';
import { ShellComponent } from './code/shell/shell.component';
import { TechComponent } from './tech.component';

const routes: Routes = [
  {
    path: '', component: TechComponent, children: [
      { path: '', component: TechIDigPageComponent },
      {
        path: 'code', children: [
          { path: '', component: CodePageComponent },
          { path: 'jq', component: JqComponent },
          { path: 'shell', title: 'Adam Koch - Tech - Code - Shell', component: ShellComponent },
        ]
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes), NgOptimizedImage],
  exports: [RouterModule]
})
export class TechRoutingModule { }
