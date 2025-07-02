import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../../api/xl-api';

@Component({
  selector: 'app-resource-utilisation-functions',
  templateUrl: './resource-utilisation-functions.component.html',
  styleUrls: ['./resource-utilisation-functions.component.scss'],
})
export class ResourceUtilisationFunctionsComponent implements OnInit {
  finance: any = [];
  maxValue: any;
  pulled: boolean = false;
  progm: any = 0;
  allMonths: any;
  healthIndicator: any;
  allObjects: any;
  month  = "Q2-25";
  totalCount: any = 0;
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.loadMonths();
  }
  loadMonths() {
    this.xls.getDataFromXl(3, 10).then((data) => {
      this.healthIndicator = data;
      console.log(this.healthIndicator);
      this.allMonths = [];

      this.allObjects = this.healthIndicator[0];

      for (var i = 0; i <= this.healthIndicator.length - 1; i++) {
        this.allMonths[i] = {
          Month: this.healthIndicator[i].key,
        };
      }
      const uniqueMonths = this.allMonths.reduce((acc: any, curr: any) => {
        if (!acc.find((item: any) => item.Month === curr.Month)) {
          acc.push(curr);
        }
        return acc;
      }, []);
      this.allMonths = uniqueMonths;
    });
  }
  ngAfterViewInit() {
    this.loadMap();
  }
  loadMap() {
    am4core.useTheme(am4themes_animated);
    var chart1 = am4core.create('piechart13', am4charts.PieChart);
    this.xls.getDataFromXl(3, 1).then((data: any) => {
      const selectedMonth = this.month;

      // Filter the data based on the value from sessionStorage
      const filteredData = data.filter(
        (item: any) => item.value1 === selectedMonth
      );

      // Initialize an object to store the distinct values and their counts
      const distinctValues: { [key: string]: number } = {};

      // Loop through the filtered data to count distinct 'value5'
      for (const obj of filteredData) {
        const range = obj['value6'] as string;
        if (range in distinctValues) {
          distinctValues[range]++;
        } else {
          distinctValues[range] = 1;
        }
      }

      // Create an array to hold the result
      const result: { range: string; count: number }[] = [];
      this.totalCount = 0;
      // Populate the result array
      for (const range in distinctValues) {
        const count = distinctValues[range];
        result.push({ range, count });
        this.totalCount += count;
      }

      console.log(result); // Log the result for debugging

      // Set the chart data
      chart1.data = result;

      let label = chart1.seriesContainer.createChild(am4core.Label);
      label.html = `<span style='font-size:12px;position:relative;left:1px'>Total</span><br><span style='font-size:25px'>${this.totalCount}</span>`;
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'middle';
    });

    // Add data
    /*
  chart1.data = [{
  "country": "Software Digital",
  "value": 15
  }, {
  "country": "Systems",
  "value": 30
  }, {
    "country": "Electricals",
    "value": 35
    }, {
      "country": "Mechanical",
      "value": 20
      }, {
        "country": "Software Embedded",
        "value": 20
        }];*/

    chart1.fontSize = 12;
    // Add and configure Series
    chart1.legend = new am4charts.Legend();
    chart1.legend.position = 'right';
    chart1.fontSize = 12;
    chart1.legend.labels.template.truncate = false;
    chart1.legend.labels.template.wrap = true;
    chart1.legend.scrollable = true;
    chart1.legend.valueLabels.template.disabled = true;
    chart1.logo.disabled = true;

    chart1.legend.markers.template.width = 10;
    chart1.legend.markers.template.height = 10;
    var pieSeries = chart1.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'range';
    pieSeries.ticks.template.disabled = true;
    pieSeries.innerRadius = am4core.percent(40); // You can adjust this percentage as you like

    pieSeries.slices.template.propertyFields.isActive = 'pulled';
    pieSeries.alignLabels = false;
    pieSeries.labels.template.adapter.add(
      'textOutput',
      function (text, target) {
        console.log(text);
        if (target.dataItem && target.dataItem.value) {
          var percent = target.dataItem.values.value.percent; // Truncate the decimal

          if (percent < Math.floor(percent) + 0.5) {
            percent = Math.floor(percent);
          } else {
            percent = Math.ceil(percent);
          }

          return percent + '%';
        }
        return percent;
      }
    );
    pieSeries.slices.template.tooltipText = '{value}';
    pieSeries.slices.template.adapter.add(
      'tooltipText',
      function (text, target) {
        console.log(text);
        if (target.dataItem && target.dataItem.values.value.percent) {
          var percent = target.dataItem.values.value.percent; // Truncate the decimal
          var category = (target.dataItem.dataContext as any)['range'];
          if (percent < Math.floor(percent) + 0.5) {
            percent = Math.floor(percent);
          } else {
            percent = Math.ceil(percent);
          }

          return category + ' : (' + text + ') ' + percent + '% ';
        }
        return text;
      }
    );
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color('white');
    pieSeries.labels.template.relativeRotation = 90;
    pieSeries.slices.template.events.on('hit', (ev) => {
      this.xls
        .openDailoge(chart1.data, 'Resource Utilisation Across Functions')
        .then((data) => {});
    });
    pieSeries.colors.list = [
      am4core.color('#1ABC9C'),
      am4core.color('#2ECC71'),
      am4core.color('#159BD7'),
      am4core.color('#9B59B6'),
      am4core.color('#435F7A'),
      am4core.color('#F1C40F'),
      am4core.color('#E67E22'),
      am4core.color('#E74C3C'),
      am4core.color('#ECF0F1'), // Amber
      am4core.color('#95A5A6'), // Deep Orange
      am4core.color('#9C27B0'), // Purple
      am4core.color('#E91E63'), // Pink
      am4core.color('#3F51B5'), // Indigo
      am4core.color('#4CAF50'), // Green
      am4core.color('#FF4081'), // Pink
      am4core.color('#673AB7'), // Deep Purple
      am4core.color('#CDDC39'), // Lime
      am4core.color('#795548'), // Brown
      am4core.color('#009688'), // Teal
    ];
  }
  changeGraph() {
    this.loadMap();
  }
}
