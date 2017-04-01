"strict mode";

function articleHasHeadline () {
  var article = new Article("News");
  try {
    new Assert(article.hasOwnProperty("headline"), "Headline is not a valid property", "articleHasHeadline").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function articleHasContent () {
  var article = new Article("News", "Warmest day of the year...");
  try {
    new Assert(article.hasOwnProperty("content"), "Content is not a valid property", "articleHasContent").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


articleHasHeadline ();
articleHasContent();
