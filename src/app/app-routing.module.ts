import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { WhythisComponent } from './whythis/whythis.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserviewComponent } from './userview/userview.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { PurchasedhistoryComponent } from './purchasedhistory/purchasedhistory.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { CourseComponent } from './course/course.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CustomersComponent } from './customers/customers.component';
import { CComponent } from './c/c.component';


const routes: Routes = [  {path:'homepage',component:HomepageComponent,
                          children:[{path:'home',component:HomeComponent},
                                    {path:'authors',component:AuthorsComponent},
                                    {path:'whythis',component:WhythisComponent},
                                    {path:'login',component:LoginComponent},
                                    {path:'register',component:RegisterComponent},
                                    {path:'login/register',component:RegisterComponent},
                                    {path:'c',component:CComponent},
                                    {path:'home/c',component:CComponent},
                                    {path:'c/login',component:LoginComponent},
                                    {path:'c/login/register',component:RegisterComponent}]},
                          
                         
                          {path:'userview',component:UserviewComponent,
                          children:[{path:'profile',component:ProfileComponent},
                                    {path:'home',component:HomeComponent},
                                    {path:'cart',component:CartComponent},
                                    {path:'purchasedhistory',component:PurchasedhistoryComponent},
                                    {path:'whythis',component:WhythisComponent},
                                    {path:'c',component:CComponent},
                                    {path:'authors',component:AuthorsComponent}]},
                          {path:'adminview',component:AdminviewComponent,
                          children:[{path:'course',component:CourseComponent},
                                    {path:'purchases',component:PurchasesComponent},
                                    {path:'customers',component:CustomersComponent}]},
                                    {path:'',redirectTo:'homepage/home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
