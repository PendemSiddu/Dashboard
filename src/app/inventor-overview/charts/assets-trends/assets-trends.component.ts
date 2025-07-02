import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { FormControl } from '@angular/forms';
import { XlsApi } from '../../../api/xl-api';

interface Fruit {
  value: string;
  viewValue: string;
}
interface Emp {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-assets-trends',
  templateUrl: './assets-trends.component.html',
  styleUrls: ['./assets-trends.component.scss'],
})
export class AssetsTrendsComponent implements OnInit {
  fruits: Fruit[] = [
    { value: 'apple-0', viewValue: 'Aquarius' },
    { value: 'banana-1', viewValue: 'Brooklyn' },
    { value: 'grape-2', viewValue: 'Sustenance' },
    { value: 'Gemini', viewValue: 'Gemini' },
    { value: 'Jupiter', viewValue: 'Jupiter' },
    { value: 'Sapphire', viewValue: 'Sapphire' },
  ];

  emp: Emp[] = [
    { value: '1', viewValue: 'Employee Left' },
    { value: '2', viewValue: 'EOL' },
    { value: '3', viewValue: 'Damage' },
    { value: '4', viewValue: 'Poor performance' },
  ];
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  public modeselect = 'banana-1';
  public empselect = '3';
  chart11: any;
  chart11w: any;
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    var chart112z = am4core.create('piechart112z', am4charts.PieChart);

    // Add data
    chart112z.data = [
      {
        country: 'Employee_Left',
        value: 15,
      },
      {
        country: 'EOL',
        value: 75,
      },
      {
        country: 'Damage',
        value: 75,
      },
      {
        country: 'Poor_Performance',
        value: 75,
      },
    ];
    this.chart11 = chart112z.data;
    chart112z.legend = new am4charts.Legend();
    chart112z.legend.position = 'bottom';
    chart112z.fontSize = 12;
    // Add and configure Series
    var pieSeriesz = chart112z.series.push(new am4charts.PieSeries());
    pieSeriesz.dataFields.value = 'value';
    pieSeriesz.dataFields.category = 'country';
    pieSeriesz.labels.template.disabled = true;
    pieSeriesz.ticks.template.disabled = true;
    var labelz = pieSeriesz.createChild(am4core.Label);
    labelz.text = '240 Total Assets';
    labelz.horizontalCenter = 'middle';
    labelz.verticalCenter = 'middle';
    chart112z.innerRadius = am4core.percent(65);

    labelz.fontSize = 12;

    pieSeriesz.colors.list = [
      am4core.color('#006BB6'),
      am4core.color('#FE9D52'),
      am4core.color('#B26E39'),
      am4core.color('#FE5252'),
    ];

    let chart21 = am4core.create('chartdiv22z', am4charts.XYChart);
    chart21.paddingRight = 20;

    chart21.data = [
      {
        category: 'Laptop',
        value: 100,
      },
      {
        category: 'Abbott Devices',
        value: 200,
      },
      {
        category: 'I-Pad',
        value: 300,
      },
      {
        category: 'Others',
        value: 400,
      },
    ];
    this.chart11w = chart21.data;
    // Create axes
    var categoryAxis = chart21.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.startLocation = 0;
    categoryAxis.endLocation = 1.3;

    var valueAxis = chart21.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart21.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    series.columns.template.width = am4core.percent(35);
    series.name = 'Legend 1';

    var series2 = chart21.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = 'value2';
    series2.dataFields.categoryX = 'category';
    series2.columns.template.width = am4core.percent(80);
    series2.name = 'Legend 2';

    // Themes end

    // Create chart instance
    let chartsz = am4core.create('linechart3', am4charts.XYChart);

    // Add data
    chartsz.data = [
      {
        year: 'Jan 22',
        Laptop: 1,
        Abbott_Devices: 5,
        'I-Pad': 3,
        Others: 3,
      },
      {
        year: 'Feb 22',
        Laptop: 1,
        Abbott_Devices: 2,
        'I-Pad': 6,
        Others: 3,
      },
      {
        year: 'Man 22',
        Laptop: 2,
        Abbott_Devices: 3,
        'I-Pad': 6,
        Others: 1,
      },
      {
        year: 'Apr 22',
        Laptop: 3,
        Abbott_Devices: 4,
        'I-Pad': 6,
        Others: 1,
      },
      {
        year: 'May 22',
        Laptop: 5,
        Abbott_Devices: 1,
        'I-Pad': 6,
        Others: 2,
      },
      {
        year: 'Jun 22',
        Laptop: 3,
        Abbott_Devices: 2,
        'I-Pad': 6,
        Others: 1,
      },
      {
        year: 'Jul 22',
        Laptop: 1,
        Abbott_Devices: 2,
        'I-Pad': 6,
        Others: 3,
      },
      {
        year: 'Aug 22',
        Laptop: 2,
        Abbott_Devices: 1,
        'I-Pad': 6,
        Others: 5,
      },
      {
        year: 'Sep 22',
        Laptop: 3,
        Abbott_Devices: 5,
        'I-Pad': 6,
        Others: 2,
      },
      {
        year: 'Oct 22',
        Laptop: 4,
        Abbott_Devices: 3,
        'I-Pad': 6,
        Others: 6,
      },
      {
        year: 'Nov 22',
        Laptop: 1,
        Abbott_Devices: 2,
        'I-Pad': 6,
        Others: 4,
      },
      {
        year: 'Dec 22',
        Laptop: 1,
        Abbott_Devices: 2,
        'I-Pad': 6,
        Others: 4,
      },
    ];

    // Create category axis
    let categoryAxiss = chartsz.xAxes.push(new am4charts.CategoryAxis());
    categoryAxiss.dataFields.category = 'year';
    categoryAxiss.renderer.opposite = true;
    categoryAxiss.title.text = 'Months';

    // Create value axis
    let valueAxiss = chartsz.yAxes.push(new am4charts.ValueAxis());
    valueAxiss.renderer.inversed = true;
    valueAxiss.title.text = 'Assets';
    valueAxiss.renderer.minLabelPosition = 0.01;

    // Create series
    let series11 = chartsz.series.push(new am4charts.LineSeries());
    series11.dataFields.valueY = 'Laptop';
    series11.dataFields.categoryX = 'year';
    series11.name = 'Laptop';
    series11.bullets.push(new am4charts.CircleBullet());
    series11.tooltipText = 'Place taken by {name} in {categoryX}: {valueY}';
    series11.legendSettings.valueText = '{valueY}';
    series11.visible = false;

    let series22 = chartsz.series.push(new am4charts.LineSeries());
    series22.dataFields.valueY = 'Abbott_Devices';
    series22.dataFields.categoryX = 'year';
    series22.name = 'Abbott Devices';
    series22.bullets.push(new am4charts.CircleBullet());
    series22.tooltipText = 'Place taken by {name} in {categoryX}: {valueY}';
    series22.legendSettings.valueText = '{valueY}';

    let series3 = chartsz.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = 'I-Pad';
    series3.dataFields.categoryX = 'year';
    series3.name = 'I-Pad';
    series3.bullets.push(new am4charts.CircleBullet());
    series3.tooltipText = 'Place taken by {name} in {categoryX}: {valueY}';
    series3.legendSettings.valueText = '{valueY}';

    let series4 = chartsz.series.push(new am4charts.LineSeries());
    series4.dataFields.valueY = 'Others';
    series4.dataFields.categoryX = 'year';
    series4.name = 'Others';
    series4.bullets.push(new am4charts.CircleBullet());
    series4.tooltipText = 'Place taken by {name} in {categoryX}: {valueY}';
    series4.legendSettings.valueText = '{valueY}';

    // Add chart cursor
    chartsz.cursor = new am4charts.XYCursor();
    chartsz.cursor.behavior = 'zoomY';

    let hs1 = series11.segments.template.states.create('hover');
    hs1.properties.strokeWidth = 5;
    series11.segments.template.strokeWidth = 1;

    let hs2 = series22.segments.template.states.create('hover');
    hs2.properties.strokeWidth = 5;
    series22.segments.template.strokeWidth = 1;

    let hs3 = series3.segments.template.states.create('hover');
    hs3.properties.strokeWidth = 5;
    series3.segments.template.strokeWidth = 1;

    let hs4 = series4.segments.template.states.create('hover');
    hs4.properties.strokeWidth = 5;
    series4.segments.template.strokeWidth = 1;

    // Add legend
    chartsz.legend = new am4charts.Legend();
    chartsz.legend.itemContainers.template.events.on(
      'over',
      function (event) {}
    );

    chartsz.legend.itemContainers.template.events.on(
      'out',
      function (event) {}
    );
  }
  downloadXl() {
    this.xls
      .exportData(this.chart11, 'Asset-Onboarding-Deboarding-Trends.xlsx')
      .then((data) => {});
  }

  downloadXl1() {
    this.xls
      .exportData(this.chart11w, 'Causes-of-Asset-De-assigned.xlsx')
      .then((data) => {});
  }
}
