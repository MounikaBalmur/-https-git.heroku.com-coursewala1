import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private route:Router) {

   }
   getData(v)
   {
    
    this.http.post('homepage/register',v).subscribe(temp=>
      {alert(temp)
        if(temp==='registered successfully')
        {
          this.route.navigate(["/homepage/login"]);
        }
        if(temp==='user existed choose another username')
        {
          this.route.navigate(["/homepage/register"]);
        }
      });
  
    
    
   }
}
