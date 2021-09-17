import { Article } from './../models/article';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: Article[] = [];
  newArticleCreated = new Subject<string>();


  constructor() { }

  emitSubject() {
    this.newArticleCreated.next('ok');
  }

  handleSubject(){
    return this.newArticleCreated.asObservable();
  }

  saveArticle() {
    firebase.database().ref('/articles').set(this.articles);
} 

  createArticle(article: Article) {
    let newArticle = article;
    newArticle.createdOn = new Date().toISOString();
    console.log(newArticle)
    firebase.database().ref('/articles').push(newArticle);
    this.articles =[];
    //this.emitSubject();
    this.articles = this.getAllArticles();
  }

  getAllArticles() {
    firebase.database().ref('/articles').on('value', data => {
      if(data.val()){
        let keys = Object.keys(data.val());
        if(this.articles[0]=== undefined){
          for(let i = 0; i<keys.length; i++){
            this.articles.push(data.val()[keys[i]])
          }
        }
      }
    });
   return this.articles;
  }


  getArticleById(id) {
    this.articles = [];
    this.getAllArticles();
    return this.articles[id];
  }


  updateArticle(id, article:Article){
    this.getAllArticles();
    this.articles[id] = article;
    this.saveArticle();

  }
  deleteSingleArticle(id){
    this.articles.splice(id, 1);
    this.saveArticle();

  }

  /* deleteArticle(ids){  //cette méthode que si les photo vienne du storage
   this.articles = this.getAllArticles();
   console.log(this.articles)
    for(let i=ids.length -1 ; i>=0; i--){
      if(this.articles[i].image != ""){
        let storageRef = firebase.storage().refFromURL(this.articles[i].image);
        console.log(storageRef)
        storageRef.delete().then(()=>{
          console.log('image(s) supprimée(s)');
        }).catch((error)=>{
          console.log('fichier non trouvée '+ error);
        });
      }
      this.articles.splice(ids[i], 1);
    } 
  
    firebase.database().ref('/articles').set(this.articles); // refacto
    this.articles = [];
  } */


  uploadFile(file:File){
    return new Promise((resolve, reject)=>{
      const randomFileName = Date.now().toString();
      const upload = firebase.storage().ref().child('images/'+ randomFileName + file.name).put(file);
      upload.on(firebase.storage.TaskEvent.STATE_CHANGED, ()=>{
        console.log('chargement en cours...');
      },(err)=>{
        console.log('erreur de chargement' + err);
        reject();
      },()=>{
        resolve(upload.snapshot.ref.getDownloadURL());
      });
    });

  }




}
