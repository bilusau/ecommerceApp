import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GaurdService } from './gaurd.service';


const routes: Routes = [
  {path :'', component:HomeComponent},
  {path :'account', component:AccountComponent},
  {path :'pricing', component:PricingComponent},
  {path :'orders', component:OrdersComponent},
  {path :'cart', component:CartComponent, canActivate:[GaurdService]},
  {path :'login', component:LoginComponent},
  {path :'logout', component:LogoutComponent},
  {path :'products', component:ProductsComponent},
  {path :'signup', component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
