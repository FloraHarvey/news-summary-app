"strict mode";

function ArticleDouble() {
  this.id = 1;
  this.headline = "news";
  this.content = "Weather is sunny today";
  this.author = "John Doe";
  this.date = "02/04/2017";
}


function articleViewTakesArticleOnInstantiation () {
  var articleDouble = new ArticleDouble();
  var articleView = new ArticleView(articleDouble);

  try {
    new Assert(articleView.article, "Article not saved", "articleViewTakesArticleOnInstantiation", articleDouble).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

articleViewTakesArticleOnInstantiation();
