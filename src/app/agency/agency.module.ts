import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    AgencyRoutingModule
  ],
  declarations: [
    LandingComponent, 
    ServicesComponent, 
    AboutComponent, 
    ContactComponent
    ]
})
export class AgencyModule { }
