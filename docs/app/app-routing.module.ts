import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {BeheerMeeComponent} from './beheer-mee/beheer-mee.component';
import {HoeComponent} from './hoe/hoe.component';
import {BedrijvenComponent} from './bedrijven/bedrijven.component';
import {NewsfeedComponent} from './newsfeed/newsfeed.component';
import {PartnersComponent} from './partners/partners.component';
import {OverOnsComponent} from './over-ons/over-ons.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'beheer-mee', component: BeheerMeeComponent},
  {path: 'hoe', component: HoeComponent},
  {path: 'bedrijven', component: BedrijvenComponent},
  {path: 'newsfeed', component: NewsfeedComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'over-ons', component: OverOnsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
