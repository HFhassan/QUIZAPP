import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizpageComponent } from '../quizpage/quizpage.component';
import { AppComponent } from '../app.component';
import { Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'quiz', component: QuizpageComponent },
  { path: 'home', component: HomepageComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
