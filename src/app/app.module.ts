import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesService } from './services/countries.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [CountriesService],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
