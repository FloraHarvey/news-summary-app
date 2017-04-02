"strict mode";

(function(exports) {

  function ListView(list) {
    this.list = list;
  }

  ListView.prototype.generateHeadlineHtml = function () {
    return "<ul>" + this.list.viewArticles().map(function(article) {
      return "<li><a href='#articles/" + article.id + "'>" + article.headline + " - " + article.author +
      " - " + article.date + "</a><img src='" + article.thumbnail + "' style='height:100px;'></li>";
    }).join("") + "</ul>";
  };



  exports.ListView = ListView;
})(this);
