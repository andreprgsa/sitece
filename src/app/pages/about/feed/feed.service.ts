import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'Pascal IMBERT',
      text: 'Président',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Andrey',
      text: 'Trésorier',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Vlad',
      text: 'Responsable Clubs',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Nasta',
      text: 'Communication',
      expanded: false,
    }, {
      type: 'geo-message',
      author: 'Nick',
      text: '"New York, USA"',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Posted new message',
      text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
      time: '12.11.2015',
      ago: '3 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Posted new message',
      text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Nasta',
      surname: 'Linnie',
      header: 'Posted new message',
      text: 'When your hammer is C++, everything begins to look like a thumb.',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Alexander',
      surname: 'Demeshko',
      header: 'Posted new message',
      text: '“I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time." ©',
      time: '15.11.2015',
      ago: '6 days ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Nick',
      surname: 'Cat',
      header: 'Posted photo',
      text: '"Protein Heroes"',
      preview: 'app/feed/genom.png',
      link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
      time: '16.11.2015',
      ago: '7 days ago',
      expanded: false,
    },
    {
      type: 'text-message',
      author: 'Kostya',
      surname: 'Danovsky',
      header: 'Posted new message',
      text: 'Why did the CoffeeScript developer keep getting lost? Because he couldn\'t find his source without a map',
      time: '18.11.2015',
      ago: '9 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
