"strict mode";

(function(exports) {

  function ListView(list) {
    this.list = list;
  }

  ListView.prototype.generateHeadlineHtml = function () {
    return this.list.viewArticles().map(function(article) {
      return "<ul><li>" + article.headline + "</li></ul>";
    }).join();
  };



  exports.ListView = ListView;
})(this);
