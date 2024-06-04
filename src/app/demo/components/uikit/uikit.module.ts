import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIkitRoutingModule } from './uikit-routing.module';
import { SratesComponent } from './srates/srates.component';

@NgModule({
    imports: [CommonModule, UIkitRoutingModule],
})
export class UIkitModule {}
