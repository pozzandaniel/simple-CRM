import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { DialogEditCommentComponent } from './dialog-edit-comment/dialog-edit-comment.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DialogShowCommentComponent } from './dialog-show-comment/dialog-show-comment.component';
import { OrdersComponent } from './orders/orders.component';
import { DialogAddOrderComponent } from './dialog-add-order/dialog-add-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { DialogDeleteOrderComponent } from './dialog-delete-order/dialog-delete-order.component';
import { DialogAddOrderUserComponent } from './dialog-add-order-user/dialog-add-order-user.component';
import { MatSelectModule } from '@angular/material/select';
import { DialogEditOrderComponent } from './dialog-edit-order/dialog-edit-order.component';
import { LoginComponent } from './login/login.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { SignUpComponent } from './sign-up/sign-up.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ProfileComponent } from './profile/profile.component';









@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    DialogDeleteUserComponent,
    DialogEditCommentComponent,
    DialogShowCommentComponent,
    OrdersComponent,
    DialogAddOrderComponent,
    OrderDetailComponent,
    DialogDeleteOrderComponent,
    DialogAddOrderUserComponent,
    DialogEditOrderComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    TextFieldModule,
    MatSelectModule,
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    provideFirebaseApp( () => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())

  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


