import { Component, OnInit } from '@angular/core';
import { XlsApi } from '../api/xl-api';
import * as xls from 'xlsx';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  healthIndicator: any;
  month: any;
  allMonths: any;
  allObjects: any;
  results: any = [];
  groups: any;
  item: any;
  datas: any;
  selectedOptions: string = 'Q2-25';


 

  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.month = sessionStorage.getItem('selectedMonth');
    this.loadData();
  }
  

  loadData() {
    this.xls.getDataFromXl3(3, 3).then((data) => {
      this. datas = data;
      console.log(this.datas);    
      
    });
  }
}