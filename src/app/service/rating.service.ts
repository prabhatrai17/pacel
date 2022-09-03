import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../model/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient:HttpClient)
  {

  }
  getRatingById(id:number):Observable<Rating>
    {
      return this.httpClient.get<Rating>(`http://localhost:8080/rating/${id}`,{
        headers : new HttpHeaders().set('Content-Type','application/json'),
      });
    }

  saveRating(rating:Rating):Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8081/saverating`,rating,{
    headers : new HttpHeaders().set('Content-Type','application/json'),
    });
  }

  getRatings():Observable<any>{
    return this.httpClient.get("http://localhost:8081/ratings");
  }
  RatingSelectedEvent = new EventEmitter<Rating>();

}
