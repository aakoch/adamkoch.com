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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TechComponent } from './tech/tech.component';
import { TechIDigPageComponent } from './tech/tech-i-dig-page/tech-i-dig-page.component';
import { CodeComponent } from './tech/code/code.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JqComponent } from './tech/code/jq/jq.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { ShellComponent } from './tech/code/shell/shell.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CardComponent,
    MinicardComponent,
    LandingCardListComponent,
    LandingHeaderComponent,
    MinicardListComponent,
    PrefetchDirective,
    LandingPageComponent,
    TechComponent,
    TechIDigPageComponent,
    CodeComponent,
    HeaderComponent,
    NavbarComponent,
    JqComponent,
    PageheaderComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
