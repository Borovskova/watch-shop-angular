import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Banner1Component } from './components/banner1/banner1.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import { Banner2Component } from './components/banner2/banner2.component';
import { Banner3Component } from './components/banner3/banner3.component';
import { Banner4Component } from './components/banner4/banner4.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Banner1Component,
    ProductCardsComponent,
    Banner2Component,
    Banner3Component,
    Banner4Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
