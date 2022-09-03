import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  user:User= new User; //user object created

  name:string="";
  age!:number;
  obj!:Object;
  confirmPass!:String;

  userAccountLoggedin!:boolean;
  userAccountLoginStatusMsg!:string;
  constructor(private userService:UserService,private router:Router){}//angular service injected

  ngOnInit():void{
    console.log("local storage on login");
    console.log(window.localStorage);
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
  private loginUser(){
    this.userService.login(this.user).subscribe(data=>{
      
      console.log("below data recieved after post createUser angular service called");
      if(data==0) {
        console.log("wrong email or password");
        this.userAccountLoginStatusMsg="wrong email/password/role ";
        this.userAccountLoggedin=false;
        //alert("user already exist with provided email");
      }
      else{
        console.log("id fetched "+data);
        console.log("user successfully logged in");
        this.userAccountLoginStatusMsg="user successfully logged in";
        this.userAccountLoggedin=true;
        //alert("user created successfully with given email");
        if(this.user.role=="Driver") this.goToAssignedOrder(data);
        else
        this.goToHome(data);
      }
      
      
    })
  }
  goToHome(id:any){
    console.log("user id before passed to route");
    console.log(id);
    // var s=JSON.stringify(user);
    localStorage.setItem("id",id);
    this.router.navigate(['home'],{queryParams:{id}});
  }
  goToAssignedOrder(id:any){
    
    localStorage.setItem("id",id);
    this.router.navigate(['assigned-orders'],{queryParams:{id}});
  }
  

  handleInput(event:Event){
    console.log("inside name handeler funtion");
    console.log((<HTMLInputElement>event.target).value);
    this.name=(<HTMLInputElement>event.target).value;
    console.log(this.name);
    //console.log(event);
  }
  // handleAge(event:Event){
  //   console.log("inside age handeler funtion");
  //   console.log((<HTMLInputElement>event.target).value);
  //   this.age=(Number)((<HTMLInputElement>event.target).value);
  //   console.log(this.age);
  // }
  onSubmit(submit:any){
    console.log("form submited");
    console.log(this.user);
    console.log(submit);
     this.loginUser();//user login called inside this function
  }
  onSelected(event:Event){
    console.log("inside onslected ");
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
  }

}
