import { NgModule  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { topnavComponent } from './topnavs/topnav/topnav.component';
import { FooterComponent } from './footers/footer/footer.component';

@NgModule({
    exports: [
        CommonModule,
        topnavComponent,
        FooterComponent,
        NgbModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule
       
        
    ],
    declarations: [
        topnavComponent,
        FooterComponent
        
    ]
})
export class SharedModule { }
