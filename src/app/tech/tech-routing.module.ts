import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeComponent } from './code/code.component';
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
          { path: '', component: CodeComponent },
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
