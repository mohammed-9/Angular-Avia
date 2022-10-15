import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [TopNavComponent, MainNavComponent, FooterComponent],
  imports: [
    CommonModule,
 
  ],exports:[TopNavComponent, MainNavComponent, FooterComponent]
})
export class ShardModule { }
