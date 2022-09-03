import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ChooseVehicleService {
  vehicleSelectedEvent:any = new EventEmitter<Vehicle>();
  constructor(private httpClient:HttpClient)
    {

    }
    //return list of vehicle
    getVehicles():Observable<any>{
        return this.httpClient.get("http://localhost:8080/vehicles");
    }
    getVehicle(userId:any,orderId:any):Observable<any>{
      console.log(userId+" get v "+orderId);
      // userId=3;
      // orderId=1;
      return this.httpClient.get(`http://localhost:8080/vehicle/${userId}/${orderId}`);
  }
    saveVehicle(vehicle:Vehicle):Observable<any>{
      console.log("event emiiter has value"+this.vehicleSelectedEvent);
      console.log(this.vehicleSelectedEvent);
      console.log("vehicle recieved in save vehicle ");
      console.log(vehicle);
      return this.httpClient.put("http://localhost:8080/update",vehicle);
  }
    //console.log(vehicleSelectedEvent);
}
