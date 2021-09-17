import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-handle-article',
  templateUrl: './handle-article.component.html',
  styleUrls: ['./handle-article.component.css']
})
export class HandleArticleComponent implements OnInit {

  articles$: Article[];
  
  constructor(private articleServices: ArticlesService) { }

  ngOnInit() {
    this.articles$ = this.articleServices.getAllArticles();
    
  }

  deleteArticle(id: number){
    this.articleServices.deleteSingleArticle(id);  

  }


}
