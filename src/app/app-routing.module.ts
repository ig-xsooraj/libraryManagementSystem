import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './Components/login-page/login-page.component';
import { BooklistComponent } from './Components/booklist/booklist.component';
import { BorrowBookComponent } from './Components/borrow-book/borrow-book.component';
import { BookfineComponent } from './Components/bookfine/bookfine.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'booklist', component: BooklistComponent },
  { path: 'borrowbook', component: BorrowBookComponent },
  { path: 'bookfine', component: BookfineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
