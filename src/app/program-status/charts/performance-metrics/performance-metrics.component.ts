import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-performance-metrics',
  templateUrl: './performance-metrics.component.html',
  styleUrls: ['./performance-metrics.component.scss']
})
export class PerformanceMetricsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
      // create chart
var chartz = am4core.create("piechart3", am4charts.GaugeChart);
chartz.hiddenState.properties.opacity = 0; // this makes initial fade in effect

chartz.innerRadius = -20;

var axis = chartz.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
axis.min = 0;
axis.max = 100;
axis.renderer.inside = true;
axis.renderer.radius = am4core.percent(100);
axis.renderer.labels.template.radius = -15;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.length = 25;
axis.renderer.grid.template.disabled = true;

var axis2 = chartz.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
axis2.min = 0;
axis2.max = 100;
axis2.strictMinMax = true;
axis2.renderer.innerRadius = am4core.percent(85);
axis.renderer.ticks.template.strokeOpacity = 1;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = true;

//var colorSet = new am4core.ColorSet();

var range0 = axis2.axisRanges.create();
range0.value = 0;
range0.endValue = 45;
range0.axisFill.fill = am4core.color('#DC3545');
range0.axisFill.fillOpacity = 1;
//range0.axisFill.fill = colorSet.getIndex(0);
//range0.axisFill.zIndex = 1;

var range1 = axis2.axisRanges.create();
range1.value = 45;
range1.endValue = 80;
range1.axisFill.fill = am4core.color('#F5821E');
range1.axisFill.fillOpacity = 1;
//range1.axisFill.fill = colorSet.getIndex(2);
//range1.axisFill.zIndex = 1;

var range2 = axis2.axisRanges.create();
range2.value = 80;
range2.endValue = 100;
range2.axisFill.fill = am4core.color('#28A745');
range2.axisFill.fillOpacity = 1;
//range2.axisFill.fill = colorSet.getIndex(4);
//range2.axisFill.zIndex = 1;

var label = chartz.radarContainer.createChild(am4core.Label);
label.isMeasured = false;
label.fontSize = 20;
label.x = am4core.percent(50);
label.y = am4core.percent(100);
label.horizontalCenter = "middle";
label.verticalCenter = "bottom";
label.text = "50.15%";

var hand = chartz.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.startWidth = 8;
hand.stroke = am4core.color('#AAAAAA');
hand.fill = am4core.color('#AAAAAA');
hand.pin.fill = am4core.color('#AAAAAA');
hand.pin.stroke = am4core.color('#AAAAAA');
hand.pin.radius = 4;
hand.pin.x = am4core.percent(7);
hand.radius = am4core.percent(50);
hand.innerRadius = am4core.percent(15);
hand.value = 50;

// using chart.setTimeout method as the timeout will be disposed together with a chart
hand.events.on("propertychanged", function(ev) {
//range0.endValue = ev.target.value;
//range1.value = ev.target.value;
axis2.invalidate();
});
    }

}
