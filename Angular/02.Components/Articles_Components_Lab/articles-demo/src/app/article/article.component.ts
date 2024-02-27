import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {

  // Декларация на свойства
  public title: string;
  public imageUrl: string;
  public imageIsShown: boolean;

  // Инициализация на свойства в конструктора (пример)
  constructor() {
    this.imageIsShown = true;
    this.title = '';
    this.imageUrl = '';
    this.articleDescLen = 0;
    this.descToShow = '';
  
  }

  private symbols: number = 250;
  @Input() article = {} as Article;
  @Input() articleDesc: string = '';
  descToShow: string = '';
  articleDescLen: number = 0;
  showReadMoreBtn: boolean = true;
  showHideBtn:boolean = false;
  imageButtonTitle: string = '';

  // constructor() {
    
  // }

  // Декларация на методи
  public readMore(): void {
    // Логика за метода readMore
  }

  public hideDesc(): void {
    // Логика за метода hideDesc
  }

  public toggleImage(): void {
    // Логика за метода toggleImage
  }

}
