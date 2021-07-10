exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutCounter.vue?vue&type=template&id=20e642c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:(_vm.onVisibilityChange),expression:"onVisibilityChange"}],staticClass:"about-counter pt-120"},[_vm._ssrNode("<div class=\"container\" data-v-20e642c6>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-20e642c6>","</div>",[_vm._ssrNode("<div class=\"col-lg-6\" data-v-20e642c6>","</div>",[_vm._ssrNode("<div class=\"block-title\" data-v-20e642c6><p data-v-20e642c6><img src=\"/assets/images/shapes/heart-2-1.png\" width=\"15\" alt data-v-20e642c6>Help People Now</p> <h3 data-v-20e642c6>Charity for the people <br data-v-20e642c6>you care about.</h3></div> <p class=\"about-counter__text\" data-v-20e642c6>Lorem Ipsum is simply dummy text of the printing and <br data-v-20e642c6> typesetting\n          industry. Have you done google\n          research which <br data-v-20e642c6> works all the time. </p> <ul class=\"list-unstyled ul-list-one\" data-v-20e642c6><li data-v-20e642c6>Nsectetur cing elit.</li> <li data-v-20e642c6>Suspe ndisse suscipit sagittis leo.</li> <li data-v-20e642c6>Entum estibulum dignissim posuere.</li></ul> "),_vm._ssrNode("<div class=\"about-counter__count\" data-v-20e642c6>","</div>",[_vm._ssrNode("<h3 class=\"odometer\" data-v-20e642c6>","</h3>",[_c('countTo',{attrs:{"startVal":0,"endVal":_vm.startCounter ? 8860 : 0,"duration":3000}})],1),_vm._ssrNode(" <p data-v-20e642c6>Donation campaigns <br data-v-20e642c6> are running</p>")],2)],2),_vm._ssrNode(" <div class=\"col-lg-6 \" data-v-20e642c6><div data-wow-duration=\"1500ms\" class=\"about-counter__image clearfix wow fadeInRight\" data-v-20e642c6><div class=\"about-counter__image-content\" data-v-20e642c6><img src=\"/assets/images/shapes/about-count-heart-1-1.png\" alt data-v-20e642c6> <p data-v-20e642c6>We’re here to support you every step of the way.</p></div> <img src=\"/assets/images/resources/about-counter-1-1.jpg\" alt class=\"float-left\" data-v-20e642c6></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutCounter.vue?vue&type=template&id=20e642c6&scoped=true&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(22);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: external "vue-observe-visibility"
var external_vue_observe_visibility_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutCounter.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//


/* harmony default export */ var AboutCountervue_type_script_lang_js_ = ({
  name: "AboutCounter",
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
// CONCATENATED MODULE: ./components/AboutCounter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutCountervue_type_script_lang_js_ = (AboutCountervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutCounter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutCountervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "20e642c6",
  "814e2472"
  
)

/* harmony default export */ var AboutCounter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-counter.js.map