import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from "../model/question";
import {LearningModeApi} from "../../quiz/models/learning-mode-api";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:8081/question';

  constructor(private http: HttpClient) {
  }

  public getQuestions(): Observable<Question[]> {
    const url = `${this.baseUrl}/getAll`;

    return this.http.get<Question[]>(url);
  }

  public getQuestionsByTyp(typ: string): Observable<Question[]> {
    const url = `${this.baseUrl}/getAllbyTyp/${typ}`;

    return this.http.get<Question[]>(url);
  }

  public getQuestionsRandomize(count: number): Observable<Question[]> {
    const url = `${this.baseUrl}/getAllRandomize`;
    const params = new HttpParams().set('count', count.toString());

    return this.http.get<Question[]>(url, {params});
  }

  public getQuestionsByTypRandomize(typ: string, count: number): Observable<Question[]> {
    const url = `${this.baseUrl}/getAllbyTypRandomizeRandomize`;
    const params = new HttpParams()
      .set('typ', typ)
      .set('count', count.toString());

    return this.http.get<Question[]>(url, {params});
  }

  public getQuestionsInLearningMode(userId: number): Observable<any[]> {
    const url = `${this.baseUrl}/getQuestionFromLearnigMode`;
    const params = {userId: userId.toString()};
    return this.http.get<any[]>(url, {params});
  }

}
