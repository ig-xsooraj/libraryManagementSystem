import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Books } from 'src/app/Model/books';
import { BookserviceService } from 'src/app/Services/bookservice.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  searchtext: any;

  booksObj: Books = new Books();
  books: Books[] = [];
  constructor(private bookservice: BookserviceService, private router: Router) { }
  ngOnInit(): void {
    this.getBooksList();
    this.books = [
      {
        "bookid": 1,
        "booktitle": "Pyhton",
        "author": 'Mr. Python'
      }
    ]

  }
  getBooksList() {
    this.bookservice.getBookList().subscribe(data => {
      this.books = data;
      this.gotoBookList();
    })
  }
  save() {
    this.bookservice.addForIssue(this.booksObj).subscribe(data => {
      console.log(data);
      this.getBooksList();
    });
  }
  add() {
    this.save();
  }



  gotoBookList() {
    this.router.navigate(['booklist']);
  }
  gotocheckout() {
    this.router.navigate(['checkout']);
  }

  Search() {
    throw new Error('Method not implemented.');
  }
}
