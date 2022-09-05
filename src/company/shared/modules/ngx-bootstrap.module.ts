import { NgModule } from "@angular/core";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [

  ],
  imports: [
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    CarouselModule,
    TabsModule,
  ],
})


export class NgxBootstrapModule {

}
