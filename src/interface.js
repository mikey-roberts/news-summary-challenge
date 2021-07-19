'use strict'

// let articleManager = []

document.addEventListener("DOMContentLoaded", () => {
const articleList = document.querySelector(".listed-articles");
const key = config.MY_API_KEY;
const url = "https://content.guardianapis.com/search?api-key=" + key
let articleManager = new ArticleManager();

// API REQUEST FOR ARTICLES

function getArticleTitle() {
  fetch('http://content.guardianapis.com/search?order-by=newest&api-key=' + key + '&show-fields=thumbnail').then(response => {
     response.json().then(articleData => {
       let newsArticles = articleData.response.results
       for(let i = 0; i < newsArticles.length; i++) {
       let article = new Article(newsArticles[i].id, newsArticles[i].webTitle, newsArticles[i].webUrl)
       articleManager.saveArticle(article); 
       }
    }) 
  })
  displayHeadlines();
} 

getArticleTitle()

  function displayHeadlines() {
    for(let i = 0; i < articleManager.length; i++) {
    let newHeadline = document.createElement("h4");
    newHeadline.classList.add("article-headline");
    newHeadline.innerText = `${articleManager.article[i].id}`;
    articleList.appendChild(newHeadline);
    }
  }
})