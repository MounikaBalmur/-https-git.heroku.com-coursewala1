import { Component  } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent   {

  constructor(private course:CourseService)
  {

  }

  t:boolean=false;
  obj:object[]=[];
  a:string;
  b:string;
  c:string;
  d:string;
  e:string;
  f:string;
  g:string;
  h:string;
  i:string;
  data:object;
    AddData(v):void
    {
      console.log(v);
      this.course.courseData(v);
      this.obj.push(v);
      this.a='';
      this.b='';
      this.c='';
      this.d='';
      this.e='';
      this.f='';
      this.g='';
      this.h='';
      this.i='';
    }
    Delete(v):void
      {
        console.log(v)
        this.obj.splice(v,1);
      }
    editdata(v):void
      {
        this.t=true;
        this.data=v;
      }

}
