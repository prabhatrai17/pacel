
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../model/complaint';
@Injectable({
  providedIn: 'root'
})
export class ComplaintStatusService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }
  getComplainReceived(userId:any,complaintId:any){
    console.log("complaintid before pass: "+complaintId);
    return this.httpClient.get<string>(`${this.baseURL}/user/complaint_received/${userId}/${complaintId}`);
  }
  getEnquiring(userId:any,complaintId:any){
    return this.httpClient.get<string>(`${this.baseURL}/user/enquiring/${userId}/${complaintId}`);
  }
  getActionTaken(userId:any,complaintId:any){
    return this.httpClient.get<string>(`${this.baseURL}/user/action_taken/${userId}/${complaintId}`);
  }

  addComplaint(complaint:Complaint,userId:any,orderId:any){
    console.log("inside complaint service "+orderId);
    console.log(complaint);
    return this.httpClient.post(`${this.baseURL}/user/submit/${userId}/${orderId}`,complaint);
  }

}
