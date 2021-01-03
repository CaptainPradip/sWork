import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  @Input('order') order: any;
  constructor() {

  }
  ngOnInit(): void {
    this.order.hide = true;
  }
  toggle() {
    this.order.hide = !this.order.hide;
  }
  openMap(location) {
    window.open(`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.long}`, "_blank")
  }

}
