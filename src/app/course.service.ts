import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  data:any;
  constructor(private http:HttpClient) { }

  courseData(v)
  {
    this.http.post('/adminview/course',v).subscribe();
  }

  deletecourse(v):Observable<any>
  {
    var httpOption={
                    headers:new HttpHeaders({'Content-Type':'application/json'}),
                    body:v
    }
    return this.http.delete<any[]>('adminview/course',httpOption);
  }
//read data from server
  read():Observable<any>
  {
    return this.http.get('adminview/course');
  }

  //sending updated coursedata to server
  readdata(v)
  {
    this.http.put<any>('adminview/course',v).subscribe(temp=>{this.data=temp});
  }
}
