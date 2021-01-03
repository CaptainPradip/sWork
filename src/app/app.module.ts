import { OrderDetailsService } from './../core/http/order-details.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  ],
  providers: [OrderDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
