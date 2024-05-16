import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../Model/books';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
import { Checkout } from '../Model/checkout';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  private baseurl = "http://localhost:8080/api/users";
  private borrowpart = "{bookId}/copies/{serialNumber}"
  private chekout = "checkout"

  constructor(private http:HttpClient) { }

  getuserData(): Observable<Checkout[]>{
    return this.http.get<Checkout[]>(`${this.baseurl}/${this.chekout}`);
    
  }

  postBorrowBooks(): Observable<User>{
    return this.http.get<User>(`${this.baseurl}/${this.borrowpart}`);
    
  }


  
}
