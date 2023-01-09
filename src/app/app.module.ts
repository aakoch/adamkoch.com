import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingBodyComponent } from './landing/landing-body/landing-body.component';
import { CardComponent } from './card/card.component';
import { MinicardComponent } from './minicard/minicard.component';
import { LandingCardListComponent } from './landing/landing-card-list/landing-card-list.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { MinicardListComponent } from './minicard-list/minicard-list.component';
import { PrefetchDirective } from './prefetch.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { TechComponent } from './tech/tech.component';
import { TechIDigPageComponent } from './tech/tech-i-dig-page/tech-i-dig-page.component';
import { CodeComponent } from './tech/code/code.component';
// import { HeaderComponent } from './header/header.component';
import { JqComponent } from './tech/code/jq/jq.component';
import { ShellComponent } from './tech/code/shell/shell.component'
import { SharedModule } from './shared/shared.module';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LandingBodyComponent,
    CardComponent,
    MinicardComponent,
    LandingCardListComponent,
    LandingHeaderComponent,
    MinicardListComponent,
    PrefetchDirective,
    LandingComponent,
    TechComponent,
    TechIDigPageComponent,
    CodeComponent,
    // HeaderComponent,
    JqComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SharedModule,
    // Router
  ]
})
export class AppModule { }
