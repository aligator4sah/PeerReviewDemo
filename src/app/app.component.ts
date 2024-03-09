import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peer-review-demo';
  constructor(public dialog: MatDialog) {
    
  }
  panelOpenState = false;
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


}



