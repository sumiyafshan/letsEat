import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import{FormsModule}from'@angular/forms';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminaddfdComponent } from './adminaddfd/adminaddfd.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdminviewfdComponent } from './adminviewfd/adminviewfd.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminvwordersComponent } from './adminvworders/adminvworders.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    UserregisterComponent,
    UserdashboardComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminaddfdComponent,
    AdmineditComponent,
    AdminviewfdComponent,
    OrderconfirmComponent,
    PaymentComponent,
    AdminvwordersComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule, NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
