import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {ROUTES} from './shared/routes/routes';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { LayoutComponent } from './layouts/layout/layout.component';
import {LoginModule} from './login/login.module';

const appRoutes: Routes = [
  
  {path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '', component: LayoutComponent, data: { title: '' }, children: ROUTES, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}