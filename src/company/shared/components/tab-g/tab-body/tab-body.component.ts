import { AfterViewInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TabGComponent } from '../tab/tab-g.component';

@Component({
  selector: 'tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss']
})
export class TabBodyComponent implements OnInit {

  constructor(public tabG: TabGComponent) { }


  ngOnInit(): void {
  }

}


