"strict mode";

function listCanAddArticle () {
  var list = new List();
  list.addArticle("News", "Warmest day of the year...");
  try {
    new Assert(list.articles[0].headline === "News", "List cannot add article", "listCanAddArticle").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


listCanAddArticle();
