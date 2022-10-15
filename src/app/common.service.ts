import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }


  getProvide(){
    const Url = 'http://localhost:3000/provide';
    return this.httpClient.get(Url);
  }




  getSlide1(){
    const Url='http://localhost:3000/slide1';
    return this.httpClient.get(Url);
  }



  getHomeSlide(){
    const Url = 'http://localhost:3000/slide2';
    return this.httpClient.get(Url);
  }
}
