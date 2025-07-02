import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitePerformaceComponent } from './site-performace/site-performace.component';
import { FinancialComponent } from './financial/financial.component';
import { ProgramStatusComponent } from './program-status/program-status.component';
import { InventorOverviewComponent } from './inventor-overview/inventor-overview.component';
import { ResourceMetricsComponent } from './resource-metrics/resource-metrics.component';
import { LoginComponent } from './login/login.component';
import { DpvdashboardComponent } from './Engagement-health/dpvdashboard.component';
import { ProgramMetricsComponent } from './program-metrics/program-metrics.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MetricComponent } from './Metric2025/Metric.component';
import { SowContractorComponent } from './sow-contractor/sow-contractor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'home',
    component: SitePerformaceComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'financial',
    component: FinancialComponent,
  },
  {
    path: 'Metric',
    component: MetricComponent,
  },
  {
    path: 'program-status',
    component: ProgramStatusComponent,
  },
  {
    path: 'inventor-overview',
    component: InventorOverviewComponent,
  },
  {
    path: 'resource-metrics',
    component: ResourceMetricsComponent,
  },
  {
    path: 'sow-contractor',
    component: SowContractorComponent,
  },
  {
    path: 'dpvdashboard',
    component: DpvdashboardComponent,
  },
  {
    path: 'program-metrics',
    component: ProgramMetricsComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
