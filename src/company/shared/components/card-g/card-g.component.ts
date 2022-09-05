import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDto } from './dto/card-dto';

@Component({
  selector: 'card-g',
  templateUrl: './card-g.component.html',
  styleUrls: ['./card-g.component.scss']
})

export class CardGComponent implements OnInit {

  @Input() cardDtoArray: Observable<CardDto[]>;
  constructor() { }

  ngOnInit(): void {

  }

}

