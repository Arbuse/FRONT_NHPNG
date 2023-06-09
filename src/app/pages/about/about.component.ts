import { Component } from '@angular/core';
import {Slide} from "../../shared/carousel/slide";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  carouselSlides!: Slide[];

  ngOnInit(): void{
    this.carouselsSlide();
  }

  carouselsSlide(){
    this.carouselSlides = [
      {
        imageUrl: '../../../assets/carousel/Pyramids_Garden_Al_Haram_Egypt.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '',
        title: 'Pyramids',
        description:
          'Pyramids Garden Al Haram Egypt',
      },
      {
        imageUrl: '../../../assets/carousel/Ruins_of_Doric_Temple_of_Apollo_in_Ancient_Corinth_Greece.jpg',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Bringing Up The Guns',
        description:
          'Ruins of Doric Temple of Apollo (6th c. B.C.) in Ancient Corinth Greece',
      },
      {
        imageUrl: '../../../assets/carousel/The_Irish_envoy_1911.jpg',
        altText: 'Random third slide',
        logoUrl: '',
        title: 'The Irish envoy',
        description:
          'The Irish envoy in a car in front of P.Sweeney \'s Shamrock Hotel Donald Victoria 1911',
      },
    ];
  }
}
