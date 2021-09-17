import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit{

  articles$: Article[];

  constructor(private articleServices: ArticlesService) { }

  ngOnInit() {
    this.articles$ = this.articleServices.getAllArticles();
  }

  

  
}
