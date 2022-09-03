import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Form, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddGoodsComponent } from './add-goods/add-goods.component';
import { OrderComponent } from './order/order.component';
import { StatusComponent } from './status/status.component';
import { ComplainComponent } from './complain/complain.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDialogModule} from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component'
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentVerifyComponent } from './payment-verify/payment-verify.component';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';


import {MatButtonModule} from '@angular/material/button';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AddNewVehicleComponent } from './add-new-vehicle/add-new-vehicle.component';
import { AssignedOrdersComponent } from './assigned-orders/assigned-orders.component';

import { InventoryComponent } from './inventory/inventory.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NavBarComponent,
    AddGoodsComponent,
    OrderComponent,
    StatusComponent,
    ComplainComponent,
    FeedbackComponent,
    PaymentPageComponent,
    PaymentVerifyComponent,
    ChooseVehicleComponent,
    AddNewVehicleComponent,
    AssignedOrdersComponent,
    InventoryComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
   FormsModule,
   MatToolbarModule,
   MatCardModule,
   MatGridListModule,
   MatDialogModule,
   MatIconModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
