import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  private baseUrl = 'http://localhost:8081/achievements';

  constructor(private http: HttpClient) {}

  getUserAchievements(userId: number): Observable<any> {
    const url = `${this.baseUrl}/getUserAchievements`;
    const params = { userId: userId.toString() };
    return this.http.get<any>(url, { params });
  }


}
