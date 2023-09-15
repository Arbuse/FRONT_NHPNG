import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRegister} from "./model/user-register";
import {UserEdit} from "./model/user-edit";
import {LearningModeApi} from "../../quiz/models/learning-mode-api";

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

  public updateUser(userEdit: UserEdit, userId: number): Observable<any> {
    const url = `${this.baseUrl}/updateUser/${userId}`;
    return this.http.post<any>(url, userEdit);
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

  public getRankning(): Observable<any[]> {
    const url = `${this.baseUrl}/ranking`;
    return this.http.get<any>(url);
  }

  public addPoints(userId: number, points: number): Observable<void> {
    const url = `${this.baseUrl}/addPoints/${userId}/${points}`;
    return this.http.post<void>(url,null);
  }

  public addGames(userId: number): Observable<void> {
    const url = `${this.baseUrl}/addGames/${userId}`;
    return this.http.post<void>(url, null);
  }

  public addPointsInLearningMode(userId: number, learningModeApi: LearningModeApi): Observable<any> {
    const url = `${this.baseUrl}/addPointsToLearningMode/${userId}`;
    return this.http.post<any>(url, learningModeApi);
  }

}
