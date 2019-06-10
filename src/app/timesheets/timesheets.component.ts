import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { environment } from '../../environments/environment';
import {NgbModal, NgbDateStruct, NgbTypeahead, NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { first, debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
import {Observable,Subject, concat, of, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import * as $ from "jquery";
import {Timesheet} from '../models';

interface Job {
  company: string;
  location: string;
  smo: string;
  downloaded: boolean;
  started: boolean;
  completed: boolean;
  synced: boolean;
  submitted: boolean;
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
  submitted: false,
  date: "07/06/2019",
  time: "10:00"
},
{
  company: "WWW Land",
  location: "Milton Keynes",
  smo: "10001 9001",
  downloaded: true,
  started: true,
  completed: true,
  synced: true,
  submitted: false,
  date: "07/06/2019",
  time: "12:00"
},
{
  company: "P&E",
  location: "Milton Keynes",
  smo: "10001 9002",
  downloaded: true,
  started: true,
  completed: true,
  synced: true,
  submitted: false,
  date: "07/06/2019",
  time: "14:00"
},
{
  company: "ABC Ltd",
  location: "Milton Keynes",
  smo: "10001 9003",
  downloaded: true,
  started: true,
  completed: true,
  synced: true,
  submitted: false,
  date: "07/06/2019",
  time: "16:00"
}
  
];

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})
export class TimesheetsComponent implements OnInit, OnDestroy {
  
    userId: number = null;
    subscriptions:Subscription[] = [];
    jobs: Job[] = [];
    job: Job = null;
    timesheets: Timesheet[] = [];
    timesheet: Timesheet = null;
    editingTimesheet: boolean = false;


constructor(private deviceDetector: DeviceDetectorService, 
    private modalService: NgbModal, private router: Router    
    ) { 
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if(currentUser && currentUser.token){
            this.userId = currentUser.id;
          
        }
      
    }

selectJob(j: Job) {
  this.job = j;
  this.timesheet = this.timesheets.filter(x=>x.smo==j.smo)[0];
  this.timesheet.auditor = "John Doe";

} 

submitTimesheet(j: Job){
  j.submitted = true;
}

backToJobs(){
  this.job = null;
  this.timesheets.filter(x=>x.smo==this.timesheet.smo)[0] = this.timesheet;
  this.timesheet = null;
}

editTimesheet(){
  this.editingTimesheet = true;
}

cancelEdit(){
  this.timesheet.hour = 5;
  this.editingTimesheet = false;
}

saveEdit(){
  this.editingTimesheet = false;
}

initTimesheet(){
  this.timesheets = [
    {smo: "10001 9000", hour: 5},
    {smo: "10001 9001", hour: 5},
    {smo: "10001 9002", hour: 5},
    {smo: "10001 9003", hour: 5}
  ];
}

ngOnInit() {
   this.jobs = Array.from(JOBS);
   this.initTimesheet();
}

ngOnDestroy(): void {
  this.subscriptions.forEach(s => s.unsubscribe());
}

}
