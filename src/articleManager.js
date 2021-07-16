'use strict';

class ArticleManager {
  constructor() {
  this.articles = [];
  }

  saveArticle(obj) {
  this.articles.push(obj);
  }
}
