"strict mode";

(function(exports) {

  function ListController (list) {
    this.list = list;
    this.view = new ListView(list);
  }

  exports.ListController = ListController;

})(this);
