import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  name:string;
  mail:string;
  contact:number;
  password:string;
  password1:string;
  date:any;
  gender:string;

  constructor(private route:Router,private register:RegisterService)
  {

  }
  submit(v)
  {
    this.register.getData(v);
    //this.route.navigate(["homepage/login"]);
    
  }


}
