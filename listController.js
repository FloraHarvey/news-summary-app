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

  ListController.prototype.makeApiRequest = function (url) {
    getData(url, saveJSONResponseAsList);
  };

  exports.ListController = ListController;

})(this);
