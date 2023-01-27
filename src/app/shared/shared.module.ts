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
import { NavComponent } from './nav/nav.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faFeather, faIdCard, faMicrochip, faPaintBrush, faPencilRuler, faCube, faArchive, faCodeBranch, faExternalLinkAlt, faAngleDoubleRight, faSquare, faArrowUp, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MinicardtestComponent } from '../landing/minicardtest/minicardtest.component';

@NgModule({
  declarations: [
    CommentFormComponent,
    HeaderSvgComponent,
    NavbarComponent,
    PageComponent,
    PageheaderComponent,
    ScrollListenerDirective,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
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
    NavComponent,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // library.addIconPacks(fas);
    library.addIcons(
      faFeather, faPencilRuler, faArchive, faMicrochip, faPaintBrush, faIdCard, faTwitter, faCube, faCodeBranch, faAngleDoubleRight, faExternalLinkAlt, faSquare, faArrowUp, faAngleDoubleLeft
    );
  } }
