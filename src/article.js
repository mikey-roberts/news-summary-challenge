'use strict'

class Article {
  constructor(id, title, url) {
    this.id = id
    this.title = title
    // this.summary = summary
    // this.content = content
    // this.picture = picture
    this.url = url
  }
  

  id() {
  return this.id;
  }

  title() {
  return this.title;
  }

  url() {
  return this.url;
  }
}