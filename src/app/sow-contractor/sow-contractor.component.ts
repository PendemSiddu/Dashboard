import { Component, OnInit } from '@angular/core';
import { XlsApi } from '../api/xl-api';

@Component({
  selector: 'app-sow-contractor',
  templateUrl: './sow-contractor.component.html',
  styleUrls: ['./sow-contractor.component.scss'],
})
export class SowContractorComponent implements OnInit {
  datas: any;

  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.xls.getDataFromXl3(3, 12).then((data) => {
      this.datas = data.map(item => ({
        ...item,
        value2: this.convertExcelDate(Number(item.value2)),  // Convert string to number before passing
        value3: this.convertExcelDate(Number(item.value3)),  // Convert string to number before passing
      }));
  
      console.log(this.datas);  // Verify converted dates
    });
  }

  convertExcelDate(serial: number): Date {
    const excelStartDate = new Date(1899, 11, 30); // Excel starts counting from 30-Dec-1899
    return new Date(excelStartDate.getTime() + serial * 24 * 60 * 60 * 1000); // Convert serial days to date
  }
}
