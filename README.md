# News Summary challenge

* Feel free to use Google, your notes, books, etc. but work on your own.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* If you have a partial solution, **still check in a partial solution** and send in a pull request.
* You must submit a pull request to this repo with your code by 9am Monday morning.

## Challenge

### Guidance

## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

This is a poject built with JavaScript, CSS and HTML.  This won't include any additional frameworks and will use a custom built testing library.

### Serving your app

You'll use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve your HTML, CSS and JavaScript files.  You'll send requests to an API to get data from the Guardian and to summarise text.

> The API is hosted on an external server that you don't have to worry about.  You only need a static web server.  That's why this type of architecture is called "serverless".

```
alias user="user"
alias interface="interface"
alias app="app"
alias api="api"

#classes - 

#ArticleManager // Holds array of articles
#Article // Title, summary, text, picture, URL
#Local Storage // Summary, title, text, picture, URL
#Guardian API

DATA TO FETCH - 

Summarization 

URL, title, text(summary)

Article Extraction

Article, image


```
#As a busy politician
#I can see all of today's headlines in one place
#So I know what the big stories of the day are
#---------------------------------------------#
user->interface: "User accesses the page"
interface-app: "displayArticles() -- Awaits Promise from fetch"
interface->app: "Request articles fetchArticles()"
app->api: "GET request for headlines"
api->app: "POST request to return headlines"
app->interface: "Promise returned for headlines"
app->interface: "displayHeadlines()"


#As a busy politician
#I can see a relevant picture to illustrate each news article when I browse headlines
#So that I have something nice to look at
#---------------------------------------------#
interface->app: "loadArticle() from local storage"
app->interface: "displayArticles() with picture"


#As a busy politician
#I can click a news headline to see a summary and a photo of the news article
#So that I can get an in depth understanding of a very important story
#---------------------------------------------#
user->interface: "On-click - Display Summary and photo"
interface->app: "displaySummary()"
app->interface: "Display article with picture in a pop-up"


#As a busy politician
#I can read the site comfortably on my phone
#Just in case my laptop breaks
#---------------------------------------------#
app->interface: "Media queries in place to render layout for phone use"

#As a busy politician
#I can see whizzy animations in the app
#To make my news reading more fun
#---------------------------------------------#
app->interface: "CSS Transitions between windows"

```

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

