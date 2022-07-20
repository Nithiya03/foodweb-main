import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { ProductComponent } from './admin/product/product.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { AdminAuthenticationGuard } from './authguard/admin-authentication.guard';
import { AuthguardGuard } from './authguard/authguard.guard';
import { AboutComponent } from './userPages/about/about.component';
import { FinalPageComponent } from './userPages/final-page/final-page.component';
import { ForgotPasswordComponent } from './userPages/forgot-password/forgot-password.component';
import { HomeComponent } from './userPages/home/home.component';
import { LoginComponent } from './userPages/login/login.component';
import { MenuComponent } from './userPages/menu/menu.component';
import { MenupageComponent } from './userPages/menupage/menupage.component';
import { ProfileComponent } from './userPages/profile/profile.component';
import { RegisterComponent } from './userPages/register/register.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {path:'',component:RoleComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'userDetail',component:UserDetailComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'orderDetail',component:OrderDetailComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'addproduct',component:AddproductComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'update/:id',component:AddproductComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'register',component:RegisterComponent},
  {path:'edit/:id',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthguardGuard]},
  {path:'menu',component:MenuComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'menu/:id',component:MenupageComponent,canActivate:[AuthguardGuard]},
  {path:'order',component:FinalPageComponent,canActivate:[AuthguardGuard]},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'**',component:RoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
