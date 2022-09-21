import { Component, Input } from '@angular/core';
import { ITab } from '../interfaces/itab';

@Component({
  selector: 'container-tab-g',
  styles: [],
  template: `
    <div>
      <ng-content *ngIf="active"></ng-content>
    </div>
  `
})
export class ContainerTabGComponent implements ITab {

  @Input() title: string;
  public active = false;

  constructor() {

  }

}
