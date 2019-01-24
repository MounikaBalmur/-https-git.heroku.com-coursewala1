import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data:object;
  constructor(private dds:DropdownService) { }

  ngOnInit() 
  {
    this.dds.dropData().subscribe(temp=>{this.data=temp})
    console.log(this.data);
  }

}
