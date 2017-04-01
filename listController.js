"strict mode";

(function(exports) {

  function ListController (list) {
    this.list = list;
    this.view = new ListView(list);
  }

ListController.prototype.addArticle = function (headline, content) {
  this.list.addArticle(headline, content);
};

  exports.ListController = ListController;

})(this);
