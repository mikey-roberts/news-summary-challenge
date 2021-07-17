'use strict'

const key = config.MY_API_KEY;
const url = "https://content.guardianapis.com/search?api-key=" + key
let articleManager = new ArticleManager();

getArticleTitle()

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
      } 
  
      console.log(articleManager);