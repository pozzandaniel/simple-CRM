import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  birthDate: Date;
  user = new User();
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('currentUser is: ', this.user);
    this.loading = true;
    this.firestore
     .collection('users')
     .add(this.user.toJSON())
     .then((result:any) => {
      console.log(result);
      this.loading = false;
      this.dialogRef.close();
      
     })
    
  }
}
