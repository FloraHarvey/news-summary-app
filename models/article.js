"strict mode";

(function(exports) {
  function Article(id, headline, content, author, date, thumbnail) {
    this.id = id;
    this.headline = headline;
    this.content = content;
    this.author = author;
    this.date = date;
    this.thumbnail = thumbnail;
  }

  exports.Article = Article;
})(this);
