import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


const mat=[
  MatTableModule,
  MatIconModule,
  MatPaginatorModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mat
  ],
  exports: [
    ...mat
  ]
})
export class MaterialModule { }
