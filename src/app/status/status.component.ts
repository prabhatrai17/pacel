import { Component, OnInit } from '@angular/core';
import { StatusService } from '../service/status.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private statusService:StatusService,private route:ActivatedRoute) { }
  orderId! : any;
  userId!:any;
  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params=>{
      this.orderId=params.get('orderId');
      this.userId=params.get('userId');
       console.log(this.userId);
       console.log(this.orderId);
      
      });
    this.getPickupStatus();
    this.getDispatchStatus();
    this.getArrivingStatus();
    this.getDeliveryStatus();
  }

  
  pickupstatus: String = '';
  dispatchstatus: String = '';
  arrivingstatus: String = '';
  deliverystatus: String = '';
  pickupcolor: String ='';
  dispatchcolor: String ='';
  arrivingcolor: String ='';
  deliverycolor: String ='';
  private getPickupStatus()
  {
    this.statusService.getPickupStatus(this.userId,this.orderId).subscribe(data => {
      this.pickupstatus = data;
      if(this.pickupstatus)
      {
        this.pickupcolor = '#0AE9F9';
      }
      else{
        this.pickupcolor = 'white';
      }
    })
    
  }
  private getDispatchStatus()
  {
    this.statusService.getDispatchStatus(this.userId,this.orderId).subscribe(data => {
      this.dispatchstatus = data;
      if(this.dispatchstatus)
    {
      this.dispatchcolor = '#0AE9F9';
    }
    else{
      this.dispatchcolor = 'white';
    }
    })
  
   }
  private getArrivingStatus()
  {
    this.statusService.getArrivingStatus(this.userId,this.orderId).subscribe(data => {
      this.arrivingstatus = data;
      if(this.arrivingstatus)
    {
      this.arrivingcolor = '#0AE9F9';
    }
    else{
      this.arrivingcolor = 'white';
    }
    })
     }
  private getDeliveryStatus()
  {
    this.statusService.getDeliveryStatus(this.userId,this.orderId).subscribe(data => {
      this.deliverystatus = data;
      if(this.deliverystatus)
    {
      this.deliverycolor = '#0AE9F9';
    }
    else{
      this.deliverycolor = 'white';
    }
    })
  }

}

