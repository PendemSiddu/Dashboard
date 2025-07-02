import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { google } from 'google-maps';

@Component({
  selector: 'app-site-performace',
  templateUrl: './site-performace.component.html',
  styleUrls: ['./site-performace.component.scss'],
})
export class SitePerformaceComponent implements OnInit {
  mapDiv = <HTMLInputElement>document.getElementById('map');
  constructor() {}
  ngAfterViewInit() {
    /* let map;

      console.log("here");
      map = new google.maps.Map(mapDiv, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });*/

    let locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      [
        'Maroubra BeachManly Beach Manly Beach Manly Beach',
        -33.950198,
        151.259302,
        1,
      ],
    ] as const;

    var count, marker;

    // Init map
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(locations[0][1], locations[0][2]),
      scrollwheel: true,
    };

    var map = new google.maps.Map(
      <HTMLInputElement>document.getElementById('map'),
      mapOptions
    );

    // Create info window
    var infowindow = new google.maps.InfoWindow({
      maxWidth: 350,
      pixelOffset: new google.maps.Size(-10, -25),
    });

    var infoFn = function (count: any) {
      return function () {
        var content =
          '<div class="popup" style="font-size:12px;line-height:18px">' +
          '<div style="background: #F0F3F8;border-radius: 4px 4px 0px 0px;padding:10px"><b style="">Abbott GDC Plano</b><br>Abbott, 6901 Preston Rd, Plano, TX 75024, United States</div>' +
          '<div style="padding:10px;border-bottom: 1px solid #D1D1D1;"><span>Financial Tracking(On Budget) </span><span style="float:right">92.00%</span></div>' +
          '<div style="padding:10px;border-bottom: 1px solid #D1D1D1;"><span>Performance Metrics </span><span style="float:right">86.00%</span></div>' +
          '<div style="padding:10px;border-bottom: 1px solid #D1D1D1;color:#DC3545"><span>Quality Metrics </span><span style="float:right">87.00%</span></div>' +
          '<div style="padding:10px;border-bottom: 1px solid #D1D1D1;"><span>Resource Utilization </span><span style="float:right">98.00%</span></div>' +
          '<div style="padding:10px;border-bottom: 1px solid #D1D1D1;"><span>Asset Utilization </span><span style="float:right">95.00%</span></div>' +
          '<div style="padding:10px;"><br><center><span style="width: 112px;height: 36px;background: #5fafe7;border-radius: 4px;color: white;padding: 10px;">View Details</span></center></div>' +
          '</div>';

        infowindow.setContent(content);
        infowindow.open(map);
        infowindow.setPosition(
          new google.maps.LatLng(locations[count][1], locations[count][2])
        );
      };
    };

    // Add markers
    for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          locations[count][1],
          locations[count][2]
        ),
        map: map,
        title: locations[count][0],
      });
      marker.setMap(map);

      let fn = infoFn(count);
      google.maps.event.addListener(marker, 'click', fn);
    }
  }

  ngOnInit(): void {}
}
