import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { environment } from '../../environments/environment';
import {NgbModal, NgbDateStruct, NgbTypeahead, NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { first, debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
import {Observable,Subject, concat, of, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import * as $ from "jquery";

interface Alert {
  type: string;
  message: string;
  location: string;
}

const ALERTS: Alert[] = [
  {
    type: 'info',
    message: 'All your timesheets have been processed.',
    location: '/timesheets',
  }, {
    type: 'warning',
    message: 'You have been assigned a new job.',
    location: '/jobs'
  }, {
    type: 'danger',
    message: "You haven't synced a job to the server yet.",
    location: '/jobs'
  }
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
    userId: number = null;
    subscriptions:Subscription[] = [];
    alerts: Alert[] = [];
    

  constructor(private deviceDetector: DeviceDetectorService, 
    private modalService: NgbModal, private router: Router    
    ) { 
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if(currentUser && currentUser.token){
            this.userId = currentUser.id;
            this.reset();
        }
      
    }

    close(alert: Alert) {
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
  
    reset() {
      this.alerts = Array.from(ALERTS);
    }

    goTo(location: string) {
      this.router.navigate([location])
    }


ngOnInit() {
   
   
}

ngOnDestroy(): void {
  this.subscriptions.forEach(s => s.unsubscribe());
}

}
