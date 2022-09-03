import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddGoodsComponent } from './add-goods/add-goods.component';
import { OrderComponent } from './order/order.component';
import { StatusComponent } from './status/status.component';
import { ComplainComponent } from './complain/complain.component';
import { Feedback } from './model/feedback';
import { FeedbackComponent } from './feedback/feedback.component';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentVerifyComponent } from './payment-verify/payment-verify.component';
import { AddNewVehicleComponent } from './add-new-vehicle/add-new-vehicle.component';
import { AssignedOrdersComponent } from './assigned-orders/assigned-orders.component';
import { InventoryComponent } from './inventory/inventory.component';
const routes: Routes = [
  {
path:'signup',component: SignupComponent},
{
  path:'orders',component:OrderComponent
},
{
  path:'login',component: LoginComponent},
  { 
    path:'home',component: HomeComponent},

  {path:'add-goods',component:AddGoodsComponent},

  {path:'status',component:StatusComponent},

  {path:'complaint',component:ComplainComponent},

  {path:'feedback',component:FeedbackComponent},
  { path: 'vehicle', component: ChooseVehicleComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'payment-verify', component: PaymentVerifyComponent },
  {path:'add-new-vehicle',component:AddNewVehicleComponent},
  {path:'assigned-orders',component:AssignedOrdersComponent},
  
  {path:'driver-orders',component:InventoryComponent},

  
  {
      path:'',redirectTo:'signup', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
