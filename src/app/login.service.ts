import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }

  receiveloginData(v)
  {
    this.http.post('homepage/login',v).subscribe(temp=>
      {alert(temp)

        if(temp=='login successfully')
        {
          this.router.navigate(["/userview"]);
        }
      });
  }







}
