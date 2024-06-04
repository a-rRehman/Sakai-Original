import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MratesComponent } from './mrates.component';
@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: MratesComponent }]),
    ],
    exports: [RouterModule],
})
export class MratesRoutingModule {}
