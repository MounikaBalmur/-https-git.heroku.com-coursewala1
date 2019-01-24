import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  //receiveing profile info from server.js
  profData():Observable<any>
  {
    return this.http.get<any>('userview/profile');
  }

  //sending edited info to srver.js
  readProfile(v)
  {
    this.http.put('userview/profile',v).subscribe();
    console.log(v);
  }
}
