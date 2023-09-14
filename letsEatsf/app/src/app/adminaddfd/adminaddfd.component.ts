import { Component } from '@angular/core';
import { TestService } from '../services/test.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-adminaddfd',
  templateUrl: './adminaddfd.component.html',
  styleUrls: ['./adminaddfd.component.css']
})
export class AdminaddfdComponent {
  constructor(public route:Router,private test:TestService){}
  data:any

  add(data:any)  {
        console.log(data);
    
  this.test.addapi(data).subscribe(data=>{
  console.log(data);
  alert("add food successfully");
  this.route.navigate(['./admindashboard'])
    })
  }
}
