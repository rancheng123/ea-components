(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.function.name.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.function.name.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.aaa = factory());
}(this, (function () { 'use strict';

  var EaInput = {
    name: "EaInput",
    render: function render(h) {
      return h("div", {
        "class": "inputWrap"
      }, [h("span", {
        "class": "innerText"
      }, ["11111222333"])]);
    }
  };

  EaInput.install = function (Vue) {
    Vue.component(EaInput.name, EaInput);
  };

  return EaInput;

})));
