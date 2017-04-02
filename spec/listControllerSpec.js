"strict mode";

function ListDouble() {
  this.addArticleCallCount = 0;
  this.findArticleByIDCallCount = 0;
  this.articles = [];
}

ListDouble.prototype = {
  addArticle: function() {
    this.addArticleCallCount++;
  },
  viewArticles: function() {
    return ["News"];
  },
  findArticleByID: function() {
    this.findArticleByIDCallCount++;
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

function ArticleDouble() {
  this.id = 0;
  this.headline = "Today's Weather";
  this.content = "Weather is sunny today";
  this.author = "John Doe";
  this.date = "02/04/2017";
}

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

function listControllerInsertsHtmlForArticleContent() {
  var listDouble = new ListDouble();
  var controller = new ListController(listDouble);
  var element = new ElementDouble();
  var articleDouble = new ArticleDouble();
  controller.insertArticleHTML(articleDouble, element);
  try {
    new Assert(element.innerHTML === "<div>Weather is sunny today</div>" , "Can't display a note", "listControllerInsertsHtmlForArticleContent").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function listControllerLoadsCorrectIdFromUrl() {
  var listDouble = new ListDouble();
  var controller = new ListController(listDouble);
  function DummyLocation() {
    this.hash = "#articles/0";
  }
  var dummyLocation = new DummyLocation();
  try {
    new Assert( controller.getArticleIdFromUrl(dummyLocation) === "0" , "ID not loaded from URL", "listControllerLoadsCorrectIdFromUrl").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function listControllerGetsArticleById() {
  var listDouble = new ListDouble();
  var controller = new ListController(listDouble);
  var article = new ArticleDouble();
  listDouble.articles.push(article);
  controller.getArticleByID(0);
  try {
    new Assert(listDouble.findArticleByIDCallCount === 1 , "Article not found", "listControllerFindsArticleById").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

listControllerCanBeInstantiated();
listControllerAddsArticleToList();
listControllerCreatesView();
listControllerInsertsHtmlOnPage();
listControllerInsertsHtmlForArticleContent();
listControllerLoadsCorrectIdFromUrl();
listControllerGetsArticleById();
