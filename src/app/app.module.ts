import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingBodyComponent } from './landing/landing-body/landing-body.component';
import { CardComponent } from './card/card.component';
import { MinicardComponent } from './minicard/minicard.component';
import { LandingCardListComponent } from './landing/landing-card-list/landing-card-list.component';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { MinicardListComponent } from './minicard-list/minicard-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';
import { MinicardtestComponent } from './landing/minicardtest/minicardtest.component';
import { HrefDirective } from './tech/href.directive';

// import {fas} from '@fortawesome/free-solid-svg-icons';
// import {
//   faSquare as farSquare,
//   faCheckSquare as farCheckSquare,
// } from '@fortawesome/free-regular-svg-icons';
// import {
//   faStackOverflow,
//   faGithub,
//   faMedium,
// } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContactComponent,
    LandingBodyComponent,
    LandingCardListComponent,
    LandingComponent,
    LandingHeaderComponent,
    MinicardComponent,
    MinicardListComponent,
    FilenotfoundComponent,
    MinicardtestComponent,
    HrefDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
  exports: [
    SharedModule,
  ]
})
export class AppModule { 
}