import { Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import { ContainerTabGComponent } from './container-tab-g.component';

@Component({
  selector: 'tabs-g',
  styleUrls:['../components/tabs-g.component.scss'],
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

