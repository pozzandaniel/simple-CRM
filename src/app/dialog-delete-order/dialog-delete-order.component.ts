import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-dialog-delete-order',
  templateUrl: './dialog-delete-order.component.html',
  styleUrls: ['./dialog-delete-order.component.scss']
})
export class DialogDeleteOrderComponent implements OnInit {
  user:any;
  userId;
  order;

  constructor(public dialog: MatDialog,
     private firestore: AngularFirestore,
     public router: Router) { }
     
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  deleteOrder() {
    let index = this.findIndexOrder();
    this.user.orders.splice(index, 1);
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(()=>{
        this.dialog.closeAll();

      })

  }

  findIndexOrder() {
    return this.user.orders.indexOf(this.order);
  }

}
