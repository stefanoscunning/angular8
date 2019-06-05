import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  menuClassName = "red darken-1";
  envName: string;
  
  constructor(private router: Router,
      private route: ActivatedRoute) {
        this.envName = environment.envName;
  }

  ngOnInit() {
    if(this.envName=="heineken"){
      this.menuClassName = "primary darken-1";
    }  
    
    $.getScript('./assets/js/app-sidebar.js');
     this.menuItems = ROUTES.filter(menuItem => menuItem);
     
  }

}
