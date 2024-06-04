import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SratesComponent } from './srates.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: SratesComponent }]),
    ],
    exports: [RouterModule],
})
export class SratesRoutingModule {}
