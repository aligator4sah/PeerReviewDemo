import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  reply: string;
  name: string;
}

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  reply: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReplyDialog, {
      width: '250px',
      data: {name: this.name, animal: this.reply},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reply = result;
    });
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'reply-dialog',
  templateUrl: 'reply-dialog.html',
})
export class ReplyDialog {
  constructor(
    public dialogRef: MatDialogRef<ReplyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
