import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../api/xl-api';

interface FinanceData {
  key: string;
  value1: string;
  value2: string;
  value3: string;
  group: string;
  [key: string]: string; // Add this line
}

const GROUP_1 = ['IPT', 'EUMDR', 'GMI'];
const GROUP_2 = [
  'Mobile Ops - Mrkt Expn',
  'Mobile Ops - Jupiter',
  'Mobile Ops - Oahu ',
  'Cloud Ops 1',
];

@Component({
  selector: 'app-new-po-chart2',
  templateUrl: './new-po-chart2.component.html',
  styleUrls: ['./new-po-chart2.component.scss'],
})
export class NewPoChart2Component implements OnInit, AfterViewInit {
  finance: FinanceData[] = [];
  role: any;

  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
  }

  ngAfterViewInit() {
    this.initChart();
  }

  private initChart() {
    am4core.useTheme(am4themes_animated);
    const chart = am4core.create('fin153', am4charts.XYChart);

    this.xls.getDataFromXl(3, 6).then((data: any[]) => {
      this.finance = data
        .filter((item) => item['value4'] !== 'Total')
        .map((item) => ({
          key: item['value3'],
          value1: parseFloat(item['value4']).toFixed(2),
          value2: parseFloat(item['value5']).toFixed(2),
          value3: parseFloat(item['value6']).toFixed(2),
          group: this.getGroup(item['value3']),
        }));

      const filteredKeys = Array.from(
        new Set(
          this.finance
            .filter((item) => item.group === 'PO 1')
            .map((item) => item.key)
        )
      );
      const aggregatedData = this.aggregateDataByGroup(
        this.finance,
        filteredKeys
      );
      chart.data = aggregatedData;
      console.log(
        'Data for IPT:',
        chart.data.map((d) => ({
          key: d.key,
          value: d[`value1_IPT`],
          consumed: d[`value2_IPT`],
          forecast: d[`value3_IPT`],
        }))
      );

      this.createAxes(chart);
      const colors: { [key: string]: string } = {
        IPT: '#FF0000',
        EUMDR: '#00FF00',
        GMI: '#0000FF',
        'Mobile Ops - Mrkt Expn': '#FFA500',
        'Mobile Ops - Jupiter': '#808000',
        'Mobile Ops - Oahu ': '#800080',
        'Cloud Ops 1': '#008080',
        ORCA: '#000080',
        'Brooklyn Bridge Sustanence': '#800000',
        'Sapphire - Jupiter': '#008000',
        'Hercules-AD': '#FFFF00',
        'Hercules-NPD': '#00FFFF',
      };

      this.createSeries(chart, 'value1', 'SOW', filteredKeys, colors);
      this.createSeries(chart, 'value2', 'Consumed', filteredKeys, colors);
      this.createSeries(chart, 'value3', 'Actual', filteredKeys, colors);

      // Add scrollbar for the X axis (horizontal zoom)
      let scrollbarX = new am4charts.XYChartScrollbar();
      chart.series.each((series) => {
        scrollbarX.series.push(series);
      });
      chart.scrollbarX = scrollbarX;
      chart.scrollbarX.parent = chart.bottomAxesContainer;
    });
  }
  private aggregateDataByGroup(data: FinanceData[], allKeys: string[]): any[] {
    const aggregatedData: { [key: string]: any } = {};

    // Initialize aggregatedData
    ['PO 1', 'PO 1 (Consumed)', 'PO 1 (Actual)'].forEach((group) => {
      aggregatedData[group] = { key: group };
      allKeys.forEach((key) => {
        aggregatedData[group][`value1_${key}`] = 0;
        aggregatedData[group][`value2_${key}`] = 0;
        aggregatedData[group][`value3_${key}`] = 0;
      });
    });

    // Populate aggregatedData
    data.forEach((item) => {
      if (item.group === 'PO 1') {
        aggregatedData['PO 1'][`value1_${item.key}`] = parseFloat(
          item.value1 || '0'
        );
        aggregatedData['PO 1 (Consumed)'][`value2_${item.key}`] = parseFloat(
          item.value2 || '0'
        );
        aggregatedData['PO 1 (Actual)'][`value3_${item.key}`] = parseFloat(
          item.value3 || '0'
        );
      }
    });

    return [
      aggregatedData['PO 1'],
      aggregatedData['PO 1 (Consumed)'],
      aggregatedData['PO 1 (Actual)'],
    ];
  }

  private getGroup(key: string): string {
    if (GROUP_1.includes(key)) return 'PO 1';
    if (GROUP_2.includes(key)) return 'PO 2';
    return 'PO 3';
  }
  private createAxes(chart: am4charts.XYChart) {
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'key';
    categoryAxis.title.text = 'Group';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.labels.template.fontSize = 12;
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
  }

  private createSeries(
    chart: am4charts.XYChart,
    field: string,
    name: string,
    keys: string[],
    baseColor: { [key: string]: string }
  ) {
    console.log('Creating series for field:', field);

    keys.forEach((key) => {
      console.log('Creating series for key:' + key + '==' + baseColor[key]);

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = `${field}_${key}`;
      series.dataFields.categoryX = 'key';
      series.name = `${name} - ${key}`;
      if (field === 'value1') {
        series.stacked = true;
      }

      // Set color based on the key
      series.columns.template.fill = am4core.color(baseColor[key] || '#000000'); // Default to black if the key is not found

      series.clustered = false; // Disable clustering to stack across all series
      series.columns.template.tooltipText = '{key} - {name}: [bold]{valueY}[/]';
      series.columns.template.width = am4core.percent(100);
    });
  }
}
