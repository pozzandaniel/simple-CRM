import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {
  userId = '';

  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>,
    private firestore: AngularFirestore,
    public router: Router) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteUser() {
    console.log('userId delete dialog is: ', this.userId);
    this.firestore
      .collection('users')
      .doc(this.userId)
      .delete()
      .then(()=>{
        this.dialogRef.close();
        this.router.navigate(['user']);
      })

  }

}
