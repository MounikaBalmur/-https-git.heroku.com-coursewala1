import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Sno:string;
  ItemNumber:string;
  CourseName:string;
  Cost:string;



  data:object[]=[];
  constructor(private ds:DataService) { }

  ngOnInit() 
  {
    this.ds.getData().subscribe(t=>{this.data=t;})
  }

}
