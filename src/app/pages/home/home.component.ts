import {Component, OnInit} from '@angular/core';
import {Slide} from "../../shared/carousel/slide";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselSlides!: Slide[];

  ngOnInit(): void{
  this.carouselsSlide();
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
