import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  password:any;
  constructor(private router:Router,private log:LoginService) { }

  ngOnInit() {
  }
  logdata(v)
  {
    if(v.name=="admin" && v.password=="admin")
    {
      this.router.navigate(["adminview"]);
      console.log(v);
    }
    else
    {
      this.log.receiveloginData(v);
    }
    console.log(v);
    this.name=" ";
    this.password=" ";
  }
}
