import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardGComponent } from "../components/card-g/card-g.component";
import { CarouselGComponent } from "../components/carousel-g/carousel-g.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { NgxBootstrapModule } from "./ngx-bootstrap.module";


@NgModule({
  declarations: [
    NavBarComponent,
    CarouselGComponent,
    CardGComponent
  ],
  imports: [
    NgxBootstrapModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    CarouselGComponent,
    CardGComponent,
    NgxBootstrapModule,
  ],
})


export class SharedModule {

}
