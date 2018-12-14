import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'status',
    loadChildren: './status/status.module#StatusModule'
  },
  {
    path: 'launch',
    loadChildren: './launch/launch.module#LaunchModule'
  },
  // {
  //   path: 'crisis-center',
  //   loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule'
  // },
  { path: '',   redirectTo: 'status', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
