import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";

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


  search: string = '';
  rankingDialogVisible: boolean = false;



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

  ngOnInit() {
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


}
