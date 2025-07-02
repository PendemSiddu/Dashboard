import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../api/xl-api';

@Component({
  selector: 'app-training-compliance',
  templateUrl: './training-compliance.component.html',
  styleUrls: ['./training-compliance.component.scss'],
})
export class TrainingComplianceComponent implements OnInit {
  progm: any = 0;
  finance: any;
  healthIndicator: any;
  allMonths: any;
  allObjects: any;
  month = "Q2-25";
  ranges: any;
  totalCount: any = 0;
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.loadMonths();
    this.loadMap();
  }

  loadMonths() {
    this.xls.getDataFromXl(3, 10).then((data) => {
      this.healthIndicator = data;
      console.log(this.healthIndicator);
      this.allMonths = [];

      this.allObjects = this.healthIndicator[0];

      for (var i = 1; i <= this.healthIndicator.length - 1; i++) {
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

  ngAfterViewInit() {}
  loadMap() {
    am4core.useTheme(am4themes_animated);
    var chart1 = am4core.create('piechart1', am4charts.PieChart);

    this.xls.getDataFromXl(3, 1).then((data: any) => {
      const selectedMonth = this.month;

      const filteredData = data.filter(
        (item: any) => item.value1 === selectedMonth
      );

      const distinctValues: { [key: string]: number } = {};
      this.totalCount = 0;
      for (const obj of filteredData) {
        const range = obj['Training Compliance'] as string;
        if (range in distinctValues) {
          distinctValues[range]++;
        } else {
          distinctValues[range] = 1;
        }
      }

      const result: { range: string; count: number }[] = [];

      for (const range in distinctValues) {
        const count = distinctValues[range];
      const newRange =
    range === 'Yes'
      ? 'Compliance'
      : range === 'No'
      ? 'Delay in completion of trainings'
      : '';

  if (newRange) { // ✅ Only push if it's not ''
    result.push({ range: newRange, count });
    this.totalCount += count;
        
      }
    }

      console.log(result);

      chart1.data = result;
      let label = chart1.seriesContainer.createChild(am4core.Label);
      label.html = `<span style='font-size:12px;position:relative;left:1px'>Total</span><br><span style='font-size:25px'>${this.totalCount}</span>`;
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'middle';
    });
    chart1.logo.disabled = true;

    chart1.legend = new am4charts.Legend();
    chart1.legend.position = 'right';
    chart1.fontSize = 12;
    // Add and configure Series
    var pieSeries = chart1.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'range';
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = '{value}';
    pieSeries.labels.template.radius = am4core.percent(-40);
    chart1.legend.valueLabels.template.disabled = true;
    chart1.legend.markers.template.width = 10;
    chart1.legend.markers.template.height = 10;
    pieSeries.ticks.template.disabled = true;
    pieSeries.innerRadius = am4core.percent(40); // You can adjust this percentage as you like

    // Adapter to set custom colors based on the category (Compliance, Not completed, Outside)

     pieSeries.slices.template.adapter.add('fill', function (fill, target) {
  // Safely check if dataItem and dataContext are defined
  let category = (target.dataItem?.dataContext as any)?.['range'];

  if (category === 'Delay in completion of trainings') {
    return am4core.color('#FF0000'); // Red for "Not completed trainings"
  } else if (category === 'Compliance') {
    return am4core.color('#28A745'); // Green for "Compliance"
  } else {
    return am4core.color('#EBEBEB'); // Gray for "Outside Abbott System"
  }
});


    pieSeries.labels.template.adapter.add(
      'textOutput',
      function (text, target) {
        console.log(text);
        if (target.dataItem && target.dataItem.value) {
          var percent = target.dataItem.values.value.percent; // Truncate the decimal
          var percent = percent.toFixed(2);
          /*
          if (percent < Math.floor(percent) + 0.5) {
            percent = Math.floor(percent);
          } else {
            percent = Math.ceil(percent);
          }*/

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
          var percent = target.dataItem.values.value.percent.toFixed(2); // Truncate the decimal
          
          var category = (target.dataItem.dataContext as any)['range'];
          /*if (percent < Math.floor(percent) + 0.5) {
            percent = Math.floor(percent);
          } else {
            percent = Math.ceil(percent);
          }*/

          return category + ' : (' + text + ') ' + percent + '% ';
        }
        return text;
      }
    );

    pieSeries.colors.list = [
      am4core.color('#28A745'),
      am4core.color('#EBEBEB'),
    ];
  }
  changeGraph() {
    this.loadMap();
  }
}
