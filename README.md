## News Summary App

Task: Make an app that grabs all the headlines from the Guardian newspaper API and displays them on a page. Clicking on a headline will show a summary of the article.

## User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are

As a busy politician
I can read a summary of a news article
So I can get a few more details about an important story

As a busy politician
I can read a full news article
So that I can get an in depth understanding of a very important story

As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at

As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks

As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```
## Technologies

- Javascript (no jQuery)
- Tested using my own framework developed over the past week
- Guardian API

## How to use

- Clone this repo
- Run using http-server:
  * At the root run `<$ npm install http-server --save>`
  * `<$ node node_modules/http-server/bin/http-server>`
- Run tests in Chrome using testRunner.html - results are shown in the console

## Approach

- Created the models (articles and list of articles). The article simply holds properties such as headline and content and the list creates articles, saves them, and finds them by id.
- The article and list views generate the HTML to display information.
- The list controller sends messages to the models and views in order to add content to the page. It also requests article content to be displayed when the user clicks on an article via the url hash, containing the article id.
- I wrote the functions to make an ajax request to the Guardian API without using jQuery, which are also called by the controller
- Using an XMLHttpRequest allowed me to have the content generated without a page refresh

## Extension

- I have not had time to use an API to summarize the article content, but I would like to use the Alyien text summarisation API to do this
- I have relied on unit testing for this app, but would like to add feature tests by including the test file into index.html, and using DOM methods such as `<click>` to simulate user actions
- I would also like to allow the user to select different sections of the newspaper to view the articles in that section, which would require the insertion of the section name into the url that makes the first request for the list of articles

![Screenshot](/images/Screenshot 2017-04-06.png)
