import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/Model/books';
import { Checkout } from 'src/app/Model/checkout';
import { User } from 'src/app/Model/user';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { UserservicesService } from 'src/app/Services/userservices.service';

@Component({
  selector: 'app-bookfine',
  templateUrl: './bookfine.component.html',
  styleUrls: ['./bookfine.component.css']
})
export class BookfineComponent  implements OnInit{

  checkout: Checkout[] = [];
  books: Books[] =[];
  constructor(private userServices: UserservicesService,
    private bookservice: BookserviceService
  ) { }
  

  ngOnInit(): void {
      
  }
  getBooksList() {
    this.bookservice.getBookList().subscribe(data => {
      this.books = data;
    })
  }
  getuserData() {
    this.userServices.getuserData().subscribe(data => {
      this.checkout = data;
    })
}

}
