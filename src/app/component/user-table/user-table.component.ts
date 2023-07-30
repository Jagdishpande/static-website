import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { userInfo } from '../../model/table';
import { userTable } from '../../const/tabledata';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  tableArray!: Array<userInfo>

  displayedColumns: string[] = ['position', 'name', 'userid', 'role'];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  serachInput!: string;

  constructor(
  ) { }


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<userInfo>(userTable);
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
 

  }

}


