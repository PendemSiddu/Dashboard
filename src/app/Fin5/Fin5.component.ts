import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
 
interface ConsumedSeriesData {
  [key: string]: number[];
}
 
interface ChartDataItem {
  program: string;
  POValue: number;
  consumed: number[];
  RemainingForecast: number;
  consumedLabels: string[];
  [key: string]: number | number[] | string | string[];
}
 
@Component({
  selector: 'app-Fin5',
  templateUrl: './Fin5.component.html',
  styleUrls: ['./Fin5.component.scss']
})
export class Fin5Component implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void { }
 
  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
 
    let chart = am4core.create('fi5', am4charts.XYChart);
 
  chart.data = [
   
    {
      "program": "Cloud Ops 2",
      "POValue": 401100.00,
      "RemainingForecast":0,
            "consumed": [306890.00 ,26422.00, 67788.00],
 
      "consumedLabels": ['Cloud Ops 2','Mobile Ops Jupiter/Oahu','Mobile Ops Mrkt Expansion'],
            "dummydata":'',
 
    },
   
      {
        "program": "CAPEX",
        "POValue": 169912.75,
        "RemainingForecast": 0,
              "consumed": [ 169912.75],
   
        "consumedLabels": [ 'CAPEX'],
              "dummydata":'',
   
      },
    // Add other data points...
  ];
 
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'program';
   categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.labels.template.rotation = 45;
    // Rotate the labels to 45 degrees
    categoryAxis.renderer.labels.template.rotation = 45;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.verticalCenter = 'top';
    chart.logo.disabled = true;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
 
    // Function to create series
    function createSeries(field: string, name: string, stacked: boolean,    providedColor?: am4core.Color
    ) {
   
        const defaultColors = [
         
          am4core.color('#F1C40F'), 
       
     
          am4core.color('#e8b067'),

          am4core.color('#b3df56'),
      
      ].map(color => am4core.color(color));
           
 
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'program';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      let colorIndex = 0;
            let color = providedColor ||  defaultColors[chart.series.length % defaultColors.length];
       colorIndex++ ;
       series.columns.template.fill = color; // Set the fill color here
    series.columns.template.stroke = color; // Set the stroke color here
    series.columns.template.width = am4core.percent(45);
     
 
      return series;
    }
 
    // Create series for POValue and RemainingForecast separately
    createSeries('POValue', 'PO Value', false, am4core.color('#3498DB'));
    createSeries('dummydata', '', false,am4core.color('#F1C40F'));
 
    let consumedSeriesData: ConsumedSeriesData = {};
 
    chart.data.forEach((dataItem: ChartDataItem, index) => {
      dataItem.consumed.forEach((value, idx) => {
        let seriesName = dataItem.consumedLabels[idx];
        if (!consumedSeriesData[seriesName]) {
          consumedSeriesData[seriesName] = [];
        }
        while (consumedSeriesData[seriesName].length < index) {
          consumedSeriesData[seriesName].push(0);
        }
        consumedSeriesData[seriesName].push(value);
      });
    });
 
    // Create a separate stacked series for each consumed data
    Object.keys(consumedSeriesData).forEach((key) => {
      createSeries(key, key, true);
      chart.data.forEach((dataItem: ChartDataItem, idx) => {
        dataItem[key] = consumedSeriesData[key][idx] || 0;
      });
    });
        createSeries('RemainingForecast', 'Remaining Forecast', false,am4core.color('#2ECC71'));
 
 
    // Add legend
  }
}