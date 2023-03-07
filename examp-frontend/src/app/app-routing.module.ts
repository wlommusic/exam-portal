import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './views/user/instructions/instructions.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AddCategoriesComponent } from './views/admin/add-categories/add-categories.component';
import { AddQuestionsComponent } from './views/admin/add-questions/add-questions.component';
import { AddQuizComponent } from './views/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './views/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './views/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './views/admin/view-questions/view-questions.component';
import { ViewQuizesComponent } from './views/admin/view-quizes/view-quizes.component';
import { WelcomeComponent } from './views/admin/welcome/welcome.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoadQuizComponent } from './views/user/load-quiz/load-quiz.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';
import { StartQuizComponent } from './views/user/start-quiz/start-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'category',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoriesComponent,
      },
      {
        path: 'quiz',
        component: ViewQuizesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'quiz/:qId',
        component: UpdateQuizComponent,
      },
      {
        path: 'view-questions/:id/:title',
        component: ViewQuestionsComponent,
      },
      { path: 'add-question/:id/:title', component: AddQuestionsComponent },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      { path: ':catId', component: LoadQuizComponent },
      { path: 'instructions/:qId', component: InstructionsComponent },
    ],
  },
  {
    canActivate: [NormalGuard],
    path: 'start-quiz/:qId',
    component: StartQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
