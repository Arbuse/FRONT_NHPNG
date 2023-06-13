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
        imageUrl: '../../../assets/carousel/Civil_rights_march_on_Washingtop_1963.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '',
        title: 'Civil rights',
        description:
          'Civil rights march on Washington 1936',
      },
      {
        imageUrl: '../../../assets/carousel/The_Horse_Guards_at_the_Battle_of_Waterloo_One_of_the_officers_having_killed_a_French_colonel_cuts_off_his_epaulette_in_triumph_1819.jpg',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Battle of Waterloo',
        description:
          'The Horse Guards at the battle of Waterloo One of the officers having killed a French colonel cuts off his epaulette in trumph 1819',
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
