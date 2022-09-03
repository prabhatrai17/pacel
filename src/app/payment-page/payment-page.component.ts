import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from '../model/payment';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  paymentForm!:FormGroup;
  constructor(private paymentService:PaymentService) { }
  // userId:any=5;
  // orderId:any=5;
  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      "name": new FormControl('',[Validators.required]),
      "cardNo": new FormControl('',[Validators.required]),
      "expiry": new FormControl('',[Validators.required]),
      "address":new FormControl('',[Validators.required]),
      "mobNo": new FormControl('',[Validators.required]),
      "city": new FormControl('',[Validators.required]),
      "state": new FormControl('',[Validators.required]),
    });
  }
  savePayment()
  {
    let payment:Payment={
      id:this.paymentForm.value.id,
      name:this.paymentForm.value.name,
      cardNo:this.paymentForm.value.cardNo,
      expiry:this.paymentForm.value.expiry,
      address:this.paymentForm.value.address,
      mobNo:this.paymentForm.value.mobNo,
      city:this.paymentForm.value.city,
      state:this.paymentForm.value.state,
    }
    this.paymentService.savePayment(payment).subscribe((Response)=>{
      console.log(Response);
     })
    alert("Payment Successfull");
}
}
