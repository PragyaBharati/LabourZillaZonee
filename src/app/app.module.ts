import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UserRoleDirective } from './directives/user-role.directive';
import { UserDirective } from './directives/user.directive';
import { AuthService } from './services/auth.service';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { NavComponent } from './nav/nav.component';
import { DisplayComponent } from './display/display.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { AdminnComponent } from './adminn/adminn.component';
import { LabourComponent } from './labour/labour.component';
import { LabourdisplayComponent } from './labourdisplay/labourdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    LoginComponent,
    UserDirective,
    UserRoleDirective,
    AdminDisplayComponent,
    NavComponent,
    DisplayComponent,
    DetailsComponent,
    RegisterComponent,
    AdminnComponent,
    LabourComponent,
    LabourdisplayComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  exports: [
    UserDirective,
    UserRoleDirective
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
