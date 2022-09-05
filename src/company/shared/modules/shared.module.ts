import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TabsetConfig } from "ngx-bootstrap/tabs";
import { CardGComponent } from "../components/card-g/card-g.component";
import { CarouselGComponent } from "../components/carousel-g/carousel-g.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { TabBodyComponent } from "../components/tab-g/tab-body/tab-body.component";
import { TabGComponent } from "../components/tab-g/tab/tab-g.component";
import { NgxBootstrapModule } from "./ngx-bootstrap.module";


@NgModule({
  declarations: [
    NavBarComponent,
    CarouselGComponent,
    CardGComponent,
    TabGComponent,
    TabBodyComponent

  ],
  imports: [
    NgxBootstrapModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    NavBarComponent,
    CarouselGComponent,
    CardGComponent,
    NgxBootstrapModule,

    TabGComponent,
    TabBodyComponent

  ],
  providers:[
    TabsetConfig,
    TabGComponent,
  ]
})


export class SharedModule {

}
