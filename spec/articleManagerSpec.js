'use strict'

function testArticleManagerIsCreated() {
  let articleManager = new ArticleManager();

  if(articleManager.articles === []) {
    console.log("FAIL");
  } else {
    console.log("PASS");
  }
};

  testArticleManagerIsCreated();


it('instantiates with an empty array', function() {
  let articleManager = new ArticleManager()
  expect(articleManager.articles).toEqual([])
});

it('pushes articles toarray', function() {
  let articleManager = new ArticleManager()
  let article = new Article("title", "summary", "text", "picture", "url")
  articleManager.saveArticles(article)
  expect(articleManager.articles).toEqual(article)
});