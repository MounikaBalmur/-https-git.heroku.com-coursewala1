import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorsComponent } from './authors/authors.component';
import { WhythisComponent } from './whythis/whythis.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UserviewComponent } from './userview/userview.component';
import { CartComponent } from './cart/cart.component';
import { PurchasedhistoryComponent } from './purchasedhistory/purchasedhistory.component';
import { CourseComponent } from './course/course.component';
import { CustomersComponent } from './customers/customers.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SearchPipe } from './search.pipe';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthorsComponent,
    WhythisComponent,
    ProfileComponent,
    AdminviewComponent,
    UserviewComponent,
    CartComponent,
    PurchasedhistoryComponent,
    CourseComponent,
    CustomersComponent,
    PurchasesComponent,
    SearchPipe,
    CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
