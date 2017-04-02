"strict mode";

(function(exports) {
  function ArticleView (article) {
    this.article = article;
  }

  ArticleView.prototype.generateArticleHTML = function () {
    return "<div>" + this.article.content + "</div>";
  };

exports.ArticleView = ArticleView;

})(this);
