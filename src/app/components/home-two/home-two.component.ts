import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"vertical":true,"arrows":false};
  slideConf = {"slidesToShow": 4, "slidesToScroll": 1,"arrows":false,
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
  ]};

  collection:any;
  slide1Collection:any;
  slideCollec2:any;
  ngOnInit(): void {
    this.commonService.getHomeSlide().subscribe(data =>{
      this.slideCollec2 = data;
      console.log(this.slideCollec2);
    })



    this.commonService.getProvide().subscribe(data =>{
       this.collection = data;
       console.log(data);
       console.log(this.collection);
     });




     this.commonService.getSlide1().subscribe(data =>{
       this.slide1Collection = data;
       console.log(this.slide1Collection);
       
     })
  }

}
