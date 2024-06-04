import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableComponent } from './tree-table.component';
import { TreeTableRoutingModule } from './tree-table-routing.module';
import { TreeTableModule } from 'primeng/treetable';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
@NgModule({
    imports: [
        CommonModule,
        TreeTableRoutingModule,
        TreeTableModule,
        InputTextModule,
        MultiSelectModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [TreeTableComponent],
})
export class TreeTablemodule {}
