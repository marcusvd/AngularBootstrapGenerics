import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {


  title = 'y';

  cards: CardDto[] = [];



  makeCard() {

    const card = new CardDto();
    card.bodyTextCard = "Liso se enquadra na categoria de rolos médios de 12 toneladas. Por ser um equipamento traçado e com capacidade de compactação elevada, pode ser utilizado em qualquer projeto ou obra.";
    card.linkTextUrl = 'https://mpterraplenagem.com.br/produto/rolo-compactador-xcmg-xs120pd/';
    card.linkTextButton = 'Detalhes';
    card.titleText = 'Rolo compactador XCMG XS120PD'
    card.stringPathImg = '../assets/carousel-index/1.jpg'
    this.cards[0] = card;

    const card1 = new CardDto();
    card1.bodyTextCard = "Liso se enquadra na categoria de rolos médios de 12 toneladas. Por ser um equipamento traçado e com capacidade de compactação elevada, pode ser utilizado em qualquer projeto ou obra.";
    card1.linkTextUrl = 'https://mpterraplenagem.com.br/produto/rolo-compactador-xcmg-xs120pd/';
    card1.linkTextButton = 'Detalhes';
    card1.titleText = 'Rolo compactador XCMG XS120PD'
    card1.stringPathImg = '../assets/carousel-index/1.jpg'
    this.cards[1] = card1;

    const card2 = new CardDto();
    card2.bodyTextCard = "Liso se enquadra na categoria de rolos médios de 12 toneladas. Por ser um equipamento traçado e com capacidade de compactação elevada, pode ser utilizado em qualquer projeto ou obra.";
    card2.linkTextUrl = 'https://mpterraplenagem.com.br/produto/rolo-compactador-xcmg-xs120pd/';
    card2.linkTextButton = 'Detalhes';
    card2.titleText = 'Rolo compactador XCMG XS120PD'
    card2.stringPathImg = '../assets/carousel-index/1.jpg'
    this.cards[2] = card2;
    console.log(this.cards)
    return of(this.cards);

  }










  // [stringPathImg]="'../assets/carousel-index/1.jpg'" [titleText]="'Rolo compactador XCMG XS120PD'" [bodyTextCard]="'Liso se enquadra na categoria de rolos médios de 12 toneladas. Por ser um equipamento traçado e com capacidade de compactação elevada, pode ser utilizado em qualquer projeto ou obra.'"
  // [linkText]="'https://mpterraplenagem.com.br/produto/rolo-compactador-xcmg-xs120pd/'" [linkTextButton]="'Detalhes'"


  ngOnInit(): void {
    this.makeCard()
  }
  ngAfterContentInit(): void {
    console.log('afterInit')

  }
  ngAfterViewInit(): void {

  }

}

export class CardDto {
  stringPathImg: string;
  bodyTextCard: string;
  titleText: string;
  linkTextUrl: string;
  linkTextButton: string;
}
