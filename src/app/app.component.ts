import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'third-app-form';

  // // user:User= new this.User();
  // user:User= new User;

  // name:string="";
  // age!:number;
  // obj!:Object;
  // constructor(private userService:UserService){}

  ngOnInit():void{
   //this.getUser();
  }

  // private getUser(){
  //  this.userService.getJson().subscribe(
  //   data=>{
  //     this.obj=data;
  //     console.log("inside getUser");
  //     console.log(data);
  //     console.log(this.obj);
  //   }
  //  )
  // }

  // handleName(event:Event){
  //   console.log("inside name handeler funtion");
  //   console.log((<HTMLInputElement>event.target).value);
  //   this.name=(<HTMLInputElement>event.target).value;
  //   console.log(this.name);
  //   //console.log(event);
  // }
  // handleAge(event:Event){
  //   console.log("inside age handeler funtion");
  //   console.log((<HTMLInputElement>event.target).value);
  //   this.age=(Number)((<HTMLInputElement>event.target).value);
  //   console.log(this.age);
  // }
  // onSubmit(){
  //   console.log("form submited");
  // }
}
