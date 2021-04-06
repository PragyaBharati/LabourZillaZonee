import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { RegisterComponent } from './register/register.component';
import{DetailsComponent} from './details/details.component'
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { AuthGuard } from './app-routing.guard';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { LabourdisplayComponent } from './labourdisplay/labourdisplay.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {path:'register',component:RegisterComponent},
      {path:'details',component:DetailsComponent},
      {path:'admindisplay',component:AdminDisplayComponent},
      {path:'labour',component:LabourdisplayComponent},
     

      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent
      },

      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [
        Role.Admin,
      ]
    },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }
