import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TabsetConfig } from "ngx-bootstrap/tabs";
import { CardGComponent } from "../components/card-g/card-g.component";
import { CarouselGComponent } from "../components/carousel-g/carousel-g.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";

import { ContainerTabGComponent } from "../components/tab-g/container-tab-g.component";
import { TabsGComponent } from "../components/tab-g/tabs-g.component";
import { NgxBootstrapModule } from "./ngx-bootstrap.module";


@NgModule({
  declarations: [
    NavBarComponent,
    CarouselGComponent,
    CardGComponent,
    ContainerTabGComponent,
    TabsGComponent,
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
    ContainerTabGComponent,
    TabsGComponent,


  ],
  providers:[
    TabsetConfig,
    ContainerTabGComponent,
  ]
})


export class SharedModule {

}
