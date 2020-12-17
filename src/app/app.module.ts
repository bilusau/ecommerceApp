import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBS8jEB8jFaMyN8ohSMq8RJrnEkWbYOR0k",
      authDomain: "ecommerceapp-8c4c1.firebaseapp.com",
      databaseURL: "https://ecommerceapp-8c4c1.firebaseio.com",
      projectId: "ecommerceapp-8c4c1",
      storageBucket: "ecommerceapp-8c4c1.appspot.com",
      messagingSenderId: "345360230232",
      appId: "1:345360230232:web:3394a372b34f84582c272d",
      measurementId: "G-7FHWD7P4YX"
    }),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
