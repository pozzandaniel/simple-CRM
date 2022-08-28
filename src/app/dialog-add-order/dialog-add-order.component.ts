import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss']
})
export class DialogAddOrderComponent implements OnInit {
  user: User;
  userId = '';
  loading = false;
  startDate = new Date();
  order: Order;

 

  constructor(public dialogRef: MatDialogRef<DialogAddOrderComponent>,
  private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.order = new Order()
    
  }

  saveOrder() {
    this.loading = true;
    let dueData = new Date(this.order.dueDate).getTime();
    let today = new Date(this.order.creationDate).getTime();
    this.order.creationDate = today;
    this.order.dueDate = dueData;
    this.user.orders.push(this.order.toJSON())
    console.log('user to JSON: ',this.user.toJSON());
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })


  }

}
