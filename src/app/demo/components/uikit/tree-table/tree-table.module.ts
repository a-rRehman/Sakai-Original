import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableComponent } from './tree-table.component';
import { TreeTableRoutingModule } from './tree-table-routing.module';

@NgModule({
    imports: [CommonModule, TreeTableRoutingModule],
    declarations: [TreeTableComponent],
})
export class TreeTableModule {}
