import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../../api/xl-api';

@Component({
  selector: 'app-quality-metrics',
  templateUrl: './quality-metrics.component.html',
  styleUrls: ['./quality-metrics.component.scss'],
})
export class QualityMetricsComponent implements OnInit {
  xlData: any;
  obj: any = {};
  finance: any = [];

  xlReport: any;
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('piechart4', am4charts.XYChart);

    /* this.xls.getDataFromXl(1, 11).then((data) => {
      var datas = data;
      console.log(datas);
      for (var i = 0; i <= datas.length - 1; i++) {
        this.finance[i] = {
          key: '' + datas[i]['value1'],
          value1: '' + datas[i]['value1'],
        };
      }
      chart.data = this.finance;
    });*/
    // Add data
    chart.data = [
      {
        year: '1930',
        italy: 1,
        germany: 5,
        uk: 3,
      },
      {
        year: '1934',
        italy: 1,
        germany: 2,
        uk: 6,
      },
      {
        year: '1938',
        italy: 2,
        germany: 3,
        uk: 1,
      },
      {
        year: '1950',
        italy: 3,
        germany: 4,
        uk: 1,
      },
      {
        year: '1954',
        italy: 5,
        germany: 1,
        uk: 2,
      },
      {
        year: '1958',
        italy: 3,
        germany: 2,
        uk: 1,
      },
      {
        year: '1962',
        italy: 1,
        germany: 2,
        uk: 3,
      },
      {
        year: '1966',
        italy: 2,
        germany: 1,
        uk: 5,
      },
      {
        year: '1970',
        italy: 3,
        germany: 5,
        uk: 2,
      },
      {
        year: '1974',
        italy: 4,
        germany: 3,
        uk: 6,
      },
      {
        year: '1978',
        italy: 1,
        germany: 2,
        uk: 4,
      },
    ];
    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = true;
    valueAxis.title.text = 'Place taken';
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = 'italy';
    series1.dataFields.categoryX = 'year';
    series1.name = 'Italy';
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = 'Place taken by {name} in {categoryX}: {valueY}';
    series1.legendSettings.valueText = '{valueY}';
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = 'germany';
    series2.dataFields.categoryX = 'year';
    series2.name = 'Germany';
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = 'Place taken by {name} in {categoryX}: {valueY}';
    series2.legendSettings.valueText = '{valueY}';

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = 'uk';
    series3.dataFields.categoryX = 'year';
    series3.name = 'United Kingdom';
    series3.bullets.push(new am4charts.CircleBullet());
    series3.tooltipText = 'Place taken by {name} in {categoryX}: {valueY}';
    series3.legendSettings.valueText = '{valueY}';

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = 'zoomY';

    let hs1 = series1.segments.template.states.create('hover');
    hs1.properties.strokeWidth = 5;
    series1.segments.template.strokeWidth = 1;

    let hs2 = series2.segments.template.states.create('hover');
    hs2.properties.strokeWidth = 5;
    series2.segments.template.strokeWidth = 1;

    let hs3 = series3.segments.template.states.create('hover');
    hs3.properties.strokeWidth = 5;
    series3.segments.template.strokeWidth = 1;
  }
}
