"strict mode";

function listViewCanBeInstantiatedWithList () {
  var list = new List();
  var listView = new ListView(list);
  try {
    new Assert(listView, "listView was not instantiated", "listViewCanBeInstantiatedWithList").isTypeOf(ListView);
  }
  catch(err) {
    console.log(err.message);
  }
}

function listViewCanGenerateHtml () {
  var list = new List();
  var listView = new ListView(list);
  list.addArticle("News", "Warmest day of the year...");
  try {
    new Assert(listView.generateHeadlineHtml() === "<ul><li>News</li></ul>", "listView did not generate HTML", "listViewCanGenerateHtml").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


listViewCanBeInstantiatedWithList();
listViewCanGenerateHtml();
