import { NgModule  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footers/footer/footer.component';
import { topnavComponent } from './topnavs/topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    exports: [
        CommonModule,
        topnavComponent,
        FooterComponent,
        SidebarComponent,
       
        NgbModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule
       
        
    ],
    declarations: [
        FooterComponent,
        topnavComponent,
        SidebarComponent,
       
        
    ]
})
export class SharedModule { }
