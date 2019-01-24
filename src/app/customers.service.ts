import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

  customData():Observable<any>
  {
    return this.http.get<any>('adminview/customers');
  }
  deleteCustomer(v):Observable<any> 
  {
    var httpOption={
      headers:new HttpHeaders({'content-Type':'application/json'}),
      body:v
    };
    
    return this.http.delete<any[]>('adminview/customers',httpOption);
  }
}
