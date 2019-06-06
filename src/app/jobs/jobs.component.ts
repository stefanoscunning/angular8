import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { environment } from '../../environments/environment';
import {NgbModal, NgbDateStruct, NgbTypeahead, NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { first, debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
import {Observable,Subject, concat, of, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {
  
    userId: number = null;
    subscriptions:Subscription[] = [];
    

  constructor(private deviceDetector: DeviceDetectorService, 
    private modalService: NgbModal, private router: Router    
    ) { 
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if(currentUser && currentUser.token){
            this.userId = currentUser.id;
          
        }
      
    }

  


ngOnInit() {
   
   
}

ngOnDestroy(): void {
  this.subscriptions.forEach(s => s.unsubscribe());
}

}
