import { Component, OnInit } from '@angular/core';
import { XlsApi } from '../api/xl-api';
import * as xls from 'xlsx';

@Component({
  selector: 'app-Metric',
  templateUrl: './Metric.component.html',
  styleUrls: ['./Metric.component.scss'],
})
export class MetricComponent implements OnInit {
  healthIndicator: any;
  month: any;
  allMonths: any;
  allObjects: any;
  results: any = [];
  groups: any;
  item: any;
  datas: any;

  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.month = sessionStorage.getItem('selectedMonth');
    this.loadData();
  }

  // ✅ Function to convert Excel serial number to JS Date
  excelDateToJSDate(serial: number): Date | null {
    if (!serial || isNaN(serial)) return null;
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    return new Date(utc_value * 1000);
  }

  // ✅ Load and format date fields
  loadData() {
    this.xls.getDataFromXl3(3, 12).then((data) => {
      this.datas = data.map((row: any) => {
        return {
          ...row,
          // Replace these keys with your actual date fields
          value2: this.excelDateToJSDate(row.value2),
          value3: this.excelDateToJSDate(row.value3),
          value4: this.excelDateToJSDate(row.value4),
          value5: this.excelDateToJSDate(row.value5),
          value7: this.excelDateToJSDate(row.value7),
          poReceivedDate: this.excelDateToJSDate(row.poReceivedDate),
        };
      });
      console.log(this.datas);
    });
  }
}
