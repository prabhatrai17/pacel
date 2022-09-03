import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080";

   addItem(item:Item):Observable<any>{
    console.log("item before pass");
    console.log(item);
      return this.httpClient.post(`${this.baseUrl}/item`,item)
  }

  getItem(id:number):Observable<any>{
     return this.httpClient.get(`${this.baseUrl}/item/${id}`);
  }
}
