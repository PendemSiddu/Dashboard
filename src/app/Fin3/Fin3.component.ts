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
  selector: 'app-fin3',
  templateUrl: './fin3.component.html',
  styleUrls: ['./fin3.component.scss']
})
export class Fin3Component implements OnInit {

  constructor() { }
 
  ngOnInit(): void { }
 
  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
 
    let chart = am4core.create('fi3', am4charts.XYChart);
    chart.height = 530;
 
    chart.data = [
      {
        "program": "ORCA",
        "POValue": 766892.00,
        "RemainingForecast": 0,
        "consumed": [766892.00],
        "consumedLabels": ['ORCA'],
        "dummydata": '',
      },
      {
        "program": "Brooklyn Bridge Sustanence",
        "POValue": 142560.00,
        "RemainingForecast": 0,
        "consumed": [142560.00],
        "consumedLabels": ['Brooklyn Bridge Sustanence'],
        "dummydata": '',
      },
      {
        "program": "Sapphire - Onyx",
        "POValue": 278778.00,
        "RemainingForecast": 0,
        "consumed": [278778.00],
        "consumedLabels": ['Sapphire - Onyx'],
        "dummydata": '',
      },
      {
        "program": "Hercules-AD-1",
        "POValue": 474075.00,
        "RemainingForecast": 0,
        "consumed": [474075.00],
        "consumedLabels": ['Hercules-AD-1'],
        "dummydata": '',
      },
      {
        "program": "Hercules-2",
        "POValue": 445200.00,
        "RemainingForecast": 0,
        "consumed": [332274.25, 19999.75, 92926.00],
        "consumedLabels": ['Hercules-NPD', 'ORCA', 'Sapphire - Onyx'],
        "dummydata": '',
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
 let colorIndex = 0;

    // Function to create series
    function createSeries(field: string, name: string, stacked: boolean,    providedColor?: am4core.Color
    ) {
   
       const defaultColors = [
    am4core.color('#F1C40F'), 
      
    am4core.color('#b3df56'), 
     
      am4core.color('#e8b067'),
      
      
  ].map(color => am4core.color(color));

  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = field;
  series.dataFields.categoryX = 'program';
  series.name = name;
  series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
  series.stacked = stacked;

  // Get the color from the defaultColors array using the colorIndex
  let color = providedColor || defaultColors[colorIndex % defaultColors.length];

  // Increment the colorIndex for the next series
  colorIndex++;

  series.columns.template.fill = color; // Set the fill color here
  series.columns.template.stroke = color; // Set the stroke color here
  

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