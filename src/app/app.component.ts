import { OrderDetails } from './../core/http/models/orderDetails';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';
import { OrderDetailsService } from 'src/core/http/order-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sWork';
  apiLoaded: Observable<boolean>;
  orderDetails: OrderDetails[];
  markers: any[] = [];
  center: any;

  constructor(private httpClient: HttpClient, private orderDetailsService: OrderDetailsService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );

  }
  ngOnInit(): void {
    this.orderDetailsService.getOrderDetails().subscribe((data: OrderDetails[]) => {
      this.orderDetails = [...data];
      this.orderDetails.forEach((value: any) => {
        this.markers.push({
          position: {
            lat: value.location.lat,
            lng: value.location.long
          },
          label: {
            color: 'red',
            text: value.address
          },
          title: value.name,
          options: { animation: google.maps.Animation.BOUNCE },
        })
      })
    })
  }

}
