import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css', './../../../assets/css/arrow-style.css']
})
export class CreateArticleComponent implements OnInit {
  
  article: Article = { title: "", content: "", author: "", image: "", createdOn: "" };
  add: boolean = false;
  loaderMsg: string = "Article ajouté!";
  fileUrl: string;
  fileIsUploading: boolean = false;
  fileUploaded: boolean = false;

  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit() {

  }

  uploadImage(file: File) {
    this.fileIsUploading = true;
    this.articlesService.uploadFile(file).then((url: string) => {
      this.fileUrl = url;
      this.fileIsUploading = false;
      this.fileUploaded = true;
    }).catch((err) => console.log(err));
  }


  createArticle(formDirective) {
    let editedArticle = this.article;
    if (formDirective.form.valid) {
      if (this.fileUrl && this.fileUrl != "") {
        editedArticle.image = this.fileUrl;
      }
      this.articlesService.createArticle(editedArticle);
      this.add = true;
      this.router.navigate(['/admin/list-edit'])

    }
  }

  detectFile(event) {
    this.uploadImage(event.target.files[0]);
  }



}
