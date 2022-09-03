import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Route,Router } from '@angular/router';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userSerive:UserService,private router:Router) { }
  id:any;
  email:any;
  name:any;
  fName:any;
  role:any;
  ngOnInit(): void {
    console.log("on home component ng on init");
    //console.log(localStorage.getItem("id"));
    this.route.queryParamMap.subscribe(params=>{
      this.id=params.get('id');
      console.log(this.id);
      if(this.id==null)this.id=localStorage.getItem("id");
      });

      //user servic called
       this.userSerive.getUser(this.id).subscribe(data=>{
        console.log("user recieved after get user after login");
        console.log(data);
        this.email=data.email;
        this.fName=data.fName;
        this.name=data.firstName+" "+data.lastName;
        console.log(this.name);
        this.role=data.role;
       });

       }

       goToAddGood(id:any):void{
        // id_:Number=this.id;
        console.log(id);
        this.router.navigate(['add-goods'],{queryParams:{id}});
       }
       
  }


