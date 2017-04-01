"strict mode";

(function(exports) {
  function List() {
    this._articles = [];
  }

List.prototype.addArticle = function (headline, content, author, date) {
  var id = this._articles.length;
  this._articles.push(new Article(id, headline, content, author, date));
};

List.prototype.viewArticles = function () {
  return this._articles;
};

  exports.List = List;
})(this);
