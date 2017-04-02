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
  list.addArticle("News", "Warmest day of the year...", "John Doe", "02/04/2017 15.30", "img.jpg");
  try {
    new Assert(listView.generateHeadlineHtml() === "<ul><li><div class='list-img'><img src='img.jpg'></div><div class='list-text'><a href='#articles/0'>News - John Doe - 02/04/2017 15.30</a></div></li></ul>",
    "listView did not generate HTML", "listViewCanGenerateHtml").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


listViewCanBeInstantiatedWithList();
listViewCanGenerateHtml();
