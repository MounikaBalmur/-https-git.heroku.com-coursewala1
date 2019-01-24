import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  data:object;
  constructor(private dds:DropdownService) { }

  ngOnInit() 
  {
    this.dds.dropData().subscribe(temp=>{this.data=temp})
    // console.log(this.data);
  }

}
