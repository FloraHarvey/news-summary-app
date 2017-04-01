"strict mode";

function listCanAddArticle () {
  var list = new List();
  list.addArticle("News", "Warmest day of the year...");
  try {
    new Assert(list._articles[0].headline === "News", "List cannot add article", "listCanAddArticle").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function listCanShowArticles () {
  var list = new List();
  list.addArticle("News", "Warmest day of the year...");
  try {
    new Assert(list.viewArticles()[0].headline === "News", "List cannot show articles", "listCanShowArticles").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


listCanAddArticle();
listCanShowArticles();
