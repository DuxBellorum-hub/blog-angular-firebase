
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxEditorModule } from "ngx-editor";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { CreateArticleComponent } from './administrator/create-article/create-article.component';
import { HandleArticleComponent } from './administrator/handle-article/handle-article.component';
import { EditArticleComponent } from './administrator/edit-article/edit-article.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth-guard.service';
import { SideNavComponent } from './administrator/side-nav/side-nav.component';
import { ListEditComponent } from './administrator/list-edit/list-edit.component';
import { TitleFilterPipe } from './pipes/title-filter.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentsComponent } from './comments/comments.component';
import { DeleteCommentComponent } from './administrator/delete-comment/delete-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailArticleComponent,
    ListArticlesComponent,
    EllipsisPipe,
    CreateArticleComponent,
    HandleArticleComponent,
    EditArticleComponent,
    AuthComponent,
    SideNavComponent,
    ListEditComponent,
    LoaderComponent,
    TitleFilterPipe,
    PageNotFoundComponent,
    NavbarComponent,
    CommentsComponent,
    DeleteCommentComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEditorModule 
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
