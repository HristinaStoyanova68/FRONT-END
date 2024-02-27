import { Component } from '@angular/core';
import { Article } from './models/article.model';
import { data } from './data/seed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article Site';

  articles: Article[] = data;
}
