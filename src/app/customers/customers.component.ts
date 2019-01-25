import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {HttpClient} from '@angular/common/http';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  cu:any[]=[];
   name:string;
   mail:string;
   contact:number;
   searchTerm:string;
  
  constructor(private cs:CustomersService,private http:HttpClient) { }

  ngOnInit() 
  {
    this.cs.customData().subscribe(c=>{this.cu=c;
    console.log(c);
    });
  }
  delete(v)
  {
    
    this.cs.deleteCustomer(v).subscribe(temp=>this.cu=temp);
    console.log(v);
  }

}
