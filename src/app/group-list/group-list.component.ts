import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groupList: string[] = ['Group 1', 'Group 2', 'Group 3', 'Group 4'];

  constructor() { }

  ngOnInit(): void {
  }

}
