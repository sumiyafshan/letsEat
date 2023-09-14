import { Component } from '@angular/core';
import { TestService } from '../services/test.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-adminviewfd',
  templateUrl: './adminviewfd.component.html',
  styleUrls: ['./adminviewfd.component.css']
})
export class AdminviewfdComponent {
  data:any
  food:any
      constructor(private route:Router,
                  private test:TestService,
                  ){
        test.viewapi().subscribe(result=>{
          console.log(result);
      this.data=result
          
        })
      }
      del(food:any){
        this.test.delapi(food).subscribe(deleted=>{
          console.log(deleted);
          // alert("deleted")
         window.location.reload()
          
        })
      } 
      edt(id:any){
         this.route.navigate([`/admindashboard/adminedit/${id}`])
        }
      }

