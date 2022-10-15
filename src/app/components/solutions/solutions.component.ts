import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  collection:any;
  ngOnInit(): void {

    this.commonService.getProvide().subscribe(data =>{
      this.collection = data;
      console.log(data);
      console.log(this.collection);
    });
  }

}
