import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbCollapseModule, NgbPaginationModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TimesheetsComponent } from './timesheets.component';
import { TimesheetsRoutingModule } from './timesheets-routing.module';
import {NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        TimesheetsRoutingModule,
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
        TimesheetsComponent
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
export class TimesheetsModule { }
