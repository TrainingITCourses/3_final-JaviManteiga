import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchDetailContainerComponent } from './launch-detail-container/launch-detail-container.component';
import { LaunchDataComponent } from './launch-detail-container/launch-data/launch-data.component';

@NgModule({
  imports: [
    CommonModule,
    LaunchRoutingModule
  ],
  declarations: [LaunchDetailContainerComponent, LaunchDataComponent]
})
export class LaunchModule { }
