import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'Cedric AYME',
      authorId: '1',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Julien BAVENCOFFE ',
      authorId: '2',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Sébastien CALICHIAMA',
      authorId: '3',
      text: 'Représentant du CE à l’Assemblée Générale',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Axel CHAGNOLEAU',
      authorId: '4',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Caroline DE BARDY',
      authorId: '5',
      text: 'Représentant du CE pour la Fondation d’Entreprise',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Lucile ESTEVE',
      authorId: '2',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Lauren FAN',
      authorId: '2',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Julien FLOCH',
      authorId: '2',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Noëmie HONORE',
      authorId: '2',
      text: 'Représentant du CE au Conseil de Surveillance',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Carina KOSKAS',
      authorId: '2',
      text: 'Secrétaire',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Rozenn MESSANA',
      authorId: '2',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Mélanie PEYRAN-COULOUME',
      authorId: '2',
      text: 'Représentant du CE au Fond Solucom Actions',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Manal TAIB',
      authorId: '2',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Rémi TANIWAKI',
      authorId: '2',
      text: '-',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Catherine VLAJ',
      authorId: '2',
      text: 'Trésorier',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
