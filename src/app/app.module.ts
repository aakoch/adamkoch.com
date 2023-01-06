import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CardComponent } from './card/card.component';
import { MinicardComponent } from './minicard/minicard.component';
import { LandingCardListComponent } from './landing-card-list/landing-card-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { MinicardListComponent } from './minicard-list/minicard-list.component';
import { PrefetchDirective } from './prefetch.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CardComponent,
    MinicardComponent,
    LandingCardListComponent,
    LandingHeaderComponent,
    MinicardListComponent,
    PrefetchDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
