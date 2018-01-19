import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newsItemData:  object;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://test.kamis.ru/api/news').subscribe(data => {
      this.newsItemData = data;
    });
  }
}
