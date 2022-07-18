import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { ProductComponent } from './admin/product/product.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { AdminAuthenticationGuard } from './authguard/admin-authentication.guard';
import { AuthguardGuard } from './authguard/authguard.guard';
import { AboutComponent } from './pages/about/about.component';
import { FinalPageComponent } from './pages/final-page/final-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { OrderComponent } from './pages/order/order.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {path:'',component:RoleComponent},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'userDetail',component:UserDetailComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'orderDetail',component:OrderDetailComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'addproduct',component:AddproductComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'update/:id',component:AddproductComponent,canActivate:[AdminAuthenticationGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthguardGuard]},
  {path:'order',component:OrderComponent,canActivate:[AuthguardGuard]},
  {path:'menu',component:MenuComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'menu/:id',component:MenupageComponent,canActivate:[AuthguardGuard]},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'order',component:FinalPageComponent,canActivate:[AuthguardGuard]},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'**',component:RoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
