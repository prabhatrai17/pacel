import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewVehicleComponent } from '../add-new-vehicle/add-new-vehicle.component';
import { BackendService } from '../service/vehicle.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  user:User= new User; //user object created
 userId:any;
  name:string="";
  age!:number;
  obj!:Object;
  confirmPass!:String;
   temp!:any;
  userAccountNew!:boolean;
  userAccountCreationStatusMsg!:string;
  constructor(private userService:UserService,private vehicleService:BackendService, private router:Router){}//angular service injected

  ngOnInit():void{
   //this.getUser();//angular service method call
  }
//angular service get one user method called
  // private getUser(){
  //  this.userService.getUser(1).subscribe(
  //   data=>{
  //     this.obj=data;
  //     console.log("inside getUser");
  //     // console.log(data);
  //     console.log(this.obj);
  //   }
  //  )
  // }
  //angular service create user account called
  private createUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      
      console.log("below data recieved after post createUser angular service called");
      if(data==null) {
        console.log("user already exist with provided email");
        this.userAccountCreationStatusMsg="user already exist with provided email";
        this.userAccountNew=false;
        //alert("user already exist with provided email");
      }
      else{
        console.log(data);
        this.user=data;
        this.userId=this.user.id;
        console.log("user created successfully with given email");
        this.userAccountCreationStatusMsg="user created successfully with given email";
        this.userAccountNew=true;
        if(this.user.role=="Driver")
        this.goToAddVehicle(this.userId);
        //alert("user created successfully with given email");
        else
        this.goToLogin();
         
      }
      
      
    })
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
  goToAddVehicle(userId:any){
    localStorage.setItem("userId",userId);
    this.router.navigate(['add-new-vehicle'],{queryParams:{userId}});
    //this.router.navigateByUrl('/add-new-vehicle');
  }
  

  handleInput(event:Event){
    console.log("inside name handeler funtion");
    console.log((<HTMLInputElement>event.target).value);
    this.name=(<HTMLInputElement>event.target).value;
    console.log(this.name);
    //console.log(event);
  }
  
  onSubmit(submit:any){
    console.log("form submited");
    console.log(this.user);
    console.log(submit);
    
        //  this.temp=this.vehicleService.getVehicleByUserEmail(this.user.email);
        //  if(this.temp!=null) this.goToAddVehicle();
         
     this.createUser();//user creation to db
     
         
  }
  onSelected(event:Event){
    console.log("inside onslected ");
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
  }

}
