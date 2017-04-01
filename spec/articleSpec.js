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


articleHasHeadline ();
