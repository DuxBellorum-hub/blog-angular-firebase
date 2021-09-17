import { DeleteCommentComponent } from './administrator/delete-comment/delete-comment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListEditComponent } from './administrator/list-edit/list-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HandleArticleComponent } from './administrator/handle-article/handle-article.component';
import { CreateArticleComponent } from './administrator/create-article/create-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { EditArticleComponent } from './administrator/edit-article/edit-article.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  {path:'', pathMatch:'full', component: ListArticlesComponent},
  {path:'article/:id', component: DetailArticleComponent},
  {path:'admin', component: AuthComponent},
  {path:'admin/create-article', component: CreateArticleComponent, canActivate: [AuthGuard]},
  {path:'admin/handle', component: HandleArticleComponent, canActivate: [AuthGuard]},
  {path:'admin/list-edit', component: ListEditComponent, canActivate: [AuthGuard]}, 
  {path:'admin/edit/:id', component: EditArticleComponent, canActivate: [AuthGuard]},
  {path:'admin/delete-comments', component: DeleteCommentComponent, canActivate: [AuthGuard]},
  {path:'**', component: PageNotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
