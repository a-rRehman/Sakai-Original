import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { SratesComponent } from './srates.component';
import { SratesRoutingModule } from './srates-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        ToastModule,
        CommonModule,
        TagModule,
        DropdownModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
        SratesRoutingModule,
    ],
    declarations: [SratesComponent],
})
export class SratesModule {}
