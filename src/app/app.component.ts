import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { XlsApi } from '../../src/app/api/xl-api';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  lastRefreshed: any;
  role: any;
  showMenu: boolean = false;
  allMonths: any;
  month: any;
  allObjects: any;
  healthIndicator: any;
  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute,
    private xls: XlsApi
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        let urlSlice = e.url.toString().substr(0, 10);
        if (urlSlice.indexOf('login') !== -1 || urlSlice.indexOf('/')) {
          console.log(urlSlice + '--' + this.showMenu);
          this.showMenu = false;
        } else {
          if (urlSlice == '/') {
            this.showMenu = false;
          } else {
            this.showMenu = true;
          }
          this.ngAfterViewInit();
          console.log(urlSlice + '--' + this.showMenu);
        }
      }
    });
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const mmm = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var mmmm = parseInt(mm) - 1;
    this.lastRefreshed = dd + ' ' + mmm[mmmm] + ' ' + yyyy;
  }

  ngAfterViewInit() {
    this.role = sessionStorage.getItem('role');

    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  ngOnInit() {
    this.xls.getDataFromXl(3, 0).then((data) => {
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

    if (sessionStorage.getItem('selectedMonth') === null) {
      sessionStorage.setItem('selectedMonth','Q2-24');
    }
    this.month = sessionStorage.getItem('selectedMonth');
  }

  signOut() {
    sessionStorage.removeItem('selectedMonth');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  changeGraph() {
    sessionStorage.setItem('selectedMonth', this.month);
    window.location.reload();
  }
}
