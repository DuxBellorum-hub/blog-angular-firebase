import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;
  redirectUrl: string;

  constructor() { }

  loginUser(email: string, password: string){
    firebase.auth().languageCode = "fr";
    return new Promise((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        ()=>{
          resolve(true);
        },
        (error) =>{
          reject(error);
        }
      );
    });
  }

  LogoutUser(){
    firebase.auth().signOut();
  }



}
