import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>
  {
    return this.http.get<any>("assets/cart.json");
  }
  getPurchase():Observable<any>
  {
    return this.http.get<any>("assets/purchase.json");
  }
  getCustomer():Observable<any>
  {
    return this.http.get<any>("assets/customer.json");
  }
}
