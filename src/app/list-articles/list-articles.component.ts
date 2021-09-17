import { ArticlesService } from './../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit{

  articleList: Article[] = [];
  titleMatch: string;
  contentEllipsed = {"content": "", "id":"" };


  constructor(private articleServices: ArticlesService, private router: Router) { }

  ngOnInit() {
    if (this.articleList[0] === undefined) {
      this.articleList = this.articleServices.getAllArticles();
     
    } 
   
  }
  

  searchArticle(id): void {
    this.router.navigate(['article/', id])
  }


  onMouseEnter(content: string, index:number) {
    
    this.contentEllipsed.content = content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...';
    this.contentEllipsed.id = index.toString();
  
  }
  onMouseLeave(){
    this.contentEllipsed.content = "";
  }


}
