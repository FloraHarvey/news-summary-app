"strict mode";

(function(exports) {
  function List() {
    this.articles = [];
  }

List.prototype.addArticle = function (headline, content) {
  this.articles.push(new Article(headline, content));
};

  exports.List = List;
})(this);
