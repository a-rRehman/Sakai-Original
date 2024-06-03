import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIkitRoutingModule } from './uikit-routing.module';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
    imports: [CommonModule, UIkitRoutingModule],
    declarations: [MyFormComponent],
})
export class UIkitModule {}
