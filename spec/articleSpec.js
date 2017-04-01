"strict mode";

function articleHasHeadline () {
  var article = new Article(1, "News");
  try {
    new Assert(article.hasOwnProperty("headline"), "Headline is not a valid property", "articleHasHeadline").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function articleHasContent () {
  var article = new Article(1, "News", "Warmest day of the year...");
  try {
    new Assert(article.hasOwnProperty("content"), "Content is not a valid property", "articleHasContent").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function articleHasAuthor () {
  var article = new Article(1, "News", "Warmest day of the year...", "John Doe");
  try {
    new Assert(article.hasOwnProperty("author"), "Author is not a valid property", "articleHasAuthor").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function articleHasDateTime () {
  var article = new Article(1, "News", "Warmest day of the year...", "John Doe", "02/04/2017 - 15.30");
  try {
    new Assert(article.hasOwnProperty("date"), "Date is not a valid property", "articleHasDateTime").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function articleHasId () {
  var article = new Article(1, "News", "Warmest day of the year...", "John Doe", "02/04/2017 - 15.30");
  try {
    new Assert(article.hasOwnProperty("id"), "ID is not a valid property", "articleHasId").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

articleHasHeadline ();
articleHasContent();
articleHasAuthor();
articleHasDateTime();
articleHasId();
