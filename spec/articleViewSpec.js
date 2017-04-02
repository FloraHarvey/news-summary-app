"strict mode";

function ArticleDouble() {
  this.id = 1;
  this.headline = "Today's Weather";
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

function articleViewReturnsHtmlForDisplayingArticleContent () {
  var articleDouble = new ArticleDouble();
  var articleView = new ArticleView(articleDouble);
  try {
    new Assert(articleView.generateArticleHTML(), "Correct HTML not displayed", "articleViewReturnsHtmlForDisplayingArticleContent", "<div>Weather is sunny today</div>").isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

articleViewTakesArticleOnInstantiation();
articleViewReturnsHtmlForDisplayingArticleContent();
