
import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Comment[] = [];
  allComments: Comment[] = [];

  constructor() { }


  addComment(comment: Comment){
    firebase.database().ref('/comments').push(comment);
    this.comments = [];
    this.getComments(comment.article_id);
   
  }

  getComments(id){
    this.comments = [];
    firebase.database().ref('/comments').on('value', data => {
      if(data.val()){
        let keys = Object.keys(data.val());
        if(this.comments[0]=== undefined){
          for(let i = 0; i<keys.length; i++){
            if(data.val()[keys[i]].article_id === id){
              this.comments.push(data.val()[keys[i]])
            }
          }
        }
      }
    });
   return this.comments;
  }


  getAllComments(){
    firebase.database().ref('/comments').on('value', data => {
      if(data.val()){
        let keys = Object.keys(data.val());
        if(this.allComments[0]=== undefined){
          for(let i = 0; i<keys.length; i++){
            this.allComments.push(data.val()[keys[i]])
          }
        }
      }
    });
   return this.allComments;
  }

  deleteSingleComment(id){
    this.allComments.splice(id, 1);
    firebase.database().ref('/comments').set(this.allComments);
  }





}
