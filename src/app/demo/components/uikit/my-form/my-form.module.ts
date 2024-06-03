import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form.component';
import { MyFormRoutingModule } from './my-form-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        MyFormRoutingModule,
        DropdownModule,
        CheckboxModule,
        FormBuilder,
        FormGroup,
        Validators,
    ],
    declarations: [MyFormComponent],
})
export class MiscDemoModule {}
