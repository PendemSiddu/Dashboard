import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-status',
  templateUrl: './program-status.component.html',
  styleUrls: ['./program-status.component.scss'],
})
export class ProgramStatusComponent implements OnInit {
  role: any;
  constructor() {}

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
  }
}
