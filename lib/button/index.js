(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.aaa = factory());
}(this, (function () { 'use strict';

  var EaInput = {
  render: function(){var _vm=this;var _h=_vm.$createElement;_vm._self._c||_h;return _vm._m(0)},
  staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inputWrap"},[_c('span',{staticClass:"innerText"},[_vm._v("\n    Hello1\n  ")])])}],
    name: "EaInput",
    // render(){
    //   return (
    //     <div>
    //       11111
    //     </div>
    //   )
    // }
  };

  EaInput.install = function (Vue) {
    Vue.component(EaInput.name, EaInput);
  };

  return EaInput;

})));
