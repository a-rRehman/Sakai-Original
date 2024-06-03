import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreeTableComponent } from './tree-table.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: TreeTableComponent }]),
    ],
    exports: [RouterModule],
})
export class TreeTableRoutingModule {}
