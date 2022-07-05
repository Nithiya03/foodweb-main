import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { ProductComponent } from './admin/product/product.component';
import { AccessdeniedGuard } from './authguard/accessdenied.guard';
import { AuthguardGuard } from './authguard/authguard.guard';
import { AboutComponent } from './pages/about/about.component';
import { FinalPageComponent } from './pages/final-page/final-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:RoleComponent},
  {path:'product',component:ProductComponent},
  {path:'orderdetail',component:OrderDetailComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'update/:id',component:AddproductComponent},
  {path:'menu',component:MenuComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'menu/:id',component:MenupageComponent,canActivate:[AuthguardGuard]},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent,canDeactivate:[AccessdeniedGuard]},
  {path:'order',component:FinalPageComponent,canActivate:[AuthguardGuard]},
  {path:'**',component:RoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
