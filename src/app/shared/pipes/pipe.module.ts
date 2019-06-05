import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { LocationPipe, SafeHtmlPipe } from './index';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        
    ],
    declarations: [
        LocationPipe,
        SafeHtmlPipe
        
    ],
    exports: [
        LocationPipe,
        SafeHtmlPipe
    ]
})
export class PipeModule { }
