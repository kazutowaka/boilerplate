/**
 * Hogehoge function.
 */
var Hogehoge = function() {
  this.init();
};

Hogehoge.prototype = {

  init: function() {
    var self = this;

    $('.js-hogehoge').each(function() {
      new HogehogeUnit($(this));
    });
  }
};

/**
 * Hogehoge unit function.
 */
var HogehogeUnit = function($el) {
  this.$el = $el;
  this.init();
};

HogehogeUnit.prototype = {

  init: function () {
    var self = this;

    self.setParam();
  },

  setParam: function() {
    var self = this;

  }

};

module.exports = Hogehoge;
