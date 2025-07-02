import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SitePerformaceComponent } from './site-performace/site-performace.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ProgramStatusComponent } from './program-status/program-status.component';
import { InventorOverviewComponent } from './inventor-overview/inventor-overview.component';
import { ResourceMetricsComponent } from './resource-metrics/resource-metrics.component';
import { FinancialComponent } from './financial/financial.component';
import { PerformanceMetricsComponent } from './program-status/charts/performance-metrics/performance-metrics.component';
import { QualityMetricsComponent } from './program-status/charts/quality-metrics/quality-metrics.component';
import { ResourceSkillLevelComponent } from './program-status/charts/Upskilling-plans/resource-skill-level.component';
import { ResourceUtilisationFunctionsComponent } from './program-status/charts/resource-utilisation-functions/resource-utilisation-functions.component';
import { ResourceUtilizationComponent } from './charts/resource-utilization-program/resource-utilization.component';
import { TrainingComplianceComponent } from './charts/training-compliance/training-compliance.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { InventoryOverviewComponent } from './inventor-overview/charts/inventory-overview/inventory-overview.component';
import { InventoryChartComponent } from './inventor-overview/charts/inventory-chart/inventory-chart.component';
import { InventoryUtlizationComponent } from './inventor-overview/charts/inventory-utlization/inventory-utlization.component';
import { MatSelectModule } from '@angular/material/select';
import { AssetsTrendsComponent } from './inventor-overview/charts/assets-trends/assets-trends.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CalibrationPreventiveComponent } from './inventor-overview/charts/calibration-preventive/calibration-preventive.component';
import { PopupDataComponent } from './popups/popup-data/popup-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DpvdashboardComponent } from './Engagement-health/dpvdashboard.component';
import { MonthlyConsumptionReportComponent } from './financial/monthly-consumption-report/monthly-consumption-report.component';
import { ProgramMetricsComponent } from './program-metrics/program-metrics.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NewPoChartComponent } from './financial/Financial-tracking/new-po-chart.component';
import { NewPoChart2Component } from './new-po-chart2/new-po-chart2.component';
import { Fin1Component } from './fin1/Fin1.component';
import { Fin2Component } from './Fin2/Fin2.component';
import { Fin3Component } from './Fin3/Fin3.component';
import { Fin4Component } from './Fin4/Fin4.component';
import { Fin5Component } from './Fin5/Fin5.component';
import { Fin6Component } from './Fin6/Fin6.component';
import { Fin7Component } from './Fin7/Fin7.component';
import { Fin8Component } from './Fin8/Fin8.component';
import { Fin9Component } from './Fin9/Fin9.component';
import { ProgramComponent } from './Program/program.component';
import { Fin10Component } from './Fin10/Fin10.component';
import { Fin12Component } from './Fin12/Fin12.component';
import { Fin11Component } from './Program-metrics-2/Fin11.component';
import { Financial2Component } from './Financial2/financial2.component';
import { Fin21Component } from './Fin21/Fin21.component';
import { Fin22Component } from './Fin22/Fin22.component';
import { Fin23Component } from './Fin23/Fin23.component';
import { Fin24Component } from './Fin24/Fin24.component';
import { Fin25Component } from './Fin25/Fin25.component';
import { Fin26Component } from './Fin26/Fin26.component';
import { Fin27Component } from './Fin27/Fin27.component';
import { Fin28Component } from './Fin28/Fin28.component';
import { Fin29Component } from './Fin29/Fin29.component';
import { Fin30Component } from './Fin30/Fin30.component';
import { Fin31Component } from './Fin31/Fin31.component';
import { Fin32Component } from './Fin32/Fin32.component';
import { Fin33Component } from './Fin33/Fin33.component';
import { Fin34Component } from './Fin34/Fin34.component';
import { Fin35Component } from './Fin35/Fin35.component';
import { Fin36Component } from './Fin36/Fin36.component';
import { Fin37Component } from './Fin37/Fin37.component';
import { Fin38Component } from './Fin38/Fin38.component';
import { SowContractorComponent } from './sow-contractor/sow-contractor.component';
import { ArtmsComponent } from './Artms2025/Artms.component';
import { CloudopsComponent } from './Cloudops2025/Cloudops.component'
import { MobileopsComponent } from './Mobileops2025/Mobileops.component';
import {  LyraComponent } from './Lyra2025/Lyra.component';
import { ProgrammComponent } from './Program-metrics-2/Program2025/Programm.component';
import { NewgraphComponent } from './Newgraph2025/Newgraph.component';
import { GmiComponent } from './Gmi2025/Gmi.component';
import { IptComponent } from './Ipt2025/Ipt.component';
import { MobileopsherculesComponent } from './Mobileopshercules2025/Mobileopshercules.component';
import { SfintegrationComponent } from './Sfintegration2025/Sfintegration.component';
import { SapphireComponent } from './Sapphire2025/Sapphire.component';
import { RemoteComponent } from './Remote2025/Remote.component';
import { LanaiComponent } from './Lanai2025/Lanai.component';
import { HerculesComponent } from './Hercules2025/Hercules.component';
import { CapexComponent } from './Capex2025/Capex.component';
import { MetricComponent } from './Metric2025/Metric.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SitePerformaceComponent,
    ProgramStatusComponent,
    InventorOverviewComponent,
    ResourceMetricsComponent,
    FinancialComponent,
    PerformanceMetricsComponent,
    QualityMetricsComponent,
    ResourceSkillLevelComponent,
    ResourceUtilisationFunctionsComponent,
    ResourceUtilizationComponent,
    TrainingComplianceComponent,
    InventoryOverviewComponent,
    InventoryChartComponent,
    InventoryUtlizationComponent,
    AssetsTrendsComponent,
    CalibrationPreventiveComponent,
    PopupDataComponent,
    LoginComponent,
    DpvdashboardComponent,
    MonthlyConsumptionReportComponent,
    ProgramMetricsComponent,
    InvoiceComponent,
    NewPoChartComponent,
    NewPoChart2Component,
    Fin1Component,
    Fin2Component,
    Fin3Component,
    Fin4Component,
    Fin5Component,
    Fin6Component,
    Fin7Component,
    Fin8Component,
    Fin9Component,
    ProgramComponent,
    Fin10Component,
    Fin11Component,
    Fin12Component,
    Financial2Component,
    Fin21Component,
    Fin22Component,
    Fin23Component,
    Fin24Component,
    Fin25Component,
    Fin26Component,
    Fin27Component,
    Fin28Component,
    Fin29Component,
    Fin30Component,
    Fin31Component,
    Fin32Component,
    Fin33Component,
    Fin34Component,
    Fin35Component,
    Fin36Component,
    Fin37Component,
    Fin38Component,
    SowContractorComponent,
    ArtmsComponent,
    CloudopsComponent,
    MobileopsComponent,
    LyraComponent,
    ProgrammComponent,
    NewgraphComponent,
    SapphireComponent,
    SfintegrationComponent,
    GmiComponent,
    IptComponent,
    MobileopsherculesComponent,
    RemoteComponent,
    HerculesComponent,
    LanaiComponent,
    CapexComponent,
    MetricComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
