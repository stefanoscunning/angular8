import { RouteInfo } from './sidebar.metadata';
declare var require: any;
const localisation: any = require('../../../assets/data/localisation.json');
import { environment } from '../../../environments/environment';
//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '/home', title: localisation.dashboard, icon: 'fas fa-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/jobs', title: localisation.jobs, icon: 'fas fa-clipboard', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/timesheets', title: localisation.timesheets, icon: 'fas fa-user-clock', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }
    
];
