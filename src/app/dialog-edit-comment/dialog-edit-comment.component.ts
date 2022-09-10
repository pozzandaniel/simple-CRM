import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'app-dialog-edit-comment',
  templateUrl: './dialog-edit-comment.component.html',
  styleUrls: ['./dialog-edit-comment.component.scss']
})
export class DialogEditCommentComponent implements OnInit {
  user : User;
  userId = '';
  loading = false;
  autosize: CdkTextareaAutosize;
  constructor(public dialogRef: MatDialogRef <DialogEditCommentComponent>,
  private firestore: AngularFirestore) { }
  
    
  ngOnInit(): void {
   
  }

  saveComment() {
    this.loading = true;
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
