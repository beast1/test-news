import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newsItemData = [{
    'title': '1message from parent',
    'descr': '1secd',
    'preview': 'http://test.kamis.ru/1.jpg'
  }, {
    'title': '2message from parent',
    'descr': '2secd',
    'preview': 'http://test.kamis.ru/2.jpg'
  }, {
    'title': '3message from parent',
    'descr': '3secd',
    'preview': 'http://test.kamis.ru/3.jpg'
  }];
}
