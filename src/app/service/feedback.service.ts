import { Injectable } from '@angular/core';
import { Feedback } from '../model/feedback';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  addFeedback(feedback:Feedback,userId:any,orderId:any){
    console.log("inside feeback service"+feedback,userId,orderId);
    return this.httpClient.post(`${this.baseURL}/user/feedback/submit/${userId}/${orderId}`,feedback);
  }
}
