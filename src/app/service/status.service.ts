import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getPickupStatus(userId:number,orderId:number):Observable<string>{
    return this.httpClient.get<string>(`${this.baseURL}/user/pickup_status/${userId}/${orderId}`);
  }

  getDispatchStatus(userId:number,orderId:number):Observable<String>{
    return this.httpClient.get<String>(`${this.baseURL}/user/dispatch_status/${userId}/${orderId}`);
  }

  getArrivingStatus(userId:number,orderId:number):Observable<String>{
    return this.httpClient.get<String>(`${this.baseURL}/user/arriving_status/${userId}/${orderId}`);
  }

  getDeliveryStatus(userId:number,orderId:number):Observable<String>{
    return this.httpClient.get<String>(`${this.baseURL}/user/delivery_status/${userId}/${orderId}`);
  }
}
