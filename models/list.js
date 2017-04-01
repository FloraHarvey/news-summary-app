"strict mode";

(function(exports) {
  function List() {
    this._articles = [];
  }

List.prototype.addArticle = function (headline, content) {
  this._articles.push(new Article(headline, content));
};

List.prototype.viewArticles = function () {
  return this._articles;
};

  exports.List = List;
})(this);
