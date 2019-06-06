import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbCollapseModule, NgbPaginationModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { JobsComponent } from './jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import {NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        JobsRoutingModule,   
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgbModule,
        NgbTypeaheadModule,
        NgbCollapseModule,
        NgbPaginationModule,
        NgbTabsetModule,
        NgbTooltipModule
    ],
    declarations: [
        JobsComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers:[
        {
            provide: NgSelectConfig,
            useValue: {
                placeholder: 'Type to search',
                notFoundText: 'Phrase not found',
                addTagText: 'Add phrase',
                typeToSearchText: 'Type to search',
                loadingText: 'Loading...',
                clearAllText: 'Clear all'
            }
        }
    ]
})
export class JobsModule { }
