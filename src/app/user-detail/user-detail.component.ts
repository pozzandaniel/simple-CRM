import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditCommentComponent } from '../dialog-edit-comment/dialog-edit-comment.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogShowCommentComponent } from '../dialog-show-comment/dialog-show-comment.component';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  public user: User = new User();

  constructor(private route: ActivatedRoute,
     private firestore: AngularFirestore,
      public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
        this.userId = paramMap.get('id');
        this.getUser();        
    })
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user:any) => {
        this.user = new User(user);
        console.log('retrieved user: ', this.user)

      })
  }

  editMenu() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetail() {
    let dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editComment() {
    let dialog = this.dialog.open(DialogEditCommentComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  showComment() {
    let dialog = this.dialog.open(DialogShowCommentComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  addOrder() {
    let dialog = this.dialog.open(DialogAddOrderComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  openDialogDeletUser() {
    let dialog = this.dialog.open(DialogDeleteUserComponent);
    dialog.componentInstance.userId = this.userId;
  }
}
