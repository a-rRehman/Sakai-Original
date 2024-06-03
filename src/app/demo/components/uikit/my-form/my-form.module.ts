import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form.component';
import { MyFormRoutingModule } from './my-form-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        MyFormRoutingModule,
        DropdownModule,
        CheckboxModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [MyFormComponent],
})
export class MyFormModule {}
