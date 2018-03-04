import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header.component';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './addstudent.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {'path': '', 'redirectTo': '/home', 'pathMatch': 'full'},
  {'path': 'home', 'component': HomeComponent},
  {'path': 'home/add', 'component': AddStudentComponent}
]

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
