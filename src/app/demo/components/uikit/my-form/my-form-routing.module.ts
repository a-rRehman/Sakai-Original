import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyFormComponent } from './my-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: MyFormComponent }]),
    ],
    exports: [RouterModule],
})
export class MyFormRoutingModule {}
