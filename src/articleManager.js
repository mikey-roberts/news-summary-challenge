'use strict'

it('stores an article with a title', function() {
  let article = new Article("title", "summary", "content", "picture", "url")
  expect(article.title).toEqual("title")
});

it('stores an article with a summary', function() {
  let article = new Article("title", "summary", "content", "picture", "url")
  expect(article.summary).toEqual("summary")
});
