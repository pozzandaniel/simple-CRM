import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { User } from 'firebase/auth';
import { ProfileUser } from 'src/models/account-profile';
import { AccountService } from '../services/account.service';
import { AuthenticationService } from '../services/authentication.service';
import { ImageUploadService } from '../services/image-upload.service';
import { switchMap, tap } from 'rxjs';



@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$ = this.accountService.currentUserProfile$;

  profileForm = new FormGroup( {
    uid: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(
    private authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.currentUserProfile$.pipe(untilDestroyed(this))
    .subscribe((user) => {
      this.profileForm.patchValue({...user})
    })
  }

  uploadImage(event:any, {uid}: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0],
    `images/profile/${uid}`).pipe(this.toast.observe({
      loading: 'Uploading profile image...',
      success: 'Image uploaded successfully',
      error: 'There was an error in uploading the image'
    }),
    switchMap((photoURL) => this.accountService.updateUser({uid, photoURL}))
    ).subscribe();
  }

  saveProfile() {
    const {uid, ...data} = this.profileForm.value;
    if(!uid){
      return;
    }

    this.accountService.updateUser({uid, ...data}).pipe(this.toast.observe({
      loading: 'Saving profile data...',
      success: 'Profile updated successfully',
      error: 'There was an error in updating the profile'
    })).subscribe();
  }

}


