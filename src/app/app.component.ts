import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.accountService.currentUserProfile$;

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private accountService: AccountService
  ){}

  logout() {
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    })
  }
}
