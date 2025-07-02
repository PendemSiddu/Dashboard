import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { read, utils } from 'xlsx';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { PopupDataComponent } from '../popups/popup-data/popup-data.component';

interface President {
  key: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: string;
  value8: string;
  value9: string;
  value10: string;
}
@Injectable({ providedIn: 'root' })
export class XlsApi {
  result: any;

  async getDataFromXl(url: any, sheet: number) {
    if (url == 1) {
      url = 'assets/docs/resource_exp.xlsx';
    } else if (url == 2) {
      url = 'assets/docs/NMD_Dashboards_Master_Data_V11.xlsx';
    } else if (url == 4) {
      url = 'assets/docs/NMD_Dashboards_Master_Data_Updated_11th_May.xlsx';
      //url = 'assets/docs/NMD_Dashboards_Master_Data-amj.xlsx';
    } else {
      //url = 'assets/docs/NMD_Dashboards_Master_Data_Updated_11th_May.xlsx';
      //url = 'assets/docs/NMD_Dashboards_Master_Data-27.xlsx';
      url = 'assets/docs/FEB-8th.xlsx';
    }
    let Heading = [
      [
        'key',
        'value1',
        'value2',
        'value3',
        'value4',
        'value5',
        'value6',
        'value7',
        'value8',
        'value9',
        'value10',
      ],
    ];
    const f = await (await fetch(url)).arrayBuffer();
    const wb = read(f);

    const ws = utils.sheet_add_aoa(wb.Sheets[wb.SheetNames[sheet]], Heading);
    const data = utils.sheet_to_json<President>(ws);
    return data;
  }

  async exportData(data: any, fileName: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'test');
    XLSX.writeFile(wb, fileName);
    return '0';
  }

  constructor(public dialog: MatDialog) {}

  async openDailoge(datas: any, title: any) {
    const dialogRef = this.dialog.open(PopupDataComponent, {
      width: '800px',
      maxHeight: '500px',
      data: { dialogTitle: title, datas: datas },
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
    });
  }

  async getDataFromXl2(url: any, sheet: number) {
    if (url == 1) {
      url = 'assets/docs/resource_exp.xlsx';
    } else if (url == 2) {
      url = 'assets/docs/NMD_Dashboards_Master_Data_V11.xlsx';
    } else if (url == 4) {
      url = 'assets/docs/NMD_Dashboards_Master_Data_Updated_11th_May.xlsx';
    } else {
      //url = 'assets/docs/NMD_Dashboards_Master_Data-27.xlsx';
      url = 'assets/docs/FEB-8th.xlsx';
    }
    let Heading = [[]];
    const f = await (await fetch(url)).arrayBuffer();
    const wb = read(f);

    const ws = utils.sheet_add_aoa(wb.Sheets[wb.SheetNames[sheet]], Heading);
    const data = utils.sheet_to_json<President>(ws);
    return data;
  }



  
  async getDataFromXl3(url: any, sheet: number) {
    if (url == 1) {
      url = 'assets/docs/resource_exp.xlsx';
    } else if (url == 2) {
      url = 'assets/docs/NMD_Dashboards_Master_Data_V11.xlsx';
    } else if (url == 4) {
      url = 'assets/docs/NMD_Dashboards_Master_Data_Updated_11th_May.xlsx';
    } else {
      //url = 'assets/docs/NMD_Dashboards_Master_Data-27.xlsx';
      url = 'assets/docs/FEB-8th.xlsx';
    }
    let Heading = [
      [
        'key',
        'value1',
        'value2',
        'value3',
        'value4',
        'value5',
        'value6',
        'value7',
        'value8',
        'value9',
        'value10',
        'value11',
        'value12',
        'value13',
        'value14',
        'value15',
        'value16',
        'value17',
        'value18',
        'value19',
        'value20',
        'value21',
        'value22',
        'value23',
        'value24',
        'value25',
        'value26',
        'value27',
        'value28',
        'value29',
        'value30',
        'value31',
        'value32',
        'value33',
        'value34',
        'value35',
        'value36',
        'value37',
        'value38',
        'value39',
        'value40',
        'value41',
        'value42',
        'value43',
        'value44',
        'value45',
        'value46',
        'value47',
        'value48',
        'value49',
        'value50',
        'value51',
        'value52',
        'value53',
        'value54',
        'value55',
        'value56',
        'value57',
        'value58',
        'value59',
        'value60',
        'value61',
        'value62',
        'value63',
        'value64',
        'value65',
        'value66',
        'value67',
        'value68',
        'value69',
        'value70',
        'value71',
        'value72',
        'value73',
        'value74',
        'value75',
        'value76',
        'value77',
        'value78',
        'value79',
        'value80',
        'value81',
        'value82',
        'value83',
        'value84',
        'value85',
        'value86',
        'value87',
        'value88',
        'value89',
        'value90',
        'value91',
        'value92',
        'value93',
        'value94',
        'value95',
        'value96',
        'value97',
        'value98',
        'value99',
        'value100',
        'value101',
        'value102',
        'value103',
        'value104',
        'value105',
        'value106',
        'value107',
        'value108',
        'value109',
        'value110',



      ],
  ];
    const f = await (await fetch(url)).arrayBuffer();
    const wb = read(f);

    const ws = utils.sheet_add_aoa(wb.Sheets[wb.SheetNames[sheet]], Heading);
    const data = utils.sheet_to_json<President>(ws);
    return data;
  }


  getRole() {
    return sessionStorage.getItem('role');
  }

  ngOnInit(): void {}
}
