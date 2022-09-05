import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardDto } from 'src/company/shared/components/card-g/dto/card-dto';
import { ITab } from 'src/company/shared/components/tab-g/interfaces/I-tab';
import { TabGComponent } from 'src/company/shared/components/tab-g/tab/tab-g.component';
import { AppTestsService } from './app-tests.service';
import { ClientDto } from './dtos/client-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private _appService: AppTestsService<ClientDto[]>,
  ) { }

  idSingle: number;

  callClientSingleById($event: any) {
    const id: number = $event.idToCallSingleEntity

    this.idSingle = id;
    // this.loadClientSingle(id)
  }


  clients: ClientDto[] = [];

  @Input() clientSingle: ClientDto;

  titlesTab: string[] = [];
  titleEvent: string;

  // tabs: ITab[] = [];



  cards: CardDto[] = [];

  loadClients() {
    this._appService.loadAllAsync().subscribe((clients: ClientDto[]) => {
      this.clients = clients
      clients.forEach(clientSingle => {
        // this.loadClientSingle(clientSingle.id)
        console.log(clientSingle.id)
        // this.tabs.push({ titleTab: clientSingle.name, active: false, id: clientSingle.id })
      })
    })
  }

  // loadClientSingle(id: number) {
  //   this._appService.loadByIdAsync(id).subscribe((client: ClientDto) => {
  //     this.clientSingle = client
  //   })
  // }

  loadClients$() {
    return this._appService.loadAllAsync();
  }




  ngOnInit(): void {
    this.loadClients();
    console.log(this.clientSingle)

  }




























  // tabs: TabDto[] = [];

  /*

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
*/

  // makeTab() {

  //   const tab;
  //   tab.bodyTextTab = "TAB PRIMEIRA";
  //   tab.titleText = 'Rolos compactadores'
  //   tab.active = true;
  //   this.tabs[0] = tab;

  //   const tab1 = new TabDto();
  //   tab1.bodyTextTab = "TAB SEGUNDA";
  //   tab1.titleText = 'Escavadeiras'
  //   tab1.active = null;
  //   this.tabs[1] = tab1;

  //   const tab2 = new TabDto();
  //   tab2.bodyTextTab = "TAB TERCEIRA";
  //   tab2.titleText = 'Tratores Agricolas'
  //   tab2.active = null;
  //   this.tabs[2] = tab2;


  //   return this.tabs;

  // }



  // tabs = [
  //   {
  //     title: 'Dynamic Title 1',
  //     content: 'Dynamic content 1',
  //     customClass: 'customClass'
  //   },
  //   {
  //     title: 'Dynamic Title 2',
  //     content: 'Dynamic content 2',
  //     customClass: 'customClass'
  //   }
  // ];





  // [stringPathImg]="'../assets/carousel-index/1.jpg'" [titleText]="'Rolo compactador XCMG XS120PD'" [bodyTextCard]="'Liso se enquadra na categoria de rolos médios de 12 toneladas. Por ser um equipamento traçado e com capacidade de compactação elevada, pode ser utilizado em qualquer projeto ou obra.'"
  // [linkText]="'https://mpterraplenagem.com.br/produto/rolo-compactador-xcmg-xs120pd/'" [linkTextButton]="'Detalhes'"




}

