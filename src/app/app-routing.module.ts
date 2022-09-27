import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

const redirectToLogin = () => redirectUnauthorizedTo(['']);
const redirectToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'signup',
    component: SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'user',
    component: UserComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'user/:id', 
    component: UserDetailComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'orders', 
    component: OrdersComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
