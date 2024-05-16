import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/Model/checkout';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {
  checkout: Checkout[] = [];
  checkObj: Checkout = new Checkout();

  constructor() {

  }

  ngOnInit(): void {

  }



}
