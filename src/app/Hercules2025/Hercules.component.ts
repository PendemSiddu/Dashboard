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
  selector: 'app-Hercules',
  templateUrl: './Hercules.component.html',
  styleUrls: ['./Hercules.component.scss']
})
export class HerculesComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void { }
 
  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
 
    let chart = am4core.create('fi51', am4charts.XYChart);
    chart.height = 420;
 
  chart.data = [
    {
      "program": "Hercules",
      "POValue": 221772.39,
      "RemainingForecast": 111648.37,
            "consumed": [110124.02],
 
      "consumedLabels": ['Hercules'],
      "dummydata":'',
 
    }
    

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
    categoryAxis.renderer.labels.template.fontSize = 14; // Increase font size
categoryAxis.renderer.labels.template.fontWeight = 'bold';
    categoryAxis.renderer.labels.template.rotation = 360;
    categoryAxis.renderer.labels.template.horizontalCenter = 'middle';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    chart.logo.disabled = true;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
 
    // Function to create series
    function createSeries(field: string, name: string, stacked: boolean,    providedColor?: am4core.Color
    ) {
      const defaultColors = [
  
      
      am4core.color('#F1C40F'), 
      
      am4core.color('#b3df56'), 
      am4core.color('#F1C40F'), 
     
      am4core.color('#b3df56'), 
      am4core.color('#F1C40F'), 
      
      am4core.color('#b3df56'), 
       
      
      ].map(color => am4core.color(color));
           
 
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'program';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.stacked = stacked;
            let color = providedColor || defaultColors[chart.series.indexOf(series) % defaultColors.length];
 
       series.columns.template.fill = color; // Set the fill color here
    series.columns.template.stroke = color; // Set the stroke color here
    series.columns.template.width = am4core.percent(50);
     
 
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
 