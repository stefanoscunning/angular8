import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
declare var require: any;
const localisation: any = require('../../../../assets/data/localisation.json');

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  baseHref = environment.base.url;
  envName: string;
  local = localisation;
  @Input() mobile: boolean = false;
  @Input() tablet: boolean = false;
  @Input() desktop: boolean = false;
  menuClassName: string;
  dashboardClassName: string;
  dashboardLink: string = "/dashboard";
  jobsClassName: string;
  jobsLink: string = "/jobs";
  timesheetsClassName: string;
  timesheetsLink: string = "/timesheets";
  
  constructor(private location: Location, private router: Router, private route: ActivatedRoute) { 
    this.envName = environment.envName;

  }

  setLocationClass(){
   console.log(this.router);
    switch(this.router.url){
      case  "/dashboard":
      this.dashboardClassName = "active";
      break;
      case  "/jobs":
      this.jobsClassName = "active";
      break;
      case  "/timesheets":
      this.timesheetsClassName = "active";
      break;
    }
  }
  
  ngOnInit() {
   
      this.menuClassName = "red darken-1";
      //this.setLocationClass();

  }

}
