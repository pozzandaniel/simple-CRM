import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-show-comment',
  templateUrl: './dialog-show-comment.component.html',
  styleUrls: ['./dialog-show-comment.component.scss']
})
export class DialogShowCommentComponent implements OnInit {
  user: User;
  userId = '';
  constructor() { }

  ngOnInit(): void {
  }

}
