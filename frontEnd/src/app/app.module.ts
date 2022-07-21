import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigationBar/navbar/navbar.component';
import { FooterComponent } from './navigationBar/footer/footer.component';
import { HomeComponent } from './userPages/home/home.component';
import { MenuComponent } from './userPages/menu/menu.component';
import { AboutComponent } from './userPages/about/about.component';
import { MenupageComponent } from './userPages/menupage/menupage.component';
import { LoginComponent } from './userPages/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './userPages/register/register.component';
import { FinalPageComponent } from './userPages/final-page/final-page.component';
import { ReactiveFormsModule} from '@angular/forms'
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RoleComponent } from './role/role.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ProductComponent } from './admin/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { OrderDetailsService } from './services/order-details.service';
import { AuthguardGuard } from './authguard/authguard.guard';
import { ForgotPasswordComponent } from './userPages/forgot-password/forgot-password.component';
import { MatDialogModule} from '@angular/material/dialog';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { ProfileComponent } from './userPages/profile/profile.component';
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
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [OrderDetailsService,AuthguardGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
