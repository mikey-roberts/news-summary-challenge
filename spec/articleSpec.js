'use strict';

function testArticleIsCreated() {
  let article = new Article("title", "summary", "text", "picture", "url");

  if(article.title === "title") {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};
  
testArticleIsCreated();

it('stores an article with a title', function() {
  let article = new Article("title", "summary", "content", "picture", "url")
  expect(article.title).toEqual("title")
});

it('stores an article with a summary', function() {
  let article = new Article("title", "summary", "content", "picture", "url")
  expect(article.summary).toEqual("summary")
});

it('stores an article with content', function() {
  let article = new Article("title", "summary", "content", "picture", "url")
  expect(article.content).toEqual("content")
});

it('stores an article with a picture', function() {
  let article = new Article("title", "summary", "content", "picture", "url")
  expect(article.picture).toEqual("picture")
});

it('stores an article with a URL', function() {
  let article = new Article("title", "summary", "content", "picture", "url")
  expect(article.url).toEqual("url")
});
