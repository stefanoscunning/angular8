import { RouteInfo } from './sidebar.metadata';
declare var require: any;
const localisation: any = require('../../../assets/data/localisation.json');
import { environment } from '../../../environments/environment';
//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '/dashboard', title: localisation.dashboard, icon: 'fas fa-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/jobs', title: localisation.jobs, icon: 'fas fa-tasks', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/timesheets', title: localisation.timesheets, icon: 'far fa-clock', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }
    
];
