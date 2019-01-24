import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  courseData(v)
  {
    this.http.post('/adminview/course',v).subscribe();
  }
}
