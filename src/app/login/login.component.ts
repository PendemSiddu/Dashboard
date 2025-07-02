import { Component, OnInit } from '@angular/core';
import { XlsApi } from '../api/xl-api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  loginError: boolean = false;
  constructor(
    private xls: XlsApi,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginError = !this.userName || !this.password ? true : false;
    this.xls.getDataFromXl(1, 15).then((data) => {
      var datas = data;
      console.log(datas + '===' + datas.length);
      for (var i = 0; i <= datas.length - 1; i++) {
        console.log(
          this.userName == datas[i]['key'] + '--' + datas[i]['value1']
        );
        if (
          this.userName == datas[i]['key'] &&
          this.password == datas[i]['value1']
        ) {
          sessionStorage.setItem('role', datas[i]['value2']);
          if (datas[i]['value2'] == '1') {
            this.router.navigate(['/dpvdashboard']);
          } else if (datas[i]['value2'] == '2') {
            this.router.navigate(['/dpvdashboard']);
          } else if (datas[i]['value2'] == '3') {
            this.router.navigate(['/resource-metrics']);
          }
          return;
        }
      }
    });
  }
}
