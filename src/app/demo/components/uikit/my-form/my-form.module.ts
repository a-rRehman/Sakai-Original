import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form.component';
import { MyFormRoutingModule } from './my-form-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
    imports: [
        CommonModule,
        MyFormRoutingModule,
        DropdownModule,
        CheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        InputTextareaModule,
    ],
    declarations: [MyFormComponent],
})
export class MyFormModule {}
