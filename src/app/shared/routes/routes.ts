import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from '../../home/home.module';

//Route for content layout with sidebar, navbar and footer.

export const ROUTES: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import(`../../home/home.module`).then(m => m.HomeModule)
  }

];