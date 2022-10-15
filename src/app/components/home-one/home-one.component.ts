import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service'
@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

  provideCollection;
  show:boolean = false;
  bgh:boolean = false;
  shows:boolean = false;
  bghs:boolean = false;
  constructor(private commonService:CommonService) { 

  }


  slideConfig = {
    "slidesToShow": 4, "slidesToScroll": 1,"arrows":false,"autoplay":true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  collection:any;
  slide1Collection:any;
  ngOnInit(): void {

    this.commonService.getProvide().subscribe(data =>{
      this.collection = data;
      console.log(data);
      console.log(this.collection);
    });


   // slide 1
    this.commonService.getSlide1().subscribe(data =>{
      this.slide1Collection = data;
      console.log(this.slide1Collection);
      
    })
  // slide 1
  }s

  isShow(){
    this.show =!this.show;
    this.bgh = !this.bgh;
  }
 
  Show(){
    this.shows =!this.shows;
    this.bghs = !this.bghs;
  }
}
