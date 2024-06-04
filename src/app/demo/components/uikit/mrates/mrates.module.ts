import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MratesComponent } from './mrates.component';
import { MratesRoutingModule } from './mrates-routing.module';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    imports: [
        CommonModule,
        MratesRoutingModule,
        TableModule,
        ToastModule,
        CommonModule,
        TagModule,
        DropdownModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
    ],
    declarations: [MratesComponent],
})
export class MratesModule {}
