import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {Question} from "./model/question";
import {UserProfileService} from "./service/user-profile.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../login/user-service/user.service";
import {Observable} from "rxjs";
import {User} from "../login/user-service/model/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  @ViewChild('dt1') dt1!: Table;

  username: string = '';
  description: string = '';
  selectedAvatar: string = '';
  userEditDialogVisible: boolean = false;
  userId!: number;

  modalTitle!: string;
  search: string = '';
  rankingDialogVisible: boolean = false;

  questions: Question[] = [];

  constructor(private userProfileService: UserProfileService,
              private userService: UserService) {
      //this.$user = this.userService.getUserById(this.userId);
  }

  getQuestionsByTyp(typ: string) {
    this.userProfileService.getQuestionsByTyp(typ).subscribe((response: Question[]) => {
      this.questions = response;
      console.log(this.questions);
    });
  }

  getQuestionsInLearningMode() {
    this.userProfileService.getQuestionsInLearningMode(this.userId).subscribe((response: Question[]) => {
      this.questions = response;
      console.log(this.questions);
    });
  }



  ngOnInit() {

    this.userId = parseInt(localStorage.getItem('userId') || '0', 10);
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.username = user.username;
        this.modalTitle = `Welcome back ${this.username}`;
      },
      (error: any) => {
      }
    );
  }


  showRankingDialog() {
    this.rankingDialogVisible = true;
  }

  showUserEditModal(){
    this.userEditDialogVisible = true;
  }

  filterTable() {
    this.dt1.filterGlobal(this.search, 'contains');
  }

  close(){
    this.clearDataFromUserProfile();
    this.userEditDialogVisible = false;
  }

  saveChanges() {
    console.log('Zapisano zmiany:');
    console.log('Username:', this.username);
    console.log('Description:', this.description);
    console.log('Selected Avatar:', this.selectedAvatar);
    this.close();
  }


  private clearDataFromUserProfile() {
    this.description = '';
    this.selectedAvatar = '';
    this.username = '';
    this.userEditDialogVisible = false;
  }


  selectAvatar(avatar: string) {
    this.selectedAvatar = avatar;
  }

  customers: any[] = [
    {name: 'Amy Elsner', image: '', points: 85},
    {name: 'Anna Fali', image: '', points: 72},
    {name: 'Asiya Javayant', image: '', points: 93},
    {name: 'Bernardo Dominic', image: '', points: 68},
    {name: 'Elwin Sharvill', image: '', points: 77},
    {name: 'Ioni Bowcher', image: '', points: 91},
    {name: 'Ivan Magalhaes', image: '', points: 82},
    {name: 'Onyama Limba', image: '', points: 55},
    {name: 'Stephen Shaw', image: '', points: 88},
    {name: 'Xuxue Feng', image: '', points: 79}
  ];


}
