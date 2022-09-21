import { Component, Input, OnInit } from '@angular/core';
import { CardDto } from 'src/company/shared/components/card-g/dto/card-dto';
import { AppTestsService } from './app-tests.service';
import { ClientDto } from './dtos/client-dto';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular tabs</h1>
    <tabs-g>
      <container-tab-g title="Tab 1" >
      <div>Tab 1 Content</div>
      </container-tab-g>
      <container-tab-g title="Tab 2">
        <div>Tab 2 Content</div>
      </container-tab-g>
      <container-tab-g title="Tab 3">
        <div>Tab 3 Content</div>
      </container-tab-g>
    </tabs-g>
  `

  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  ngOnInit(): void {

  }


}

