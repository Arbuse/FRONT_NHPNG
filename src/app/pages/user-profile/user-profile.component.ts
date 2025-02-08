import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {UserProfileService} from "./service/user-profile.service";
import {Router} from "@angular/router";
import {UserService} from "../login/user-service/user.service";
import {User} from "../login/user-service/model/user";
import {MessageService} from "primeng/api";
import {UserEdit} from "../login/user-service/model/user-edit";
import {AchievementsService} from "./service/achievements.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [MessageService]
})
export class UserProfileComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;

  username: string = '';
  description: string = '';
  selectedAvatar: string = '';
  userEditDialogVisible: boolean = false;
  userId!: number;
  achievementsDialogVisible = false;
  achievements: any = null;

  modalTitle!: string;
  search: string = '';
  rankingDialogVisible: boolean = false;
  ranking: any = [];

  male: string = 'assets/avatars/male-avatar-1.jpg'
  female: string = 'assets/avatars/female-avatar-1.jpg'

  constructor(private userProfileService: UserProfileService,
              private userService: UserService,
              private router: Router,
              private messageService: MessageService,
              private achievementsService: AchievementsService) {
  }


  learningQuiz() {
    if (this.userId !== null) {
      this.router.navigate(['/quiz']);
      localStorage.setItem('typ', 'LM')
    } else {
      this.showQuizFailed()
    }
  }

  quiz(typ: string) {
    if (this.userId !== null) {
      this.router.navigate(['/quiz']);
      localStorage.setItem('typ', typ);
    } else {
      this.showQuizFailed()
    }
  }

  private showQuizFailed() {
    this.messageService.clear();
    this.messageService.add({
      key: 'toastFailed',
      severity: 'warn',
      summary: 'Warning',
      detail: 'Quiz has encountered problems reconnecting'
    });
  }

  ngOnInit() {

    this.userId = parseInt(localStorage.getItem('userId') || '0', 10);
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.username = user.username;
        this.description = user.desc;
        this.modalTitle = `Witaj z powrotem ${this.username}`;
        this.selectedAvatar = user.avatar;
      },
      (error: any) => {
      }
    );

    this.userService.getRankning().subscribe(
      (ranking: User[]) => {
        this.ranking = ranking;
      },
      (error: any) => {
        // Obsługa błędu
      }
    );
  }


  showRankingDialog() {
    this.getCurrentUser()
    this.userService.getRankning().subscribe(
      (ranking: User[]) => {
        this.ranking = ranking;
      },
      (error: any) => {
        // Obsługa błędu
      }
    );

    this.rankingDialogVisible = true;
  }

  showUserEditModal() {
    this.getCurrentUser();
    this.userEditDialogVisible = true;
  }

  showAchievementsDialog() {
    this.getCurrentUser();
    this.achievementsService.getUserAchievements(this.userId).subscribe(
      (achievements: any) => {
        this.achievements = achievements;
      },
      (error: any) => {
        console.error("Błąd pobierania odznak", error);
      }
    );

    this.achievementsDialogVisible = true;
  }

  filterTable() {
    this.dt1.filterGlobal(this.search, 'contains');
  }

  close() {
    this.clearDataFromUserProfile();
    this.userEditDialogVisible = false;
  }

  saveChanges() {

    const userEdit: UserEdit = {
      username: this.username,
      desc: this.description,
      avatar: this.selectedAvatar
    };

    this.userService.updateUser(userEdit,this.userId).subscribe(
      (respoonse: any) => {
      },
      (error: any) => {
        this.showEditFailed();
      }
    );
    this.modalTitle = `Witaj z powrotem ${this.username}`;
    this.close();
  }

  private getCurrentUser(){
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.username = user.username;
        this.selectedAvatar = user.avatar;
        this.modalTitle = `Witaj z powrotem ${this.username}`;
        this.description = user.desc;
      },
      (error: any) => {
      }
    );
  }


  private clearDataFromUserProfile() {
    this.description = '';
    this.selectedAvatar = '';
    this.username = '';
    this.userEditDialogVisible = false;
  }


  selectAvatar(avatar: string) {
    if(avatar == 'avatar1'){
      this.selectedAvatar = this.male;
    } else if (avatar == 'avatar2')  {
      this.selectedAvatar = this.female;
    }
  }

  private showEditFailed() {
    this.messageService.clear();
    this.messageService.add({ key: 'toastFailed', severity: 'warn', summary: 'Warning', detail: 'The program encountered an error while trying to edit a user' });
  }
}
