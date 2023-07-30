import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UsersComponent } from './component/users/users.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import { ChartComponent } from './component/chart/chart.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"users", component:UsersComponent},
  {path:"user-table", component:UserTableComponent},
  {path:"chart", component:ChartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
