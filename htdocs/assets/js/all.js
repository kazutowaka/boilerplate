(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @param  {[Object]} exports Window object.
 * @param  {[Object]} $       jQuery.
 */
(function(exports, $) {

  "use strict";

  var Hoge = require('./modules/hoge')
    , Hogehoge = require('./modules/hogehoge');

  /**
   * @module Common.
   */
  var Common = {

    /**
     * DOMContent loaded.
     */
    render: function() {
    	var self = this;

      var hoge = new Hoge();
      var hogehoge = new Hogehoge();
    },

    /**
     * Window on loaded.
     */
    load: function() {
    	var self = this;

    }
  };

  $(function() {
    Common.render();
  });

  $(window).on('load', function() {
    Common.load();
  });

}(
  window,
  window.jQuery
));

},{"./modules/hoge":2,"./modules/hogehoge":3}],2:[function(require,module,exports){
/**
 * Hoge function.
 */
var Hoge = function() {
  this.init();
};

Hoge.prototype = {

  init: function () {
    var self = this;

    self.setParam();
    self.bindEvent();
  },

  setParam: function() {
    var self = this;

  },

  bindEvent: function() {
    var self = this;

  }
};

module.exports = Hoge;

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
