import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OverOnsComponent } from './over-ons/over-ons.component';
import { BeheerMeeComponent } from './beheer-mee/beheer-mee.component';
import { HoeComponent } from './hoe/hoe.component';
import { BedrijvenComponent } from './bedrijven/bedrijven.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PartnersComponent } from './partners/partners.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { CookieComponent } from './footer/cookie/cookie.component';
import {ReactiveFormsModule} from '@angular/forms';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    OverOnsComponent,
    BeheerMeeComponent,
    HoeComponent,
    BedrijvenComponent,
    NewsfeedComponent,
    PartnersComponent,
    FooterComponent,
    PrivacyComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
