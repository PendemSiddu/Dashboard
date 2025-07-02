import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../../api/xl-api';

@Component({
  selector: 'app-monthly-consumption-report',
  templateUrl: './monthly-consumption-report.component.html',
  styleUrls: ['./monthly-consumption-report.component.scss'],
})
export class MonthlyConsumptionReportComponent
  implements OnInit, AfterViewInit
{
  chart = am4core.create('chartdiv222', am4charts.XYChart);

  constructor(private xls: XlsApi) {}

  ngOnInit() {
    // Initialize the chart theme
    am4core.useTheme(am4themes_animated);
  }

  ngAfterViewInit() {
    // Create the chart

    this.chart.colors.step = 2;

    // Set data for the chart
    const data: any[] = [
      {
        __EMPTY_1: 'S.No.',
        __EMPTY_2: 'Project / Work Request Name',
        __EMPTY_3: 'NMD Program Name',
        __EMPTY_4: 'Final Consolidated SOW Value(Annual)',
        __EMPTY_5: 'Budget Consumed till Date',
        __EMPTY_6: 'Advance billing/ Actual',
        'Jan-23': 'Planned',
        __EMPTY_7: 'Actual',
        'Feb-23': 'Planned',
        __EMPTY_8: 'Actual',
        'Mar-23': 'Planned',
        __EMPTY_9: 'Actual',
        'Apr-23': 'Planned',
        __EMPTY_10: 'Actual',
        'Jan-23_1': 'Planned',
        __EMPTY_11: 'Actual',
        'Mar-23_1': 'Planned',
        __EMPTY_12: 'Actual',
        'Apr-23_1': 'Planned',
        __EMPTY_13: 'Actual',
        'May-23': 'Planned',
        __EMPTY_14: 'Actual',
        'Jul-23': 'Planned',
        __EMPTY_15: 'Actual',
        'Aug-23': 'Planned',
        __EMPTY_16: 'Actual',
        'Sep-23': 'Planned',
        __EMPTY_17: 'Actual',
        'Oct-23': 'Planned',
        __EMPTY_18: 'Actual',
        'Nov-23': 'Planned',
        __EMPTY_19: 'Actual',
        'Dec-23': 'Planned',
        __EMPTY_20: 'Actual',
      },
      {
        __EMPTY_1: 1,
        __EMPTY_2: 'IPT',
        __EMPTY_3: 'Sustaining Engineering ',
        __EMPTY_4: 617845.7200000001,
        __EMPTY_5: 146544.63,
        __EMPTY_6: 'Actual',
        'Jan-23': 42973.850000000006,
        __EMPTY_7: 42973.850000000006,
        'Feb-23': 48243.92,
        __EMPTY_8: 48243.92,
        'Mar-23': 55326.86,
        __EMPTY_9: 55326.86,
      },
      {
        __EMPTY_1: 2,
        __EMPTY_2: 'EU MDR',
        __EMPTY_3: 'Sustaining Engineering ',
        __EMPTY_4: 995183.312,
        __EMPTY_5: 151739.04,
        __EMPTY_6: 'Actual',
        'Jan-23': 39582.79,
        __EMPTY_7: 39582.79,
        'Feb-23': 50139.3,
        __EMPTY_8: 50139.3,
        'Mar-23': 62016.950000000004,
        __EMPTY_9: 62016.950000000004,
      },
      {
        __EMPTY_1: 3,
        __EMPTY_2: 'GMI',
        __EMPTY_3: 'Sustaining Engineering ',
        __EMPTY_4: 126013.89427222848,
        __EMPTY_5: 21726.72,
        __EMPTY_6: 'Actual',
        'Jan-23': 8909.28,
        __EMPTY_7: 8909.28,
        'Feb-23': 5961.599999999999,
        __EMPTY_8: 5961.599999999999,
        'Mar-23': 6855.839999999999,
        __EMPTY_9: 6855.839999999999,
      },
      {
        __EMPTY_1: 4,
        __EMPTY_2:
          'Mobile Ops (Sustaining and Market Expansion)(Software and System Testing Work)',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 288923.45462000003,
        __EMPTY_5: 29798.399999999998,
        __EMPTY_6: 'Actual',
        'Jan-23': 10243.199999999999,
        __EMPTY_7: 9777.599999999999,
        'Feb-23': 10708.8,
        __EMPTY_8: 10708.8,
        'Mar-23': 9312,
        __EMPTY_9: 9312,
      },
      {
        __EMPTY_5: 66893.2,
        __EMPTY_6: 'Advance',
        'Jan-23': 36784,
        __EMPTY_7: 34995.6,
        'Feb-23': 16662.4,
        __EMPTY_8: 16662.4,
        'Mar-23': 15235.199999999999,
        __EMPTY_9: 15235.199999999999,
      },
      {
        __EMPTY_1: 5,
        __EMPTY_2: 'Mobile Ops - Jupiter',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 180426.80336,
        __EMPTY_5: 34764.8,
        __EMPTY_6: 'Advance',
        'Jan-23': 11407.2,
        __EMPTY_7: 11407.2,
        'Feb-23': 10864,
        __EMPTY_8: 10864,
        'Mar-23': 12493.6,
        __EMPTY_9: 12493.6,
      },
      {
        __EMPTY_1: 6,
        __EMPTY_2: 'Mobile Ops - Oahu(Acquaris Testing)',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 113869.35882,
        __EMPTY_5: 87552,
        __EMPTY_6: 'Actual',
        'Jan-23': 28728,
        __EMPTY_7: 28728,
        'Feb-23': 27360,
        __EMPTY_8: 27360,
        'Mar-23': 31464,
        __EMPTY_9: 31464,
      },
      {
        __EMPTY_1: 7,
        __EMPTY_2: 'ORCA2.0+FW+FWTest(Gemini / Jupiter Devops & Automation)',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 732105.1470600001,
        __EMPTY_5: 28791.54,
        __EMPTY_6: 'Advance',
        'Jan-23': 9611.73,
        __EMPTY_7: 9611.73,
        'Feb-23': 9114.12,
        __EMPTY_8: 9114.12,
        'Mar-23': 10065.69,
        __EMPTY_9: 10065.69,
      },
      {
        __EMPTY_1: 8,
        __EMPTY_2: 'Brookyln Bridge',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 136093.35882000002,
        __EMPTY_5: 290890.76,
        __EMPTY_6: 'Advance',
        'Jan-23': 94655.01,
        __EMPTY_7: 94655.01,
        'Feb-23': 91734.41,
        __EMPTY_8: 91734.41,
        'Mar-23': 104501.34,
        __EMPTY_9: 104501.34,
      },
      {
        __EMPTY_1: 9,
        __EMPTY_2: 'Sapphire',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 532264.8,
        __EMPTY_5: 130827.78,
        __EMPTY_6: 'Advance',
        'Jan-23': 42515.09999999999,
        __EMPTY_7: 42515.09999999999,
        'Feb-23': 42192.09,
        __EMPTY_8: 42192.09,
        'Mar-23': 46120.590000000004,
        __EMPTY_9: 46120.590000000004,
      },
      {
        __EMPTY_1: 10,
        __EMPTY_2: 'Cloud Ops',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 765811.5470600001,
        __EMPTY_5: 144500.57,
        __EMPTY_6: 'Advance',
        'Jan-23': 47503.05,
        __EMPTY_7: 47503.05,
        'Feb-23': 45240.99999999999,
        __EMPTY_8: 45240.99999999999,
        'Mar-23': 51756.520000000004,
        __EMPTY_9: 51756.520000000004,
      },
      {
        __EMPTY_1: 11,
        __EMPTY_2: 'Hercules',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 1382102.731958763,
        __EMPTY_5: 142684.78,
        __EMPTY_6: 'Advance',
        'Jan-23': 45123.43000000001,
        __EMPTY_7: 45123.43000000001,
        'Feb-23': 42352.14,
        __EMPTY_8: 42352.14,
        'Mar-23': 55209.21,
        __EMPTY_9: 55209.21,
      },
      {
        __EMPTY_1: 12,
        __EMPTY_2: 'CAPEX',
        __EMPTY_3: 'R&D - Software',
        __EMPTY_4: 162205.60504,
        __EMPTY_5: 129811.22,
        __EMPTY_6: 'Advance',
        'Jan-23': 33598.86,
        __EMPTY_7: 33598.86,
        'Feb-23': 32432.92,
        __EMPTY_8: 32432.92,
        'Mar-23': 63779.44,
        __EMPTY_9: 63779.44,
      },
      {
        __EMPTY_2: 'Total',
      },
      {
        __EMPTY_2: 'Program Summary',
      },
      {
        __EMPTY_2: 'S.No.',
        __EMPTY_3: 'NMD Program Name',
        __EMPTY_4: 'Budget ',
        __EMPTY_5: 'Budget Consumed till Date',
      },
      {
        __EMPTY_2: 1,
        __EMPTY_3: 'Aquarius',
        __EMPTY_5: 87552,
      },
      {
        __EMPTY_2: 2,
        __EMPTY_3: 'Brooklyn',
      },
      {
        __EMPTY_2: 3,
        __EMPTY_3: 'Gemini',
      },
      {
        __EMPTY_2: 4,
        __EMPTY_3: 'Jupiter',
      },
      {
        __EMPTY_2: 5,
        __EMPTY_3: 'Others(Cloud Ops)',
      },
      {
        __EMPTY_2: 6,
        __EMPTY_3: 'Sapphire',
        __EMPTY_4: 891825.4413322286,
        __EMPTY_5: 166227.29,
      },
      {
        __EMPTY_2: 7,
        __EMPTY_3: 'Sustenance',
      },
      {
        __EMPTY_2: 'Overall GDC  Summary',
      },
      {
        __EMPTY_1: 'Budget ',
        __EMPTY_2: 'Budget Consumed till Date',
        __EMPTY_3: 44856,
        __EMPTY_5: 44888,
        __EMPTY_6: 44920,
        __EMPTY_7: 44952,
        __EMPTY_8: 44984,
        __EMPTY_9: 45016,
        __EMPTY_10: 45048,
        __EMPTY_11: 45080,
        __EMPTY_12: 45112,
        __EMPTY_13: 45144,
        __EMPTY_14: 45176,
        __EMPTY_15: 45208,
        __EMPTY_16: 45240,
        __EMPTY_17: 45272,
      },
      {
        __EMPTY_3: 'Actual',
        __EMPTY_4: 'Planned',
        __EMPTY_5: 'Actual',
        __EMPTY_6: 'Actual',
        'Jan-23': 'Planned',
        __EMPTY_7: 'Actual',
        'Feb-23': 'Planned',
        __EMPTY_8: 'Actual',
        'Mar-23': 'Planned',
        __EMPTY_9: 'Actual',
        'Apr-23': 'Planned',
        __EMPTY_10: 'Actual',
        'Jan-23_1': 'Planned',
        __EMPTY_11: 'Actual',
        'Mar-23_1': 'Planned',
        __EMPTY_12: 'Actual',
        'Apr-23_1': 'Planned',
        __EMPTY_13: 'Actual',
        'May-23': 'Planned',
        __EMPTY_14: 'Actual',
        'Jul-23': 'Planned',
        __EMPTY_15: 'Actual',
        'Aug-23': 'Planned',
        __EMPTY_16: 'Actual',
        'Sep-23': 'Planned',
        __EMPTY_17: 'Actual',
        'Oct-23': 'Planned',
        __EMPTY_18: 'Actual',
      },
      {
        __EMPTY_1: 0,
        __EMPTY_2: 0,
        __EMPTY_3: 236160.67,
        __EMPTY_4: 218787,
        __EMPTY_5: 236475.11,
      },
      {
        __EMPTY_2: 'Total Budget',
        __EMPTY_3: 'Month',
        __EMPTY_4: 'Consumed',
        __EMPTY_5: 'Burn out',
      },
      {
        __EMPTY_3: 44826,
        __EMPTY_5: 2970692.72,
      },
      {
        __EMPTY_2: 2970692.72,
        __EMPTY_3: 44856,
        __EMPTY_4: 240000,
        __EMPTY_5: 2730692.72,
      },
      {
        __EMPTY_2: 2970692.72,
        __EMPTY_3: 44887,
        __EMPTY_4: 250000,
        __EMPTY_5: 2480692.72,
      },
      {
        __EMPTY_2: 2970692.72,
        __EMPTY_3: 44917,
        __EMPTY_4: 170000,
        __EMPTY_5: 2310692.72,
      },
      {
        __EMPTY_2: 2970692.72,
        __EMPTY_3: 44948,
        __EMPTY_4: 190000,
        __EMPTY_5: 2120692.72,
      },
      {
        __EMPTY_2: 2970692.72,
        __EMPTY_3: 44979,
        __EMPTY_4: 210000,
        __EMPTY_5: 1910692.7200000002,
      },
    ];

    // Set chart data source
    this.chart.data = data;

    // Create axes
    const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'Month';
    categoryAxis.title.text = 'Month';
    categoryAxis.renderer.grid.template.location = 0;

    const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Budget Value';

    // Create series for planned and actual values
    const plannedSeries = this.chart.series.push(new am4charts.ColumnSeries());
    plannedSeries.dataFields.valueY = 'Planned';
    plannedSeries.dataFields.categoryX = 'Month';
    plannedSeries.name = 'Planned';
    plannedSeries.columns.template.tooltipText = 'Planned: {valueY.value}';
    plannedSeries.columns.template.fillOpacity = 0.8;

    const actualSeries = this.chart.series.push(new am4charts.ColumnSeries());
    actualSeries.dataFields.valueY = 'Actual';
    actualSeries.dataFields.categoryX = 'Month';
    actualSeries.name = 'Actual';
    actualSeries.columns.template.tooltipText = 'Actual: {valueY.value}';
    actualSeries.columns.template.fillOpacity = 0.8;

    // Add chart cursor
    this.chart.cursor = new am4charts.XYCursor();

    // Add legend
    this.chart.legend = new am4charts.Legend();
  }

  ngOnDestroy() {
    // Clean up the chart when the component is destroyed
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
