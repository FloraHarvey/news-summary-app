"strict mode";

function ListDouble() {
  this.addArticleCallCount = 0;
}

ListDouble.prototype = {
  addArticle: function() {
    this.addArticleCallCount++;
  },
  viewArticles: function() {
    return ["News"];
  }
};

function ElementDouble() {
  this.innerHTML = "";
}

function ViewDouble() {}
ViewDouble.prototype = {
  generateHeadlineHtml: function() {
    return "Headlines";
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

function listControllerAddsArticleToList () {
  var listDouble = new ListDouble();
  var controller = new ListController(listDouble);
  controller.addArticle("News", "Warmest day of the year...");
  try {
    new Assert(listDouble.addArticleCallCount, "Article not added to list", "listControllerAddsArticleToList", 1).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function listControllerCreatesView () {
  var listDouble = new ListDouble();
  var controller = new ListController(listDouble);
  try {
    new Assert(controller.view, "View not created", "listControllerCreatesView").isTypeOf(ListView);
  }
  catch(err) {
    console.log(err.message);
  }
}

function listControllerInsertsHtmlOnPage () {
  var listDouble = new ListDouble();
  var controller = new ListController(listDouble);
  controller.view = new ViewDouble(ListDouble);
  var element = new ElementDouble();
  controller.insertListHTML(element);

  try {
    new Assert(element.innerHTML, "HTML not added to page", "listControllerInsertsHtmlOnPage", "Headlines").isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

listControllerCanBeInstantiated();
listControllerAddsArticleToList();
listControllerCreatesView();
listControllerInsertsHtmlOnPage();
