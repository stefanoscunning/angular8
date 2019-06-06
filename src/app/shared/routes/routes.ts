import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const ROUTES: Routes = [
  
  {
    path: 'dashboard',
    loadChildren: () => import(`../../home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import(`../../jobs/jobs.module`).then(m => m.JobsModule)
  },
  {
    path: 'timesheets',
    loadChildren: () => import(`../../timesheets/timesheets.module`).then(m => m.TimesheetsModule)
  }

];