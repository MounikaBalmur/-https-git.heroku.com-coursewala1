import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  pc:object[]=[];
  searchTerm:string;
  constructor(private ds:DataService) { }

  ngOnInit() 
  {
    this.ds.getPurchase().subscribe(p=>{this.pc=p;})
  }

}
