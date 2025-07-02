import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../../api/xl-api';

@Component({
  selector: 'app-resource-skill-level',
  templateUrl: './resource-skill-level.component.html',
  styleUrls: ['./resource-skill-level.component.scss'],
})
export class ResourceSkillLevelComponent implements OnInit {
  progm: any;
  finance: any;
  healthIndicator: any;
  allMonths: any;
  allObjects: any;
  totalCount: any = 0;
  month = "Q3-25";
  upskilling : any;
  constructor(private xls: XlsApi) {}
 
  ngOnInit(): void {
    this.loadMonths();
    this.loadMap();
    
  }
 
  loadMonths() {
    this.xls.getDataFromXl(3, 11).then((data) => {
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
  ngAfterViewInit() {}
  loadMap() {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    let chart4 = am4core.create('chartdiv4', am4charts.XYChart);
 
    this.xls.getDataFromXl(3, 6).then((data: any) => {
      const selectedMonth = this.month.trim(); // Remove any possible whitespace
     console.log(data)
     if(selectedMonth == "Q3-24"){
      this.upskilling = "Upskilling Plans";
     }
     else{
      this.upskilling = "Skills Upgraded";
     }
      console.log('Selected Month:', selectedMonth); // Debugging log
      debugger;
      // Filter by 'value4' instead of 'Quarter'
      const filteredData = data.filter(
        (item: any) => item.value4 === selectedMonth // Remove any possible whitespace
      );
 
      console.log('Filtered Data:', filteredData); // Debugging log
 
      // Initialize an empty object to hold the sum of value3 for each unique value1
      const distinctValues: { [key: string]: number } = {};
 
      // Iterate over each object in the filtered data
      debugger;
      for (const obj of filteredData) {
        const value1Key = obj['value1'];
        const value3Amount = obj['value3'];
       
        if (value1Key in distinctValues) {
          distinctValues[value1Key] = value3Amount;
        } else {
          distinctValues[value1Key] = value3Amount;
        }
      }
 
      console.log('Distinct Values:', distinctValues); // Debugging log
 
      // Initialize the final array to hold the data in the required format
      const result: any[] = [];
 
      // Populate the final result array
 for (const item of filteredData) {
    const existingItem = result.find(entry => entry.range === item.value1);
    if (existingItem) {
        existingItem.count += item.value3;
    } else {
        result.push({ range: item.value1, count: item.value3 });
    }
}
 
 
 
      console.log('Final Result:', result); // Debugging log
 
      chart4.data = result;
      chart4.logo.disabled = true;
      let categoryAxis = chart4.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'range';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
 
      categoryAxis.renderer.labels.template.adapter.add(
        'textOutput',
        function (text, target) {
          return text;
        }
      );
 
      let valueAxis = chart4.xAxes.push(new am4charts.ValueAxis());
 
      // Create series
      let series = chart4.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = 'count'; // Notice the X
      series.dataFields.categoryY = 'range'; // Notice the Y
      series.name = 'Visits';
      series.columns.template.fill = am4core.color('#159BD7');
 
      series.columns.template.tooltipText = '{categoryY}: [bold]{valueX}[/]';
 
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = '{valueX}';
      labelBullet.label.dx = -30; // Position label to the right of the bar
      labelBullet.label.hideOversized = true;
      labelBullet.label.truncate = false;
    });
  }
  changeGraph() {

    this.loadMap();
  }
}