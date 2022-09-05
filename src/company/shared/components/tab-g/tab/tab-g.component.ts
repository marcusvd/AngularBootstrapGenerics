import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ClientDto } from 'src/app/dtos/client-dto';
import { ITab } from '../interfaces/I-tab';
import { TabBodyComponent } from '../tab-body/tab-body.component';



@Component({
  selector: 'tab-g',
  templateUrl: './tab-g.component.html',
  styleUrls: ['./tab-g.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGComponent implements OnInit, OnChanges {

  @Input() entities: any[] = [];
  entity: any;

  tabs: ITab[] = [];

  idToCallSingleEntity: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.entities.map(entity => this.tabs.push({ titleTab: entity.name, active: false, id: entity.id }))

    // this.tabs.forEach((tab: ITab) => {
    //   tab
    // })
    if (this.tabs) {
      this.tabs[0].active = true;
      this.tabs.forEach((tab: ITab) => {
        if (tab?.active === true){
          this.entity = this.entities.find(id => id.id == tab.id);
        }
      })
    }

    this.selectTab();

  }


  selectTab(tab?: ITab) {
    for (let tab of this.tabs) {
      tab.active = false;
    }
    tab.active = true;
    this.entity = this.entities.find(id => id.id == tab.id);

    // this.idToCallSingleEntity = tab.id;
  }


  ngOnInit(): void {

  }

}
