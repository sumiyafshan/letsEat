import { Component } from '@angular/core';
import { TestService } from '../services/test.service';
import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent {
  name:any
  data:any
  id:any
constructor(private route:Router,private r1:ActivatedRoute,private test:TestService){
  this.name = this.r1.snapshot.paramMap.get('id');
  console.log("data from url"+this.name);

   test.idfudapi(this.name).subscribe(viewfud=>{
    console.log(viewfud);
    this.data=viewfud
 })
 }
 updt(id:any){
  console.log(id);
  
  this.test.updtapi(id,this.name).subscribe(update=>{
    console.log(update);
    console.log("test id"+this.name);
    
    alert("ypur data updated")
    this.route.navigate(["/admindashboard/adminviewfd"])
  })
  }
}
