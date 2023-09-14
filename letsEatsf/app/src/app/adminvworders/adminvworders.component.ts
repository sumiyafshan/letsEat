import { Component } from '@angular/core';
import { TestService } from '../services/test.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-adminvworders',
  templateUrl: './adminvworders.component.html',
  styleUrls: ['./adminvworders.component.css']
})
export class AdminvwordersComponent {
  data:any
  constructor(private route:Router,private test:TestService){
    test.adminvworder().subscribe(viewall=>{
            console.log(viewall);
         this.data=viewall
             
           })
         }
}
