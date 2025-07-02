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
  selector: 'app-Fin10',
  templateUrl: './Fin10.component.html',
  styleUrls: ['./Fin10.component.scss']
})
export class Fin10Component implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void { }
 
  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
 
    let chart = am4core.create('fi10', am4charts.XYChart);
    chart.height = 500;
     
 
  chart.data = [
    
    {
        "program": "IPT",
        "POValue": 287390.97,
        "RemainingForecast": 272979.32,
              "consumed": [ 14411.65],
   
        "consumedLabels": [ 'IPT'],
              "dummydata":'',
   
      },
      {
        "program": "EU MDR",
        "POValue": 385310.27,
        "RemainingForecast": 352261.31,
              "consumed": [ 33048.96],
   
        "consumedLabels": [ 'EU MDR'],
              "dummydata":'',
   
      },
      {
        "program": "GMI",
        "POValue": 157680.64,
        "RemainingForecast": 154652.40,
              "consumed": [ 3028.24],
   
        "consumedLabels": [ 'GMI'],
              "dummydata":'',
   
      },
      {
        "program": "PFAS",
        "POValue": 105325.74,
        "RemainingForecast":96279.21 ,
              "consumed": [ 9046.53],
   
        "consumedLabels": [ 'PFAS'],
              "dummydata":'',
   
      },
      {
        "program": "ATE Validation",
        "POValue": 45108.00,
        "RemainingForecast": 45108.00,
              "consumed": [ 0],
   
        "consumedLabels": [ 'ATE Validation'],
              "dummydata":'',
   
      },
      {
        "program": "System verfication",
        "POValue": 16373.76,
        "RemainingForecast": 16373.76,
              "consumed": [ 0],
   
        "consumedLabels": [ 'System verfication'],
              "dummydata":'',
   
      },
      {
        "program": "Mobile Ops Hercule",
        "POValue": 441903.80,
        "RemainingForecast": 179496.71,
              "consumed": [ 262407.09],
   
        "consumedLabels": [ 'Mobile Ops Hercules'],
              "dummydata":'',
   
      },
      
      {
        "program": "Sapphire-Jupiter-Sustainence",
        "POValue": 353438.05,
        "RemainingForecast": 155991.19,
              "consumed": [ 197446.86],
   
        "consumedLabels": [ 'Sapphire-Jupiter-Sustainence'],
              "dummydata":'',
   
      },
      {
        "program": "Hercules ",
        "POValue": 1459829.00,
        "RemainingForecast": 915056.53,
              "consumed": [ 344772.47],
   
        "consumedLabels": [ ' Hercules'],
              "dummydata":'',
   
      },
      {
        "program": "CloudOps",
        "POValue":783631.34,
        "RemainingForecast": 326513.06,
              "consumed": [ 457118.28],
   
        "consumedLabels": [ 'CloudOps'],
              "dummydata":'',
   
      },
      {
        "program": "MobileOps-Marketing-Expansion",
        "POValue": 299503.08,
        "RemainingForecast": 124792.95,
              "consumed": [ 174710.13],
   
        "consumedLabels": [ 'MobileOps-Marketing-Expansion'],
              "dummydata":'',
   
      },
      {
        "program": "OrionMRI-FW1.3",
        "POValue": 66670.21,
        "RemainingForecast": 66670.21,
              "consumed": [ 0],
   
        "consumedLabels": [ 'OrionMRI-FW1.3'],
              "dummydata":'',
   
      },
      {
        "program": "OrionMRI-Telemetry",
        "POValue": 242321.04,
        "RemainingForecast": 242321.04,
              "consumed": [ 0],
   
        "consumedLabels": [ 'OrionMRI-Telemetry'],
              "dummydata":'',
   
      },
      {
        "program": "Mypath",
        "POValue": 529541.18,
        "RemainingForecast": 244422.26,
              "consumed": [ 285118.92],
   
        "consumedLabels": [ 'Mypath'],
              "dummydata":'',
   
      },
      {
        "program": "Remote Care",
        "POValue": 172656.78,
        "RemainingForecast": 71940.33,
              "consumed": [ 100716.46],
   
        "consumedLabels": [ 'Remote Care'],
              "dummydata":'',
   
      },
      {
        "program": "CAPEX",
        "POValue": 296286.30,
        "RemainingForecast": 203973.71,
              "consumed": [ 92312.59],
   
        "consumedLabels": [ 'CAPEX'],
              "dummydata":'',
   
      },
      {
        "program": "Hercules-Mark-Sustainence",
        "POValue": 421389.89 ,
        "RemainingForecast": 85474.62,
              "consumed": [ 335915.27],
   
        "consumedLabels": [ 'Hercules-Mark-Sustainence'],
              "dummydata":'',
   
      },
      {
        "program": "Deployment Contractor",
        "POValue": 57310.85 ,
        "RemainingForecast": 52533.36,
              "consumed": [ 4777.49],
   
        "consumedLabels": [ 'Deployment Contractor'],
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
    categoryAxis.renderer.labels.template.rotation = 75;
    // Rotate the labels to 45 degrees
    categoryAxis.renderer.labels.template.rotation = 75;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.verticalCenter = 'top';
    chart.logo.disabled = true;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
 
    // Function to create series
    function createSeries(field: string, name: string, stacked: boolean,    providedColor?: am4core.Color
    ) {
      const defaultColors = [
        am4core.color('#b3df56'),
        am4core.color('#9ECBED'),
        am4core.color('#b3df56'),
   
       
        am4core.color('#b3df56'),
       
        am4core.color('#9ECBED'),
        am4core.color('#b3df56'),
      ].map(color => am4core.color(color));
           
 
     
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'program';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      let colorIndex = 0;
            let color = providedColor || defaultColors[colorIndex % defaultColors.length];
       colorIndex++ ;
       series.columns.template.fill = color; // Set the fill color here
    series.columns.template.stroke = color; // Set the stroke color here// Set the stroke color here
    series.columns.template.width = am4core.percent(30);
     
     
 
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
 