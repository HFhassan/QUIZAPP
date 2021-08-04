import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    QuizpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   {path: 'home', component: HomepageComponent},
    //   {path: 'quiz', component: QuizpageComponent},
    // ]),
    AppRoutingModule
    //RouterModule.forRoot(AppRoutingModule)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
