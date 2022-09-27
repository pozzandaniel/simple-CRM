import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from 'src/models/account-profile';
import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
 
  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if(!user?.uid) {
          return of (null);
        }

        const ref = doc(this.firestore, 'accounts', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    )
  }

  constructor(
    private firestore: Firestore,
    private authService: AuthenticationService
  ) { }

  addUser(user: ProfileUser): Observable<any> {
    const ref = doc(this.firestore, 'accounts', user?.uid)
    return from(setDoc(ref, {user}));
  }

  updateUser(user: ProfileUser): Observable<any> {
    const ref = doc(this.firestore, 'accounts', user?.uid)
    return from(updateDoc(ref, {...user}))
  }
}


