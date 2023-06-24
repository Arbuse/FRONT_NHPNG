import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRegister} from "./model/user-register";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) { }

  public createUser(userRegister: UserRegister): Observable<any> {
    const url = `${this.baseUrl}/createUser`;
    return this.http.post<any>(url, userRegister);
  }

  public getAuthorization(password: string, email: string): Observable<number | null> {
    const url = `${this.baseUrl}/authorization`;
    const params = { password, email };
    return this.http.get<number | null>(url, { params });
  }

  public getUserById(userId: number): Observable<any> {
    const url = `${this.baseUrl}/userById`;
    const params = { userId: userId.toString() };
    return this.http.get<any>(url, { params });
  }

}
