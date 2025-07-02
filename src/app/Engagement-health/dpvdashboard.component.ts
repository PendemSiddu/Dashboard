import { Component, OnInit } from '@angular/core';
import { XlsApi } from '../api/xl-api';
@Component({
  selector: 'app-dpvdashboard',
  templateUrl: './dpvdashboard.component.html',
  styleUrls: ['./dpvdashboard.component.scss'],
})
export class DpvdashboardComponent implements OnInit {
 

  healthIndicator: any;
  milestone: any;
  keyMessages: any;
  riskIssues: any;
  month: any;
  allMonths: any;
  allObjects: any;
  results: any = [];
  groups: any;
  title: any;
 
 
  
  constructor(private xls: XlsApi) {}

  ngOnInit() {
    this.month = sessionStorage.getItem('Q2-25') || 'Q2-25';
    
    this.loadData();
    this.changeGraph();
  }

  loadData() {
    this.xls.getDataFromXl(3, 0).then((data) => {
      this.healthIndicator = data;
      console.log(this.healthIndicator);
      this.allMonths = [];

      this.allObjects = this.healthIndicator[0];

      for (var i = 0; i <= this.healthIndicator.length - 1; i++) {
        this.allMonths[i] = {
          Month: this.healthIndicator[i].key,
        };
      }
      const uniqueMonths = this.allMonths.reduce((acc: any, curr: any) => {
        if (!acc.find((item: any) => item.Month === curr.Month)) {
          acc.push(curr);
        }
        return acc;
      }, []);
      this.allMonths = uniqueMonths;
      
      
    });
  }

  ExcelDateToJSDate(serial: any) {
    var utc_days = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;
    var date_info = new Date(utc_value * 1000);

    var fractional_day = serial - Math.floor(serial) + 0.0000001;

    var total_seconds = Math.floor(86400 * fractional_day);

    var seconds = total_seconds % 60;

    total_seconds -= seconds;

    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
    var dates = new Date(date_info.getFullYear(), date_info.getMonth());
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return '' + months[date_info.getMonth()] + ' ' + date_info.getFullYear();
  }

  changeGraph(): void{
    this.healthIndicator.forEach((item: { highlighted: boolean; }) => item.highlighted = false);

    // Find the index of the selected quarter in the healthIndicator array
    const selectedQuarterIndex = this.healthIndicator.findIndex((item: { key: any; }) => item.key === this.month);
  
    // Check if the selected quarter index is valid
    if (selectedQuarterIndex !== -1) {
      // Show the first project for the selected quarter
      this.healthIndicator[selectedQuarterIndex].highlighted = true;


      this.showHide(selectedQuarterIndex, this.healthIndicator[selectedQuarterIndex].value1);
    }
   
   }
  
 
    
 

  showHide(a: any, b: any) {
    this.results = []; // Clear previous results
    this.title = b;
    // Remove highlight from previously selected item
    const previouslyClickedItem = this.healthIndicator.find(
      (item: any) => item.highlighted
    );

    if (previouslyClickedItem) {
      previouslyClickedItem.highlighted = false;
    }

    // Filter healthIndicator based on selected value
    const selectedItems = this.healthIndicator.filter(
      (item: any) => item.__rowNum__ === a + 1
    );

    if (selectedItems.length > 0) {
      this.results.push({
        name: a,
        values: selectedItems,
      });
    }

    const clickedItem = this.healthIndicator.find(
      (item: any) => item.__rowNum__ === a + 1
    );
    if (clickedItem) {
      clickedItem.highlighted = true;
    }
  }
}
  function showHide(a: any, any: any, b: any, any1: any) {
    throw new Error('Function not implemented.');
  }

