import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { LaunchStatusListContainerComponent } from './launch-status-list-container/launch-status-list-container.component';
import { LaunchStatusListComponent } from './launch-status-list-container/launch-status-list/launch-status-list.component';
import { LaunchsListByStatusContainerComponent } from './launchs-list-by-status-container/launchs-list-by-status-container.component';
import { LaunchResultsComponent } from './launchs-list-by-status-container/launch-results/launch-results.component';
import { LaunchResultsCountComponent } from './launchs-list-by-status-container/launch-results-count/launch-results-count.component';
// tslint:disable-next-line:import-spacing
import { OrderOptionsLaunchResultsComponent }
    from './launchs-list-by-status-container/order-options-launch-results/order-options-launch-results.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ],
  declarations: [LaunchStatusListComponent, LaunchStatusListContainerComponent,
     LaunchsListByStatusContainerComponent, LaunchResultsComponent, LaunchResultsCountComponent, OrderOptionsLaunchResultsComponent]
})
export class StatusModule { }
