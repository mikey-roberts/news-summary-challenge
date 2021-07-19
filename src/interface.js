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
       displayHeadlines()
    })
  })
} 

getArticleTitle()


  function displayHeadlines() {
    for(let i = 0; i < 10; i++) {
    let newTitle = document.createElement("h2");
    newTitle.classList.add("article-headline");
    // Populates Article Title
    newTitle.innerText = `${articleManager.article[i].title}`;
    let newId = document.createElement("h4");
    newId.classList.add("article-id");
    // Populates Article ID
    newId.innerText = `${articleManager.article[i].id}`;
    let newUrl = document.createElement('a');
    newUrl.classList.add("article-url");
    // Populates Article Url
    newUrl.setAttribute('href', articleManager.article[i].url);
    newUrl.innerHTML = articleManager.article[i].url;
    articleList.appendChild(newTitle);
    articleList.appendChild(newId);
    articleList.appendChild(newUrl);
    }
  }
})