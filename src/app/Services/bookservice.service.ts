import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../Model/books';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private baseurl = 'http://localhost:8080/api/books/get';

  constructor(private http: HttpClient) { }

  getBookList(): Observable<Books[]> {
    return this.http.get<Books[]>(`${this.baseurl}`)
  }

  addForIssue(books: Books): Observable<Books> {
    return this.http.post<Books>(`${this.baseurl}`, books)
  }

  // borrow books
  


}
