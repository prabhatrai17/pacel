import { Component, OnInit } from '@angular/core';

interface OrderDetails {
  orderId: number;
  driverId: number;
  timestamp: String;
  // orderStatus: String;
  paymentRecieved: number;
  isActive: boolean;
}

interface SampleOrderStatus {
  orderStatus: String;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orderDetails: OrderDetails[] = [
    {orderId: 12, driverId: 5, timestamp:'01-09-2022 02:53:08',paymentRecieved: 0,isActive: false},
    {orderId: 13, driverId: 6, timestamp:'01-09-2022 02:53:08',paymentRecieved: 0,isActive: false},
    {orderId: 14, driverId: 7, timestamp:'01-09-2022 02:53:08',paymentRecieved: 0,isActive: true}
  ];

  // orderDetails: OrderDetails[] = [
  //   {orderId: 12, driverId: 5, timestamp:'01-09-2022 02:53:08',orderStatus: "Order Picked Up",paymentRecieved: 0,isActive: true},
  //   {orderId: 13, driverId: 6, timestamp:'01-09-2022 02:53:08',orderStatus: "Order Delivered",paymentRecieved: 0,isActive: true},
  //   {orderId: 14, driverId: 7, timestamp:'01-09-2022 02:53:08',orderStatus: "Order Delivered",paymentRecieved: 0,isActive: false}
  // ];
  
  sampleOrderStatus: SampleOrderStatus[] = [
    {orderStatus: "Driver on the way to pick order"},
    {orderStatus: "Driver on the way to deliver order"},
    {orderStatus: "Order Delivered"}
  ];

  // selectedStatus:any;
}