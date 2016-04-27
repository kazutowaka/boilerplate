/**
 * Recruit Holdings common script.
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


  $(document).on('ready', Common.render.apply(Common));
  $(window).on('load', Common.load.apply(Common));

}(
  window,
  window.jQuery
));
