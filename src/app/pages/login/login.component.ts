import { Component } from '@angular/core';
import {Slide} from "../../shared/carousel/slide";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  carouselSlides!: Slide[];

  ngOnInit(): void{
    this.carouselsSlide();
  }

  carouselsSlide(){
    this.carouselSlides = [
      {
        imageUrl: '../../../assets/carousel/Forbidden_City_Beijing_China.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '',
        title: 'Ancient city in China',
        description:
          'Forbidden City Beijing China',
      },
      {
        imageUrl: '../../../assets/carousel/Civil_rights_march_on_Washingtop_1963.jpg',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Civil rights',
        description:
          'Civil rights march on Washingtop 1963',
      },
      {
        imageUrl: '../../../assets/carousel/The_Horse_Guards_at_the_Battle_of_Waterloo_One_of_the_officers_having_killed_a_French_colonel_cuts_off_his_epaulette_in_triumph_1819.jpg',
        altText: 'Random third slide',
        logoUrl: '',
        title: 'Battle of Waterloo',
        description:
          'The Horse Guards at the Battle of Waterloo One of the officers having killed a French colonel cuts off his epaulette in triumph_1819',
      },
    ];
  }
}
