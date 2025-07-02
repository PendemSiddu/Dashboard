import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../../api/xl-api';

interface Fruit {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-inventory-utlization',
  templateUrl: './inventory-utlization.component.html',
  styleUrls: ['./inventory-utlization.component.scss'],
})
export class InventoryUtlizationComponent implements OnInit {
  finance: any = [];
  tempResult: any = [];
  assetsData: any;
  chart1: any;
  fruits: Fruit[] = [
    { value: 'apple-0', viewValue: 'Aquarius' },
    { value: 'banana-1', viewValue: 'Brooklyn' },
    { value: 'grape-2', viewValue: 'Sustenance' },
    { value: 'Gemini', viewValue: 'Gemini' },
    { value: 'Jupiter', viewValue: 'Jupiter' },
    { value: 'Sapphire', viewValue: 'Sapphire' },
  ];
  result: any;
  public modeselect = 'banana-1';
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    var chart112 = am4core.create('piechart112', am4charts.PieChart);
    /*
    this.xls.getDataFromXl(1, 9).then((data) => {
      var datas = data;
      for (let { value2 } of datas)
        if (value2 != 'Item Classification')
          this.tempResult[value2] = {
            value2,
            count: this.tempResult[value2]
              ? this.tempResult[value2].count + 1
              : 1,
          };
      let result = Object.values(this.tempResult);
      this.assetsData = result;
      chart112.data = result;
    });*/

    chart112.data = [
      {
        value2: 'Deassigned',
        count: 15,
      },
      {
        value2: 'Assigned',
        count: 75,
      },
    ];

    // Add data

    /*
 
  
  [
    {
        "value2": "Item Classification",
        "count": 1
    },
    {
        "value2": "iPADs",
        "count": 7
    },
    {
        "value2": "Load boards",
        "count": 2
    },
    {
        "value2": "Dongle",
        "count": 2
    },
    {
        "value2": "IPG Gemini",
        "count": 3
    },
    {
        "value2": "LEADS",
        "count": 8
    },
    {
        "value2": "Misc",
        "count": 6
    },
    {
        "value2": "Charger Assembly",
        "count": 2
    },
    {
        "value2": "Cable",
        "count": 3
    },
    {
        "value2": "Scout Interface Board",
        "count": 2
    },
    {
        "value2": "Magnet",
        "count": 1
    },
    {
        "value2": "iPhones",
        "count": 3
    },
    {
        "value2": "IPG Breakout board",
        "count": 4
    },
    {
        "value2": "Charger Breakout board",
        "count": 1
    },
    {
        "value2": "Hardware boards",
        "count": 1
    },
    {
        "value2": "HF: PES",
        "count": 2
    },
    {
        "value2": "Enclosure",
        "count": 4
    },
    {
        "value2": "Power supply",
        "count": 1
    },
    {
        "value2": "Display module",
        "count": 1
    },
    {
        "value2": "J-Link",
        "count": 3
    },
    {
        "value2": "Emulator",
        "count": 5
    },
    {
        "value2": "IPG Assembly",
        "count": 3
    },
    {
        "value2": "Emulato",
        "count": 1
    }
]
  
  */
    chart112.legend = new am4charts.Legend();
    chart112.legend.position = 'right';
    chart112.fontSize = 12;
    chart112.legend.maxHeight = 150;
    chart112.legend.maxWidth = 400;

    chart112.legend.scrollable = true;
    // Add and configure Series
    var pieSeries = chart112.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'value2';
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    var label = pieSeries.createChild(am4core.Label);
    label.text = '{values.value.sum} total assets';
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'middle';
    chart112.innerRadius = am4core.percent(65);
    chart112.legend.valueLabels.template.disabled = true;

    label.fontSize = 12;

    pieSeries.colors.list = [
      am4core.color('#006BB6'),
      am4core.color('#FE9D52'),
    ];

    let chart21 = am4core.create('chartdiv', am4charts.XYChart);
    chart21.paddingRight = 20;

    this.xls.getDataFromXl(1, 9).then((data) => {
      var datas = data;
      /*
  for(var i=0;i<=datas.length-1;i++){
    this.finance[i]={'key':''+datas[i]['value2'],'value1':''+datas[i]['value1']};
  }*/

      for (let { value2 } of datas)
        if (value2 != 'Item Classification')
          this.tempResult[value2] = {
            value2,
            count: this.tempResult[value2]
              ? this.tempResult[value2].count + 1
              : 1,
          };
      let result = Object.values(this.tempResult);
      chart21.data = result;
      this.chart1 = chart21.data;
      //console.log(chart21.data);
    });
    /*[{
"category": "Laptop",
"value": 100
}, {
"category": "Abbott Devices",
"value": 200
}, {
"category": "I-Pad",
"value": 300
}, {
"category": "Others",
"value": 400
}];*/

    // Create axes
    var categoryAxis = chart21.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'value2';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.startLocation = 0;
    categoryAxis.endLocation = 1.3;

    var valueAxis = chart21.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart21.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'value2';
    series.columns.template.width = am4core.percent(35);
    series.name = 'Legend 1';
  }

  downloadXl() {
    this.xls
      .exportData(this.chart1, 'Inventory-Utilization-Details.xlsx')
      .then((data) => {});
  }
}
