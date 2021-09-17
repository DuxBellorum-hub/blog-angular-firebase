import { ArticlesService } from './../services/articles.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './../models/comment';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css', './../../assets/css/arrow-style.css']
})
export class DetailArticleComponent implements OnInit, AfterContentChecked {

  article: Article;
  id ;
  allComment: Comment[];

  constructor(private articleServices: ArticlesService, private activRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activRoute.snapshot.paramMap.get('id');
    this.article = this.articleServices.getArticleById(this.id);
   
  }

  ngAfterContentChecked() {
    if(this.article === undefined){
      this.article = this.articleServices.getArticleById(this.id)
    }

  }
  
}
