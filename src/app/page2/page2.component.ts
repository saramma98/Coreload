import { Component, OnInit } from '@angular/core';
import { TreedataService} from '../services/treedata.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
   
  treeData = new TreedataService();
  

  constructor() { }

  ngOnInit(): void {
  }


  
}
