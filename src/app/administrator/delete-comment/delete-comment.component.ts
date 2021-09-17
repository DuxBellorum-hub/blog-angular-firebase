import { CommentsService } from './../../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';


@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {

  allComments: Comment[] =[];

  constructor(private commServ: CommentsService) { }

  ngOnInit() {
    this.allComments = this.commServ.getAllComments();
   
  }

  delete(id){
    this.commServ.deleteSingleComment(id);
  }



}
