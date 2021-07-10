exports.ids = [22];
exports.modules = {

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Funfact.vue?vue&type=template&id=38ecd0e2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:(_vm.onVisibilityChange),expression:"onVisibilityChange"}],staticClass:"fact-counter"},[_vm._ssrNode("<div class=\"container\" data-v-38ecd0e2>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-38ecd0e2>","</div>",[_vm._ssrNode("<div class=\"col-md-6 col-lg-3 text-center\" data-v-38ecd0e2>","</div>",[_vm._ssrNode("<h3 class=\"odometer\" data-v-38ecd0e2>","</h3>",[_c('countTo',{attrs:{"startVal":0,"endVal":_vm.startCounter ? 8860 : 0,"duration":3000}})],1),_vm._ssrNode(" <p data-v-38ecd0e2>Fund Raised</p> <a href=\"#\" data-v-38ecd0e2>+</a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 col-lg-3 text-center\" data-v-38ecd0e2>","</div>",[_vm._ssrNode("<h3 class=\"odometer\" data-v-38ecd0e2>","</h3>",[_c('countTo',{attrs:{"startVal":0,"endVal":_vm.startCounter ? 456 : 0,"duration":3000}})],1),_vm._ssrNode(" <p data-v-38ecd0e2>Fund Raised</p> <a href=\"#\" data-v-38ecd0e2>+</a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 col-lg-3 text-center\" data-v-38ecd0e2>","</div>",[_vm._ssrNode("<h3 class=\"odometer\" data-v-38ecd0e2>","</h3>",[_c('countTo',{attrs:{"startVal":0,"endVal":_vm.startCounter ? 6208 : 0,"duration":3000}})],1),_vm._ssrNode(" <p data-v-38ecd0e2>Fund Raised</p> <a href=\"#\" data-v-38ecd0e2>+</a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 col-lg-3 text-center\" data-v-38ecd0e2>","</div>",[_vm._ssrNode("<h3 class=\"odometer\" data-v-38ecd0e2>","</h3>",[_c('countTo',{attrs:{"startVal":0,"endVal":_vm.startCounter ? 960 : 0,"duration":3000}})],1),_vm._ssrNode(" <p data-v-38ecd0e2>Fund Raised</p> <a href=\"#\" data-v-38ecd0e2>+</a>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Funfact.vue?vue&type=template&id=38ecd0e2&scoped=true&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(22);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: external "vue-observe-visibility"
var external_vue_observe_visibility_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Funfact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Funfactvue_type_script_lang_js_ = ({
  name: "Funfact",
  components: {
    countTo: external_vue_count_to_default.a
  },
  directives: {
    ObserveVisibility: external_vue_observe_visibility_["ObserveVisibility"]
  },

  data() {
    return {
      startCounter: false
    };
  },

  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Funfact.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Funfactvue_type_script_lang_js_ = (Funfactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Funfact.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Funfactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38ecd0e2",
  "eec42efa"
  
)

/* harmony default export */ var Funfact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=funfact.js.map