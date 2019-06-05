import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  baseHref = environment.base.url;
  
  envName: string;
  @Input() mobile: boolean = false;
  @Input() tablet: boolean = false;
  @Input() desktop: boolean = false;
  menuClassName: string;
  homeLocationClass: string;
  eRoomLocationClass: string;
  timelineLocationClass: string;
  profileLocationClass: string;
  
  constructor(private location: Location) { 
    this.envName = environment.envName;

  }

  setLocationClass(){
    switch(location.href){
      case  this.baseHref + "hr-dashboard":
      this.homeLocationClass = "active";
      break;
      case  this.baseHref + "eroom":
      this.eRoomLocationClass = "active";
      break;
      case  this.baseHref + "timeline":
      this.timelineLocationClass = "active";
      break;
      case  this.baseHref + "country-profile":
      this.profileLocationClass = "active";
      break;
      case  this.baseHref + "chat":
      this.profileLocationClass = "active";
      break;
    }
  }
  
  ngOnInit() {
    if(this.envName=="heineken"){
      this.menuClassName = "primary darken-1";
    } 
    else{
      this.menuClassName = "red darken-1";
    }

  }

}
