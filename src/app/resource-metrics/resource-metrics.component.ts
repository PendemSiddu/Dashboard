import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XlsApi } from '../api/xl-api';

interface ProcessedData {
  [key: string]: {
    [subKey: string]: number;
  };
}
@Component({
  selector: 'app-resource-metrics',
  templateUrl: './resource-metrics.component.html',
  styleUrls: ['./resource-metrics.component.scss'],
})
export class ResourceMetricsComponent implements OnInit {
  finance: any = [];
  healthIndicator: any;
  allMonths: any;
  allObjects: any;
  totalCount: any = 0;
  month = "Q2-25";
  formattedChartData: any;
  constructor(private xls: XlsApi) {}

  ngOnInit(): void {
    this.loadMonths();
    this.loadMap();
  }
  changeGraph() {
    this.loadMap();
  }

  ngAfterViewInit() {}
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
  loadMap() {
    // Chart code goes in here
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create('rmg1', am4charts.XYChart);

    this.xls.getDataFromXl(3, 1).then((data: any) => {
      const selectedMonth = this.month;
      debugger
       console.log(data);
      const filteredData = data.filter(
        (item: any) => item.value1 === selectedMonth
      );

      const distinctValues: { [key: string]: number } = {};
      for (const obj of filteredData) {
        const range = obj['Total Abbott experience (Range)'] as string;
        if (range in distinctValues) {
          distinctValues[range]++;
        } else {
          distinctValues[range] = 1;
        }
      }
    console.log(filteredData);
      const result: { range: string; count: number }[] = [];
      for (const range in distinctValues) {
        const count = distinctValues[range];
        if (range != 'undefined') {
          result.push({ range, count });
        }
      }
      result.sort((a, b) => {
        if (a.range === 'Less than 1 yr') return -1; // 'Less than 1 yr' comes first
        if (b.range === 'Less than 1 yr') return 1;  // 'Less than 1 yr' comes first
        return a.range.localeCompare(b.range);
      });

      console.log(result);

      chart.data = result;
    });
    chart.logo.disabled = true;
    
let categoryAxis2 = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis2.dataFields.category = "range";
categoryAxis2.renderer.grid.template.location = 0;
categoryAxis2.renderer.minGridDistance = 30;





let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "count";
series.dataFields.categoryX = "range";
series.name = "count";
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;
series.columns.template.fill = am4core.color("#159BD7"); 

let columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
let labelBullet = series.bullets.push(new am4charts.LabelBullet());
labelBullet.label.text = "{valueY}";
labelBullet.label.dy = 8; 
    // Create X axis
    // var categoryAxis2 = chart.xAxes.push(new am4charts.CategoryAxis());
    // categoryAxis2.dataFields.category = 'range';

    // // Create Y axis
    // var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

    // // Create series
    // var series = chart.series.push(new am4charts.ColumnSeries());
    // series.dataFields.valueY = 'count';
    // series.dataFields.categoryX = 'range';
    // series.name = "count";
    

    // // Tooltips
    // series.columns.template.tooltipText =
    //       '{categoryX}: {valueY}';
    // series.columns.template.tooltipY = 1;
    
    // series.columns.template.strokeOpacity = 1;
   

    // var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    // labelBullet.label.text = '{valueY}';
    // labelBullet.label.dy = 20; // Position label above the column
    // labelBullet.label.hideOversized = true;
    // labelBullet.label.truncate = false;
    
    // // Legend

    // // Colors
    series.columns.template.fill = am4core.color('#159BD7');

    am4core.useTheme(am4themes_animated);

    this.xls.getDataFromXl(3, 1).then((data) => {
      // Step 1: Aggregate the data
      let aggregatedData: { [key: string]: { [value1: string]: number } } = {};

      data.forEach((item) => {
        if (item.value1 === this.month) {
          if(item.value9 == 'Onboarded'){
          let key = item.value9;
          let value1 = item.value8;

          if (!aggregatedData[key]) {
            aggregatedData[key] = {};
          }

          if (!aggregatedData[key][value1]) {
            aggregatedData[key][value1] = 0;
          }

          aggregatedData[key][value1]++;
        }}
      });
   
      // Convert aggregated data to array format suitable for am4charts
      let chartData = Object.keys(aggregatedData).map((key) => {
        return {
          key,
          ...aggregatedData[key],
        };
      });

      // Your existing chart setup code
      am4core.useTheme(am4themes_animated);
      let chart2 = am4core.create('chartdiv52', am4charts.XYChart);

      // Use aggregated data
      chart2.data = chartData;
      console.log(chartData);
      // Create axes
      let categoryAxis2 = chart2.yAxes.push(new am4charts.CategoryAxis()); // Change this line
      categoryAxis2.dataFields.category = 'key';
      categoryAxis2.renderer.grid.template.location = 0;
      categoryAxis2.renderer.labels.template.hidden = false;
      categoryAxis2.renderer.minGridDistance = 150;
      categoryAxis2.renderer.labels.template.rotation = 0;
      categoryAxis2.renderer.minGridDistance = 50;
      categoryAxis2.renderer.labels.template.wrap = true;
      categoryAxis2.renderer.labels.template.maxWidth = 100; // Adjust as needed

      let valueAxis2 = chart2.xAxes.push(new am4charts.ValueAxis()); // Change this line
      valueAxis2.renderer.inside = false;
      valueAxis2.renderer.labels.template.disabled = false;

      let colorIndex = 0;
      const colors = [
        am4core.color('#3498DB'),
        am4core.color('#2ECC71'),
        am4core.color('#F1C40F'),
      ];
      // Create series
      function createSeries2(field: any, name: any, color: any) {
        let series2 = chart2.series.push(new am4charts.ColumnSeries());
        series2.name = name;
        series2.dataFields.valueX = field; // Change this line
        series2.dataFields.categoryY = 'key'; // Change this line
        series2.sequencedInterpolation = true;
        series2.columns.template.fill = color;

        // Make it stacked
        series2.stacked = true;

        // Configure columns
        series2.columns.template.width = am4core.percent(60);
        series2.columns.template.tooltipText =
          '[bold]{name}[/]\n[font-size:14px]{categoryY}: {valueX}'; // Change this line

        // Add label
        let labelBullet2 = series2.bullets.push(new am4charts.LabelBullet());
        labelBullet2.label.text = '{valueX}'; // Change this line
        labelBullet2.locationX = 0.5; // Change this line
        labelBullet2.label.hideOversized = true;

        return series2;
      }

      // Create series based on unique 'value1' fields in the data
      // Create a Set to keep track of unique 'value1' fields
      const uniqueValue1 = new Set<string>();

      // Populate the Set with unique 'value1' fields
      Object.keys(aggregatedData).forEach((key) => {
        Object.keys(aggregatedData[key]).forEach((value1) => {
          uniqueValue1.add(value1);
        });
      });

      // Create series based on unique 'value1' fields
      uniqueValue1.forEach((value1) => {
        createSeries2(value1, value1, colors[colorIndex % colors.length]);
        colorIndex++;
      });
      chart2.logo.disabled = true;
      chart2.colors.list = [
        am4core.color('#28A745'),
        am4core.color('#F5821E'),
        am4core.color('#006BB6'),
      ];
      // Legend
      chart2.legend = new am4charts.Legend();
      chart2.legend.position = 'bottom';
      chart2.legend.valueLabels.template.disabled = true;
      chart2.legend.markers.template.width = 10;
      chart2.legend.markers.template.height = 10;
    });

    /*
    chart2.paddingRight = 20;

    this.xls.getDataFromXl(3, 1).then((data: any) => {
      const selectedMonth = this.month;

      const filteredData = data.filter(
        (item: any) => item.Quarter === selectedMonth
      );
      const distinctValues: { [key: string]: number } = {};
      debugger;
      for (const obj of filteredData) {
        const range = obj['value8'] as string;
        if (range in distinctValues) {
          distinctValues[range]++;
        } else {
          distinctValues[range] = 1;
        }
      }

      const result: { range: string; count: number }[] = [];
      for (const range in distinctValues) {
        const count = distinctValues[range];
        result.push({ range, count });
      }

      console.log(result);

      chart2.data = result;
    });

    // Create axes
    let categoryAxis1 = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis1.dataFields.category = 'range';
    categoryAxis1.renderer.grid.template.location = 0;

    let valueAxis1 = chart2.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart2.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'range';
    series.tooltipText = '{valueY}';

    // Add a legend
    chart2.legend = new am4charts.Legend();
    chart2.legend.position = 'right';
    chart2.legend.valueLabels.template.disabled = true;
    chart2.legend.markers.template.width = 10;
    chart2.legend.markers.template.height = 10;
    chart2.cursor = new am4charts.XYCursor();
    chart2.cursor.behavior = 'none'; */

    // Add colors

    //graphs3
    // am4core.useTheme(am4themes_animated);

    // let chart3 = am4core.create('chartdiv3', am4charts.XYChart);
    // chart3.paddingRight = 20;

    // this.xls.getDataFromXl(1, 4).then((data) => {
    //   //console.log(data);
    //   var datas = data;

    //   const res = Array.from(
    //     datas.reduce(
    //       (m, { key, value2 }) => m.set(key, (m.get(key) || 0) + value2),
    //       new Map()
    //     ),
    //     ([key, value2]) => ({ key, value2 })
    //   );
    //   //console.log(res);
    //   chart3.data = res;
    // });
    // /*

    //   chart3.data = [
    //   {
    //   category: "Jan",
    //   value1: 10,
    //   value2: 50,
    //   value3: 30,

    //   },
    //   {
    //   category: "Feb",

    //   value3: 30,
    //   value4: 40,
    //   value5: 90,
    //   value6: 30
    //   },{
    //     category: "Mar",
    //     value1: 20,
    //     value2: 50,

    //     },
    //     {
    //       category: "Apr",
    //       value1: 20,

    //       },{
    //         category: "May",
    //         value1: 20,
    //         value2: 50,
    //         value3: 30,
    //         value4: 40,
    //         value5: 90,
    //         value6: 30
    //         },{
    //           category: "June",
    //           value1: 0,
    //           },{
    //             category: "July",
    //             value1: 20,
    //             value2: 50,
    //             value3: 30,
    //             value4: 40,
    //             value5: 90,
    //             value6: 30
    //             },{
    //               category: "Aug",
    //               value1: 20,
    //               },{
    //                 category: "Sep",
    //                 value1: 20,
    //                 value2: 50,

    //                 },{
    //                   category: "Oct",

    //                   value5: 90,
    //                   value6: 30
    //                   },{
    //                     category: "Nov",
    //                     value1: 20,
    //                     value2: 50,
    //                     value3: 30,

    //                     },{
    //                       category: "Dec",
    //                       value1: 20,
    //                       value2: 50,

    //                       value5: 90,
    //                       value6: 30
    //                       }

    //   ];
    //   */
    // chart3.colors.step = 3;

    // chart3.legend = new am4charts.Legend();
    // chart3.legend.position = 'top';
    // chart3.legend.contentAlign = 'left';
    // chart3.legend.itemContainers.template.paddingBottom = 30;
    // var markerTemplate = chart3.legend.markers.template;
    // markerTemplate.width = 15;
    // markerTemplate.height = 15;

    // var categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis());
    // categoryAxis.dataFields.category = 'key';
    // categoryAxis.renderer.grid.template.location = 0;
    // categoryAxis.renderer.line.strokeOpacity = 1;

    // //categoryAxis.renderer.startLocation = 0;
    // categoryAxis.renderer.cellStartLocation = 0.3;
    // categoryAxis.renderer.cellEndLocation = 0.7;

    // var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());

    // // Modify chart's colors
    // chart3.colors.list = [
    //   am4core.color('#006BB6'),
    //   am4core.color('#5FBEF0'),
    //   am4core.color('#8CD7FA'),
    // ];

    // var series1 = chart3.series.push(new am4charts.ColumnSeries());
    // series1.columns.template.width = am4core.percent(70);
    // series1.columns.template.tooltipText = '{name}: {valueY.value}';
    // series1.name = 'Program 1';
    // series1.dataFields.categoryX = 'key';
    // series1.dataFields.valueY = 'value1';
    // series1.stacked = true;

    // series1.columns.template.events.on('hit', (ev) => {
    //   this.xls.openDailoge(chart2.data, 'Attrition').then((data) => {});
    // });

    // var series2 = chart3.series.push(new am4charts.ColumnSeries());
    // series2.columns.template.width = am4core.percent(70);
    // series2.columns.template.tooltipText = '{name}: {valueY.value}';
    // series2.name = 'Program 2';
    // series2.dataFields.categoryX = 'key';
    // series2.dataFields.valueY = 'value2';
    // series2.stacked = true;
    // series2.columns.template.events.on('hit', (ev) => {
    //   this.xls.openDailoge(chart2.data, 'Attrition').then((data) => {});
    // });

    // var series3 = chart3.series.push(new am4charts.ColumnSeries());
    // series3.columns.template.width = am4core.percent(70);
    // series3.columns.template.tooltipText = '{name}: {valueY.value}';
    // series3.name = 'Program 3';
    // series3.dataFields.categoryX = 'key';
    // series3.dataFields.valueY = 'value3';
    // series3.stacked = true;
    // series3.columns.template.events.on('hit', (ev) => {
    //   this.xls.openDailoge(chart2.data, 'Attrition').then((data) => {});
    // });

    am4core.useTheme(am4themes_animated);
    // Include Themes

    // Create chart instance
    let chartc = am4core.create('chargh', am4charts.XYChart);
    chartc.logo.disabled = true;
    // Add data
    /*
      chartc.data = [
      {
        category: 'JFM 23',
        Attrition: 5,
        'Resource performance': 1,
        'Project Ramp down': 2,
      },
    ];
      */

    this.xls.getDataFromXl(3, 1).then((data: any) => {
      const selectedMonth = this.month || 'Unknown';

      const filteredData = data.filter(
        (item: any) => item.value1 === selectedMonth
      );

      const result: { [key: string]: number | string } = {
        category: selectedMonth,
      };

      for (const obj of filteredData) {
        const range = obj['value10'] as string;
        if (range in result) {
          result[range] = (result[range] as number) + 1;
        } else {
          result[range] = 1;
        }
      }

      console.log(result);

      chartc.data = [result]; // Wrap result in an array
    });

    // Create axes
    let categoryAxis = chartc.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chartc.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    // Create series
    function createSeriess(field: any, name: any) {
      let series = chartc.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'category';
      series.name = name;
      series.stacked = true;

      // Enable tooltips
      series.tooltipText = '{name}[/]';

      // Enable hover state
      let hoverState = series.columns.template.states.create('hover');
      hoverState.properties.fillOpacity = 1; // Optional: Change fill opacity on hover

      // Optional: Add a stroke (outline) to the column on hover
      series.columns.template.strokeWidth = 1;
      series.columns.template.strokeOpacity = 1;
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.locationY = 0.5;
      labelBullet.label.text = '{valueY}';
      labelBullet.label.fill = am4core.color('#fff');
    }

    // Add legend
    chartc.legend = new am4charts.Legend();
    chartc.legend.position = 'right';
    chartc.legend.markers.template.width = 10;
    chartc.legend.markers.template.height = 10;
    // Enable value labels in legend
    chartc.legend.valueLabels.template.disabled = false;
    chartc.legend.labels.template.text = '{name}';
    chartc.legend.valueLabels.template.text = '{valueY}';

    // Add colors
    chartc.colors.list = [
      am4core.color('#9B59B6'),
      am4core.color('#3498DB'),
      am4core.color('#2ECC71'),
      am4core.color('#CDDC39'),

    ];
    createSeriess('Attrition', 'Attrition');
    createSeriess('Resource Active', 'Resource Active');
    createSeriess('Project Ramp down', 'Project Ramp down');
    

    var chart1 = am4core.create('piechart4style54', am4charts.PieChart);

    this.xls.getDataFromXl(3, 1).then((data: any) => {
      const selectedMonth = this.month;

      const filteredData = data.filter(
        (item: any) => item.value1 === selectedMonth
      );
      const distinctValues: { [key: string]: number } = {};
      for (const obj of filteredData) {
        const range = obj['Resource Skill Level'] as string;
        if (range in distinctValues) {
          distinctValues[range]++;
        } else {
          distinctValues[range] = 1;
        }
      }
      this.totalCount = 0;
      const result: { range: string; count: number }[] = [];
      for (const range in distinctValues) {
        const count = distinctValues[range];
        result.push({ range, count });
        this.totalCount += count;
      }

      console.log(result);

      
   

       chart1.data = result;
   
     });


    
    // chart1.legend = new am4charts.Legend();
    // chart1.legend.position = 'right';

    // // Add an adapter to modify the legend label
    // chart1.legend.labels.template.adapter.add(
    //   'textOutput',
    //   function (text, target) {
    //     // Your condition here. For example, if the text is 'Expert':
    //     if (text === 'Expert') {
    //       return text + ' (10-15 years)'; // Concatenate additional text
    //     } else if (text === 'Experienced') {
    //       return text + ' (3-10 years)';
    //     } else if (text === 'Expert') {
    //       return text + ' (10-15 years)';
    //     } else if (text === 'Subject Matter Expert') {
    //       return text + ' (15+ years)';
    //     } else if (text === 'Entry Level') {
    //       return text + ' (0-1 years)';
    //     }
    //     // Handle other conditions as needed
    //     return text; // Return the original text if no conditions are met
    //   }
    // );

    // chart1.fontSize = 12;
    // chart1.padding(15, 15, 15, 15);
    // chart1.logo.disabled = true;

    // // Add and configure Series
    // var pieSeries = chart1.series.push(new am4charts.PieSeries());
    // pieSeries.dataFields.value = 'count';
    // pieSeries.dataFields.category = 'range';
    // pieSeries.alignLabels = true;
    // pieSeries.labels.template.text = '{value}';
    // pieSeries.labels.template.radius = am4core.percent(20);
    // chart1.legend.valueLabels.template.disabled = true;
    // chart1.legend.markers.template.width = 10;
    // chart1.legend.markers.template.height = 10;
    // pieSeries.ticks.template.disabled = false;
    // pieSeries.ticks.template.stroke = am4core.color('black');
    // pieSeries.labels.template.fill = am4core.color('black'); // Choose a color that contrasts with the background
    // pieSeries.labels.template.relativeRotation = -90; // Adjust the rotation of the labels
    // pieSeries.innerRadius = am4core.percent(40); // You can adjust this percentage as you like

    // pieSeries.labels.template.adapter.add(
    //   'textOutput',
    //   function (text, target) {
    //     console.log(text);
    //     if (target.dataItem && target.dataItem.value) {
    //       var percent = target.dataItem.values.value.percent; // Truncate the decimal

    //       if (percent < Math.floor(percent) + 0.5) {
    //         percent = Math.floor(percent);
    //       } else {
    //         percent = Math.ceil(percent);
    //       }

    //       return percent + '%';
    //     }
    //     return percent;
    //   }
    // );
    // pieSeries.slices.template.tooltipText = '{value}';
    // pieSeries.slices.template.adapter.add(
    //   'tooltipText',
    //   function (text, target) {
    //     console.log(text);
    //     if (target.dataItem && target.dataItem.values.value.percent) {
    //       var percent = target.dataItem.values.value.percent; // Truncate the decimal
    //       var category = (target.dataItem.dataContext as any)['range'];
    //       if (percent < Math.floor(percent) + 0.5) {
    //         percent = Math.floor(percent);
    //       } else {
    //         percent = Math.ceil(percent);
    //       }

    //       return category + ' : (' + text + ') ' + percent + '% ';
    //     }
    //     return text;
    //   }
    // );
    // pieSeries.colors.list = [
    //   am4core.color('#1ABC9C'),
    //   am4core.color('#2ECC71'),
    //   am4core.color('#159BD7'),
    //   am4core.color('#9B59B6'),
    //   am4core.color('#435F7A'),
    //   am4core.color('#F1C40F'),
    //   am4core.color('#E67E22'),
    //   am4core.color('#E74C3C'),
    //   am4core.color('#ECF0F1'), // Amber
    //   am4core.color('#95A5A6'), // Deep Orange
    //   am4core.color('#9C27B0'), // Purple
    //   am4core.color('#E91E63'), // Pink
    //   am4core.color('#3F51B5'), // Indigo
    //   am4core.color('#4CAF50'), // Green
    //   am4core.color('#FF4081'), // Pink
    //   am4core.color('#673AB7'), // Deep Purple
    //   am4core.color('#CDDC39'), // Lime
    //   am4core.color('#795548'), // Brown
    //   am4core.color('#009688'), // Teal
    // ];
//    }
//  }












am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart23 = am4core.create("piechart4style11", am4charts.XYChart);

this.xls.getDataFromXl(3, 1).then((data: any) => {
  const selectedMonth = this.month;

  const filteredData = data.filter(
    (item: any) => item.value1 === selectedMonth
  );
  const distinctValues: { [key: string]: number } = {};
  for (const obj of filteredData) {
    const range = obj['Resource Skill Level'] as string;
    if (range in distinctValues) {
      distinctValues[range]++;
    } else {
      distinctValues[range] = 1;
    }
  }
  this.totalCount = 0;
  const result: { range: string; count: number }[] = [];
  for (const range in distinctValues) {
    const count = distinctValues[range];
    result.push({ range, count });
    this.totalCount += count;
  }
  result.sort((a, b) => {
    if (a.range === 'Subject Matter Expert') return -1; // 'Subject Matter Expert' comes first
    if (b.range === 'Subject Matter Expert') return 1; // 'Subject Matter Expert' comes first
    return 0;
    });

  console.log(result);

  chart23.data = result;


let categoryAxis23 = chart23.xAxes.push(new am4charts.CategoryAxis());
categoryAxis23.dataFields.category = "range";
categoryAxis23.renderer.grid.template.location = 0;
categoryAxis23.renderer.minGridDistance = 30;



let valueAxis23 = chart23.yAxes.push(new am4charts.ValueAxis());
valueAxis23.min = 0;   // Minimum value
valueAxis23.max = 80;  // Maximum value
valueAxis23.strictMinMax = true; // Enforce limits

// Create fixed Y-axis labels
const fixedValues = [0, 15, 30, 45, 60, 80];
valueAxis23.renderer.labels.template.disabled = false; // Enable label rendering
valueAxis23.renderer.ticks.template.disabled = true; // Disable ticks if you want only the labels

// Manually set the Y-axis ticks and labels
fixedValues.forEach(value => {
  let label = valueAxis23.renderer.labels.create();
  label.text = value.toString();
  label.isMeasured = false;
  label.verticalCenter = "middle";
  label.horizontalCenter = "right";
  label.fontSize = 14; // Adjust font size if needed
  label.marginRight = 10; // Margin for label
  label.y = value; // Set Y position
});


// Create series
let series23 = chart23.series.push(new am4charts.ColumnSeries());
series23.dataFields.valueY = "count";
series23.dataFields.categoryX = "range";
series23.name = "count";
series23.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series23.columns.template.fillOpacity = .8;
series23.columns.template.fill = am4core.color("#159BD7"); 


let columnTemplate = series23.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
chart23.logo.disabled = true;
let labelBullet = series23.bullets.push(new am4charts.LabelBullet());
labelBullet.label.text = "{valueY}";
labelBullet.label.dy = -10; 


});




am4core.useTheme(am4themes_animated);

this.xls.getDataFromXl(3, 1).then((data: any[]) => {
  // Step 1: Initialize aggregated data
  let aggregatedData: { [country: string]: number } = {};

  // Check if the month is "Q2-24" and add default values if true
  if (this.month === 'Q2-24') {
    aggregatedData = {
      'Costa Rica': 0,
      'India': 14,
      'Plano': 3,
    };
  }

  // Step 2: Aggregate the data by country
  data.forEach((item) => {
    if (item.value1 === this.month && item.value9 === 'Onboarded') {
      let country = item.value8;

      if (!aggregatedData[country]) {
        aggregatedData[country] = 0;
      }

      aggregatedData[country]++;
    }
  });

  // Log aggregated data to ensure counts are correct
  console.log("Aggregated Data:", aggregatedData);

  // Step 3: Convert aggregated data to array format suitable for am4charts
  this.formattedChartData = Object.keys(aggregatedData).map((country) => {
    return {
      country,
      litres: aggregatedData[country],
    };
  });

  // Log the final formatted chart data
  console.log("Formatted Chart Data:", this.formattedChartData);
 

  let chart55 = am4core.create("chartdiv2", am4charts.PieChart);

  chart55.data = this.formattedChartData ;
  chart55.logo.disabled = true;
  let pieSeries55 = chart55.series.push(new am4charts.PieSeries());
 pieSeries55.dataFields.value = "litres";
 pieSeries55.dataFields.category = "country";
 pieSeries55.slices.template.stroke = am4core.color("#fff");
 pieSeries55.slices.template.strokeWidth = 2;
 pieSeries55.slices.template.strokeOpacity = 1;

 // This creates initial animation
 pieSeries55.hiddenState.properties.opacity = 1;
 pieSeries55.hiddenState.properties.endAngle = -90;
 pieSeries55.hiddenState.properties.startAngle = -90;

 pieSeries55.slices.template.tooltipText = '{value}';

    chart55.legend = new am4charts.Legend();
    chart55.legend.position = 'right';
    chart55.fontSize = 12;
    chart55.logo.disabled = true;

    chart55.legend.labels.template.truncate = false;
    chart55.legend.labels.template.wrap = true;
    chart55.legend.scrollable = true;
    chart55.legend.valueLabels.template.disabled = true;
    // Modify the marker template to adjust the legend size
    chart55.legend.markers.template.width = 10;
    chart55.legend.markers.template.height = 10;
    
  
    pieSeries55.colors.list = [
      
      am4core.color('#9B59B6'),
      am4core.color('#CDDC39'),
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
});










// this.xls.getDataFromXl(3, 1).then((data) => {
//   let aggregatedData: { [key: string]: { [value1: string]: number } } = {};

// data.forEach((item) => {
//   if (item.value1 === this.month) {
//     if(item.value9 == 'Onboarded'){
//     let key = item.value9;
//     let value1 = item.value8;

//     if (!aggregatedData[key]) {
//       aggregatedData[key] = {};
//     }

//     if (!aggregatedData[key][value1]) {
//       aggregatedData[key][value1] = 0;
//     }

//     aggregatedData[key][value1]++;
//   }}
// });

// // Convert aggregated data to array format suitable for am4charts
// let chartData = Object.keys(aggregatedData).map((key) => {
//   return {
//     key,
//     ...aggregatedData[key],
// };
// });

//  this.formattedChartData = [];

//     chartData.forEach((item:any) => {
//         Object.keys(item).forEach((country) => {
//             if (country !== 'key') {
//                 this.formattedChartData.push({
//                     country,
//                     litres: item[country],

//                 });
//             }
//         });
//         console.log(this.formattedChartData);
//     });

    // Use formattedChartData for further processing or visualization
    

// Create chart instance
// let chart55 = am4core.create("chartdiv2", am4charts.PieChart);

//   chart55.data = this.formattedChartData;
//   chart55.logo.disabled = true;
// Add data
// chart55.data = 
// [ {
//   "country": "Lithuania",
//   "litres": 501.9
// }, {
//   "country": "Czechia",
//   "litres": 301.9
// }, {
//   "country": "Ireland",
//   "litres": 201.1
// }, {
//   "country": "Germany",
//   "litres": 165.8
// }, {
//   "country": "Australia",
//   "litres": 139.9
// }, {
//   "country": "Austria",
//   "litres": 128.3
// }, {
//   "country": "UK",
//   "litres": 99
// }, {
//   "country": "Belgium",
//   "litres": 60
// }, {
//   "country": "The Netherlands",
//   "litres": 50
// } ];

// Add and configure Series
// let pieSeries55 = chart55.series.push(new am4charts.PieSeries());
// pieSeries55.dataFields.value = "litres";
// pieSeries55.dataFields.category = "country";
// pieSeries55.slices.template.stroke = am4core.color("#fff");
// pieSeries55.slices.template.strokeWidth = 2;
// pieSeries55.slices.template.strokeOpacity = 1;

// // This creates initial animation
// pieSeries55.hiddenState.properties.opacity = 1;
// pieSeries55.hiddenState.properties.endAngle = -90;
// pieSeries55.hiddenState.properties.startAngle = -90;

// pieSeries55.slices.template.tooltipText = '{value}';

//     chart55.legend = new am4charts.Legend();
//     chart55.legend.position = 'right';
//     chart55.fontSize = 12;
//     chart55.logo.disabled = true;

//     chart55.legend.labels.template.truncate = false;
//     chart55.legend.labels.template.wrap = true;
//     chart55.legend.scrollable = true;
//     chart55.legend.valueLabels.template.disabled = true;
//     // Modify the marker template to adjust the legend size
//     chart55.legend.markers.template.width = 10;
//     chart55.legend.markers.template.height = 10;
    
  
//     pieSeries55.colors.list = [
      
//       am4core.color('#9B59B6'),
//       am4core.color('#CDDC39'),
//       am4core.color('#159BD7'),
//       am4core.color('#9B59B6'),
//       am4core.color('#435F7A'),
//       am4core.color('#F1C40F'),
//       am4core.color('#E67E22'),
//       am4core.color('#E74C3C'),
//       am4core.color('#ECF0F1'), // Amber
//       am4core.color('#95A5A6'), // Deep Orange
//       am4core.color('#9C27B0'), // Purple
//       am4core.color('#E91E63'), // Pink
//       am4core.color('#3F51B5'), // Indigo
//       am4core.color('#4CAF50'), // Green
//       am4core.color('#FF4081'), // Pink
//       am4core.color('#673AB7'), // Deep Purple
//       am4core.color('#CDDC39'), // Lime
//       am4core.color('#795548'), // Brown
//       am4core.color('#009688'), // Teal
//     ];
// });










// this.xls.getDataFromXl(3, 1).then((data: any) => {
//   const selectedMonth = this.month || 'Unknown';

//   const filteredData = data.filter(
//       (item: any) => item.value1 === selectedMonth && item.value10 === 'Project Ramp down'
//   );

//   let totalCount = 0;

//     for (const obj of filteredData) {
//         totalCount++;
//     }
//     const result: { country: string; litres: number }[] = [];

//     // Add a single object with the total count for "Project Ramp down"
//     result.push({ country: "Project Ramp down", litres: totalCount });


//   console.log(result);

//   chartc.data = result;



//   let chart5 = am4core.create("chartdiv3", am4charts.PieChart);

//   chart5.data = chartc.data
//   chart5.logo.disabled = true;

// // Add and configure Series
// let pieSeries5 = chart5.series.push(new am4charts.PieSeries());
// pieSeries5.dataFields.value = "litres";
// pieSeries5.dataFields.category = "country";
// pieSeries5.slices.template.stroke = am4core.color("#fff");
// pieSeries5.slices.template.strokeOpacity = 1;

// // This creates initial animation
// pieSeries5.hiddenState.properties.opacity = 1;
// pieSeries5.hiddenState.properties.endAngle = -90;
// pieSeries5.hiddenState.properties.startAngle = -90;

//    chart5.legend = new am4charts.Legend();
//     chart5.legend.position = 'right';
//     chart5.fontSize = 12;
//     chart5.logo.disabled = true;

//     chart5.legend.labels.template.truncate = false;
//     chart5.legend.labels.template.wrap = true;
//     chart5.legend.scrollable = true;
//     chart5.legend.valueLabels.template.disabled = true;
//     // Modify the marker template to adjust the legend size
//     chart5.legend.markers.template.width = 10;
//     chart5.legend.markers.template.height = 10;

// chart5.hiddenState.properties.radius = am4core.percent(0);
//     pieSeries5.colors.list = [
      
//       am4core.color('#2ECC71'),
//       am4core.color('#CDDC39'),
//       am4core.color('#159BD7'),
//       am4core.color('#9B59B6'),
//       am4core.color('#435F7A'),
//       am4core.color('#F1C40F'),
//       am4core.color('#E67E22'),
//       am4core.color('#E74C3C'),
//       am4core.color('#ECF0F1'), // Amber
//       am4core.color('#95A5A6'), // Deep Orange
//       am4core.color('#9C27B0'), // Purple
//       am4core.color('#E91E63'), // Pink
//       am4core.color('#3F51B5'), // Indigo
//       am4core.color('#4CAF50'), // Green
//       am4core.color('#FF4081'), // Pink
//       am4core.color('#673AB7'), // Deep Purple
//       am4core.color('#CDDC39'), // Lime
//       am4core.color('#795548'), // Brown
//       am4core.color('#009688'), // Teal
//     ];



// });

// 

this.xls.getDataFromXl(3, 1).then((data: any) => {
  const selectedMonth = this.month || 'Unknown';

  // Filter data based on the selected month
  const filteredData = data.filter(
    (item: any) => item.value1 === selectedMonth
  );

  // Initialize result object
  const result: { [key: string]: number | string } = {
    category: selectedMonth,
  };

  // Count the occurrences for each "range" (value10)
  for (const obj of filteredData) {
    const range = obj['value10'] as string;
    if (range in result) {
      result[range] = (result[range] as number) + 1;
    } else {
      result[range] = 1;
    }
  }

  // If the selected month is Q3-24, add 13 to 'Project Ramp down'
  if (selectedMonth === 'Q3-24') {
    if ('Project Ramp down' in result) {
      result['Project Ramp down'] = (result['Project Ramp down'] as number) + 13;
    } else {
      result['Project Ramp down'] = 13;
    }
  }

  console.log(result);

  // Update chart data with the result
  chartc.data = [result]; // Wrap result in an array

  // Create chart instance
  let chart5 = am4core.create("chartdiv3", am4charts.XYChart);
  chart5.data = chartc.data;

  chart5.logo.disabled = true;

  // Create axes
  let categoryAxis1 = chart5.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis1.dataFields.category = 'category';
  categoryAxis1.renderer.grid.template.disabled = true;

  let valueAxis1 = chart5.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.renderer.grid.template.disabled = true;

  // Create series function
  function createSeriess(field: any, name: any) {
    let series1 = chart5.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = field;
    series1.dataFields.categoryX = 'category';
    series1.name = name;
    series1.stacked = true;

    // Enable tooltips
    series1.tooltipText = '{name}[/]';

    // Enable hover state
    let hoverState = series1.columns.template.states.create('hover');
    hoverState.properties.fillOpacity = 1;

    // Optional: Add a stroke (outline) to the column on hover
    series1.columns.template.strokeWidth = 1;
    series1.columns.template.strokeOpacity = 1;

    // Add label bullets
    let labelBullet = series1.bullets.push(new am4charts.LabelBullet());
    labelBullet.locationY = 0.5;
    labelBullet.label.text = '{valueY}';
    labelBullet.label.fill = am4core.color('#fff');
  }

  // Add legend
  chart5.legend = new am4charts.Legend();
  chart5.legend.position = 'right';
  chart5.legend.markers.template.width = 10;
  chart5.legend.markers.template.height = 10;
  chart5.legend.valueLabels.template.disabled = false;
  chart5.legend.labels.template.text = '{name}';
  chart5.legend.valueLabels.template.text = '{valueY}';

  // Add colors
  chart5.colors.list = [
    am4core.color('#9B59B6'),
    am4core.color('#3498DB'),
    am4core.color('#2ECC71'),
  ];

  // Create series for Attrition, Resource Active, and Project Ramp down
  createSeriess('Attrition', 'Attrition');
  createSeriess('Resource Active', 'Resource Active');
  createSeriess('Project Ramp down', 'Project Ramp down');
});


  }}
