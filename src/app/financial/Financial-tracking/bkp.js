import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../api/xl-api';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-po-chart',
  templateUrl: './new-po-chart.component.html',
  styleUrls: ['./new-po-chart.component.scss'],
})
export class NewPoChartComponent implements OnInit {
  finance: any = [];
  finance1: any = [];
  burndown: any = [];
  programNames: any = [];
  cal: any;
  finance4: any = [];
  finance5: any = [];
  finance6: any = [];
  fin4AllPrograms: any;
  progm: any = 1;
  role: any;
  countv: any = 2;
  newval: any;
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
  }

  restructureDataForStackedChart() {
    let restructuredData: { category: string; [key: string]: any }[] = [];

    const addEmptySpace = (group: string, postfix: string) => {
      // Added a postfix to differentiate between different empty spaces
      restructuredData.push({ category: `Empty ${postfix}` });
    };
    ['PO 1', 'PO 2', 'PO 3', 'PO 4'].forEach((group, index) => {
      const sowObj = { category: `${group}` } as {
        [key: string]: any;
        category: string;
      };
      const consumedObj = { category: `${group}- Budget Consumed` } as {
        [key: string]: any;
        category: string;
      };
      const actualObj = { category: `${group}- Forecast` } as {
        [key: string]: any;
        category: string;
      };

      this.finance.forEach((item: any) => {
        if (item.group === group) {
          sowObj[item.key] = parseFloat(item.value1);
          consumedObj[item.key] = parseFloat(item.value2);
          actualObj[item.key] = parseFloat(item.value3);
        }
      });

      restructuredData.push(sowObj, actualObj, consumedObj);
      if (index !== 2) {
        addEmptySpace(group, `after ${group}`);
      }
    });

    return restructuredData;
  }

  ngAfterViewInit() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('fin13', am4charts.XYChart);

    this.xls.getDataFromXl(3, 4).then((data) => {
      var datas = data;
      debugger;
      var j = 0;
      for (var i = 0; i <= 13 - 1; i++) {
        this.finance[j] = {
          key: '' + datas[i]['value3'],
          value1: '' + datas[i]['value4'],
          value2: '' + datas[i]['value5'],
          value3: '' + datas[i]['value6'],
          group: this.getGroup(datas[i]['value3']),
        };
        j++;
      }

      const restructuredData = this.restructureDataForStackedChart();

      chart.data = restructuredData;
      const uniqueKeys = new Set<string>();

      // Populate the set with keys from all groups
      restructuredData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (key !== 'category') {
            uniqueKeys.add(key);
          }
        });
      });

      // Create series dynamically based on unique keys
      uniqueKeys.forEach((key) => {
        this.createSeries(chart, key, key, true, colorSet.next());
      });

      console.log(this.finance);
    });

    // Add data

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';

    categoryAxis.title.text = 'PO';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.labels.template.fontSize = 12;

    // Rotate the labels to 45 degrees
    categoryAxis.renderer.labels.template.rotation = 45;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.verticalCenter = 'top';
    categoryAxis.renderer.labels.template.adapter.add(
      'textOutput',
      (text, target) => {
        if (text === 'Empty after PO 1' || text === 'Empty after PO 2') {
          return ''; // Empty string means no label
        }
        return text;
      }
    );
    chart.events.on('datavalidated', function () {
      // Create an axis range for each category in PO 2
      ['PO 2', 'PO 2- Budget Consumed', 'PO 2- Forecast'].forEach(
        (category) => {
          let range = categoryAxis.axisRanges.create();
          range.category = category;
          range.axisFill.fill = am4core.color('#f3f4f5'); // Background color
          range.axisFill.fillOpacity = 0.3; // Opacity
        }
      );
      // Add labels for each group
      addGroupLabel('PO 1', 'PO 1');
      addGroupLabel('PO 2', 'PO 2');
      addGroupLabel('PO 3', 'PO 3');
    });

    function addGroupLabel(firstCategory: string, label: string) {
      let range = categoryAxis.axisRanges.create();
      range.category = firstCategory;
      range.label.dx = 120;
      // Set the label text and other attributes directly
      range.label.text = label;
      range.label.dy = -300; // Adjust the vertical position of the label from the top
      range.label.fontSize = 15; // Font size
      range.label.horizontalCenter = 'middle';
      range.label.zIndex = 10; // Make sure the label is above everything else
    }

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = 'Budget Value($)';
    valueAxis.numberFormatter.numberFormat = '#.a';
    valueAxis.numberFormatter.bigNumberPrefixes = [
      { number: 1e3, suffix: 'K' },
    ];
    // Modify chart's colors
    const colorSet = new am4core.ColorSet();
    colorSet.list = [
      am4core.color('#3C97DA'), // Bright Red
      am4core.color('#FFCEA9'), // Bright Green
      am4core.color('#DDDDDD'), // Bright Blue
      am4core.color('#9ECBED'), // Pink
      am4core.color('#3C97DA'), // Bright Red
      am4core.color('#FFCEA9'), // Bright Green
      am4core.color('#DDDDDD'), // Bright Blue
      am4core.color('#9ECBED'), // Pink
      am4core.color('#3C97DA'), // Bright Red
      am4core.color('#FFCEA9'), // Bright Green
      am4core.color('#DDDDDD'), // Bright Blue
      am4core.color('#9ECBED'), // Pink
      am4core.color('#3C97DA'), // Bright Red
      am4core.color('#FFCEA9'), // Bright Green
      am4core.color('#DDDDDD'), // Bright Blue
      am4core.color('#9ECBED'), // Pink
    ];
  }
  getGroup(key: string): string {
    if (['IPT', 'EUMDR', 'GMI'].includes(key)) {
      return 'PO 1';
    } else if (
      [
        'Mobile Ops - Mrkt Expn',
        'Mobile Ops - Jupiter',
        'Mobile Ops - Oahu ',
        'Cloud Ops 1',
      ].includes(key)
    ) {
      return 'PO 2';
    } else if (
      
      [
       'ORCA',
      ].includes(key)
   ) {
     return 'PO 3';
   } else {
     return 'PO 4';
    }
  }
  createSeries(
    chart: am4charts.XYChart,
    field: any,
    name: any,
    stacked: boolean,
    color: am4core.Color
  ) {
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = 'category';
    series.name = name;
    series.stacked = stacked;
    series.columns.template.tooltipText =
      '{categoryX} - {name}: [bold]{valueY}[/]';
    series.columns.template.width = am4core.percent(100);
    series.columns.template.fill = color; // Set the fill color here
    series.columns.template.stroke = color; // Set the stroke color here
    series.columns.template.adapter.add('hidden', (hidden, target) => {
      const dataItem: any = target.dataItem;
      return dataItem &&
        (dataItem.categoryX === ' ' || dataItem.categoryX === '  ')
        ? true
        : hidden;
    });

    // Create label bullet
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    //labelBullet.label.text = '{valueY}';

    labelBullet.label.adapter.add('text', function (text, target) {
      if (text && target.dataItem && target.dataItem.dataContext) {
        const context: any = target.dataItem.dataContext;
        if (context.category.includes('Consumed')) {
          console.log('Text:', text); // Debugging line
          console.log('Context:', context); // Debugging line

          const value = text ? parseFloat(text) : 0;
          const total = context['PO'] ? parseFloat(context['PO']) : 1; // Avoid division by zero

          console.log('Parsed Value:', value); // Debugging line
          console.log('Parsed Total:', total); // Debugging line

          if (!isNaN(value) && !isNaN(total) && total !== 0) {
            const percentage = ((value / total) * 100).toFixed(2);
            target.dy = -10; // Adjust this value to position the label correctly
            return `${percentage}%`;
          }
        }
      }
      return text;
    });
  }
}
