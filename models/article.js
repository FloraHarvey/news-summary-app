"strict mode";

(function(exports) {
  function Article(id, headline, content, author, date) {
    this.id = id;
    this.headline = headline;
    this.content = content;
    this.author = author;
    this.date = date;
  }

  exports.Article = Article;
})(this);
