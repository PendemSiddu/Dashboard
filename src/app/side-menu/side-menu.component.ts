import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  role: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
  }
  goTo() {
    this.router.navigate([`financial`]);
  }
}
