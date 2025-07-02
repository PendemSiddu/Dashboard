import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../api/xl-api';
import * as _ from 'lodash';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
  finance: any = [];
  finance1: any = [];
  burndown: any = [];
  programNames: any = [];
  cal: any;
  finance4: any = [];
  finance5: any = [];
  finance6: any = [];
  finance7: any;
  fin4AllPrograms: any;
  progm: any = 1;
  role: any;
  countv: any = 2;
  newval: any;
  selectedOptions: string = 'CY-2025';
  val1: any;
  val2: any;
  minus: any;
  constructor(private xls: XlsApi) {
    this.role = sessionStorage.getItem('role');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('fin1', am4charts.XYChart);

    this.xls.getDataFromXl(3, 5).then((data) => {
      var datas = data;
      var j = 0;
      for (var i = 1; i <= 20; i++) {
        this.finance[j] = {
          key: '' + datas[i]['value2'],
          value1: '' + datas[i]['value1'],
          value2: '' + datas[i]['value2'],
          value3: '' + datas[i]['value3'],
        };
        j++;
      }

      chart.data = this.finance;
      console.log(this.finance);
    });

    // Add data

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'key';
    categoryAxis.title.text = 'Program Name';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.labels.template.fontSize = 12;

    // Rotate the labels to 45 degrees
    categoryAxis.renderer.labels.template.rotation = 45;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.verticalCenter = 'top';

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = 'Budget Value($)';
    valueAxis.numberFormatter.numberFormat = '#.a';
    valueAxis.numberFormatter.bigNumberPrefixes = [
      { number: 1e3, suffix: 'K' },
    ];
    // Modify chart's colors
    chart.colors.list = [
      am4core.color('#5FBEF0'),
      am4core.color('#F5821E'),
      am4core.color('#006BB6'),
    ];
    // Create series
    // Create series
    function createSeries(field: any, name: any, stacked: any) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'key';
      series.name = name;
      series.columns.template.tooltipText = '{key} - {name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(100);
    }

    createSeries('value1', 'SOW', false);
    createSeries('value2', 'Budget Consumed', false);
    createSeries('value3', 'Yearly Forecast', true);

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';

    //chart2

    // Create chart instance
    let chart2 = am4core.create('fin2', am4charts.XYChart);
    this.xls.getDataFromXl(4, 2).then((data) => {
      var datas = data;
      var j = 0;
      for (var i = 0; i <= datas.length - 2; i++) {
        if (
          datas[i]['value3'] !== undefined &&
          datas[i]['value3'] != 'Final Consolidated SOW Value(Annual)' &&
          datas[i]['value1'] != 'Total'
        ) {
          if (datas[i]['value6']) {
            this.burndown[j] = {
              key: '' + datas[i]['value1'],
              value1: '' + datas[i]['value4'],
              value2: '' + datas[i]['value3'],
            };
            j++;
          }
        }
      }
      chart2.data = _.sortBy(this.burndown, 'key');
      chart2.data = this.burndown;
    });

    // Create axes
    let categoryAxiss = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxiss.dataFields.category = 'key';
    categoryAxiss.title.text = 'Program Name';
    categoryAxiss.renderer.grid.template.location = 0;
    categoryAxiss.renderer.minGridDistance = 20;
    categoryAxiss.renderer.cellStartLocation = 0.1;
    categoryAxiss.renderer.cellEndLocation = 0.9;
    categoryAxiss.renderer.labels.template.fontSize = 12;
    categoryAxiss.renderer.labels.template.rotation = 45;
    categoryAxiss.renderer.labels.template.horizontalCenter = 'left';
    categoryAxiss.renderer.labels.template.verticalCenter = 'top';

    let valueAxiss = chart2.yAxes.push(new am4charts.ValueAxis());
    valueAxiss.min = 0;
    valueAxiss.title.text = ' Budget Value($)';
    valueAxiss.numberFormatter.numberFormat = '#.a';
    valueAxiss.numberFormatter.bigNumberPrefixes = [
      { number: 1e3, suffix: 'K' },
    ];
    // Modify chart's colors
    chart2.colors.list = [
      am4core.color('#3498DB'),
      am4core.color('#2ECC71'),
      am4core.color('#F1C40F'),
    ];
    // Create series
    function createSeriess(field: any, name: any, stacked: any) {
      let series = chart2.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'key';
      series.name = name;
      series.columns.template.tooltipText = '{key} {name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeriess('value2', 'Planned Budget', false);
    createSeriess('value1', 'Budget consumed till date', false);

    // Add legend
    chart2.legend = new am4charts.Legend();
    chart2.legend.position = 'top';

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart3 = am4core.create('fin3', am4charts.XYChart);

    this.xls.getDataFromXl(3, 5).then((data) => {
      var datas = data;
      console.log(datas);
debugger
      var j = 0;
      for (var i = 37; i <= 49 - 1; i++) {
        this.cal = parseFloat(datas[i]['key']) - parseFloat(datas[i]['value4']);

        const parsedValue1 = parseFloat(datas[i]['value4']);
        const parsedValue2 = parseFloat(datas[i]['value2']);
        //console.log(parsedValue1 + '---' + parsedValue2);
        // Handle absence or invalid value1
        if (isNaN(parsedValue1) || parsedValue1 === 0) {
          this.newval = null;
        } else {
          this.newval = parsedValue1;
        }

        // Handle absence or invalid value2
        let value2Data = null;
        if (typeof datas[i]['value2'] !== 'undefined' && !isNaN(parsedValue2)) {
          value2Data = parsedValue2;
        }

        this.programNames[j] = {
          date: '' + this.ExcelDateToJSDate(datas[i]['value1']),
          value1: this.newval,
          value2: parseFloat(parsedValue2.toFixed(2)), // If value2 is not present or invalid, this will be null
        };

        j++;
      }

      chart3.data = this.programNames;
      console.log(chart3.data);
      debugger
    });

    // Create axes
    let dateAxis = chart3.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.dateFormats.setKey('month', 'MMM yyyy'); // Set the date format for the month
    dateAxis.periodChangeDateFormats.setKey('month', 'MMM yyyy'); // Set the date format for the period change (e.g., if zoomed out)
    dateAxis.renderer.labels.template.rotation = 45;

    let valueAxisx = chart3.yAxes.push(new am4charts.ValueAxis());
    valueAxisx.min = 5000;
    // Create series
    let series = chart3.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'value1';
    series.name = 'Actual'; // Label the series as "Planned"

    series.dataFields.dateX = 'date';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = '[bold]{date}:[/] {value1}';
    series.stroke = am4core.color('#2ECC71'); // Set the color to green
    // For series1
    let bullet1 = series.bullets.push(new am4charts.CircleBullet());
    bullet1.circle.radius = 8; // Set the radius to any size you want
    bullet1.circle.fill = am4core.color('#2ECC71');

    // Create second series
    let series2 = chart3.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = 'value2';
    series2.name = 'Planned'; // Label the series as "Planned"
    series.connect = false;
    series2.dataFields.dateX = 'date';
    series2.strokeWidth = 2;
    series2.connect = false;
    series2.minBulletDistance = 10;
    series2.tooltipText = '[bold]{date}:[/] {value2}';
    series2.stroke = am4core.color('#3498DB'); // Set the color to green
    // For series2 bullet
    let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 6; // Set the radius to any size you want
    bullet2.circle.fill = am4core.color('#3498DB');

    let label2 = bullet2.createChild(am4core.Label);
    label2.text = '{valueY}';
    label2.y = 20; // Position label above the bullet

    let label1 = bullet1.createChild(am4core.Label);
    label1.text = '{valueY}';
    label1.y = -25; // Position label above the bullet
    // Add cursor
    chart3.cursor = new am4charts.XYCursor();
    chart3.cursor.xAxis = dateAxis;
    let valueAxisss = chart3.yAxes.push(new am4charts.ValueAxis());
    valueAxisss.min = 0;
    valueAxisss.title.text = ' Budget Value($)';
    valueAxisss.numberFormatter.numberFormat = '#.a';
    valueAxisss.numberFormatter.bigNumberPrefixes = [
      { number: 1e3, suffix: 'K' },
    ];

    let categoryAxissz = chart3.xAxes.push(new am4charts.CategoryAxis());
    categoryAxissz.dataFields.category = 'key';
    categoryAxissz.title.text = 'Month';
    categoryAxissz.renderer.grid.template.location = 0;
    categoryAxissz.renderer.minGridDistance = 10;
    categoryAxissz.renderer.cellStartLocation = 0.1;
    categoryAxissz.renderer.cellEndLocation = 0.9;

    // Add chart legend
    chart3.legend = new am4charts.Legend();
    chart3.legend.position = 'bottom';
    this.changeGraph();
    this.changeGraph5();
  }

  changeGraph() {
    var ijk = this.progm;
    ////console.log(ijk);
    // Create chart instance-chart 4
    let chart = am4core.create('fin4', am4charts.XYChart);
    this.val1 = 0;
    this.val2 = 0;
    this.minus = 0;
    this.xls.getDataFromXl2(3, 5).then((data) => {
      this.finance4 = data;
      console.log(this.finance4);

      var allObjectKeys = Object.keys(this.finance4[ijk]);

      var j = 0;
      var finance5 = [];

      for (var i = 7; i < allObjectKeys.length; i += 2) {
        var val2 = this.finance4[ijk][allObjectKeys[i + 1]];
        var val1 = this.finance4[ijk][allObjectKeys[i]];
        console.log(val1 + '---' + val2);
        // Check if val1 and val2 are not null
        if (val1 !== null) {
          this.val1 += val1;
        }

        if (val2 !== null) {
          this.val2 += val2;
        }

        // Calculate val1 - val2 and add to the sum
        if (val1 !== null && val2 !== null) {
          this.minus += val1 - val2;
        }

        if (val2 == null || val2 == 0) {
          val2 = 0;
        }
        if (val1 == null || val1 == 0) {
          val1 = 0;
        }

        finance5.push({
          date: allObjectKeys[i],
          value1: val1,
          value2: val2,
        });

        // console.log(finance5);

        chart.data = finance5;
        this.finance7 = finance5;
      }

      debugger;
      console.log('Sum of val1:', this.val1);
      console.log('Sum of val2:', this.val2);
      console.log('Sum of val1 - val2:', this.minus);
    });

    // Add data

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'date';
    categoryAxis.title.text = 'Year';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.labels.template.fontSize = 12;

    // Rotate the labels to 45 degrees
    categoryAxis.renderer.labels.template.rotation = 45;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.verticalCenter = 'top';

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = 'Budget Value($)';
    valueAxis.numberFormatter.numberFormat = '#.a';
    valueAxis.numberFormatter.bigNumberPrefixes = [
      { number: 1e3, suffix: 'K' },
    ];
    // Modify chart's colors
    chart.colors.list = [am4core.color('#3498DB'), am4core.color('#2ECC71')];
    // Create series
    // Create series
    function createSeries(field: any, name: any, stacked: any) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'date';
      series.name = name;
      series.columns.template.tooltipText =
        '{date} - {name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(100);
    }

    createSeries('value1', 'Planned', false);
    createSeries('value2', 'Actual', false);

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
  }
  formatK(value: number): string {
    if (typeof value !== 'number') {
      console.error('Not a number:', value);
      return 'N/A';
    }
    const formattedValue = value.toFixed(1);
    const sign = value < 0 ? '-' : '';
    const absValue = Math.abs(value);

    if (absValue >= 1000) {
      return sign + (absValue / 1000).toFixed(1) + 'K';
    }
    // return value.toString();
    return formattedValue;
  }

  changeGraph5() {
    // Create chart instance-chart 4
    let chart6 = am4core.create('fin5', am4charts.XYChart);

    this.xls.getDataFromXl(3, 9).then((data) => {
      this.finance6 = data;
      console.log(this.finance6);

      var j = 0;

      for (var i = 0; i <= this.finance6.length -1; i++) {
        var val1 = this.finance6[i]['value1'];
        var val2 = this.finance6[i]['value2'];

        if (val2 == null || val2 == 0) {
          val2 = null;
        }
        if (val1 == null || val1 == 0) {
          val1 = null;
        }

        this.finance6[i] = {
          date: this.ExcelDateToJSDate(this.finance6[i]['key']),
          value1: val1,
          value2: val2,
        };
      }

      chart6.data = this.finance6;
      //console.log(chart6.data);
    });

    let categoryAxis6 = chart6.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis6.dataFields.category = 'date';
    categoryAxis6.renderer.grid.template.location = 0;
    categoryAxis6.renderer.minGridDistance = 50;
    categoryAxis6.title.text = 'Month'; // Set X-axis label

    let valueAxis6 = chart6.yAxes.push(new am4charts.ValueAxis());

    valueAxis6.title.text = 'Budget Value ($)'; // Set Y-axis label
    valueAxis6.numberFormatter.numberFormat = '#.a';
    valueAxis6.numberFormatter.bigNumberPrefixes = [
      { number: 1e3, suffix: 'K' },
    ];
    valueAxis6.min = 0;
    // Create series
    let series16 = chart6.series.push(new am4charts.LineSeries());
    series16.dataFields.valueY = 'value1';
    series16.dataFields.categoryX = 'date';
    series16.strokeWidth = 2;
    series16.minBulletDistance = 10;
    series16.tooltipText = '{date} Planned: [bold]{valueY.value}[/]';
    series16.name = 'Planned'; // Set the legend label for value1

    let series26 = chart6.series.push(new am4charts.LineSeries());
    series26.dataFields.valueY = 'value2';
    series26.dataFields.categoryX = 'date';
    series26.strokeWidth = 2;
    series26.minBulletDistance = 10;
    series26.tooltipText = '{date} Actual: [bold]{valueY.value}[/]';
    series26.name = 'Actual'; // Set the legend label for value2
    series26.stroke = am4core.color('#00FF00'); // Set the color to green

    // Bullet for series1
    let bullet1 = series16.bullets.push(new am4charts.CircleBullet());
    bullet1.circle.radius = 6; // Set the radius to any size you want
    // Bullet for series2
    let bullet2 = series26.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 6; // Set the radius to any size you want
    bullet2.circle.fill = am4core.color('#00FF00'); // Same color as the line

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

    // Add cursor
    chart6.cursor = new am4charts.XYCursor();
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


  items: any[] = []; // Assuming items is an array of objects containing value1 and value2 properties

  // Calculate the total of (item.value2 * 0.044)
  getTotal(): number {
    return this.items.reduce((total, item) => total + (item.value2 * 0.044), 0);
  }
}
