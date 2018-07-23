import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { Observable } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CheckoutBillComponent } from './checkout-bill/checkout-bill.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my/my-orders/my-orders.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { AdminAuthenticationGuardService } from './services/admin-authentication-guard.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { AdminProductFormComponent } from './admin/admin-product-form/admin-product-form.component';
import { FormsModule } from '@angular/forms';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';



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
    AdminOrdersComponent,
    AdminCategoriesComponent,
    LoginComponent,
    MyOrdersComponent,
    LogoutComponent,
    AdminProductFormComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent, canActivate:[AuthenticationGuardService] },      
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent, canActivate:[AuthenticationGuardService] },
      { path: 'order', component: OrderComponent },
      { path: 'checkout-bill', component: CheckoutBillComponent },

      {
      path: 'admin/admin-products/new',
      component: AdminProductFormComponent,
      canActivate:[AuthenticationGuardService, AdminAuthenticationGuardService] 
      },
      {
        path: 'admin/admin-categories/new',
        component: AdminCategoriesComponent,
        canActivate:[AuthenticationGuardService, AdminAuthenticationGuardService] 
      },
      {
      path: 'admin/admin-products/:id',
      component: AdminProductFormComponent,
      canActivate:[AuthenticationGuardService, AdminAuthenticationGuardService] 
      },      
      {
      path: 'admin/admin-products',
      component: AdminProductsComponent,
      canActivate:[AuthenticationGuardService, AdminAuthenticationGuardService] 
      },
      { 
        path: 'admin/admin-orders',
        component: AdminOrdersComponent,
        canActivate:[AuthenticationGuardService, AdminAuthenticationGuardService]
      },
      { 
        path: 'my/my-orders',
        component: MyOrdersComponent,
        canActivate:[AuthenticationGuardService]
      }
    ])
     // imports firebase/app needed for everything
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    AdminAuthenticationGuardService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }