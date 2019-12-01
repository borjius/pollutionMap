import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyD6h8BpaouyPEMxT4kXWwvXit8a81sZ92Y'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
