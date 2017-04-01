"strict mode";

function ListDouble() {
  this.addArticleCallCount = 0;
}

ListDouble.prototype = {
  createNote: function() {
    this.addArticleCallCount++;
  },
  viewArticles: function() {
    return ["News"];
  }
};

function listControllerCanBeInstantiated () {
  var listDouble = new ListDouble();
  var controller = new ListController(listDouble);
  try {
    new Assert(controller, "ListController was not instantiated", "listControllerCanBeInstantiated").isTypeOf(ListController);
  }
  catch(err) {
    console.log(err.message);
  }
}

listControllerCanBeInstantiated();
