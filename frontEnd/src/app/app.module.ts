import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './user/sharepage/navbar/navbar.component';
import { FooterComponent } from './user/sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FinalPageComponent } from './pages/final-page/final-page.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RoleComponent } from './role/role.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ProductComponent } from './admin/product/product.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    MenupageComponent,
    LoginComponent,
    RegisterComponent,
    FinalPageComponent,
    AdminLoginComponent,
    RoleComponent,
    OrderDetailComponent,
    AddproductComponent,
    ProductComponent,
    ForgotPasswordComponent,
    UserDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
