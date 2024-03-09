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
    labels: ['Contribution&Clarity', 'Community Impact', 'Learning Tool', 'Significance&Impact' ],
    datasets: [
      { data: [ 80, 56, 55, 40 ], label: 'R1' },
      { data: [ 40, 29, 86, 90 ], label: 'R2' },
      { data: [ 50,  56, 33, 22 ], label: 'R3' }
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
