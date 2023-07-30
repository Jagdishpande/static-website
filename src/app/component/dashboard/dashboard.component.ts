import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  useroverview=[
    {
      progress:"Overall Progress",
      percentage:"120%",
    },
    {
      progress:"Product anylatics",
      percentage:"10%",
    },
    {
      progress:"User Analytics",
      percentage:"10%",
    }
  ]
  ngOnInit(): void {
  }

}
