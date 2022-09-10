import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-order',
  templateUrl: './dialog-edit-order.component.html',
  styleUrls: ['./dialog-edit-order.component.scss']
})
export class DialogEditOrderComponent implements OnInit {
  loading = false;
  startDate = new Date();
  orderId = '';
  user : User;
  userId;
  order : Order;
  constructor( private firestore: AngularFirestore,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogEditOrderComponent>) { }

  ngOnInit(): void {
  }

  saveOrder() {
    this.loading = true;
    let dueData = new Date(this.order.dueDate).getTime();
    this.order.dueDate = dueData;
    let index = this.user.orders.map(order => order.id).indexOf(this.orderId);
    this.user.orders[index] = this.order.toJSON();
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(()=> {
        this.loading = false;
        this.dialog.closeAll();
      })

  }

}
