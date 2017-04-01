"strict mode";

(function(exports) {

  function ListView(list) {
    this.list = list;
  }

  ListView.prototype.generateHeadlineHtml = function () {
    return "<ul>" + this.list.viewArticles().map(function(article) {
      return "<li><a href='#articles/" + article.id + "'>" + article.headline + " - " + article.author +
      " - " + article.date + "</a></li>";
    }).join("") + "</ul>";
  };



  exports.ListView = ListView;
})(this);
