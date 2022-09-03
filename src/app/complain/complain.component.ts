import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Complaint } from '../model/complaint';
import { ComplaintStatusService } from '../service/complaint-status.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  complainForm=new FormGroup({
    orderid:new FormControl('',Validators.required),
    issue:new FormControl('',Validators.required)
  })

  complaint: Complaint = new Complaint();

  constructor(private complaintStatusService:ComplaintStatusService,private route:ActivatedRoute) { }
   orderId:any;
   userId:any;
   complaintId:any;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      this.orderId=params.get('orderId');
      this.userId=params.get('userId');
      console.log("inside complaint");
       console.log(this.userId);
       console.log(this.orderId);
      
      });
    
    
  }
  
  complaintreceivedcolor:String = ''
  enquiringcolor:String = ''
  actiontakencolor:String = ''
  
  obj:any;
  private getComplainReceived()
  {
    this.complaintStatusService.getComplainReceived(this.userId,this.complaintId).subscribe(data =>{
      
      if(data)
      {
        this.complaintreceivedcolor = '#0AE9F9';
      }
      else
      {
        this.complaintreceivedcolor = 'white';
      }
    })

  }
  private getEnquiring()
  {
    this.complaintStatusService.getEnquiring(this.userId,this.complaintId).subscribe(data =>{
      
      if(data)
      {
        this.enquiringcolor = '#0AE9F9';
      }
      else
      {
        this.enquiringcolor = 'white';
      }
    })
  }
  private getActionTaken()
  {
    this.complaintStatusService.getActionTaken(this.userId,this.complaintId).subscribe(data =>{
      
      if(data)
      {
        this.actiontakencolor = '#0AE9F9';
      }
      else
      {
        this.actiontakencolor = 'white';
      }
    })
  }


  onSubmit()
  {
    this.complaintStatusService.addComplaint(this.complaint,this.userId,this.orderId).subscribe(data=>{
      console.log(data);
      this.obj=data;
      console.log(this.obj);
      console.log("complaint id ")
      console.log(this.obj.complaint_id);
       this.complaintId=this.obj.complaint_id;
       this.getComplainReceived();
       this.getEnquiring();
    this.getActionTaken();
    })
    
    this.complainForm.reset();
  }
  

}
