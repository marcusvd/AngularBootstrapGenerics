import { OnInit, Component, ContentChildren, QueryList, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { ContainerTabGComponent } from './components/container-tab-g.component';
import { ITab } from './interfaces/itab';

@Component({
  selector: 'tabs-g',
  styles:[`
:host{
    width: 100%;
}

ul{
    z-index: 50;
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    text-transform: uppercase;
    margin: 0;
    padding: 20px 10px 2px 10px !important;
    position: fixed;
    width: 100%;
    background-color: #f8f8f8;

    li{
        width: 100%;
        text-align: center;
        padding-bottom: 12px;
        font-weight: 600;
        color: #333;
        opacity: 0.5;

        &.active{
            border-bottom: 4px solid #333;
            opacity: 1;
        }
    }
}

.content{
    top: 80px;
    position: relative;
}

  `],
  template: `
   <ul>
      <li *ngFor="let tab of tabs" [ngClass]="{active:tab.active}" (click)="selectTab(tab)">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
   <div class="content">
   <ng-content></ng-content>
   </div>
  `
})
export class TabsGComponent implements AfterContentInit {

  @ContentChildren(ContainerTabGComponent) tabs: QueryList<ContainerTabGComponent>;

  ngAfterContentInit(): void {

    const activeTabs = this.tabs.filter(act => act.active = false);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: ContainerTabGComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));

    tab.active = true;
  }


}

