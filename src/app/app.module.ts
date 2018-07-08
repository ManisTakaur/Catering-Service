import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CheckoutBillComponent } from './checkout-bill/checkout-bill.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    OrderComponent,
    CustomerOrdersComponent,
    CheckoutBillComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-root'),
     // imports firebase/app needed for everything
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
