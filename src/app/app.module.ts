import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { ShardModule } from './shard/shard.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { BlogComponent } from './components/blog/blog.component';
import { TeamComponent } from './components/team/team.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    SolutionsComponent,
    CaseStudyComponent,
    BlogComponent,
    TeamComponent,
    PricingComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShardModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
