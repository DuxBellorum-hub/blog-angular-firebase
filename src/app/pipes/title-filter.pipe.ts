import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(articles: Article[], title: String ): Article[] {
    if(!articles || !title){
      return articles;
    }

    return articles.filter(article =>
      article.title.toLowerCase().indexOf(title.toLowerCase()) !==-1);
  }


}
