import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { FormsModule } from '@angular/forms'
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderSvgComponent } from './header-svg/header-svg.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ScrollListenerDirective } from './scroll-listener.directive';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PageheaderComponent, NavbarComponent, HeaderSvgComponent, ScrollListenerDirective, PageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [PageheaderComponent, CommonModule, FormsModule, NavbarComponent, HttpClientModule, HttpClientJsonpModule, ScrollListenerDirective, PageComponent]
})
export class SharedModule { }
