import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AccountService } from '../services/account.service';
import { AuthenticationService } from '../services/authentication.service';

export function passwordsMatchValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return {
        passwordDontMatch: true,
      }
    } else {
      return null;
    }

   
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {validators: passwordsMatchValidator()})

  constructor(
    private authService: AuthenticationService,
    private toast: HotToastService,
    private router: Router,
    private accountService: AccountService
  ) { }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnInit(): void {
  }

  submit() {
    const {name, email, password} = this.signUpForm.value;
    if(!this.signUpForm.valid || !name || !password || !email) return;
    this.authService.signUp(email, password).pipe(
      switchMap(({user: {uid}}) => this.accountService.addUser(
        {uid, email, displayName: name}
      )),
      this.toast.observe({
        success: 'Congrats! You are signed up!',
        loading: 'Signing in',
        error: ({message}) => `${message}`

      })
    ).subscribe(() => {
      this.router.navigate(['']);
    })

  }

}
