import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { environment } from '../../environments/environment';
import {NgbModal, NgbDateStruct, NgbTypeahead, NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { first, debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
import {Observable,Subject, concat, of, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import * as $ from "jquery";

interface Job {
  company: string;
  location: string;
  smo: string;
  downloaded: boolean;
  started: boolean;
  completed: boolean;
  synced: boolean;
  date: string;
  time: string;
}


const JOBS: Job[] = [
{
  company: "XYZ Company",
  location: "Milton Keynes",
  smo: "10001 9000",
  downloaded: true,
  started: true,
  completed: true,
  synced: false,
  date: "07/06/2019",
  time: "10:00"
},
{
  company: "WWW Land",
  location: "Milton Keynes",
  smo: "10001 9001",
  downloaded: true,
  started: true,
  completed: false,
  synced: false,
  date: "07/06/2019",
  time: "12:00"
},
{
  company: "P&E",
  location: "Milton Keynes",
  smo: "10001 9002",
  downloaded: true,
  started: false,
  completed: false,
  synced: false,
  date: "07/06/2019",
  time: "14:00"
},
{
  company: "ABC Ltd",
  location: "Milton Keynes",
  smo: "10001 9003",
  downloaded: false,
  started: false,
  completed: false,
  synced: false,
  date: "07/06/2019",
  time: "16:00"
},
{
  company: "ABC Company",
  location: "London",
  smo: "10050 7000",
  downloaded: false,
  started: false,
  completed: false,
  synced: false,
  date: "10/06/2019",
  time: "11:00"
}
  
];

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {
  deviceInfo: DeviceInfo;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  
    userId: number = null;
    subscriptions:Subscription[] = [];
    jobs: Job[] = [];
    todayJobs: Job[] = [];
    showList: boolean = true;
    showJob: boolean = false;
    selectedJob: Job;
    showDropdown: boolean = false;
    

  constructor(private deviceDetector: DeviceDetectorService, 
    private modalService: NgbModal, private router: Router    
    ) { 
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if(currentUser && currentUser.token){
            this.userId = currentUser.id;
            this.initDeviceInfo();
          
        }
      
    }


    action(action: string, job: Job) {
      switch(action) {
        case 'download':
        job.downloaded = true;
        break;
        case 'start':
        job.started = true;
        break;
        case 'continue':
        this.showList = false;
        this.showJob = true;
        this.selectedJob = job;
        break;
        case 'sync':
        job.synced = true;
        break;
      }
    }

    complete(){
      this.selectedJob.completed = true;
      this.showJob = false;
      this.showList = true;
    }

    markCriteria(){
      this.showDropdown = true;
    }
    

    reset() {
      this.todayJobs = Array.from(JOBS).filter(x=>x.date=='07/06/2019');
      this.jobs = Array.from(JOBS).filter(x=>x.date!='07/06/2019');
    }  

    initDeviceInfo(){
      this.deviceInfo = this.deviceDetector.getDeviceInfo();
      this.mobile = this.deviceDetector.isMobile();
      this.tablet = this.deviceDetector.isTablet();
      this.desktop = this.deviceDetector.isDesktop();
    }

ngOnInit() {
   this.reset();
   
}

ngOnDestroy(): void {
  this.subscriptions.forEach(s => s.unsubscribe());
}

}
