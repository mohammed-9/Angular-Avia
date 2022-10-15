import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path:'',component:HomeOneComponent},
  {path:'home-one',component:HomeOneComponent},
  {path:'home-two',component:HomeTwoComponent},
  {path:'home-three',component:HomeThreeComponent},
  {path:'about',component:AboutComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'case-study',component:CaseStudyComponent},
  {path:'blog',component:BlogComponent},
  {path:'team',component:TeamComponent},
  {path:'pricing',component:PricingComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
