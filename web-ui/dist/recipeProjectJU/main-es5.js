function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common/globalconstant */
    "./src/app/common/globalconstant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /*import { setTimeout } from 'timers';*/


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.isAuth = false;
      this.gl = _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].siteTitle;
      this.title = 'FridgeToPlate';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 21,
      vars: 0,
      consts: [[1, "nav", "navbar-nav", "navbar-left"], ["routerLinkActive", "active"], ["routerLink", "FindRecipe"], ["routerLink", "MyFridge"], ["routerLink", "CreateRecipe"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLink", "SubscribePage"], ["routerLink", "LogIn"], ["routerLink", "UserPage"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trouver une recette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mon frigo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cr\xE9er une recette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "S'inscrire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mon compte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _myfridge_myfridge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./myfridge/myfridge.component */
    "./src/app/myfridge/myfridge.component.ts");
    /* harmony import */


    var _createrecipe_createrecipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./createrecipe/createrecipe.component */
    "./src/app/createrecipe/createrecipe.component.ts");
    /* harmony import */


    var _findrecipe_findrecipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./findrecipe/findrecipe.component */
    "./src/app/findrecipe/findrecipe.component.ts");
    /* harmony import */


    var _displayingrecipe_displayingrecipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./displayingrecipe/displayingrecipe.component */
    "./src/app/displayingrecipe/displayingrecipe.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./userpage/userpage.component */
    "./src/app/userpage/userpage.component.ts");
    /* harmony import */


    var _subscribepage_subscribepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./subscribepage/subscribepage.component */
    "./src/app/subscribepage/subscribepage.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _listrecipe_listrecipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./listrecipe/listrecipe.component */
    "./src/app/listrecipe/listrecipe.component.ts");
    /* harmony import */


    var _tilerecipe_tilerecipe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tilerecipe/tilerecipe.component */
    "./src/app/tilerecipe/tilerecipe.component.ts");
    /* harmony import */


    var _listingredient_listingredient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./listingredient/listingredient.component */
    "./src/app/listingredient/listingredient.component.ts");
    /* harmony import */


    var _myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./myrecipe/myrecipe.component */
    "./src/app/myrecipe/myrecipe.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var appRoutes = [{
      path: 'FindRecipe',
      component: _findrecipe_findrecipe_component__WEBPACK_IMPORTED_MODULE_6__["FindrecipeComponent"]
    }, {
      path: 'UserPage',
      component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_9__["UserpageComponent"]
    }, {
      path: 'SubscribePage',
      component: _subscribepage_subscribepage_component__WEBPACK_IMPORTED_MODULE_10__["SubscribepageComponent"]
    }, {
      path: 'MyFridge',
      component: _myfridge_myfridge_component__WEBPACK_IMPORTED_MODULE_4__["MyfridgeComponent"]
    }, {
      path: 'CreateRecipe',
      component: _createrecipe_createrecipe_component__WEBPACK_IMPORTED_MODULE_5__["CreaterecipeComponent"]
    }, {
      path: 'LogIn',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _myfridge_myfridge_component__WEBPACK_IMPORTED_MODULE_4__["MyfridgeComponent"], _createrecipe_createrecipe_component__WEBPACK_IMPORTED_MODULE_5__["CreaterecipeComponent"], _findrecipe_findrecipe_component__WEBPACK_IMPORTED_MODULE_6__["FindrecipeComponent"], _displayingrecipe_displayingrecipe_component__WEBPACK_IMPORTED_MODULE_7__["DisplayingrecipeComponent"], _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_9__["UserpageComponent"], _subscribepage_subscribepage_component__WEBPACK_IMPORTED_MODULE_10__["SubscribepageComponent"], _listrecipe_listrecipe_component__WEBPACK_IMPORTED_MODULE_12__["ListrecipeComponent"], _tilerecipe_tilerecipe_component__WEBPACK_IMPORTED_MODULE_13__["TilerecipeComponent"], _listingredient_listingredient_component__WEBPACK_IMPORTED_MODULE_14__["ListingredientComponent"], _myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_15__["MyrecipeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _myfridge_myfridge_component__WEBPACK_IMPORTED_MODULE_4__["MyfridgeComponent"], _createrecipe_createrecipe_component__WEBPACK_IMPORTED_MODULE_5__["CreaterecipeComponent"], _findrecipe_findrecipe_component__WEBPACK_IMPORTED_MODULE_6__["FindrecipeComponent"], _displayingrecipe_displayingrecipe_component__WEBPACK_IMPORTED_MODULE_7__["DisplayingrecipeComponent"], _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_9__["UserpageComponent"], _subscribepage_subscribepage_component__WEBPACK_IMPORTED_MODULE_10__["SubscribepageComponent"], _listrecipe_listrecipe_component__WEBPACK_IMPORTED_MODULE_12__["ListrecipeComponent"], _tilerecipe_tilerecipe_component__WEBPACK_IMPORTED_MODULE_13__["TilerecipeComponent"], _listingredient_listingredient_component__WEBPACK_IMPORTED_MODULE_14__["ListingredientComponent"], _myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_15__["MyrecipeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/globalconstant.ts":
  /*!******************************************!*\
    !*** ./src/app/common/globalconstant.ts ***!
    \******************************************/

  /*! exports provided: GlobalConstant */

  /***/
  function srcAppCommonGlobalconstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalConstant", function () {
      return GlobalConstant;
    });

    var GlobalConstant = function GlobalConstant() {
      _classCallCheck(this, GlobalConstant);
    };

    GlobalConstant.siteTitle = "This is example of ItSolutionStuff.com";
    GlobalConstant.IS_LOGGED_ = false;
    GlobalConstant.MY_FRIDGE_ = "";
    GlobalConstant.PUBLISHED_RECIPE_ = [{
      personnumber: 4,
      name: 'Canard orange',
      grade: '4'
    }, {
      personnumber: 4,
      name: 'Entrecôte morille',
      grade: '4'
    }];
    GlobalConstant.FAVOURITE_RECIPE_ = [{
      personnumber: 4,
      name: 'Terrine boeuf',
      grade: '4'
    }, {
      personnumber: 4,
      name: 'Sauté vaud',
      grade: '4'
    }, {
      personnumber: 4,
      name: 'Ragout boeuf',
      grade: '2'
    }, {
      personnumber: 4,
      name: 'Hot dog',
      grade: '4'
    }];
    GlobalConstant.INGREDIENT_LIST_ = [{
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Persil',
      quantity: '200gr',
      unit: 10
    }, {
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Sauté vaud',
      quantity: '600gr',
      unit: 8
    }, {
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Ragout boeuf',
      quantity: '800gr',
      unit: 4
    }, {
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Hot dog',
      quantity: '200gr',
      unit: 2
    }];
    GlobalConstant.CREATE_RECIPE_ = [];
    GlobalConstant.SEARCHED_RECIPE_ = [{
      personnumber: 4,
      name: 'Terrine boeuf',
      grade: '4'
    }, {
      personnumber: 4,
      name: 'Sauté vaud',
      grade: '4'
    }, {
      personnumber: 4,
      name: 'Ragout boeuf',
      grade: '2'
    }, {
      personnumber: 4,
      name: 'Hot dog',
      grade: '4'
    }];
    GlobalConstant.MY_RECIPE_ = [{
      personnumber: 4,
      name: 'Canard orange',
      grade: '4'
    }, {
      personnumber: 4,
      name: 'Entrecôte morille',
      grade: '4'
    }];
    GlobalConstant.DISPLAYING_RECIPE_ = [{
      id: 1,
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Persil',
      quantity: '200gr',
      unit: 10
    }, {
      id: 2,
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Sauté vaud',
      quantity: '600gr',
      unit: 8
    }, {
      id: 3,
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Ragout boeuf',
      quantity: '800gr',
      unit: 4
    }, {
      id: 4,
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      name: 'Hot dog',
      quantity: '200gr',
      unit: 2
    }];
    /***/
  },

  /***/
  "./src/app/createrecipe/createrecipe.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/createrecipe/createrecipe.component.ts ***!
    \********************************************************/

  /*! exports provided: CreaterecipeComponent */

  /***/
  function srcAppCreaterecipeCreaterecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreaterecipeComponent", function () {
      return CreaterecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/globalconstant */
    "./src/app/common/globalconstant.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _listingredient_listingredient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../listingredient/listingredient.component */
    "./src/app/listingredient/listingredient.component.ts");

    var CreaterecipeComponent =
    /*#__PURE__*/
    function () {
      function CreaterecipeComponent() {
        _classCallCheck(this, CreaterecipeComponent);

        this.recipename = '';
        /*Name of the recipe.*/

        this.personnumber = '';
        /*How much people.*/

        this.preptime = '';
        /*Preparation time.*/

        this.preptext = '';
        /*How to prepare recipe.*/

        this.descriptiontext = '';
        /*Description of the recipe.*/

        this.ingredientlist = _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].CREATE_RECIPE_;
        /*List of the ingredients stored in the fake database.*/
      }

      _createClass(CreaterecipeComponent, [{
        key: "publishRecipe",
        value: function publishRecipe() {
          console.log("PublishRecipe appuyé.");
        }
      }, {
        key: "getDescriptionText",
        value: function getDescriptionText() {
          return this.descriptiontext;
        }
      }, {
        key: "getPreparationText",
        value: function getPreparationText() {
          return this.preptext;
        }
      }, {
        key: "getPreparationTime",
        value: function getPreparationTime() {
          return this.preptime;
        }
      }, {
        key: "getPersonNumber",
        value: function getPersonNumber() {
          return this.personnumber;
        }
      }, {
        key: "getRecipeName",
        value: function getRecipeName() {
          return this.recipename;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CreaterecipeComponent;
    }();

    CreaterecipeComponent.ɵfac = function CreaterecipeComponent_Factory(t) {
      return new (t || CreaterecipeComponent)();
    };

    CreaterecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreaterecipeComponent,
      selectors: [["app-createrecipe"]],
      decls: 62,
      vars: 12,
      consts: [[2, "text-align", "center"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "listingredient", "iseditable"], ["rows", "8", "cols", "100", 3, "ngModel", "ngModelChange"], [1, "btn", "button-success", 3, "click"]],
      template: function CreaterecipeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nouvelle recette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nom de la recette:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreaterecipeComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.recipename = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre de personnes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreaterecipeComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.personnumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Temps de pr\xE9paration: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreaterecipeComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.preptime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ingr\xE9dients de la recette:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-listingredient", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pr\xE9paration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreaterecipeComponent_Template_textarea_ngModelChange_32_listener($event) {
            return ctx.preptext = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreaterecipeComponent_Template_textarea_ngModelChange_36_listener($event) {
            return ctx.descriptiontext = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreaterecipeComponent_Template_button_click_40_listener() {
            return ctx.publishRecipe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Publier recette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xA0Attention: publier une nouvelle recette sera d'abord soumise en attente de validation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipename);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.personnumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preptime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listingredient", ctx.ingredientlist)("iseditable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preptext);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descriptiontext);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nom de la recette: ", ctx.getRecipeName(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nombre de personnes: ", ctx.getPersonNumber(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Temps de pr\xE9paration: ", ctx.getPreparationTime(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pr\xE9paration: ", ctx.getPreparationText(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx.getDescriptionText(), "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _listingredient_listingredient_component__WEBPACK_IMPORTED_MODULE_3__["ListingredientComponent"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n    margin-left: auto;\n  margin-right: auto;\n\n \n \n  \n}\n\n\nh1[_ngcontent-%COMP%]{\n\tcolor: orange\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcmVjaXBlL2NyZWF0ZXJlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjs7RUFFbEIsd0JBQXdCOztFQUV4QixZQUFZOztJQUVWLGlCQUFpQjtFQUNuQixrQkFBa0I7O0NBRW5CLDZDQUE2QztDQUM3Qyx5REFBeUQ7RUFDeEQsNEVBQTRFO0FBQzlFOzs7QUFHQTtDQUNDO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVyZWNpcGUvY3JlYXRlcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyOiAxcHggbGluZSAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAxNTA7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gIHdpZHRoOiA0NTBweDtcblxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogcG9zdHVsYXQgZGUgZMOpcGFydCAqL1xuIC8qIHRvcDogNTAlOyBsZWZ0OiA1MCU7IC8qIMOgIDUwJS81MCUgZHUgcGFyZW50IHLDqWbDqXJlbnQgKi9cbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogZMOpY2FsYWdlIGRlIDUwJSBkZSBzYSBwcm9wcmUgdGFpbGxlICovXG59XG5cblxuaDF7XG5cdGNvbG9yOiBvcmFuZ2Vcbn1cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreaterecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-createrecipe',
          templateUrl: './createrecipe.component.html',
          styleUrls: ['./createrecipe.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/displayingrecipe/displayingrecipe.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/displayingrecipe/displayingrecipe.component.ts ***!
    \****************************************************************/

  /*! exports provided: DisplayingrecipeComponent */

  /***/
  function srcAppDisplayingrecipeDisplayingrecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayingrecipeComponent", function () {
      return DisplayingrecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisplayingrecipeComponent =
    /*#__PURE__*/
    function () {
      function DisplayingrecipeComponent() {
        _classCallCheck(this, DisplayingrecipeComponent);
      }

      _createClass(DisplayingrecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DisplayingrecipeComponent;
    }();

    DisplayingrecipeComponent.ɵfac = function DisplayingrecipeComponent_Factory(t) {
      return new (t || DisplayingrecipeComponent)();
    };

    DisplayingrecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisplayingrecipeComponent,
      selectors: [["app-displayingrecipe"]],
      decls: 0,
      vars: 0,
      template: function DisplayingrecipeComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheWluZ3JlY2lwZS9kaXNwbGF5aW5ncmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVGRSIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXlpbmdyZWNpcGUvZGlzcGxheWluZ3JlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouc2hhZG93IHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmU2ZTY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuXG5cbmltZy5pbWctcmVzcG9uc2l2ZSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gICAgICBpbWcuaW1nLXJlc3BvbnNpdmUuc2hhZG93IHtcbiAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICBoMSB7XG4gICBmb250LXNpemU6IDI1cHg7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgfVxuICBpbWcuaW1nLXJlc3BvbnNpdmUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIGxpLmxpc3QtZ3JvdXAtaXRlbS5zaGFkb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICAgIGxlZnQgOiAzMHB4O1xuICB9XG5cbiAgI2Ryb3Bkb3duIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gICAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICAgIGxlZnQgOiAyMHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICBoMSB7XG4gICBmb250LXNpemU6IDI1cHg7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgfVxuICBpbWcuaW1nLXJlc3BvbnNpdmUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIGxpLmxpc3QtZ3JvdXAtaXRlbS5zaGFkb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiBidXR0b24uYnRuLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZXtcbiAgICBsZWZ0IDogMHB4O1xuICB9XG5cbiAgICAjZHJvcGRvd24ge1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG5cbn0qL1xuXG5cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayingrecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-displayingrecipe',
          templateUrl: './displayingrecipe.component.html',
          styleUrls: ['./displayingrecipe.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/findrecipe/findrecipe.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/findrecipe/findrecipe.component.ts ***!
    \****************************************************/

  /*! exports provided: FindrecipeComponent */

  /***/
  function srcAppFindrecipeFindrecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindrecipeComponent", function () {
      return FindrecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/globalconstant */
    "./src/app/common/globalconstant.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _listrecipe_listrecipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../listrecipe/listrecipe.component */
    "./src/app/listrecipe/listrecipe.component.ts");

    var FindrecipeComponent =
    /*#__PURE__*/
    function () {
      function FindrecipeComponent() {
        _classCallCheck(this, FindrecipeComponent);

        this.ratinggrade = '';
        this.recipename = '';
        /*Name of the recipe.*/

        this.personnumber = '';
        /*How much people.*/

        this.preptime = '';
        /*Preparation time.*/

        this.FridgeCheck = true;
        this.VegetarianCheck = true;
        this.searched_recipe_ = _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].SEARCHED_RECIPE_;
      }

      _createClass(FindrecipeComponent, [{
        key: "searchButton",
        value: function searchButton() {
          console.log("Search button is pressed.");
        }
      }, {
        key: "getRating",
        value: function getRating() {
          return this.ratinggrade;
        }
      }, {
        key: "publishRecipe",
        value: function publishRecipe() {
          console.log("PublishRecipe appuyé.");
        }
      }, {
        key: "getPreparationTime",
        value: function getPreparationTime() {
          return this.preptime;
        }
      }, {
        key: "getPersonNumber",
        value: function getPersonNumber() {
          return this.personnumber;
        }
      }, {
        key: "getRecipeName",
        value: function getRecipeName() {
          return this.recipename;
        }
      }, {
        key: "VegetarianSwitch",
        value: function VegetarianSwitch() {
          if (this.VegetarianCheck) {
            this.VegetarianCheck = false;
          } else {
            this.VegetarianCheck = true;
          }

          console.log("Checkbox Vegetarian");
        }
      }, {
        key: "FridgeSwitch",
        value: function FridgeSwitch() {
          if (this.FridgeCheck) {
            this.FridgeCheck = false;
          } else {
            this.FridgeCheck = true;
          }

          console.log("Checkbox Fridge");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FindrecipeComponent;
    }();

    FindrecipeComponent.ɵfac = function FindrecipeComponent_Factory(t) {
      return new (t || FindrecipeComponent)();
    };

    FindrecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FindrecipeComponent,
      selectors: [["app-findrecipe"]],
      decls: 53,
      vars: 16,
      consts: [[2, "color", "orange", "text-align", "center"], [2, "text-align", "center"], ["type", "text", "width", "30px", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 3, "checked", "change"], [1, "btn", "button-success", 3, "click"], [3, "listrecipe", "modefavourite", "modedeletefromfavourite", "modepublish"]],
      template: function FindrecipeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trouver une recette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nom de la recette:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FindrecipeComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.recipename = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre de personnes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FindrecipeComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.personnumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Temps de pr\xE9paration: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FindrecipeComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.preptime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Note:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FindrecipeComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.ratinggrade = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FindrecipeComponent_Template_input_change_26_listener() {
            return ctx.VegetarianSwitch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FindrecipeComponent_Template_input_change_29_listener() {
            return ctx.FridgeSwitch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindrecipeComponent_Template_button_click_32_listener() {
            return ctx.searchButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Rechercher recette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Listes des recettes qui satisfont ces exigences:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-listrecipe", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipename);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.personnumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preptime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ratinggrade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.VegetarianCheck);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("V\xE9g\xE9tarien ", ctx.VegetarianCheck, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.FridgeCheck);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Du frigo ", ctx.FridgeCheck, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listrecipe", ctx.searched_recipe_)("modefavourite", true)("modedeletefromfavourite", true)("modepublish", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nom recette: ", ctx.getRecipeName(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dur\xE9e pr\xE9paration ", ctx.getPreparationTime(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Note: ", ctx.getRating(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nombre personnes ", ctx.getPersonNumber(), "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _listrecipe_listrecipe_component__WEBPACK_IMPORTED_MODULE_3__["ListrecipeComponent"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n   margin-left: auto;\n  margin-right: auto;\n\n \n \n  \n}\n\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n\n  border-radius: 150;\n\n\n   margin-left: auto;\n  margin-right: auto;\n\n \n \n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZHJlY2lwZS9maW5kcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCOztFQUVsQix3QkFBd0I7O0VBRXhCLFlBQVk7O0dBRVgsaUJBQWlCO0VBQ2xCLGtCQUFrQjs7Q0FFbkIsNkNBQTZDO0NBQzdDLHlEQUF5RDtFQUN4RCw0RUFBNEU7QUFDOUU7OztBQUdBOztFQUVFLGtCQUFrQjs7O0dBR2pCLGlCQUFpQjtFQUNsQixrQkFBa0I7O0NBRW5CLDZDQUE2QztDQUM3Qyx3REFBd0Q7Q0FDeEQsNEVBQTRFO0FBQzdFIiwiZmlsZSI6InNyYy9hcHAvZmluZHJlY2lwZS9maW5kcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyOiAxcHggbGluZSAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAxNTA7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gIHdpZHRoOiA0NTBweDtcblxuICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcblxuIC8qcG9zaXRpb246IGFic29sdXRlOyAvKiBwb3N0dWxhdCBkZSBkw6lwYXJ0ICovXG4gLyogdG9wOiA1MCU7IGxlZnQ6IDUwJTsgLyogw6AgNTAlLzUwJSBkdSBwYXJlbnQgcsOpZsOpcmVudCAqL1xuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBkw6ljYWxhZ2UgZGUgNTAlIGRlIHNhIHByb3ByZSB0YWlsbGUgKi9cbn1cblxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG5cbiAgYm9yZGVyLXJhZGl1czogMTUwO1xuXG5cbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogcG9zdHVsYXQgZGUgZMOpcGFydCAqL1xuIC8qdG9wOiA1MCU7IGxlZnQ6IDUwJTsgLyogw6AgNTAlLzUwJSBkdSBwYXJlbnQgcsOpZsOpcmVudCAqL1xuIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIGTDqWNhbGFnZSBkZSA1MCUgZGUgc2EgcHJvcHJlIHRhaWxsZSAqL1xufVxuXG5cblxuXG5cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindrecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-findrecipe',
          templateUrl: './findrecipe.component.html',
          styleUrls: ['./findrecipe.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/listingredient/listingredient.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/listingredient/listingredient.component.ts ***!
    \************************************************************/

  /*! exports provided: ListingredientComponent */

  /***/
  function srcAppListingredientListingredientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingredientComponent", function () {
      return ListingredientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/globalconstant */
    "./src/app/common/globalconstant.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ListingredientComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nom de l'ingr\xE9dient:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListingredientComponent_div_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Image de l'ingr\xE9dient:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListingredientComponent_div_2_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.image = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Quantit\xE9: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListingredientComponent_div_2_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.quantity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nombre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListingredientComponent_div_2_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.unit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListingredientComponent_div_2_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.addButton();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ajouter un ingr\xE9dient.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.unit);
      }
    }

    function ListingredientComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListingredientComponent_button_10_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var i_r18 = ctx.index;
          var ingredient_r17 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.addIngredient(i_r18, ingredient_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ajouter \xE0 mes ingr\xE9dients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListingredientComponent_button_10_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var i_r18 = ctx.index;
          var ingredient_r17 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.deleteButton(i_r18, ingredient_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Supprimer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ingredient_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ingredient_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r17.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ingredient_r17.quantity, ",", ingredient_r17.unit, " X");
      }
    }

    var ListingredientComponent =
    /*#__PURE__*/
    function () {
      function ListingredientComponent() {
        _classCallCheck(this, ListingredientComponent);

        this.name = 'Persil';
        this.image = 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg';
        this.unit = 2;
        this.quantity = '2';
        this.modeadd = false;
        this.iseditable = false;
      }

      _createClass(ListingredientComponent, [{
        key: "deleteButton",
        value: function deleteButton(indexOfelement, item) {
          this.listingredient.splice(indexOfelement, 1);
          console.log("Suppression de la liste des ingrédients:");
          console.log(item);
          /*var filtered = this.listingredient.filter(function(item) {
            return item.name !== input.name
            || item.unit !== input.unit
            || item.quantity !== item.quantity;
          });*/

          /*this.listingredient=filtered;*/
        }
      }, {
        key: "addIngredient",
        value: function addIngredient(position, ingredient) {
          console.log("Ajout de cet ingrédient à mon frigo:");
          console.log(ingredient);

          _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].INGREDIENT_LIST_.push(ingredient);
        }
      }, {
        key: "addButton",
        value: function addButton() {
          console.log("Ajout d'un ingrédient:");
          console.log({
            image: this.image,
            name: this.name,
            quantity: this.quantity,
            unit: this.unit
          });
          this.listingredient.push({
            image: this.image,
            name: this.name,
            quantity: this.quantity,
            unit: this.unit
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListingredientComponent;
    }();

    ListingredientComponent.ɵfac = function ListingredientComponent_Factory(t) {
      return new (t || ListingredientComponent)();
    };

    ListingredientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListingredientComponent,
      selectors: [["app-listingredient"]],
      inputs: {
        modeadd: "modeadd",
        listingredient: "listingredient",
        iseditable: "iseditable"
      },
      decls: 11,
      vars: 2,
      consts: [[4, "ngIf"], [1, "row"], [1, "col-xs-12"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "button-success", 2, "align", "center", 3, "click"], [1, "list-group-item"], [1, "list-group-item-heading"], [2, "width", "80px", 3, "src"], ["href", "google.com"], [1, "btn", "btn-default", "pull-right"], [1, "glyphicon", "glyphicon-minus"], [1, "btn", "button-success", 3, "click"]],
      template: function ListingredientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListingredientComponent_div_2_Template, 21, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vos Ingr\xE9dients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListingredientComponent_button_10_Template, 14, 4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iseditable === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listingredient);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n -align: center;\n\n margin-left: auto;\n  margin-right: auto;\n}\n\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZ3JlZGllbnQvbGlzdGluZ3JlZGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7O0VBRWxCLHdCQUF3Qjs7RUFFeEIsWUFBWTs7Q0FFYixjQUFjOztDQUVkLGlCQUFpQjtFQUNoQixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbGlzdGluZ3JlZGllbnQvbGlzdGluZ3JlZGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xuICBib3JkZXI6IDFweCBsaW5lICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDE1MDtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgd2lkdGg6IDQ1MHB4O1xuXG4gLWFsaWduOiBjZW50ZXI7XG5cbiBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5cbnRhYmxlLCB0aCwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingredientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listingredient',
          templateUrl: './listingredient.component.html',
          styleUrls: ['./listingredient.component.css']
        }]
      }], function () {
        return [];
      }, {
        modeadd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listingredient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iseditable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/listrecipe/listrecipe.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/listrecipe/listrecipe.component.ts ***!
    \****************************************************/

  /*! exports provided: ListrecipeComponent */

  /***/
  function srcAppListrecipeListrecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListrecipeComponent", function () {
      return ListrecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/globalconstant */
    "./src/app/common/globalconstant.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListrecipeComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListrecipeComponent_button_5_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;
          var recipe_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteRecipe(i_r2, recipe_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Supprimer recette");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListrecipeComponent_button_5_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;
          var recipe_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.deletePublish(i_r2, recipe_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "D\xE9publier recette");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListrecipeComponent_button_5_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;
          var recipe_r1 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.deleteFavourite(i_r2, recipe_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Supprimer favori");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListrecipeComponent_button_5_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var recipe_r1 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.addPublish(recipe_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Publier recette");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListrecipeComponent_button_5_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var recipe_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.addFavourite(recipe_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ajouter favori");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", recipe_r1.grade, "/5,", recipe_r1.personnumber, " personnes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.personnumber);
      }
    }

    var ListrecipeComponent =
    /*#__PURE__*/
    function () {
      function ListrecipeComponent() {
        _classCallCheck(this, ListrecipeComponent);

        this.modedeletefrompublish = false;
        this.modedeletefromrecipe = false;
        this.modedeletefromfavourite = false;
        this.modepublish = false;
        this.modefavourite = false;
      }

      _createClass(ListrecipeComponent, [{
        key: "deletePublish",
        value: function deletePublish(position, item) {
          console.log("Suppression de la liste des recettes publiées:");
          console.log(item);

          _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].PUBLISHED_RECIPE_.splice(position, 1);
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe(position, item) {
          console.log("Suppression de mes recettes:");
          console.log(item);

          _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].MY_RECIPE_.splice(position, 1);
        }
      }, {
        key: "deleteFavourite",
        value: function deleteFavourite(position, item) {
          console.log("Suppression favori:");
          console.log(item);

          _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].FAVOURITE_RECIPE_.splice(position, 1);
        }
      }, {
        key: "addPublish",
        value: function addPublish(item) {
          console.log("Ajout à la liste des recettes publiées:");
          console.log(item);

          _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].PUBLISHED_RECIPE_.push(item);
        }
      }, {
        key: "addFavourite",
        value: function addFavourite(item) {
          console.log("Ajout favori:");
          console.log(item);

          _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].FAVOURITE_RECIPE_.push(item);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListrecipeComponent;
    }();

    ListrecipeComponent.ɵfac = function ListrecipeComponent_Factory(t) {
      return new (t || ListrecipeComponent)();
    };

    ListrecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListrecipeComponent,
      selectors: [["app-listrecipe"]],
      inputs: {
        modedeletefrompublish: "modedeletefrompublish",
        modedeletefromrecipe: "modedeletefromrecipe",
        modedeletefromfavourite: "modedeletefromfavourite",
        modepublish: "modepublish",
        modefavourite: "modefavourite",
        listrecipe: "listrecipe"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "row"], [1, "col-xs-12"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "list-group-item-heading"], ["src", "https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg", 2, "width", "80px"], ["href", "google.com"], [1, "btn", "btn-default", "pull-right"], [1, "glyphicon", "glyphicon-minus"], [1, "btn", "button-success", 3, "click"], [1, "list-group-item-text"]],
      template: function ListrecipeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vos Recettes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListrecipeComponent_button_5_Template, 22, 4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listrecipe);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdHJlY2lwZS9saXN0cmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbGlzdHJlY2lwZS9saXN0cmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLCB0aCwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListrecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listrecipe',
          templateUrl: './listrecipe.component.html',
          styleUrls: ['./listrecipe.component.css']
        }]
      }], function () {
        return [];
      }, {
        modedeletefrompublish: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modedeletefromrecipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modedeletefromfavourite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modepublish: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modefavourite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listrecipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        this.username = '';
        this.password = '';
      }

      _createClass(LoginComponent, [{
        key: "getPassword",
        value: function getPassword() {
          return this.password;
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return this.username;
        }
      }, {
        key: "loginPressed",
        value: function loginPressed() {
          console.log("Login pressé");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 44,
      vars: 4,
      consts: [[2, "color", "orange", "text-align", "center"], [2, "text-align", "center"], ["for", "fname"], ["width", "30px", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lname"], ["width", "5px", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "button-success", 3, "click"], ["title", "forgotten_password_", "href", "____________"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Se connecter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nom d'utilisateur:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mot de passe:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
            return ctx.loginPressed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pas encore de compte?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mot de passe oubli\xE9?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "S'inscrire.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nom d'utilisateur entr\xE9: ", ctx.getUsername(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mot de passe: ", ctx.getPassword(), "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n  margin-left: auto;\n  margin-right: auto;\n \n\n \n  \n  \n\n}\n\ninput[type=password][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n  margin-left: auto;\n  margin-right: auto;\n \n\n \n  \n  \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7O0VBRWxCLHdCQUF3Qjs7RUFFeEIsWUFBWTs7RUFFWixpQkFBaUI7RUFDakIsa0JBQWtCOzs7Q0FHbkIsNkNBQTZDO0VBQzVDLHdEQUF3RDtFQUN4RCw0RUFBNEU7O0FBRTlFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjs7RUFFbEIsd0JBQXdCOztFQUV4QixZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7OztDQUduQiw2Q0FBNkM7RUFDNUMsd0RBQXdEO0VBQ3hELDRFQUE0RTs7QUFFOUUiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogMXB4IGxpbmUgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogMTUwO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICB3aWR0aDogNDUwcHg7XG5cbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiBcblxuIC8qcG9zaXRpb246IGFic29sdXRlOyAvKiBwb3N0dWxhdCBkZSBkw6lwYXJ0ICovXG4gIC8qdG9wOiA1MCU7IGxlZnQ6IDUwJTsgLyogw6AgNTAlLzUwJSBkdSBwYXJlbnQgcsOpZsOpcmVudCAqL1xuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBkw6ljYWxhZ2UgZGUgNTAlIGRlIHNhIHByb3ByZSB0YWlsbGUgKi9cblxufVxuXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJvcmRlcjogMXB4IGxpbmUgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogMTUwO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICB3aWR0aDogNDUwcHg7XG5cbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiBcblxuIC8qcG9zaXRpb246IGFic29sdXRlOyAvKiBwb3N0dWxhdCBkZSBkw6lwYXJ0ICovXG4gIC8qdG9wOiA1MCU7IGxlZnQ6IDUwJTsgLyogw6AgNTAlLzUwJSBkdSBwYXJlbnQgcsOpZsOpcmVudCAqL1xuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBkw6ljYWxhZ2UgZGUgNTAlIGRlIHNhIHByb3ByZSB0YWlsbGUgKi9cblxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myfridge/myfridge.component.ts":
  /*!************************************************!*\
    !*** ./src/app/myfridge/myfridge.component.ts ***!
    \************************************************/

  /*! exports provided: MyfridgeComponent */

  /***/
  function srcAppMyfridgeMyfridgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyfridgeComponent", function () {
      return MyfridgeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/globalconstant */
    "./src/app/common/globalconstant.ts");
    /* harmony import */


    var _listingredient_listingredient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../listingredient/listingredient.component */
    "./src/app/listingredient/listingredient.component.ts");

    var MyfridgeComponent =
    /*#__PURE__*/
    function () {
      function MyfridgeComponent() {
        _classCallCheck(this, MyfridgeComponent);

        this.ingredientlist = _common_globalconstant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].INGREDIENT_LIST_;
      }

      _createClass(MyfridgeComponent, [{
        key: "addButton",
        value: function addButton() {
          console.log("addButoon pressed.");
        }
      }, {
        key: "deleteButton",
        value: function deleteButton() {
          console.log("deleteButton pressed.");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyfridgeComponent;
    }();

    MyfridgeComponent.ɵfac = function MyfridgeComponent_Factory(t) {
      return new (t || MyfridgeComponent)();
    };

    MyfridgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyfridgeComponent,
      selectors: [["app-myfridge"]],
      decls: 13,
      vars: 2,
      consts: [[2, "color", "orange", "text-align", "center"], [3, "listingredient", "iseditable"]],
      template: function MyfridgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mes ingr\xE9dients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Liste des mes ingr\xE9dients disponibles:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-listingredient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listingredient", ctx.ingredientlist)("iseditable", true);
        }
      },
      directives: [_listingredient_listingredient_component__WEBPACK_IMPORTED_MODULE_2__["ListingredientComponent"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlmcmlkZ2UvbXlmcmlkZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7O0VBRWxCLHdCQUF3Qjs7RUFFeEIsWUFBWTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL215ZnJpZGdlL215ZnJpZGdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyOiAxcHggbGluZSAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAxNTA7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gIHdpZHRoOiA0NTBweDtcblxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyfridgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myfridge',
          templateUrl: './myfridge.component.html',
          styleUrls: ['./myfridge.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myrecipe/myrecipe.component.ts":
  /*!************************************************!*\
    !*** ./src/app/myrecipe/myrecipe.component.ts ***!
    \************************************************/

  /*! exports provided: MyrecipeComponent */

  /***/
  function srcAppMyrecipeMyrecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyrecipeComponent", function () {
      return MyrecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyrecipeComponent =
    /*#__PURE__*/
    function () {
      function MyrecipeComponent() {
        _classCallCheck(this, MyrecipeComponent);
      }

      _createClass(MyrecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyrecipeComponent;
    }();

    MyrecipeComponent.ɵfac = function MyrecipeComponent_Factory(t) {
      return new (t || MyrecipeComponent)();
    };

    MyrecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyrecipeComponent,
      selectors: [["app-myrecipe"]],
      decls: 0,
      vars: 0,
      template: function MyrecipeComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cmVjaXBlL215cmVjaXBlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyrecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myrecipe',
          templateUrl: './myrecipe.component.html',
          styleUrls: ['./myrecipe.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/subscribepage/subscribepage.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/subscribepage/subscribepage.component.ts ***!
    \**********************************************************/

  /*! exports provided: SubscribepageComponent */

  /***/
  function srcAppSubscribepageSubscribepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribepageComponent", function () {
      return SubscribepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SubscribepageComponent =
    /*#__PURE__*/
    function () {
      function SubscribepageComponent() {
        _classCallCheck(this, SubscribepageComponent);

        this.username = '';
        this.password = '';
      }

      _createClass(SubscribepageComponent, [{
        key: "getPassword",
        value: function getPassword() {
          return this.password;
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return this.username;
        }
      }, {
        key: "loginPressed",
        value: function loginPressed() {
          console.log("Login pressé");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubscribepageComponent;
    }();

    SubscribepageComponent.ɵfac = function SubscribepageComponent_Factory(t) {
      return new (t || SubscribepageComponent)();
    };

    SubscribepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubscribepageComponent,
      selectors: [["app-subscribepage"]],
      decls: 34,
      vars: 4,
      consts: [[2, "color", "orange", "text-align", "center"], [2, "text-align", "center"], ["for", "fname"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lname"], ["type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "button-success", 3, "click"]],
      template: function SubscribepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cr\xE9er un compte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nom d'utilisateur:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubscribepageComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mot de passe:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubscribepageComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscribepageComponent_Template_button_click_24_listener() {
            return ctx.loginPressed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "S'inscrire.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "----------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nom d'utilisateur entr\xE9: ", ctx.getUsername(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mot de passe: ", ctx.getPassword(), "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".button[_ngcontent-%COMP%] {\n  \xA0\xA0\xA0-webkit-border-radius: 20px;\n  \xA0\xA0\xA0-moz-border-radius: 20px;\n  \xA0\xA0\xA0border-radius: 20px;\n  \xA0\xA0\xA0color: #FFFFFF;\n  \xA0\xA0\xA0font-family: Open Sans;\n  \xA0\xA0\xA0font-size: 40px;\n  \xA0\xA0\xA0font-weight: 100;\n  \xA0\xA0\xA0padding: 40px;\n  \xA0\xA0\xA0background-color: #3DF6B1;\n  \xA0\xA0\xA0box-shadow: 1px 1px 20px 0px #000000;\n  \xA0\xA0\xA0-webkit-box-shadow: 1px 1px 20px 0px #000000;\n  \xA0\xA0\xA0-moz-box-shadow: 1px 1px 20px 0px #000000;\n  \xA0\xA0\xA0text-shadow: 1px 1px 20px #000000;\n  \xA0\xA0\xA0border: solid #337FED 1px;\n  \xA0\xA0\xA0text-decoration: none;\n  \xA0\xA0\xA0display: inline-block;\n  \xA0\xA0\xA0cursor: pointer;\n  \xA0\xA0\xA0text-align: center;\n  }\n\n  .Button[_ngcontent-%COMP%]:hover {\n  \xA0\xA0\xA0background: #1ED07E;\n  \xA0\xA0\xA0border: solid #337FED 1px;\n  \xA0\xA0\xA0-webkit-border-radius: 20px;\n  \xA0\xA0\xA0-moz-border-radius: 20px;\n  \xA0\xA0\xA0border-radius: 20px;\n  \xA0\xA0\xA0text-decoration: none;\n  }\n\n  input[type=text][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n  margin-left: auto;\n  margin-right: auto;\n \n\n \n  \n  \n\n}\n\n  input[type=password][_ngcontent-%COMP%] {\n  border: 1px line #999;\n  border-radius: 150;\n\n  -webkit-appearance: none;\n\n  width: 450px;\n\n  margin-left: auto;\n  margin-right: auto;\n \n\n \n  \n  \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaWJlcGFnZS9zdWJzY3JpYmVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix1Q0FBdUM7RUFDdkMsK0NBQStDO0VBQy9DLDRDQUE0QztFQUM1QyxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQjs7RUFFQTtFQUNBLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCOztFQUVGO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjs7RUFFbEIsd0JBQXdCOztFQUV4QixZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7OztDQUduQiw2Q0FBNkM7RUFDNUMsd0RBQXdEO0VBQ3hELDRFQUE0RTs7QUFFOUU7O0VBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCOztFQUVsQix3QkFBd0I7O0VBRXhCLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLGtCQUFrQjs7O0NBR25CLDZDQUE2QztFQUM1Qyx3REFBd0Q7RUFDeEQsNEVBQTRFOztBQUU5RSIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXBhZ2Uvc3Vic2NyaWJlcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIMKgwqDCoC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgwqDCoMKgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICDCoMKgwqBib3JkZXItcmFkaXVzOiAyMHB4O1xuICDCoMKgwqBjb2xvcjogI0ZGRkZGRjtcbiAgwqDCoMKgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgwqDCoMKgZm9udC1zaXplOiA0MHB4O1xuICDCoMKgwqBmb250LXdlaWdodDogMTAwO1xuICDCoMKgwqBwYWRkaW5nOiA0MHB4O1xuICDCoMKgwqBiYWNrZ3JvdW5kLWNvbG9yOiAjM0RGNkIxO1xuICDCoMKgwqBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggMHB4ICMwMDAwMDA7XG4gIMKgwqDCoC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IDBweCAjMDAwMDAwO1xuICDCoMKgwqAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMjBweCAwcHggIzAwMDAwMDtcbiAgwqDCoMKgdGV4dC1zaGFkb3c6IDFweCAxcHggMjBweCAjMDAwMDAwO1xuICDCoMKgwqBib3JkZXI6IHNvbGlkICMzMzdGRUQgMXB4O1xuICDCoMKgwqB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIMKgwqDCoGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgwqDCoMKgY3Vyc29yOiBwb2ludGVyO1xuICDCoMKgwqB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuQnV0dG9uOmhvdmVyIHtcbiAgwqDCoMKgYmFja2dyb3VuZDogIzFFRDA3RTtcbiAgwqDCoMKgYm9yZGVyOiBzb2xpZCAjMzM3RkVEIDFweDtcbiAgwqDCoMKgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICDCoMKgwqAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIMKgwqDCoGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIMKgwqDCoHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyOiAxcHggbGluZSAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAxNTA7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gIHdpZHRoOiA0NTBweDtcblxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuIFxuXG4gLypwb3NpdGlvbjogYWJzb2x1dGU7IC8qIHBvc3R1bGF0IGRlIGTDqXBhcnQgKi9cbiAgLyp0b3A6IDUwJTsgbGVmdDogNTAlOyAvKiDDoCA1MCUvNTAlIGR1IHBhcmVudCByw6lmw6lyZW50ICovXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIGTDqWNhbGFnZSBkZSA1MCUgZGUgc2EgcHJvcHJlIHRhaWxsZSAqL1xuXG59XG5cbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYm9yZGVyOiAxcHggbGluZSAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAxNTA7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gIHdpZHRoOiA0NTBweDtcblxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuIFxuXG4gLypwb3NpdGlvbjogYWJzb2x1dGU7IC8qIHBvc3R1bGF0IGRlIGTDqXBhcnQgKi9cbiAgLyp0b3A6IDUwJTsgbGVmdDogNTAlOyAvKiDDoCA1MCUvNTAlIGR1IHBhcmVudCByw6lmw6lyZW50ICovXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIGTDqWNhbGFnZSBkZSA1MCUgZGUgc2EgcHJvcHJlIHRhaWxsZSAqL1xuXG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscribepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subscribepage',
          templateUrl: './subscribepage.component.html',
          styleUrls: ['./subscribepage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tilerecipe/tilerecipe.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tilerecipe/tilerecipe.component.ts ***!
    \****************************************************/

  /*! exports provided: TilerecipeComponent */

  /***/
  function srcAppTilerecipeTilerecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TilerecipeComponent", function () {
      return TilerecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TilerecipeComponent =
    /*#__PURE__*/
    function () {
      function TilerecipeComponent() {
        _classCallCheck(this, TilerecipeComponent);

        this.subtitlerecipe = "substitle empty";
        this.titlerecipe = "title empty";
        this.starstring = "";
        this.numberlist = [];
        this.numberlist2 = [];
        this.numberstar = 0;
      }

      _createClass(TilerecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var coun = 0; coun < this.numberstar; coun++) {
            this.starstring = this.starstring + "★";
          }

          for (var _coun = 0; _coun < 5 - this.numberstar; _coun++) {
            this.starstring = this.starstring + "☆";
          }
        }
      }]);

      return TilerecipeComponent;
    }();

    TilerecipeComponent.ɵfac = function TilerecipeComponent_Factory(t) {
      return new (t || TilerecipeComponent)();
    };

    TilerecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TilerecipeComponent,
      selectors: [["app-tilerecipe"]],
      decls: 0,
      vars: 0,
      template: function TilerecipeComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbGVyZWNpcGUvdGlsZXJlY2lwZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TilerecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tilerecipe',
          templateUrl: './tilerecipe.component.html',
          styleUrls: ['./tilerecipe.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/userpage/userpage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/userpage/userpage.component.ts ***!
    \************************************************/

  /*! exports provided: UserpageComponent */

  /***/
  function srcAppUserpageUserpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserpageComponent", function () {
      return UserpageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserpageComponent =
    /*#__PURE__*/
    function () {
      function UserpageComponent() {
        _classCallCheck(this, UserpageComponent);
      }

      _createClass(UserpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserpageComponent;
    }();

    UserpageComponent.ɵfac = function UserpageComponent_Factory(t) {
      return new (t || UserpageComponent)();
    };

    UserpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserpageComponent,
      selectors: [["app-userpage"]],
      decls: 0,
      vars: 0,
      template: function UserpageComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwYWdlL3VzZXJwYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-userpage',
          templateUrl: './userpage.component.html',
          styleUrls: ['./userpage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/adminis/PInfo-2/PInfo-2/web-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map