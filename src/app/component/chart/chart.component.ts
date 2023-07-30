import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  public barChartLegend = false;
  public barChartPlugins = [];


  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct'],
    datasets: [
      { data: [600, 630, 150, 430, 120, 520, 550, 800, 80, 390], label: 'Series A', backgroundColor: '#AAA3FF' },
      { data: [960, 100, 70, 350, 520, 120, 270, 780, 2, 290], label: 'Series B', backgroundColor: '#000' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
