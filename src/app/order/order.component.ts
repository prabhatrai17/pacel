import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FullOrderService } from '../service/full-order.service';
import { ChooseVehicleService } from '../service/choose-vehicle.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  itemId:any;
  itemName:any;
  itemQty:any;

  orderId!:number;
  userId!:number;
  responseMsg:any;
  id:any;
  orderArray:any[]=[];
  showOrdersMsg:boolean=false;
  orderNullMsg:String="No Order Found";
  showItemFlag:boolean=false;
  showVehicleFlag:boolean=false;
  constructor(private route:ActivatedRoute,private fullOrderService:FullOrderService,private router:Router,private vehicleService:ChooseVehicleService) { }
  vehicleObj:any;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      this.id=params.get('id');
      this.userId=this.id;
      console.log(this.id);
      this.getAllOrder(this.id);
      });
      if(this.id==null)this.id=localStorage.getItem("id");
  }
  getAllOrder(id:number):void{
    console.log("get allOrder called, id: "+id);
    this.fullOrderService.getOrders(id).subscribe(data=>{
      console.log(data);
      if(data==null||data.length<=0) this.showOrdersMsg=true;
      this.orderArray=data;
      console.log(this.orderArray);
    })

  }
  fetchedId!:number;
  showItem(id:number):void{
    this.showItemFlag=!(this.showItemFlag);
    console.log("show item called : "+id);
    
    for(let i=0;i<this.orderArray.length;i++){
      this.fetchedId=this.orderArray[i].item[0].itemId
      if(this.fetchedId==id){
        this.itemId=this.fetchedId;
        this.itemName=this.orderArray[i].item[0].itemName;
        this.itemQty=this.orderArray[i].item[0].itemQty
      }
      //console.log(this.orderArray[i].item[0].itemId);

      
    }

  }
  goToStatus(userId:any,orderId:any){
    console.log("user id before passed to route order");
    console.log(userId);
    console.log(orderId);
    // var s=JSON.stringify(user);
    //localStorage.setItem("id",id);
    this.router.navigate(['status'],{queryParams:{userId,orderId}});
  }
  goToComplaint(userId:any,orderId:any){
    console.log("user id before passed to route order");
    console.log(userId);
    console.log(orderId);
    // var s=JSON.stringify(user);
    //localStorage.setItem("id",id);
    this.router.navigate(['complaint'],{queryParams:{userId,orderId}});
  }
  goToFeedback(userId:any,orderId:any){
    console.log("user id before passed to route order");
    console.log(userId);
    console.log(orderId);
    // var s=JSON.stringify(user);
    //localStorage.setItem("id",id);
    this.router.navigate(['feedback'],{queryParams:{userId,orderId}});
  }
  status(orderId:number):void{
    console.log(orderId);
    this.orderId=orderId;
    this.userId=this.id;
    this.goToStatus(this.userId,this.orderId);
  }
  complain(orderId:number):void{
    console.log(orderId);
    this.orderId=orderId;
    this.userId=this.id;
    this.goToComplaint(this.userId,this.orderId);
  }
  feedback(orderId:number):void{
    console.log(orderId);
    this.orderId=orderId;
    this.userId=this.id;
    this.goToFeedback(this.userId,this.orderId);
  }
 
  getVehicle(orderId:number):void{
    console.log(orderId);
    console.log(this.userId);
    this.vehicleService.getVehicle(this.userId,orderId).subscribe(data=>{
      console.log("data after get vehicle service called ");
      console.log(data);
      this.vehicleObj=data;
      console.log(this.vehicleObj);
      if(data!=null)
       
        this.showVehicleFlag=true;
       
    })
  }

}
