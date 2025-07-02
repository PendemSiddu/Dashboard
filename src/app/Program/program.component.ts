import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../api/xl-api';
import * as _ from 'lodash';
interface OriginalData {
  Quarter: string;
  [key: string]: string | number;
}
interface President {
  term: string;
  onTimeDelivery: number;
  deliveredRightFirstTime: number;
  projectStatusUpdate: number;
  qualityOfOutput: number;
  responsiveness: number;
  technicalSkills: number;
  escalationManagement: number;
}
interface KeyMap {
  [key: string]: string;
}

interface ChartData {
  metric: string;
  [key: string]: string | number;
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
    finance: any = [];
  finance1: any = [];
  burndown: any = [];
  programNames: any = [];
  cal: any;
  finance4: any = [];
  finance5: any = [];
  finance6: any = [];
  finance7: any = [];
  fin4AllPrograms: any;
  progm: any = 0;
  role: any;
  countv: any = 2;
  selectedOptions: string = 'CY-2025';

  constructor(private xls: XlsApi) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.xls.getDataFromXl(4, 9).then((data) => {
      var datas = data;
      var j = 0;

      for (var i = 0; i <= datas.length ; i++) {
        this.finance[j] = {
          key: '' + datas[i]['value1'],
          value1: '' + datas[i]['value1'],
          value2: '' + datas[i]['value2'],
          value3: '' + datas[i]['value3'],
        };
        j++;
      }
      // Sorting by key
      this.finance.sort((a: any, b: any) => {
        if (a.key < b.key) {
          return -1;
        }
        if (a.key > b.key) {
          return 1;
        }
        return 0;
      });
      console.log(this.finance);
    });

    // Create chart instance-chart 4
    let chart6 = am4core.create('fin6', am4charts.XYChart);

    this.xls.getDataFromXl(4, 8).then((data) => {
      this.finance6 = data;
      console.log(this.finance6);

      var j = 0;

      for (var i = 0; i <= this.finance6.length -1; i++) {
        var val1 = this.finance6[i]['value1'];
        var val2 = this.finance6[i]['value2'];
        var val3 = this.finance6[i]['value3'];
        var val4 = this.finance6[i]['value4'];
        var val5 = this.finance6[i]['value5'];

        if (val2 == null || val2 == 0 || val2 == 'NA') {
          val2 = null;
        }
        if (val1 == null || val1 == 0 || val1 == 'NA') {
          val1 = null;
        }
        if (val3 == null || val3 == 0 || val3 == 'NA'){
          val3 = null;
        }
        if (val4 == null || val4 == 0 || val4 == 'NA'){
          val4 = null;
        }

        if (!val1 && !val2 && !val3 && !val4 && !val5) {
        } else {
          this.finance6[i] = {
            date: this.finance6[i]['key'],
            value1: val1,
            value2: val2,
            value3: val3,
            value4: val4,
            value5: val5,
          };
        }
      }

      chart6.data = this.finance6;
      console.log(chart6.data);
    });
    chart6.logo.disabled = true;

    let categoryAxis6 = chart6.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis6.dataFields.category = 'date';
    categoryAxis6.renderer.grid.template.location = 0;
    categoryAxis6.renderer.minGridDistance = 50;
    categoryAxis6.title.text = 'Program'; // Set X-axis label

    // Rotate the labels to 45 degrees
    categoryAxis6.renderer.labels.template.rotation = 45;
    categoryAxis6.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis6.renderer.labels.template.verticalCenter = 'top';

    let valueAxis6 = chart6.yAxes.push(new am4charts.ValueAxis());

    valueAxis6.title.text = 'Score'; // Set Y-axis label

    valueAxis6.strictMinMax = true;

    for (let i = 1; i <= 7; i++) {
      let range = valueAxis6.axisRanges.create();
      range.value = i;
      range.label.text = String(i);
    }

    let columnSeries = chart6.series.push(new am4charts.ColumnSeries());
    columnSeries.dataFields.valueY = 'value1'; // You can choose which value to represent
    columnSeries.dataFields.categoryX = 'date';
    columnSeries.columns.template.width = am4core.percent(100);
    columnSeries.columns.template.fill = am4core.color('#3498db'); // Fill color
    columnSeries.clustered = true;
    columnSeries.stacked = true;

    let columnSeries2 = chart6.series.push(new am4charts.ColumnSeries());
    columnSeries2.dataFields.valueY = 'value2'; // You can choose which value to represent
    columnSeries2.dataFields.categoryX = 'date';
    columnSeries2.columns.template.width = am4core.percent(100);
    columnSeries2.columns.template.fill = am4core.color('#2ecc71'); // Fill color
    columnSeries2.clustered = true;
    columnSeries2.stacked = false;

    let columnSeries3 = chart6.series.push(new am4charts.ColumnSeries());
    columnSeries3.dataFields.valueY = 'value3'; // You can choose which value to represent
    columnSeries3.dataFields.categoryX = 'date';
    columnSeries3.columns.template.width = am4core.percent(100);
    columnSeries3.columns.template.fill = am4core.color('#3F51B5'); // Fill color
    columnSeries3.clustered = true;
    columnSeries3.stacked = false;

    let columnSeries4 = chart6.series.push(new am4charts.ColumnSeries());
    columnSeries4.dataFields.valueY = 'value4'; // You can choose which value to represent
    columnSeries4.dataFields.categoryX = 'date';
    columnSeries4.columns.template.width = am4core.percent(100);
    columnSeries4.columns.template.fill = am4core.color('#CDDC39'); // Fill color
    columnSeries4.clustered = true;
    columnSeries4.stacked = false;

    categoryAxis6.renderer.cellStartLocation = 0.1;
    categoryAxis6.renderer.cellEndLocation = 0.5;

    // Add legend
    chart6.legend = new am4charts.Legend();
    chart6.legend.labels.template.text = '{name}';

    chart6.legend.itemContainers.template.events.on('hit', function (ev: any) {
      let item = ev.target.dataItem;
      item.hidden = !item.hidden;
      if (item.hidden) {
        ev.target.setState('dimmed');
      } else {
        ev.target.setState('default');
      }
    });

    let legendItem = chart6.legend.itemContainers.template.createChild(
      am4core.Label
    );
    legendItem.horizontalCenter = 'right';
    legendItem.text = '[bold]';
    legendItem.setStateOnChildren = true;
    legendItem.paddingRight = 15;

    chart6.legend.itemContainers.template.events.on(
      'over',
      function (event: any) {
        event.target.dataItem.dataContext.bulletsContainer.isHover = true;
      }
    );

    chart6.legend.itemContainers.template.events.on(
      'out',
      function (event: any) {
        event.target.dataItem.dataContext.bulletsContainer.isHover = false;
      }
    );
    chart6.legend.data = [
      {
        name: 'H1-24',
        fill: '#3498db', // You can set the color of the legend item here
      },
      {
        name: 'H2-24',
        fill: '#2ecc71', // You can set the color of the legend item here
      },
      
      
      // Add more legend titles as needed
    ];

    // Add cursor
    chart6.cursor = new am4charts.XYCursor();
    this.changeGraph();
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

  changeGraph() {
    var ijk = parseInt(this.progm);
    var ijkl = ijk + 1;
    var ijklm = ijkl + 1;
    var ijklmn = ijklm + 1;
    var ijklmno = ijklmn + 1 ;
    
    console.log(ijklmno);

    // Create chart instance-chart 4
    let chart = am4core.create('chartdiv2', am4charts.XYChart);

    this.xls.getDataFromXl2(4, 10).then((data) => {
      this.finance4 = data;
      console.log(this.finance4);

      var allObjectKeys = Object.keys(this.finance4[ijklmno]);
      var j = 0;
      var k = 0;
      var finance5 = [];
      var comments1 = this.finance4[ijk][allObjectKeys[9]];
     // debugger;
      for (var i = 2; i < allObjectKeys.length; i++) {
        var val1 = this.finance4[ijk][allObjectKeys[i]];

        var val2 = this.finance4[ijkl][allObjectKeys[i]];

        var val3 = this.finance4[ijklm][allObjectKeys[i]];

        var val4 = this.finance4[ijklmn][allObjectKeys[i]];

        var val5 = this.finance4[ijklmno][allObjectKeys[i]];

        if (val4 == null || val4 == 0 || val4 == 'NA') {
          val4 = null;
        }
        if (val3 == null || val3 == 0 || val3 == 'NA') {
          val3 = null;
        }
        if (val2 == null || val2 == 0 || val2 == 'NA') {
          val2 = null;
        }
        if (val1 == null || val1 == 0 || val1 == 'NA') {
          val1 = null;
        }
        

        if (allObjectKeys[i] != 'Remarks') {
          finance5.push({
            date: allObjectKeys[i],
            value1: val1,
            value2: val2,
            value3: val3,
            value4: val4,
            value5: val5,
            value6: comments1,
          });
        }

        console.log(finance5);
       
        chart.data = finance5;
        this.finance7 = finance5;
      }

      // Check if all value1 and value2 are null
      const allValuesNull = finance5.every(
        (item) => item.value1 === null && item.value2 === null 
      );

      if (allValuesNull) {
        let label = chart.createChild(am4core.Label);
        label.text = `No metrics for this period`;
        label.fontSize = 25; // Adjust font size as needed
        label.align = 'center';
        label.valign = 'middle';
        label.fill = am4core.color('#000'); // Optional: to set text color
        label.isMeasured = false;
        label.x = am4core.percent(50);
        label.y = am4core.percent(40); // Adjust this percentage to move the label up or down

        label.horizontalCenter = 'middle';
        label.verticalCenter = 'middle';
        label.zIndex = 1000; // To make sure it's above all chart elements
      } else {
        // Remove the label if it exists and data is now available
        chart.children.each((child) => {
          if (child instanceof am4core.Label) {
            child.dispose();
          }
        });
      }
    });
    chart.logo.disabled = true;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'date';

    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.title.text = 'Month'; // Set X-axis label

    // Rotate the labels to 45 degrees
    categoryAxis.renderer.labels.template.rotation = 45;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.verticalCenter = 'top';
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    valueAxis.title.text = ' Score'; // Set Y-axis label

    valueAxis.strictMinMax = true;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.5;
    for (let i = 1; i <= 7; i++) {
      let range = valueAxis.axisRanges.create();
      range.value = i;
      range.label.text = String(i);
    }

    // For series1
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.dataFields.valueY = 'value1'; // You can choose which value to represent
    columnSeries.dataFields.categoryX = 'date';
    columnSeries.columns.template.width = am4core.percent(100);
    columnSeries.columns.template.fill = am4core.color('#3498db'); // Fill color
    columnSeries.clustered = true;
    columnSeries.stacked = true;
    columnSeries.columns.template.tooltipText = '{value1}';

    let columnSeries2 = chart.series.push(new am4charts.ColumnSeries());
    columnSeries2.dataFields.valueY = 'value2'; // You can choose which value to represent
    columnSeries2.dataFields.categoryX = 'date';
    columnSeries2.columns.template.width = am4core.percent(100);
    columnSeries2.columns.template.fill = am4core.color('#2ecc71'); // Fill color
    columnSeries2.clustered = true;
    columnSeries2.stacked = false;
    columnSeries2.columns.template.tooltipText = '{value2}';

    

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.text = '{name}';
    chart.legend.itemContainers.template.events.on('hit', function (ev: any) {
      let item = ev.target.dataItem;
      item.hidden = !item.hidden;
      if (item.hidden) {
        ev.target.setState('dimmed');
      } else {
        ev.target.setState('default');
      }
    });
    // Add legend titles
    chart.legend.data = [
      {
        name: 'H1-24',
        fill: '#3498db', // You can set the color of the legend item here
      },
      {
        name: 'H2-24',
        fill: '#2ecc71', // You can set the color of the legend item here
      },
     
      // Add more legend titles as needed
    ];

    let legendItem = chart.legend.itemContainers.template.createChild(
      am4core.Label
    );
    legendItem.horizontalCenter = 'right';
    legendItem.text = '[bold]';
    legendItem.setStateOnChildren = true;
    legendItem.paddingRight = 15;
    legendItem.horizontalCenter = 'right';
    chart.legend.itemContainers.template.events.on(
      'over',
      function (event: any) {
        event.target.dataItem.dataContext.bulletsContainer.isHover = true;
      }
    );

    chart.legend.itemContainers.template.events.on(
      'out',
      function (event: any) {
        event.target.dataItem.dataContext.bulletsContainer.isHover = false;
      }
    );

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  }
}
