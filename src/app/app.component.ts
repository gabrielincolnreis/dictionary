import { Component } from '@angular/core';

const dictionaryList = [
  {title: 'Dicionário Join RH'},
  {title: 'Dicionario RH'},
  {title: 'Dicionario Geral'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dictionary';

  displayedColumns: string[] = ['title', 'search','abc','settings','delete'];
  dataSource = dictionaryList;
}
