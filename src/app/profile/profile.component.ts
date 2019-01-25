import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string;
  email:string;
  contact:number;
  date:number;
  gender:string;
  
  data:any={};
  pdata:any={};
  

  constructor(private ps:ProfileService) { }

  ngOnInit() 
  {
    this.ps.profData().subscribe(temp=>{this.data=temp;
    console.log(this.data);
    });
  }
  saveprofile()
  {
    
    this.ps.readProfile(this.pdata);
  }
  edit(v)
  {
    this.pdata=v;
    console.log(v);
  }
}
