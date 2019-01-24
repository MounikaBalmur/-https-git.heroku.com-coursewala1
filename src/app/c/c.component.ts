import { Component, OnInit, Inject } from '@angular/core';
import * as pdf from 'jspdf';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
  providers:[{provide:'Window',useValue:window}]
})
export class CComponent implements OnInit {

  constructor(@Inject('Window') private window:Window) { }

  ngOnInit() {
  }
  download()
  {
    var doc=new pdf();

    doc.setTextColor(150 ,85,89);
    doc.setFontSize(30);
    
    doc.text(70,30,'C Language');
    doc.line(10,50);

    doc.save('sample.pdf');
  }

}
