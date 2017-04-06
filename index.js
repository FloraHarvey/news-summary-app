var controller = new ListController(new List());

controller.addArticle("Brexit diaries: article 50 triggers elation and devastation across UK",
"Guardian project reveals a nation deeply divided following Theresa May’s formal request for Britain to leave the EU",
"Heather Stewart", "Saturday 1 April 2017 08.00 BST", "./images/4928.jpg");

controller.addArticle("MPs' expenses watchdog accidentally posts private data online",
  "Information on staff’s names, pay, working patterns and holidays was uploaded in error and stayed up for four hours",
  "Rowena Mason", "Friday 31 March 2017 17.47 BST", "./images/4529.jpg");

controller.makeApiRequest("http://content.guardianapis.com/search?q=politics");

controller.insertListHTML(element = document.getElementById("headlines"));

controller.makeURLChangeShowArticleContent();
