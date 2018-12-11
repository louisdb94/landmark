import { Injectable } from '@angular/core';
import { User } from '../../../server/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private header = new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'UTF-8'});

  currentUser = { id: 0, username: '', password: '' };

  users: User[] = [
    {
      username: "John",
      password: "John",
      id: 1,
    },
    {
      username: "Doe",
      password: "Doe",
      id: 2,
    }];

  constructor( private http: HttpClient) { }

  getUsers() {
    return this.users;
  }

  getAllUsers(): Observable<any> {
    return this.http.get('/api/users-getall', {headers: this.header});
  }

}
