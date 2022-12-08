import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'

  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:'full'

  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'

  },
  {
    path:"admin",
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]

  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
