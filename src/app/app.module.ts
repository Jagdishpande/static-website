import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { UsersComponent } from './component/users/users.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import { ChartComponent } from './component/chart/chart.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NavbarClickDirective } from './shared/directives/navbar-click.directive';
import { DroptoggleDirective } from './shared/directives/droptoggle.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    UsersComponent,
    UserTableComponent,
    ChartComponent,
    DropdownDirective,
    NavbarClickDirective,
    DroptoggleDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
