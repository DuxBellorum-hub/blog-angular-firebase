import { RoutingStateService } from './services/routing-state.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog-client';

  previousRoute: string;
  articles = [];


  constructor(private routingState: RoutingStateService) {
    routingState.loadRouting();
    var firebaseConfig = {
      apiKey: environment.apiKey,
      authDomain: environment.authDomain ,
      databaseURL: environment.databaseURL,
      projectId: environment.projectId,
      storageBucket: environment.storageBucket,
      messagingSenderId: environment.messagingSenderId,
      appId: environment.appId,
      measurementId: environment.measurementId
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  ngOnInit() {
   
  }

  onActivate(event) {
    window.scroll(0, 0);

  }



}
