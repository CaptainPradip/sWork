import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private httpClient: HttpClient,) { }

  getOrderDetails(): Observable<any> {
    return this.httpClient.get("http://demo8360259.mockable.io/clients")
  }
}
