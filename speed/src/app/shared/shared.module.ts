import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusBarComponent } from './status-bar/status-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatusBarComponent
  ],
  exports: [
    StatusBarComponent
  ]
})
export class SharedModule {}
