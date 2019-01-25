import { Component, OnInit  } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  implements OnInit {

  constructor(private course:CourseService)
  {

  }

  ngOnInit()
  {
    this.course.read().subscribe(temp=>{this.data1=temp});
  }

  t:boolean=false;
  obj:object[]=[];
  coursename:string;
  cdetailes:string;
  authorname:string;
  adetailes:string;
  authorimg:any;
  price:string;
  uses:string;
  samplefile:any;
  mainfile:string;
  data:object;
  data1:object;
  submit(v):void
    {
      // console.log();
       this.course.courseData(v);
      // this.obj.push();
      this.coursename='';
      this.cdetailes='';
      this.authorname='';
      this.adetailes='';
      this.authorimg='';
      this.price='';
      this.uses='';
      this.samplefile='';
      this.mainfile='';
    }
    delete(v):void
      {
        console.log(v)
        this.course.deletecourse(v).subscribe(temp=>this.data1=temp);
      }
    editdata(v):void
      {
        this.t=true;
        this.data=v;
      }

      savecourse(v)
      {
        this.course.readdata(this.data);
        console.log(v);
      }

}
