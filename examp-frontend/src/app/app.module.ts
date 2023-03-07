import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './views/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './views/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './views/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './views/admin/add-categories/add-categories.component';
import { ViewQuizesComponent } from './views/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './views/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './views/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './views/admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './views/admin/add-questions/add-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSidebarComponent } from './views/user/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './views/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './views/user/instructions/instructions.component';
import { StartQuizComponent } from './views/user/start-quiz/start-quiz.component';
import { NoRightClickDirective } from './noRightClick.directive';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartQuizComponent,
    NoRightClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot(
      {showForeground:true}
    )
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
