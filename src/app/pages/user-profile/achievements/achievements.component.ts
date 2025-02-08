import { Component } from '@angular/core';
import {AchievementsService} from "../service/achievements.service";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements: any = null;

  constructor(private achievementsService: AchievementsService) {}

  ngOnInit() {
    this.loadAchievements();
  }

  loadAchievements() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      console.warn('Brak ID użytkownika w localStorage');
      return;
    }

    this.achievementsService.getUserAchievements(userId).subscribe(
      (data) => {
        this.achievements = data;
      },
      (error) => {
        console.error('Błąd pobierania odznak', error);
      }
    );
  }
}
