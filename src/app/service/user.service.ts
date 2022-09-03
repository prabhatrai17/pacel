import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
  
  getUser( id:number):Observable<any>{
   return this.httpClient.get(`${this.baseUrl}/user/${id}`);
  }

  createUser(user:User):Observable<any>{
    console.log("inside create user service");
    console.log("user object before passed to backend ");
    console.log(user);
     return this.httpClient.post(`${this.baseUrl}/user`,user);
  }

  login(user:User):Observable<any>{
    console.log(" inside login service");
    console.log("user object before passed to backend ");
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/login`,user);
  }
}
