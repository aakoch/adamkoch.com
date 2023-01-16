import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderSvgComponent } from './header-svg/header-svg.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollListenerDirective } from './scroll-listener.directive';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    CommentFormComponent,
    HeaderSvgComponent,
    NavbarComponent,
    PageComponent,
    PageheaderComponent,
    ScrollListenerDirective,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentFormComponent,
    CommonModule,
    FooterComponent,
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    PageComponent,
    PageheaderComponent,
    ReactiveFormsModule,
    ScrollListenerDirective,
  ]
})
export class SharedModule { }
