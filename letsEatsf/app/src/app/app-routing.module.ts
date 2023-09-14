import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminaddfdComponent } from './adminaddfd/adminaddfd.component';
import { AdminviewfdComponent } from './adminviewfd/adminviewfd.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminvwordersComponent } from './adminvworders/adminvworders.component';
import { AdmineditComponent } from './adminedit/adminedit.component';

const routes: Routes = [
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:"admindashboard",
    component:AdmindashboardComponent,
       children:[{
                 path:"adminaddfd",
                 component:AdminaddfdComponent
    },
  {
                path:"adminviewfd",
                component:AdminviewfdComponent
  },
  {
                path:"adminedit/:id",
                component:AdmineditComponent
  },
{
               path:"adminvworders",
               component:AdminvwordersComponent
}]
  },
  
  {
     path:"signin",
     component:SigninComponent
  },
  {
    path:"userregister",
    component:UserregisterComponent
  },
  {
    path:"userdashboard",
    component:UserdashboardComponent
  },
  {
    path:"orderconfirm/:fooditem",
    component:OrderconfirmComponent 
   },
    {
      path:"payment",
      component:PaymentComponent
    },

  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
