"strict mode";

(function(exports) {

  function ListController (list) {
    this.list = list;
    this.view = new ListView(list);
  }

  ListController.prototype.addArticle = function (headline, content) {
    this.list.addArticle(headline, content);
  };

  ListController.prototype.insertListHTML = function (element) {
    element.innerHTML = this.view.generateHeadlineHtml();
  };

  exports.ListController = ListController;

})(this);
