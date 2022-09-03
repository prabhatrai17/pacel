import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FullOrderService } from '../service/full-order.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // @Input()
  // nameToBeRecived:any;
  @Input()
  idRecieved:any;
  
   
  constructor(private fullOrderService:FullOrderService,private router:Router) { }
  // arr:any[]=[];
  ngOnInit(): void {
    console.log("inside onInit nav");
    if(this.idRecieved==null)this.idRecieved=localStorage.getItem("id");
    console.log(this.idRecieved);

  }
  goToOrder(id:any){
    console.log("user id before passed to route order");
    console.log(id);
    // var s=JSON.stringify(user);
    //localStorage.setItem("id",id);
    this.router.navigate(['orders'],{queryParams:{id}});
  }
  logout(){
    localStorage.clear;
    this.router.navigate(['login']);
  }

  

}
