import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { TimingsComponent } from './details/timings/timings.component';
import { TitleComponent } from './details/title/title.component';
import { VenueComponent } from './details/venue/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    VenueComponent,
    TimingsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
