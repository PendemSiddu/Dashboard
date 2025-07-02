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
@Component({
  selector: 'app-inventory-overview',
  templateUrl: './inventory-overview.component.html',
  styleUrls: ['./inventory-overview.component.scss'],
})
export class InventoryOverviewComponent implements OnInit {
  fruits: Fruit[] = [
    { value: 'apple-0', viewValue: 'Aquarius' },
    { value: 'banana-1', viewValue: 'Brooklyn' },
    { value: 'grape-2', viewValue: 'Sustenance' },
    { value: 'Gemini', viewValue: 'Gemini' },
    { value: 'Jupiter', viewValue: 'Jupiter' },
    { value: 'Sapphire', viewValue: 'Sapphire' },
  ];
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  public modeselect = 'banana-1';
  exportData: any;
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('fin11', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        year: 'Aquarius',
        europe: 1000000,
        namerica: 100000,
        asia: 10000,
      },
      {
        year: 'Sustenance',
        europe: 1000000,
        namerica: 1000,
        asia: 1000000,
      },
      {
        year: 'Brooklyn',
        europe: 10,
        namerica: 1000000,
        asia: 1000000,
      },
      {
        year: 'Gemini',
        europe: 100000,
        namerica: 1000000,
        asia: 1000000,
      },
      {
        year: 'Jupiter',
        europe: 1000,
        namerica: 1000000,
        asia: 1000000,
      },
      {
        year: 'Sapphire',
        europe: 1000000,
        namerica: 1000000,
        asia: 1000000,
      },
      {
        year: 'Other',
        europe: 1000000,
        namerica: 10000,
        asia: 1000000,
      },
    ];
    this.exportData = chart.data;
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.title.text = 'Assets';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = 'No.';
    // Modify chart's colors
    chart.colors.list = [
      am4core.color('#8CD7FA'),
      am4core.color('#5FBEF0'),
      am4core.color('#006BB6'),
    ];
    // Create series
    function createSeries(field: any, name: any, stacked: any) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'year';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries('europe', 'Found', false);
    createSeries('namerica', 'Missing', false);
    createSeries('asia', 'Additional', false);

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
  }
  downloadXl() {
    this.xls
      .exportData(this.exportData, 'Audit-Report.xlsx')
      .then((data) => {});
  }
}
