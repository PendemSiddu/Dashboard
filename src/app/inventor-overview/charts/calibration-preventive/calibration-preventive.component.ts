import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../../api/xl-api';

@Component({
  selector: 'app-calibration-preventive',
  templateUrl: './calibration-preventive.component.html',
  styleUrls: ['./calibration-preventive.component.scss']
})
export class CalibrationPreventiveComponent implements OnInit {
  finance:any=[];
  totalAssets:any;
  constructor(private xls: XlsApi) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // Chart code goes in here
    am4core.useTheme(am4themes_animated);
    
    let chart = am4core.create("chartdiv560", am4charts.XYChart);
    chart.paddingRight = 20;


    
    this.xls.getDataFromXl(1,10).then(data => {
      var datas=data;
    for(var i=0;i<=datas.length-2;i++){
      this.finance[i]={'key':''+datas[i]['key'],'value1':''+datas[i]['value1']};
    }
    chart.data=this.finance;
    this.totalAssets=datas[datas.length-1]['value1'];

    });


    /*
    chart.data = [{
    "category": "Calibration Not Applicable",
    "value": 100
    }, {
    "category": "Calibration Due> 30 Days",
    "value": 200
    }, {
    "category": "Calibration Due 30 Days",
    "value": 300
    }, {
    "category": "Calibration Due 15 Days",
    "value": 400
    }, {
    "category": "Calibration Missed",
    "value": 500
    }];*/
    

    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "key";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.startLocation = 0;
    categoryAxis.endLocation = 1.3;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value1";
    series.dataFields.categoryX = "key";
    series.columns.template.width = am4core.percent(35);
    series.name = "Legend 1";
    
















    let chart561 = am4core.create("chartdiv561", am4charts.XYChart);
    chart561.paddingRight = 20;


     
    this.xls.getDataFromXl(1,10).then(data => {
      var datas=data;
    for(var i=0;i<=datas.length-2;i++){
      this.finance[i]={'key':''+datas[i]['key'],'value1':''+datas[i]['value2']};
    }
    chart561.data=this.finance;
    });
    /*
    chart561.data = [{
    "category": "Calibration Not Applicable",
    "value": 100
    }, {
    "category": "Calibration Due> 30 Days",
    "value": 200
    }, {
    "category": "Calibration Due 30 Days",
    "value": 300
    }, {
    "category": "Calibration Due 15 Days",
    "value": 400
    }, {
    "category": "Calibration Missed",
    "value": 500
    }];*/
    
  
    
    // Create axes
    var categoryAxis = chart561.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "key";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.startLocation = 0;
    categoryAxis.endLocation = 1.3;
    
    var valueAxis = chart561.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series = chart561.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value1";
    series.dataFields.categoryX = "key";
    series.columns.template.width = am4core.percent(35);
    series.name = "Legend 1";
    
    var series2 = chart561.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.categoryX = "category";
    series2.columns.template.width = am4core.percent(80);
    series2.name = "Legend 2";
    
    }

}
