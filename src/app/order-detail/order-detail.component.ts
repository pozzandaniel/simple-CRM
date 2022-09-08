import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogDeleteOrderComponent } from '../dialog-delete-order/dialog-delete-order.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  user;
  userId;
  order;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('order is: ', this.order)

  }

  toDate(millisec){
    let dueDate = new Date(millisec);
    var dd = String(dueDate.getDate()).padStart(2, '0');
    var mm = String(dueDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dueDate.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  }

  openDeleteOrderDialog() {
    let dialog = this.dialog.open(DialogDeleteOrderComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
    dialog.componentInstance.order = this.order;
  }

}
