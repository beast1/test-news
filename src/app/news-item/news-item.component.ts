import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html'
})
export class NewsItemComponent {
  @Input() childData: object;
}
