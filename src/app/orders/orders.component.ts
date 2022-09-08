import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';
import { User } from 'src/models/user.class';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  allUsers;

  constructor(private firebase: AngularFirestore,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.firebase
      .collection('users')
      .valueChanges({idField: 'customIdName'})
      .subscribe((users:any) => {
        this.allUsers = users;
      })
  }

  toDate(millisec){
    let dueDate = new Date(millisec);
    var dd = String(dueDate.getDate()).padStart(2, '0');
    var mm = String(dueDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dueDate.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  }

  openDialogOrder(userId, user, order) {
    let dialog = this.dialog.open(OrderDetailComponent);
    dialog.componentInstance.user = new User(user);
    dialog.componentInstance.userId = userId;
    dialog.componentInstance.order = new Order(order);

  }

}
