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


listViewCanBeInstantiatedWithList();
