import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  deviceInfo: DeviceInfo;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  
  constructor(private deviceDetector: DeviceDetectorService) { 
    this.initDeviceInfo();

  }

  initDeviceInfo(){
    this.deviceInfo = this.deviceDetector.getDeviceInfo();
    this.mobile = this.deviceDetector.isMobile();
    this.tablet = this.deviceDetector.isTablet();
    this.desktop = this.deviceDetector.isDesktop();
  }

  ngOnInit() {

  }

}
