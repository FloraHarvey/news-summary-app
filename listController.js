"strict mode";

(function(exports) {

  function ListController (list) {
    this.list = list;
    this.view = new ListView(list);
  }

  ListController.prototype.addArticle = function (headline, content, author, date) {
    this.list.addArticle(headline, content, author, date);
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
              controller.addArticle(content.headline, content.body, content.byline, content.lastModified);
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

  exports.ListController = ListController;

})(this);
