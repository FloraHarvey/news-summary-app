"strict mode";

(function(exports) {

  function ListController (list) {
    this.list = list;
    this.view = new ListView(list);
  }

  ListController.prototype.addArticle = function (headline, content, author, date, thumbnail) {
    this.list.addArticle(headline, content, author, date, thumbnail);
  };

  ListController.prototype.insertListHTML = function (element) {
    element.innerHTML = this.view.generateHeadlineHtml();
  };

  ListController.prototype.insertArticleHTML = function (article, element) {
    var view = new ArticleView(article);
    element.innerHTML = view.generateArticleHTML();
  };

  ListController.prototype.loadArticle = function () {
    var xmlhttp = new XMLHttpRequest();
    var controller = this;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
              var data = xmlhttp.responseText;
              var jsonResponse = JSON.parse(data);
              var content = (jsonResponse.response.content.fields);
              controller.addArticle(content.headline, content.body, content.byline, content.lastModified, content.thumbnail);
              console.log(controller)
              console.log(content.thumbnail)
              controller.insertListHTML(element = document.getElementById("headlines"));
           }
        }
    };
    xmlhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/society/2017/apr/01/saturday-jobs-brexit-labour-shortage-young-people?show-fields=all", true);
    xmlhttp.send();
  };

  ListController.prototype.getArticleIdFromUrl = function (location) {
    return location.hash.split("/")[1];
  };

  ListController.prototype.getArticleByID = function (id) {
    return this.list.findArticleByID(id);
  };

  ListController.prototype.showArticleForCurrentURL = function (location, element) {
    var id = this.getArticleIdFromUrl(location);
    var article = this.getArticleByID(id);
    this.insertArticleHTML(article, element);
  };

  ListController.prototype.makeURLChangeShowArticleContent = function () {
    var controller = this;
    window.addEventListener("hashchange", function(){
      controller.showArticleForCurrentURL(window.location, document.getElementById("article"));
    });
  };

  exports.ListController = ListController;

})(this);
