import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-review-main',
  templateUrl: './review-main.component.html',
  styleUrls: ['./review-main.component.css']
})
export class ReviewMainComponent implements OnInit {

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

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px'
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}