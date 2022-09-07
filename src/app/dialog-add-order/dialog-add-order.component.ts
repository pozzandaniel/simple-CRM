import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  private firestore: AngularFirestore,
  public router: Router) { }

  ngOnInit(): void {
    this.order = new Order() 
  }

  saveOrder() {
    this.loading = true;
    let dueData = new Date(this.order.dueDate).getTime();
    let today = new Date().getTime();
    this.order.creationDate = today;
    this.order.dueDate = dueData;
    this.order.id = this.generateID(20);
    this.user.orders.push(this.order.toJSON())
    console.log('this.order.creationdate is: ', today);
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
        this.router.navigate(['orders']);

      })
  }

  generateID(length) {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
     }
     return result;
  }
  

 

}
