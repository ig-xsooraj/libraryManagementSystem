import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  users: User[] = [];

  username: string = '';
  password: string = '';

  invalideLogin = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  checkLogin() {
    alert("going to booklist")
    this.goToBookList();
  }

  goToBookList() {
    this.router.navigate(['booklist']);
  }
}
