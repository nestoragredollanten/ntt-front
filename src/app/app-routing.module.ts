import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerSummaryComponent} from './customer-summary/customer-summary.component';
import {CustomerConsultComponent} from './customer-consult/customer-consult.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer-consult', pathMatch: 'full' },
  { path: 'customer-consult', component: CustomerConsultComponent },
  { path: 'customer-summary', component: CustomerSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
