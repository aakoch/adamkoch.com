import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { FormsModule } from '@angular/forms';
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
import { CodeComponent } from './code/code.component';

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
    CodeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
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
    ScrollListenerDirective,
    NavComponent,
    FontAwesomeModule,
    CodeComponent,
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // library.addIconPacks(fas);
    library.addIcons(
      faFeather, faPencilRuler, faArchive, faMicrochip, faPaintBrush, faIdCard, faTwitter, faCube, faCodeBranch, faAngleDoubleRight, faExternalLinkAlt, faSquare, faArrowUp, faAngleDoubleLeft
    );
  } }
