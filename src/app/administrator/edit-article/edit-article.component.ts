import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css', './../../../assets/css/arrow-style.css']
})
export class EditArticleComponent implements OnInit, AfterContentChecked {

  id: string;
  article: Article;
  add: boolean = false;
  loaderMsg: string = "Article édité!";
  imgMsg = false;
  fileUrl: string;
  fileIsUploading = false;
  fileUploaded = false;


  constructor(private articleService: ArticlesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticleById(this.id);
  }


  ngAfterContentChecked() {
    if (this.article === undefined) {
      this.article = this.articleService.getArticleById(this.id)
    }
  }


  uploadImage(file: File) {
    this.fileIsUploading = true;
    this.articleService.uploadFile(file).then((url: string) => {
      this.fileUrl = url;
      this.fileIsUploading = false;
      this.fileUploaded = true;
    }).catch((err) => console.log(err));
  }



  updateArticle() {
    let editedArticle = this.article;
    if (this.fileUrl && this.fileUrl != "") {
      editedArticle.image = this.fileUrl;
    }
    this.articleService.updateArticle(this.id, editedArticle);
    this.add = true;
    this.router.navigate(['/admin/list-edit'])

  }

  detectFile(event) {
    this.uploadImage(event.target.files[0]);
  }


}
