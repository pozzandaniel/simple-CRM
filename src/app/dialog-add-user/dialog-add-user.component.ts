import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit(): void {
  }

}
