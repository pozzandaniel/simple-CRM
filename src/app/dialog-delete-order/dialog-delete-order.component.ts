import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-order',
  templateUrl: './dialog-delete-order.component.html',
  styleUrls: ['./dialog-delete-order.component.scss']
})
export class DialogDeleteOrderComponent implements OnInit {
  user:any;
  userId;

  constructor(public dialogRef: MatDialogRef<DialogDeleteOrderComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteOrder() {


  }

}
