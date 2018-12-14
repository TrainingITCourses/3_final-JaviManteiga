import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchStatusListContainerComponent } from './launch-status-list-container/launch-status-list-container.component';
import { LaunchsListByStatusContainerComponent } from './launchs-list-by-status-container/launchs-list-by-status-container.component';

const routes: Routes = [
  {
    path: '', component: LaunchStatusListContainerComponent,
  },
  {
    path: ':id/launches',
    component: LaunchsListByStatusContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
