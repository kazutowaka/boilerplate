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
