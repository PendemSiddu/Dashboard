import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../api/xl-api';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';

@Component({
  selector: 'app-resource-utilization',
  templateUrl: './resource-utilization.component.html',
  styleUrls: ['./resource-utilization.component.scss'],
})
export class ResourceUtilizationComponent implements OnInit {
  finance: any = [];
  pulled: boolean = false;
  maxValue: any;
  category: any;
  progm: any = 0;
  healthIndicator: any;
  allMonths: any;
  allObjects: any;
  totalCount: any = 0;
  month = "Q2-25";
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.loadMonths();
    this.loadMap();
  }

  ngAfterViewInit() {}
  loadMap() {
    am4core.useTheme(am4themes_animated);
    var chart1 = am4core.create('piechart12', am4charts.PieChart);

    this.xls.getDataFromXl(3, 1).then((data: any) => {
      const selectedMonth = this.month;
      debugger;
      const filteredData = data.filter(
        (item: any) => item.value1 === selectedMonth
      );

      // Your existing logic
      const distinctValues: { [key: string]: number } = {};
      for (const obj of filteredData) {
        const range = obj['key'] as string;
        if (range in distinctValues) {
          distinctValues[range]++;
        } else {
          distinctValues[range] = 1;
        }
      }

      const result: { range: string; count: number }[] = [];
      this.totalCount = 0;
      for (const range in distinctValues) {
        const count = distinctValues[range];
        result.push({ range, count });
        this.totalCount += count;
      }

      console.log(result);

      chart1.data = result;

      let label = chart1.seriesContainer.createChild(am4core.Label);
      label.html = `<span style='font-size:12px;position:relative;left:1px'>Total</span><br><span style='font-size:25px'>${this.totalCount}</span>`;
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'middle';
    });

    chart1.legend = new am4charts.Legend();
    chart1.legend.position = 'right';
    chart1.fontSize = 12;
    chart1.logo.disabled = true;

    chart1.legend.labels.template.truncate = false;
    chart1.legend.labels.template.wrap = true;
    chart1.legend.scrollable = true;
    chart1.legend.valueLabels.template.disabled = true;
    // Modify the marker template to adjust the legend size
    chart1.legend.markers.template.width = 10;
    chart1.legend.markers.template.height = 10;

    // Add and configure Series
    var pieSeries = chart1.series.push(new am4charts.PieSeries());
    chart1.paddingTop = 5; // Adjust the value as needed
    pieSeries.innerRadius = am4core.percent(50);

    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'range';
    pieSeries.ticks.template.disabled = false;
    pieSeries.slices.template.propertyFields.isActive = 'pulled';
    pieSeries.alignLabels = false;
    pieSeries.labels.template.radius = am4core.percent(5);
    pieSeries.labels.template.relativeRotation = 90;
    pieSeries.labels.template.dy = 15; // Moves the label 15 pixels down
    pieSeries.labels.template.maxWidth = 300; // Adjust as needed
    pieSeries.labels.template.wrap = true;
    pieSeries.labels.template.fontSize = 12; // Adjust as needed

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

    pieSeries.slices.template.events.on('hit', (ev) => {
      this.xls
        .openDailoge(chart1.data, 'Resource Utilization Across Programs')
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

    pieSeries.events.on('hit', function (ev) {
      chart1.closeAllPopups();
      //chart1.openPopup("We clicked on <strong>test</strong>");
    });
  }
  changeGraph() {
    this.loadMap();
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
      debugger;
    });
  }
}
