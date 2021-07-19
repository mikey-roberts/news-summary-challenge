'use strict';

class ArticleManager {
  constructor() {
  this.article = [];
  }

  saveArticle(obj) {
  this.article.push(obj);
  }

  displayArticle() {
  return this.article;
  }
}
