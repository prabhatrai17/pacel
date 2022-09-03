
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../service/feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm=new FormGroup({
    orderid:new FormControl('',Validators.required),
    feedbackplace:new FormControl('',Validators.required)
  })
  feedback:Feedback = new Feedback();

  private baseURL = "http://localhost:8080";
  constructor(private feedbackService:FeedbackService,private route:ActivatedRoute) { }

  orderId:any;
  userId:any;
  // feedbackId:any;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      this.orderId=params.get('orderId');
      this.userId=params.get('userId');
      console.log("inside complaint");
       console.log(this.userId);
       console.log(this.orderId);
      
      });
  }

  onSubmit()
  {
    this.feedbackService.addFeedback(this.feedback,this.userId,this.orderId).subscribe(data =>{
      console.log(data);
    })
    this.feedbackForm.reset();
  }

}
