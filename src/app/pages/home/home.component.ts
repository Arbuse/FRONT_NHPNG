import {Component, OnInit} from '@angular/core';
import {Slide} from "../../shared/carousel/slide";
import { AnimateModule } from 'primeng/animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sidebarVisible: boolean =false;
  carouselSlides!: Slide[];

  //users: User[];
  user: any=[];
  //constructor(private userService: UserService) {}






  ngOnInit(): void{
  this.carouselsSlide();
    this.user = [
      { username: 'User1', points: 100, games: 5 },
      { username: 'User2', points: 150, games: 8 },
      { username: 'User3', points: 80, games: 3 },
      { username: 'User4', points: 200, games: 12 },
      { username: 'User5', points: 50, games: 2 },
      { username: 'User6', points: 120, games: 7 },
      { username: 'User7', points: 90, games: 4 },
      { username: 'User8', points: 180, games: 9 },
      { username: 'User9', points: 70, games: 6 },
      { username: 'User10', points: 160, games: 10 }
    ];
    // this.productService.getProductsMini().then((data) => {
    //   this.products = data;
    // });
  }

  carouselsSlide(){
    this.carouselSlides = [
      {
        imageUrl: '../../../assets/carousel/Basil_Watson_Seated_in_his_Completed_Biplane_Outside_the_Family_Home_Elsternwick_Victoria_1916.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '',
        title: 'Biplane',
        description:
          'Basil Watson Seated in his Completed Biplane Outside the Family Home Elsternwick Victoria 1916',
      },
      {
        imageUrl: '../../../assets/carousel/Bringing_Up_The_Guns_John_Gilbert.jpg',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Bringing Up The Guns',
        description:
          'Bringing Up The Guns by John Gilbert',
      },
      {
        imageUrl: '../../../assets/carousel/Falcon_Heavy_rocket_test_flight.jpg',
        altText: 'Random third slide',
        logoUrl: '',
        title: 'Falcon Heavy',
        description:
          'Falcon Heavy rocket test flight.',
      },
    ];
  }
}
