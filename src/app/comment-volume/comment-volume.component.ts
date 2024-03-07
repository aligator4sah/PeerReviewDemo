import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-comment-volume',
  templateUrl: './comment-volume.component.html',
  styleUrls: ['./comment-volume.component.scss']
})
export class CommentVolumeComponent implements OnInit {

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
