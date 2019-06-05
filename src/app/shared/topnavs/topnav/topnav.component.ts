import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from '../../../../environments/environment';
declare var require: any;
const localisation: any = require('../../../../assets/data/localisation.json');

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class topnavComponent implements OnInit {
  baseHref = environment.base.url;
  envName = environment.envName;
  menuClassName : string;
  local = localisation;
  @Input() mobile: boolean = false; 
  
  @Input() tablet: boolean = false;
  @Input() desktop: boolean = false;
  constructor(private router: Router, private authService: AuthService) { 

  }


  goToPreferences(){
    this.router.navigate(['/preferences']);
  }

  goToFeatures(){
    this.router.navigate(['/features']);
  }

  
  signOut(){
    this.authService.logout();
    window.location.href = this.baseHref;
  }


  ngOnInit() {
    if(this.envName=="heineken"){
      this.menuClassName = "btn-outline-primary darken-1";
    } 
    else{
      this.menuClassName = "btn-outline-red darken-1";
    }

  }

}
