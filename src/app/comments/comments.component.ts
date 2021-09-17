import { ArticlesService } from './../services/articles.service';
import { CommentsService } from './../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './../models/comment';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../models/article';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterContentChecked {

  comment : Comment = {"pseudo":"", "content": "","createdOn":"", "article_id": ""};
  articleId;
  allComment: Comment[] =[];
  isComment = false;
  article: Article;
  message: string;

  constructor(private actRoute: ActivatedRoute, private commService: CommentsService, private artiservice: ArticlesService) { }

  ngOnInit() {
     this.articleId = this.actRoute.snapshot.paramMap.get('id');
     this.getArticleWithPromise().then(()=>{
      this.allComment = this.commService.getComments(this.article.title);
     }).catch(()=>{
       this.message = "Aucun commentaire..."
     });
   
   if(this.allComment[0] != undefined) this.isComment = true;
  
  }

  ngAfterContentChecked(): void {
    if(this.article !=undefined ){
      this.allComment = this.commService.getComments(this.article.title);
    }else{
     this.article =  this.artiservice.getArticleById(this.articleId)
    }
    if(this.allComment[0] != undefined) this.isComment = true;
    
  }

  postComment(formDirective){
    if(this.article !=undefined){
      this.comment.createdOn = new Date().toISOString();
      this.comment.article_id = this.article.title;
      this.commService.addComment(this.comment);
      formDirective.resetForm();
    }
  }



  getArticleWithPromise(){
    return new Promise((resolve, reject)=>{
      this.article = this.artiservice.getArticleById(this.articleId);
      resolve();
    });
  }


}
