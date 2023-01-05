import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowApiService } from './service/show-api.service';
import { HomeComponent } from './pages/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
HomeComponent,
    DetailsComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule

  ],
  providers: [ShowApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
