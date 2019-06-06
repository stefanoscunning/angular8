import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimesheetsComponent } from './timesheets.component';

const routes: Routes = [
  {
    path: '',
     component: TimesheetsComponent,
    data: {
      title: 'Timesheets'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimesheetsRoutingModule { }

export const routedComponents = [TimesheetsComponent];