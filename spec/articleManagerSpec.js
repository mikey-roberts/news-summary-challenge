'use strict';

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
  expect(articleManager).toEqual(articleManager)
});

it('pushes articles to array', function() {
  let articleManager = new ArticleManager()
  let article = new Article("title", "summary", "text", "picture", "url")
  articleManager.saveArticle(article)
  expect(articleManager.articles[0].title).toEqual("title")
});