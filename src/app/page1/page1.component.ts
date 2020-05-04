import { Component, OnInit } from '@angular/core';
import {TabledataService} from '../services/tabledata.service'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  tableData= new TabledataService();

  constructor() { }

  ngOnInit(): void {
  }

}
