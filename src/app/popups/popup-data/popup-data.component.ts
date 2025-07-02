import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-data',
  templateUrl: './popup-data.component.html',
  styleUrls: ['./popup-data.component.scss'],
})
export class PopupDataComponent implements OnInit {
  datas: any;
  header: any;
  constructor(
    public dialogRef: MatDialogRef<PopupDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopDialogModel
  ) {
    this.header = this.data.dialogTitle;
    this.datas = this.data.datas;
  }

  ngOnInit(): void {}
}
export class PopDialogModel {
  dialogTitle: any;
  datas: any;
  constructor(public choosedOperation: string) {}
}
