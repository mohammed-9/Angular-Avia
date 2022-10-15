(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/case-study/case-study.component */ "./src/app/components/case-study/case-study.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-one/home-one.component */ "./src/app/components/home-one/home-one.component.ts");
/* harmony import */ var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-three/home-three.component */ "./src/app/components/home-three/home-three.component.ts");
/* harmony import */ var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-two/home-two.component */ "./src/app/components/home-two/home-two.component.ts");
/* harmony import */ var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pricing/pricing.component */ "./src/app/components/pricing/pricing.component.ts");
/* harmony import */ var _components_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/solutions/solutions.component */ "./src/app/components/solutions/solutions.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");















const routes = [
    { path: '', component: _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_7__["HomeOneComponent"] },
    { path: 'home-one', component: _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_7__["HomeOneComponent"] },
    { path: 'home-two', component: _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_9__["HomeTwoComponent"] },
    { path: 'home-three', component: _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_8__["HomeThreeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'solutions', component: _components_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_11__["SolutionsComponent"] },
    { path: 'case-study', component: _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_4__["CaseStudyComponent"] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: 'team', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"] },
    { path: 'pricing', component: _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__["PricingComponent"] },
    { path: 'gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'avia-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-one/home-one.component */ "./src/app/components/home-one/home-one.component.ts");
/* harmony import */ var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-two/home-two.component */ "./src/app/components/home-two/home-two.component.ts");
/* harmony import */ var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-three/home-three.component */ "./src/app/components/home-three/home-three.component.ts");
/* harmony import */ var _shard_shard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shard/shard.module */ "./src/app/shard/shard.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/solutions/solutions.component */ "./src/app/components/solutions/solutions.component.ts");
/* harmony import */ var _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/case-study/case-study.component */ "./src/app/components/case-study/case-study.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pricing/pricing.component */ "./src/app/components/pricing/pricing.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shard_shard_module__WEBPACK_IMPORTED_MODULE_8__["ShardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_5__["HomeOneComponent"],
        _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_6__["HomeTwoComponent"],
        _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_7__["HomeThreeComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        _components_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_11__["SolutionsComponent"],
        _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_12__["CaseStudyComponent"],
        _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"],
        _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__["PricingComponent"],
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shard_shard_module__WEBPACK_IMPORTED_MODULE_8__["ShardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_5__["HomeOneComponent"],
                    _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_6__["HomeTwoComponent"],
                    _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_7__["HomeThreeComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                    _components_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_11__["SolutionsComponent"],
                    _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_12__["CaseStudyComponent"],
                    _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                    _components_team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"],
                    _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__["PricingComponent"],
                    _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _shard_shard_module__WEBPACK_IMPORTED_MODULE_8__["ShardModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CommonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getProvide() {
        const Url = 'http://localhost:3000/provide';
        return this.httpClient.get(Url);
    }
    getSlide1() {
        const Url = 'http://localhost:3000/slide1';
        return this.httpClient.get(Url);
    }
    getHomeSlide() {
        const Url = 'http://localhost:3000/slide2';
        return this.httpClient.get(Url);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");





class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 86, vars: 0, consts: [[1, "about-head"], ["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "compony"], [1, "row"], [1, "col-lg-6"], ["href", "#"], ["src", "../../../assets/images/company-img.jpg"], [1, "update"], [1, "update-vedio"], ["src", "../../../assets/images/choose-img1 (1).jpg", 1, "img-fluid"], [1, "fas", "fa-play"], [1, "feature"], [1, "fas", "fa-check-circle"], ["src", "../../../assets/images/feature-img.png", 1, "img-fluid"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Our Compony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Innovative It Helping Service All Over the World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Updated Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going There are many variations of passages of Lorem Ipsum available, but the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "We Have Also Some Features That Provided by Aiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Freelancing Traning Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Technological Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Monthly Paid Workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "IT Learning Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Digital Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lets Talk!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-footer");
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".about-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.about-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 4px;\n  right: -25px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.compony[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n@media (max-width: 425px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n  color: #8f91a5;\n}\n@media (max-width: 425px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n  margin: 0px 10px;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 500;\n  position: relative;\n  z-index: 10;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  top: 0;\n  left: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  bottom: 0;\n  right: 100%;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #28429e;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n@media (min-width: 425px) and (max-width: 1199px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child {\n    margin-top: 65px;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n  z-index: 10;\n  position: relative;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 300px;\n  height: 100px;\n  background: #e6335a;\n  top: -25px;\n  left: 0;\n  border-radius: 5px;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 300px;\n  height: 100px;\n  background: #051242;\n  bottom: -25px;\n  right: 0;\n  border-radius: 5px;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.update[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #f5faff;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%] {\n  position: relative;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 75px;\n  height: 75px;\n  background: #163fe6;\n  color: #fff;\n  text-align: center;\n  line-height: 80px;\n  border-radius: 50%;\n  text-decoration: none;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background: #1d42d9;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  border-radius: 50%;\n  animation: wave 1s ease-out infinite;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 700;\n  color: #293a5c;\n  margin-bottom: 25px;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%] {\n  background: #1d42d9;\n  display: inline-block;\n  \n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px 28px;\n  display: block;\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  z-index: 2;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]::after, .update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #293a5c;\n  z-index: 1;\n  transition: all 0.5s ease;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:after {\n  top: 0;\n  right: 100%;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]::before {\n  bottom: 0;\n  left: 100%;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:hover:after {\n  right: 0;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:hover:before {\n  left: 0;\n}\n@keyframes wave {\n  0% {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 1;\n  }\n  25% {\n    top: -10px;\n    right: -10px;\n    bottom: -10px;\n    left: -10px;\n    opacity: 0.9;\n  }\n  50% {\n    top: -20px;\n    right: -20px;\n    bottom: -20px;\n    left: -20px;\n    opacity: 0.7;\n  }\n  100% {\n    top: -30px;\n    right: -30px;\n    bottom: -30px;\n    left: -30px;\n    opacity: 0.1;\n  }\n}\n.feature[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-weight: 700;\n  font-size: 35px;\n  margin: 10px 0 20px;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n  line-height: 1.6;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   ul[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #70799a;\n  font-size: 18px;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1d42d9;\n  padding-right: 10px;\n  font-size: 16px;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 500;\n  position: relative;\n  z-index: 10;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  top: 0;\n  left: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  bottom: 0;\n  right: 100%;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #28429e;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  position: absolute;\n  animation: uptodown 1.5s linear infinite alternate-reverse;\n  width: 90%;\n}\n@media (max-width: 991px) {\n  .feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n@keyframes uptodown {\n  from {\n    top: -10px;\n  }\n  to {\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRVI7QUFDUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDWjtBQUFZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVoQjtBQURnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUdwQjtBQURnQjtFQUNJLGNBQUE7QUFHcEI7QUFNQTtFQUNJLGVBQUE7QUFISjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQU1ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKaEI7QUFLZ0I7RUFKSjtJQUtRLGVBQUE7RUFGbEI7QUFDRjtBQUlZO0VBQ0ksY0FBQTtBQUZoQjtBQUdnQjtFQUZKO0lBR1EsZUFBQTtFQUFsQjtBQUNGO0FBRVk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDSCxtQkFBQTtFQUNHLGdCQUFBO0FBQWhCO0FBQ2dCO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBQ3BCO0FBR29CO0VBQUUsY0FBQTtBQUF0QjtBQUNvQjtFQUNJLE9BQUE7QUFDeEI7QUFDb0I7RUFDSSxRQUFBO0FBQ3hCO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBR1k7RUFGSjtJQUdRLGdCQUFBO0VBQWQ7QUFDRjtBQUNZO0VBQ0ksa0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRXBCO0FBQWdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRXBCO0FBRG9CO0VBVko7SUFXUSxhQUFBO0VBSXRCO0FBQ0Y7QUFGZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFJcEI7QUFIb0I7RUFWSjtJQVdRLGFBQUE7RUFNdEI7QUFDRjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDWjtBQUFZO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUdwQjtBQU1ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSmhCO0FBTVk7RUFFSSxjQUFBO0FBTGhCO0FBU1k7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQaEI7QUFRZ0I7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFObEI7QUFRZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBTnBCO0FBUWdCO0VBQ0ksTUFBQTtFQUNBLFdBQUE7QUFOcEI7QUFRZ0I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQU5wQjtBQVNvQjtFQUNJLFFBQUE7QUFQeEI7QUFTb0I7RUFDSSxPQUFBO0FBUHhCO0FBYUk7RUFDSTtJQUNJLE1BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxVQUFBO0VBWFY7RUFhTTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBWFY7RUFhTTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBWFY7RUFhTTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBWFY7QUFDRjtBQW1CQTtFQUNJLGVBQUE7QUFoQko7QUFtQlk7RUFBSyxjQUFBO0FBaEJqQjtBQWlCWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWZoQjtBQWlCWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQWZoQjtBQWlCWTtFQUNJLG1CQUFBO0FBZmhCO0FBZ0JnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFkcEI7QUFlb0I7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBYnhCO0FBaUJZO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0osbUJBQUE7QUFmWjtBQWdCZ0I7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFkcEI7QUFnQmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBZHBCO0FBZ0JnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQWRwQjtBQWtCb0I7RUFBRSxjQUFBO0FBZnRCO0FBZ0JvQjtFQUNJLE9BQUE7QUFkeEI7QUFnQm9CO0VBQ0ksUUFBQTtBQWR4QjtBQW9CWTtFQUNJLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxVQUFBO0FBbEJoQjtBQW1CZ0I7RUFKSjtJQUtRLGtCQUFBO0VBaEJsQjtBQUNGO0FBcUJJO0VBQ0k7SUFDSSxVQUFBO0VBbkJWO0VBcUJNO0lBQ0ksU0FBQTtFQW5CVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzA1MTI0MiA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICBpbWc6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIHRvcDogMjcwcHg7XHJcbiAgICAgICAgbGVmdDogMjY0cHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgIHRvcDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIHRvcDogMTMycHg7XHJcbiAgICAgICAgcmlnaHQ6IDQ0N3B4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCg1KXtcclxuICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM3Yjg4Yjc7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0yNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzdiODhiNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIHN0YXJ0IGNvbXBvbnlcclxuLmNvbXBvbnl7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICAucm93e1xyXG4gICAgICAgIC5jb2wtbGctNjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhmOTFhNTtcclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogIzFkNDJkOTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtjb2xvcjogIzI4NDI5ZX1cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGctNjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6NDI1cHgpIGFuZCAobWF4LXdpZHRoOjExOTlweCl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2MzM1YTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTEyNDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMjVweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGVuZCBjb21wb255XHJcblxyXG5cclxuLy8gc3RhcnQgdXBkYXRlXHJcbi51cGRhdGV7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcclxuICAgIC51cGRhdGUtdmVkaW97XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE2M2ZlNjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHdhdmUgMXMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5yb3d7XHJcbiAgICAgICAgLmNvbC1sZy02e1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjN2E3ZTlhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGctNjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLyogcGFkZGluZzogMTVweCAzMHB4OyAqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjhweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyLCY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkzYTVjO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHdhdmUge1xyXG4gICAgICAgIDAle1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDI1JXtcclxuICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJXtcclxuICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IC0yMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMjBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTMwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGVuZCB1cGRhdGVcclxuXHJcblxyXG5cclxuLy8gc3RhcnQgZmVhdHVyZVxyXG4uZmVhdHVyZXtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgIC5yb3d7XHJcbiAgICAgICAgLmNvbC1sZy02OmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBzcGFue2NvbG9yOiAjMWQ0MmQ5O31cclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdhN2U5YTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzk5YTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGF7Y29sb3I6ICMyODQyOWV9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLWxnLTY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB1cHRvZG93biAxLjVzIGxpbmVhciAgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHVwdG9kb3duIHtcclxuICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3tcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBlbmQgZmVhdHVyZVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");





class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 82, vars: 0, consts: [[1, "about-head"], ["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "blog"], [1, "blog-head"], [1, "row"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "blog-post"], ["href", "#"], ["src", "../../../assets/images/1.jpg", 1, "img-fluid"], [1, "blog-post-info"], ["src", "../../../assets/images/5.jpg", 1, "img-fluid"], ["src", "../../../assets/images/3.jpg", 1, "img-fluid"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Our Regular Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Joe\u2019s Company Software Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Temperature App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "IT Software Company Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "app-footer");
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".about-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.about-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 7px;\n  right: 46px;\n}\n.blog[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n@media (max-width: 768px) {\n  .blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 33px;\n    margin-bottom: 10px;\n  }\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1);\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  position: relative;\n  overflow: hidden;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  transition: all 0.4s ease;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  color: #051242;\n  font-weight: 500;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  position: relative;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 14px;\n  background: #ada2a2;\n  top: 6px;\n  right: -11px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  font-size: 15px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 21px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #293a5c;\n  margin-bottom: 15px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 0;\n  right: -100%;\n  transition: all 0.5s ease;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover:after {\n  right: 0;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBZ0I7RUFDSSxjQUFBO0FBRXBCO0FBRVE7RUFDSSxrQkFBQTtBQUFaO0FBQ1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDaEI7QUFRQTtFQUNJLGVBQUE7QUFMSjtBQU1JO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQUtRO0VBQ0ksY0FBQTtBQUhaO0FBS1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSFo7QUFJWTtFQUpKO0lBS1EsZUFBQTtJQUNBLG1CQUFBO0VBRGQ7QUFDRjtBQUdRO0VBQ0ksY0FBQTtBQURaO0FBTVk7RUFDSSwyQ0FBQTtBQUpoQjtBQUtnQjtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUFIcEI7QUFLZ0I7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSHBCO0FBSW9CO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFGeEI7QUFJb0I7RUFBRSxxQkFBQTtBQUR0QjtBQUVvQjtFQUFhLGNBQUE7RUFBZSxnQkFBQTtBQUVoRDtBQUF3QjtFQUNJLGtCQUFBO0FBRTVCO0FBRHdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBRzVCO0FBQXdCO0VBQ0ksZUFBQTtBQUU1QjtBQUF3QjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFFNUI7QUFDb0I7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFDeEI7QUFDb0I7RUFDSSxjQUFBO0FBQ3hCO0FBQ29CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDeEI7QUFFd0I7RUFDSSxRQUFBO0FBQTVCO0FBRXdCO0VBQ0ksV0FBQTtBQUE1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyIDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIGltZzpmaXJzdC1jaGlsZHtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgdG9wOiAyNzBweDtcclxuICAgICAgICBsZWZ0OiAyNjRweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgdG9wOiAzMDBweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgdG9wOiAxMzJweDtcclxuICAgICAgICByaWdodDogNDQ3cHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgIHRvcDogMzAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IzdiODhiNztcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2I4OGI3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBzdGFydCBibG9nXHJcbi5ibG9ne1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgLmJsb2ctaGVhZHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc2YmVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzg2ODk4ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIC5jb2wtbGctNHtcclxuICAgICAgICAgICAgLmJsb2ctcG9zdHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDNweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibG9nLXBvc3QtaW5mb3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYSxwLGg1LGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxuICAgICAgICAgICAgICAgICAgICBhOmxhc3QtY2hpbGR7Y29sb3I6ICMwNTEyNDI7Zm9udC13ZWlnaHQ6IDUwMDt9XHJcbiAgICAgICAgICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWRhMmEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaTpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3YTdlOWE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEscCxoNSxsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGVuZCBibG9nXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/case-study/case-study.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/case-study/case-study.component.ts ***!
  \***************************************************************/
/*! exports provided: CaseStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudyComponent", function() { return CaseStudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");





class CaseStudyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CaseStudyComponent.ɵfac = function CaseStudyComponent_Factory(t) { return new (t || CaseStudyComponent)(); };
CaseStudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaseStudyComponent, selectors: [["app-case-study"]], decls: 116, vars: 0, consts: [[1, "about-head"], ["src", "../../../assets/imagess/11.png"], ["src", "../../../assets/imagess/13.png"], ["src", "../../../assets/imagess/14.png"], ["src", "../../../assets/imagess/15.png"], ["src", "../../../assets/imagess/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "case-study"], [1, "case-study-head"], [1, "taps"], [1, "active"], [1, "row", "mt-5"], [1, "col-lg-4", "col-md-6"], [1, "taps-section", "mb-4"], [1, "taps-section-img"], ["href", "#"], ["src", "../../../assets/imagess/c1.jpg", 1, "img-fluid"], [1, "taps-section-info"], ["href", "#", 1, "hov"], ["src", "../../../assets/imagess/c2.jpg", 1, "img-fluid"], ["src", "../../../assets/imagess/c3.jpg", 1, "img-fluid"], ["src", "../../../assets/imagess/c4.jpg", 1, "img-fluid"], ["src", "../../../assets/imagess/c5.jpg", 1, "img-fluid"], ["src", "../../../assets/imagess/c6.jpg", 1, "img-fluid"]], template: function CaseStudyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Case Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Case Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Have A Look Our Work Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cyber Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Joe\u2019s Company Software Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Ride Share App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Restaurant Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "IT Software Company Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Temperature App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Parking Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "app-footer");
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".about-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.about-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 7px;\n  right: 110px;\n}\n.case-study[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n@media (max-width: 768px) {\n  .case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 10px;\n  }\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.case-study[_ngcontent-%COMP%]   .taps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid #b5aeae;\n}\n.case-study[_ngcontent-%COMP%]   .taps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px 10px 0;\n  color: #50607f;\n  font-size: 16px;\n  font-weight: 500;\n  position: relative;\n  cursor: pointer;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%] {\n  transition: all 0.8s ease;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #293a5c;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0 0;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-info[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .hov[_ngcontent-%COMP%] {\n  transition: all 0.6s ease;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .hov[_ngcontent-%COMP%]:hover {\n  letter-spacing: 1.3px;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n}\n.case-study[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  background: #1d42d9;\n  content: \"\";\n  bottom: -14px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXNlLXN0dWR5L2Nhc2Utc3R1ZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQUFBO0FBR3BCO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFFaEI7QUFPQTtFQUNJLGdCQUFBO0FBSko7QUFLSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFLUTtFQUNJLGNBQUE7QUFIWjtBQUtRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhaO0FBSVk7RUFKSjtJQUtRLGVBQUE7SUFDQSxtQkFBQTtFQURkO0FBQ0Y7QUFHUTtFQUNJLGNBQUE7QUFEWjtBQUtRO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtBQUhaO0FBSVk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZoQjtBQU1JO0VBQ0kseUJBQUE7RUFDQSw0Q0FBQTtBQUpSO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBS1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFIWjtBQU1ZO0VBQ0ksMEJBQUE7QUFKaEI7QUFPUTtFQUNJLGFBQUE7QUFMWjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQU9RO0VBQ0kseUJBQUE7QUFMWjtBQU1ZO0VBQ0kscUJBQUE7QUFKaEI7QUFPUTtFQUNJLDRCQUFBO0FBTFo7QUFTUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtBQVBaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXNlLXN0dWR5L2Nhc2Utc3R1ZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtaGVhZHtcclxuICAgIGJhY2tncm91bmQ6ICMwNTEyNDIgO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgyKXtcclxuICAgICAgICB0b3A6IDI3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDI2NHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgzKXtcclxuICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCg0KXtcclxuICAgICAgICB0b3A6IDEzMnB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NDdweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICByaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojN2I4OGI3O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2I4OGI3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gc3RhcnQgY2FzZS1zdHVkeVxyXG4uY2FzZS1zdHVkeXtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAuY2FzZS1zdHVkeS1oZWFke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM0NzZiZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICM4Njg5OGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhcHN7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNWFlYWU7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgMjBweCAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUwNjA3ZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFwcy1zZWN0aW9ue1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuOHMgZWFzZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gICAgICAgIGE6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YXBzLXNlY3Rpb24taW1ne1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGFwcy1zZWN0aW9uLWluZm97XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdhN2U5YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaG92e1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjZzIGVhc2U7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBib3R0b206IC0xNHB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZW5kIGNhc2Utc3R1ZHlcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaseStudyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-case-study',
                templateUrl: './case-study.component.html',
                styleUrls: ['./case-study.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");





class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 71, vars: 0, consts: [[1, "contact-head"], ["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "three-part"], [1, "row"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "single-part"], [1, "fab", "fa-facebook-f"], [1, "col-lg-4", "col-md-6", "mb-4", "mx-auto"], [1, "contact"], [1, "contact-info"], [1, "col-lg-6"], [1, "contact-form"], [1, "col-lg-12"], ["type", "text", "placeholder", "Your Name"], ["type", "email", "placeholder", "Your Email"], ["type", "tel", "placeholder", "Your Phone"], ["type", "text", "placeholder", "Subject"], ["placeholder", "Your Message", "rows", "5"], [1, "col-lg-12", "text-center"], ["src", "../../../assets/images/contact-img2.jpg", 1, "img-fluid", "d-sm-block", "d-lg-none", "mt-5"], [1, "contact-img", "d-none", "d-lg-block"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "hello@aiva.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "28/A Street, New York City, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "+1 (321) 984 754");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Let Us Know About Your Project Idea!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-footer");
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".contact-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.contact-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.contact-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.contact-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.contact-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.contact-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.contact-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.contact-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.contact-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.contact-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.contact-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.contact-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.contact-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 7px;\n  right: 63px;\n}\n.three-part[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n.three-part[_ngcontent-%COMP%]   .single-part[_ngcontent-%COMP%] {\n  text-align: center;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n  padding: 20px;\n}\n.contact[_ngcontent-%COMP%] {\n  background: #f5faff;\n  padding: 115px 0;\n}\n.contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n.contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .contact-img[_ngcontent-%COMP%] {\n  background-image: url('contact-img2.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 25px;\n  margin-bottom: 15px;\n  background: #f9f9f9;\n  border: 1px solid #eee;\n  outline: none;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 11px 35px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n  color: #fff;\n  z-index: 2;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #051242;\n  top: 0;\n  left: 100%;\n  z-index: -1;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #051242;\n  bottom: 0;\n  right: 100%;\n  z-index: -1;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n@keyframes uptodown {\n  from {\n    top: -10px;\n  }\n  to {\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQUFBO0FBR3BCO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7QUFBUjtBQUlBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBRUk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBSVk7RUFDSSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUZoQjtBQU9nQjtFQURKO0lBRVEsVUFBQTtJQUNBLFlBQUE7RUFKbEI7QUFDRjtBQVFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQU5SO0FBT1E7RUFMSjtJQU1RLFVBQUE7SUFDQSxZQUFBO0VBSlY7QUFDRjtBQU1ZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUpoQjtBQVFRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFOWjtBQWVZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQWJoQjtBQWVZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQWJoQjtBQWtCZ0I7RUFDSSxPQUFBO0FBaEJwQjtBQWtCZ0I7RUFDSSxRQUFBO0FBaEJwQjtBQXNCSTtFQUNJO0lBQ0ksVUFBQTtFQXBCVjtFQXNCTTtJQUNJLFNBQUE7RUFwQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtaGVhZHtcclxuICAgIGJhY2tncm91bmQ6ICMwNTEyNDIgO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgyKXtcclxuICAgICAgICB0b3A6IDI3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDI2NHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgzKXtcclxuICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCg0KXtcclxuICAgICAgICB0b3A6IDEzMnB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NDdweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICByaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojN2I4OGI3O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2I4OGI3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA2M3B4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRocmVlLXBhcnR7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuICAgIC5zaW5nbGUtcGFydHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggM3B4IHJnYigwLDAsMCwuMDUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0e1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcclxuICAgIHBhZGRpbmcgOjExNXB4IDA7XHJcbiAgICAuY29udGFjdC1pbmZve1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM0NzZiZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzg2ODk4ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIC5jb2wtbGctNjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAuY29udGFjdC1pbWd7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LWltZzIuanBnKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGctNjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm17XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGctMTJ7XHJcbiAgICAgICAgICAgIGlucHV0LHRleHRhcmVhe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMzVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFkNDJkOTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFkNDJkOTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIC8vIGF7XHJcbiAgICAgICAgICAgIC8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC8vICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgLy8gfSAgXHJcbiAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTEyNDI7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzI4NDI5ZX1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHVwdG9kb3duIHtcclxuICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3tcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");





class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 78, vars: 0, consts: [[1, "about-head"], ["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "gallery"], [1, "gallery-head"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "gallery-part"], ["src", "../../../assets/images/one.jpg", 1, "img-fluid"], [1, "gallery-hide"], ["href", "#"], ["src", "../../../assets/images/two.jpg", 1, "img-fluid"], [1, "col-lg-4", "col-md-12"], ["src", "../../../assets/images/three.jpg", 1, "img-fluid"], ["src", "../../../assets/images/foure.jpg", 1, "img-fluid"], [1, "col-lg-8", "col-md-6"], ["src", "../../../assets/images/five.jpg", 1, "img-fluid"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Our Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Featured Gallery Have Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas non voluptatum aliquid autem minima ut culpa fugit fuga cumque, ullam minus sequi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Coaching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Business Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Coaching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Business Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Coaching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Business Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Coaching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Business Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Coaching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Business Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-footer");
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".about-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.about-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 7px;\n  right: 63px;\n}\n.gallery[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.gallery[_ngcontent-%COMP%]   .gallery-head[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n  margin: auto;\n  margin-bottom: 100px;\n}\n@media (max-width: 768px) {\n  .gallery[_ngcontent-%COMP%]   .gallery-head[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.gallery[_ngcontent-%COMP%]   .gallery-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.gallery[_ngcontent-%COMP%]   .gallery-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 700;\n  color: #293a5c;\n}\n@media (max-width: 768px) {\n  .gallery[_ngcontent-%COMP%]   .gallery-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n.gallery[_ngcontent-%COMP%]   .gallery-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7b88b7;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%] {\n    height: 345px;\n    position: relative;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    top: -91px;\n  }\n}\n@media (min-width: 767px) and (max-width: 991px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%] {\n    position: relative;\n    height: 95%;\n  }\n}\n@media (min-width: 767px) and (max-width: 991px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100%;\n    position: absolute;\n  }\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 20px;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all 0.6s ease;\n}\n@media (max-width: 767px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   .gallery-hide[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   .gallery-hide[_ngcontent-%COMP%] {\n  transition: all 0.6s ease;\n  position: absolute;\n  width: 90%;\n  height: 90%;\n  background: rgba(5, 18, 66, 0.9);\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 0.9;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  transform: rotateX(90deg);\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   .gallery-hide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   .gallery-hide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   .gallery-hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-of-type, .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]   .gallery-hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-of-type {\n  font-size: 20px;\n  color: #fff;\n  display: inline-block;\n  margin: 10px 0;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(2, 2);\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]:hover   .gallery-hide[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%]   .gallery-part[_ngcontent-%COMP%]:hover   .gallery-hide[_ngcontent-%COMP%] {\n  transform: rotateX(0deg);\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]:nth-child(4)   .gallery-part[_ngcontent-%COMP%] {\n  height: 95%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]:nth-child(4)   .gallery-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQUFBO0FBR3BCO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFJQTtFQUNJLGVBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQVI7QUFDUTtFQUxKO0lBTVEsV0FBQTtFQUVWO0FBQ0Y7QUFEUTtFQUNJLGNBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdaO0FBRlk7RUFKSjtJQUtRLGVBQUE7RUFLZDtBQUNGO0FBSFE7RUFDSSxjQUFBO0FBS1o7QUFDZ0I7RUFESjtJQUVRLGFBQUE7SUFDQSxrQkFBQTtFQUVsQjtBQUNGO0FBQW9CO0VBREo7SUFFUSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBR3RCO0FBQ0Y7QUFHWTtFQURGO0lBRU0sa0JBQUE7SUFDQSxXQUFBO0VBQWQ7QUFDRjtBQUVnQjtFQURKO0lBRVEsWUFBQTtJQUNBLGtCQUFBO0VBQ2xCO0FBQ0Y7QUFJWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZoQjtBQUdnQjtFQUNJLHlCQUFBO0FBRHBCO0FBRW9CO0VBRko7SUFHUSxXQUFBO0VBQ3RCO0FBQ0Y7QUFDZ0I7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNwQjtBQUFvQjtFQUNJLFdBQUE7QUFFeEI7QUFBb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUV4QjtBQUVvQjtFQUNJLHNCQUFBO0FBQXhCO0FBRW9CO0VBQ0ksd0JBQUE7QUFBeEI7QUFNWTtFQUNJLFdBQUE7QUFKaEI7QUFLZ0I7RUFDRyxZQUFBO0FBSG5CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtaGVhZHtcclxuICAgIGJhY2tncm91bmQ6ICMwNTEyNDIgO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgyKXtcclxuICAgICAgICB0b3A6IDI3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDI2NHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgzKXtcclxuICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCg0KXtcclxuICAgICAgICB0b3A6IDEzMnB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NDdweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICByaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojN2I4OGI3O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2I4OGI3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA2M3B4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmdhbGxlcnl7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICAuZ2FsbGVyeS1oZWFke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWQ0MmQ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICM3Yjg4Yjc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICAuY29sLW1kLTEye1xyXG4gICAgICAgICAgICAuZ2FsbGVyeS1wYXJ0e1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTkxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGctOHtcclxuICAgICAgICAgIC5nYWxsZXJ5LXBhcnR7XHJcbiAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLWxnLTQsLmNvbC1sZy04e1xyXG4gICAgICAgICAgICAuZ2FsbGVyeS1wYXJ0e1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC42cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2FsbGVyeS1oaWRle1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNnMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoICMwNTEyNDIsIC45KTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuOTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGE6Zmlyc3Qtb2YtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS1oaWRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGctNDpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgICAgIC5nYWxsZXJ5LXBhcnR7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home-one/home-one.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/home-one/home-one.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeOneComponent", function() { return HomeOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");








function HomeOneComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coll_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", coll_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coll_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coll_r3.desc);
} }
function HomeOneComponent_div_281_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r4.desc);
} }
const _c0 = function (a0) { return { "bgh": a0 }; };
const _c1 = function (a0) { return { "show": a0 }; };
class HomeOneComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.show = false;
        this.bgh = false;
        this.shows = false;
        this.bghs = false;
        this.slideConfig = {
            "slidesToShow": 4, "slidesToScroll": 1, "arrows": false, "autoplay": true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
    }
    ngOnInit() {
        this.commonService.getProvide().subscribe(data => {
            this.collection = data;
            console.log(data);
            console.log(this.collection);
        });
        // slide 1
        this.commonService.getSlide1().subscribe(data => {
            this.slide1Collection = data;
            console.log(this.slide1Collection);
        });
        // slide 1
    }
    isShow() {
        this.show = !this.show;
        this.bgh = !this.bgh;
    }
    Show() {
        this.shows = !this.shows;
        this.bghs = !this.bghs;
    }
}
HomeOneComponent.ɵfac = function HomeOneComponent_Factory(t) { return new (t || HomeOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
HomeOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeOneComponent, selectors: [["app-home-one"]], decls: 375, vars: 35, consts: [["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/12.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container-fluid"], [1, "row"], [1, "col-lg-6"], [1, "header-info"], ["href", "contact"], ["href", "about"], [1, "col-lg-6", "pop"], ["src", "../../../assets/images/home-bg-1-img.png", 1, "img-fluid"], [1, "avia-provide"], [1, "container"], [1, "provide-head"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "compony"], ["src", "../../../assets/images/company-img.jpg"], [1, "choose"], ["src", "../../../assets/images/choose-img.png", 1, "img-fluid"], [1, "collap", 3, "click"], [1, "fas", "fa-user-friends", "mr-3"], [1, "fas", "fa-plus"], [1, "work-process"], [1, "work-head"], [1, "col-lg-3", "col-sm-6"], [1, "work-part"], [1, "work-icon"], ["src", "../../../assets/images/p1.png"], [1, "d-none", "d-lg-block"], ["src", "../../../assets/images/next.png"], [1, "work-info"], ["src", "../../../assets/images/p2.png"], ["src", "../../../assets/images/p3.png"], ["src", "../../../assets/images/p4.png"], [1, "case-study"], [1, "case-study-head"], [1, "taps"], [1, "list-unstyled"], [1, "active"], [1, "row", "mt-5"], [1, "col-lg-4", "col-sm-6"], [1, "taps-section", "mb-5"], [1, "taps-section-img"], ["href", "#"], ["src", "../../../assets/images/c1.jpg", 1, "img-fluid"], [1, "taps-section-info"], ["href", "#", 1, "hov"], [1, "taps-section"], ["src", "../../../assets/images/c2.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c3.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c4.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c5.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c6.jpg", 1, "img-fluid"], [1, "feature"], [1, "col-lg-6", "col-md-12"], [1, "fas", "fa-check-circle"], ["src", "../../../assets/images/feature-img.png", 1, "img-fluid"], [1, "member"], [1, "member-head"], [1, "slider1"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["class", "slide-part", "ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "blog"], [1, "blog-head"], [1, "col-lg-4", "col-md-6"], [1, "blog-post"], ["src", "../../../assets/images/1.jpg", 1, "img-fluid"], [1, "blog-post-info"], ["src", "../../../assets/images/5.jpg", 1, "img-fluid"], ["src", "../../../assets/images/3.jpg", 1, "img-fluid"], [1, "contact"], [1, "contact-head"], [1, "col-md-6"], ["src", "../../../assets/images/contact-img.png", 1, "img-fluid"], [1, "contact-form"], [1, "col-lg-12"], ["type", "text", "placeholder", "Your Name"], ["type", "email", "placeholder", "Your Email"], ["type", "tel", "placeholder", "Your Phone"], ["type", "text", "placeholder", "Subject"], ["placeholder", "Your Message", "rows", "5"], [1, "col-lg-12", "text-center"], [1, "part"], [3, "src"], ["ngxSlickItem", "", 1, "slide"], [1, "slide-img"], [1, "img-fluid", 3, "src"], [1, "slide-info"], [1, "per-info"], [1, "icon"]], template: function HomeOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Trusted Effective Service and Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, et sed do eiusmod tempor incididunt labore dolore magna aliqua.Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Conect Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Smart Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Aiva Provide All Kind Of Tech Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeOneComponent_div_35_Template, 9, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Our Compony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Innovative It Helping Service All Over the World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOneComponent_Template_div_click_60_listener() { return ctx.isShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Great Understanding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOneComponent_Template_div_click_67_listener() { return ctx.Show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Update Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOneComponent_Template_div_click_74_listener() { return ctx.isShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Experienced Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOneComponent_Template_div_click_81_listener() { return ctx.isShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Best Quality Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Working Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "We Are Popular Because Of Our Way Of Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Research Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "User Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Product Handover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Have A Look Our Work Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Cyber Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Joe\u2019s Company Software Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Ride Share App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Restaurant Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "IT Software Company Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Temperature App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Parking Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "section", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "We Have Also Some Features That Provided by Aiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Freelancing Traning Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Technological Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Monthly Paid Workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "IT Learning Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Digital Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Lets Talk!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "People Who Are Behind The Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "ngx-slick-carousel", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](281, HomeOneComponent_div_281_Template, 19, 3, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "section", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Our Regular Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Joe\u2019s Company Software Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Temperature App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "IT Software Company Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "section", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Let Us Know About Your Project Idea!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "textarea", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.bgh));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.bghs));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.shows));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.bgh));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.bgh));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c1, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slide1Collection);
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickCarouselComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickItemDirective"]], styles: ["header[_ngcontent-%COMP%] {\n  background-image: url('home-bg-2.c3c7104b7e4061837c62.png');\n  padding: 70px 0px;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:first-child {\n  position: absolute;\n  top: 10%;\n  left: 40%;\n}\nheader[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  top: 10%;\n  left: 10%;\n}\nheader[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  top: 30%;\n  left: 70%;\n  z-index: 10;\n}\nheader[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:nth-child(4) {\n  position: absolute;\n  top: 10%;\n  left: 50%;\n}\nheader[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:nth-child(5) {\n  position: absolute;\n  top: 80%;\n  left: 40%;\n}\nheader[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:nth-child(6) {\n  position: absolute;\n  top: 10%;\n  left: 70%;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 540px;\n  margin-left: auto;\n  margin-top: 120px;\n}\n@media (min-width: 992px) and (max-width: 1200px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n    margin-top: 38px;\n    margin-left: 27px;\n    width: 484px;\n  }\n}\n@media (min-width: 425px) and (max-width: 991px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    width: 75%;\n  }\n}\n@media (max-width: 425px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n    width: 97%;\n  }\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n@media (min-width: 992px) and (max-width: 1200px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n}\n@media (min-width: 425px) and (max-width: 991px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n    font-weight: 700;\n  }\n}\n@media (max-width: 425px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-bottom: 50px;\n}\n@media (max-width: 425px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 30px;\n  }\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type, header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {\n  position: relative;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  margin: 0px 10px;\n}\n@media (max-width: 991px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type, header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {\n    padding: 10px 20px;\n    margin: 0px 7px;\n  }\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 500;\n  position: relative;\n  z-index: 10;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type::after, header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  top: 0;\n  left: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type::before, header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  bottom: 0;\n  right: 100%;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type:hover   a[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2):hover   a[_ngcontent-%COMP%] {\n  color: #28429e;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type:hover:after, header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2):hover:after {\n  left: 0;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type:hover:before, header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2):hover:before {\n  right: 0;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type {\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {\n  border: 1px solid #fff;\n  background: transparent;\n}\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%] {\n  width: 95%;\n  transform: scale(1, 1);\n  animation: pop 2s linear infinite alternate;\n}\n@media (min-width: 425px) and (max-width: 991px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media (min-width: 425px) and (max-width: 991px) {\n  header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 30px;\n    text-align: center;\n  }\n}\n@keyframes pop {\n  0% {\n    transform: scale(1, 1);\n  }\n  100% {\n    transform: scale(1.1, 1.1);\n  }\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: center;\n  margin: 60px auto;\n}\n@media (max-width: 425px) {\n  .avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%] {\n    width: 97%;\n  }\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #28429e;\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 37px;\n  font-weight: 700;\n  color: #304061;\n  margin: 20px 0;\n}\n@media (max-width: 425px) {\n  .avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaacbe;\n}\n@media (max-width: 425px) {\n  .avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n  box-shadow: 0px 0px 31px #e6e2e2;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6d6969;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  font-weight: 600;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 0;\n  left: 100%;\n  border-radius: 5px;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('hover.9e5d195883f9d6b41ff1.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  top: 0;\n  right: 100%;\n  z-index: 2;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover {\n  transform: translateY(-15px);\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  color: #333;\n}\n.compony[_ngcontent-%COMP%] {\n  margin: 70px 0;\n  background: #f5faff;\n  padding: 100px 0;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n@media (max-width: 425px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n  color: #8f91a5;\n}\n@media (max-width: 425px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n  margin: 0px 10px;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 500;\n  position: relative;\n  z-index: 10;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  top: 0;\n  left: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  bottom: 0;\n  right: 100%;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #28429e;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n@media (min-width: 425px) and (max-width: 1199px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child {\n    margin-top: 65px;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 10;\n  position: relative;\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 300px;\n  height: 100px;\n  background: #e6335a;\n  top: -25px;\n  left: -25px;\n  border-radius: 5px;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n.compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 300px;\n  height: 100px;\n  background: #051242;\n  bottom: -25px;\n  right: -25px;\n  border-radius: 5px;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .compony[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  padding: 10px 15px;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #051242;\n  font-weight: 600;\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  background: #f5ebff;\n  padding: 10px;\n  color: #051242;\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  position: absolute;\n  top: 25px;\n  right: 16px;\n  font-size: 12px;\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px #f1e8e8;\n  height: 0;\n  overflow: hidden;\n  transition: all 0.4s ease;\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%], .choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   .shows[_ngcontent-%COMP%] {\n  height: 80px;\n  padding: 15px;\n  overflow: hidden;\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   .bgh[_ngcontent-%COMP%], .choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   .bghs[_ngcontent-%COMP%] {\n  background: #051242;\n  color: #fff;\n}\n.choose[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .collap[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #051242;\n}\n.work-process[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #051242;\n  padding: 90px 0;\n}\n.work-process[_ngcontent-%COMP%]   .work-head[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 70%;\n  margin: auto;\n  margin-bottom: 100px;\n}\n@media (max-width: 425px) {\n  .work-process[_ngcontent-%COMP%]   .work-head[_ngcontent-%COMP%] {\n    width: 97%;\n    margin-bottom: 70px;\n  }\n}\n@media (max-width: 425px) {\n  .work-process[_ngcontent-%COMP%]   .work-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n@media (max-width: 425px) {\n  .work-process[_ngcontent-%COMP%]   .work-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (min-width: 425px) and (max-width: 991px) {\n  .work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  background: #1e2a55;\n  padding: 10px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 270px;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  left: -16px;\n  z-index: 10;\n  animation: move 1.5s linear infinite alternate-reverse;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  border: 1px dashed #fff;\n  height: 180px;\n  transform: rotate(90deg);\n  top: -71px;\n}\n@keyframes move {\n  from {\n    left: -35px;\n  }\n  to {\n    left: -5px;\n  }\n}\n.case-study[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n@media (max-width: 425px) {\n  .case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%] {\n    width: 99%;\n  }\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n@media (max-width: 425px) {\n  .case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 15px;\n  }\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n@media (max-width: 425px) {\n  .case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.case-study[_ngcontent-%COMP%]   .taps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid #b5aeae;\n}\n.case-study[_ngcontent-%COMP%]   .taps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px 10px 0;\n  color: #50607f;\n  font-size: 16px;\n  font-weight: 500;\n  position: relative;\n  cursor: pointer;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%] {\n  transition: all 0.8s ease;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #293a5c;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0 0;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-info[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .hov[_ngcontent-%COMP%] {\n  transition: all 0.6s ease;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .hov[_ngcontent-%COMP%]:hover {\n  letter-spacing: 1.3px;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n}\n.case-study[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  background: #1d42d9;\n  content: \"\";\n  bottom: -14px;\n  right: 0;\n}\n.feature[_ngcontent-%COMP%] {\n  background: #f5faff;\n  padding: 70px 0;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-weight: 700;\n  font-size: 35px;\n  margin: 10px 0 20px;\n}\n@media (max-width: 425px) {\n  .feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n  line-height: 1.6;\n}\n@media (max-width: 425px) {\n  .feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   ul[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #70799a;\n  font-size: 18px;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1d42d9;\n  padding-right: 10px;\n  font-size: 16px;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 500;\n  position: relative;\n  z-index: 10;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  top: 0;\n  left: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #fff;\n  bottom: 0;\n  right: 100%;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #28429e;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -3px;\n  animation: uptodown 1.5s linear infinite alternate-reverse;\n}\n@media (max-width: 991px) {\n  .feature[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n@keyframes uptodown {\n  from {\n    top: -10px;\n  }\n  to {\n    top: 20px;\n  }\n}\n.member[_ngcontent-%COMP%] {\n  padding: 70px 0;\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n@media (max-width: 425px) {\n  .member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n@media (max-width: 425px) {\n  .member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 33px;\n  }\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  outline: none;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%] {\n  position: relative;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #f5faff;\n  position: relative;\n  padding: 25px 0;\n  z-index: 10;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #051242;\n  font-weight: 600;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #949494;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 130px;\n  right: 0;\n  transition: all 0.3s ease-out;\n  z-index: -1;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: rgba(5, 18, 66, 0.9);\n  padding: 10px 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: all 0.2s ease-out 0.2s;\n  opacity: 0.9;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  display: inline-block;\n  background: #fff;\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  line-height: 2.4;\n  border-radius: 50%;\n  margin: 0px 3px;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  top: -50%;\n}\n.blog[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n@media (max-width: 425px) {\n  .blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n@media (max-width: 425px) {\n  .blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38;\n    margin-bottom: 15px;\n  }\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 18px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  position: relative;\n  overflow: hidden;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  transition: all 0.4s ease;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  color: #051242;\n  font-weight: 500;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  position: relative;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 14px;\n  background: #ada2a2;\n  top: 6px;\n  right: -11px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  font-size: 15px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 21px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #293a5c;\n  margin-bottom: 15px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 0;\n  right: -100%;\n  transition: all 0.5s ease;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover:after {\n  right: 0;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]:last-child {\n  margin: auto;\n}\n.contact[_ngcontent-%COMP%] {\n  background: #f5faff;\n  padding: 115px 0;\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n@media (max-width: 425px) {\n  .contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n@media (max-width: 425px) {\n  .contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:first-child {\n  position: relative;\n}\n.contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  animation: uptodown 1.5s linear infinite alternate-reverse;\n}\n@media (max-width: 991px) {\n  .contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n    margin-top: 85px;\n  }\n}\n@media (min-width: 425px) and (max-width: 768px) {\n  .contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 25px;\n  margin-bottom: 15px;\n  background: #f9f9f9;\n  border: 1px solid #eee;\n  outline: none;\n  color: #000;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 11px 35px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n  color: #fff;\n  z-index: 2;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #051242;\n  top: 0;\n  left: 100%;\n  z-index: -1;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #051242;\n  bottom: 0;\n  right: 100%;\n  z-index: -1;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n@keyframes uptodown {\n  from {\n    top: -10px;\n  }\n  to {\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLW9uZS9ob21lLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJEQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUs7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRVI7QUFBSztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFFUjtBQUFLO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFFUjtBQUFLO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUVSO0FBQUs7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRVI7QUFBSztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFFUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFBUTtFQUxKO0lBTVEsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFHVjtBQUNGO0FBRlE7RUFWSjtJQVdRLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFLVjtBQUNGO0FBSlE7RUFmSjtJQWdCUSxVQUFBO0VBT1Y7QUFDRjtBQU5RO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0FBUVg7QUFQVztFQUhIO0lBSU8sZUFBQTtFQVViO0FBQ0Y7QUFUVztFQU5IO0lBT0ksZUFBQTtJQUNBLGdCQUFBO0VBWVY7QUFDRjtBQVhXO0VBVkg7SUFXTyxlQUFBO0VBY2I7QUFDRjtBQVpRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBY1o7QUFiWTtFQUhKO0lBSVEsZUFBQTtJQUNBLG1CQUFBO0VBZ0JkO0FBQ0Y7QUFiUTs7RUFFSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFlWjtBQWRZO0VBUko7O0lBU1Esa0JBQUE7SUFDQSxlQUFBO0VBa0JkO0FBQ0Y7QUFqQlk7O0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBb0JoQjtBQWxCWTs7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFxQmhCO0FBbkJZOztFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQXNCaEI7QUFsQmdCOztFQUFFLGNBQUE7QUFzQmxCO0FBckJnQjs7RUFDSSxPQUFBO0FBd0JwQjtBQXRCZ0I7O0VBQ0ksUUFBQTtBQXlCcEI7QUFwQlE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBc0JaO0FBcEJRO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQXNCWjtBQWpCUTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNELDJDQUFBO0FBbUJYO0FBbEJXO0VBSkg7SUFLTyxVQUFBO0VBcUJiO0FBQ0Y7QUFsQlE7RUFWSjtJQVdRLGdCQUFBO0lBQ0Esa0JBQUE7RUFxQlY7QUFDRjtBQWhCQTtFQUNJO0lBQ0ksc0JBQUE7RUFtQk47RUFqQkU7SUFDSSwwQkFBQTtFQW1CTjtBQUNGO0FBZEk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWdCUjtBQWZRO0VBSko7SUFLUSxVQUFBO0VBa0JWO0FBQ0Y7QUFqQlE7RUFDSSxjQUFBO0FBbUJaO0FBakJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFtQlo7QUFsQlk7RUFMSjtJQU1RLGVBQUE7RUFxQmQ7QUFDRjtBQW5CUTtFQUNJLGNBQUE7QUFxQlo7QUFwQlk7RUFGSjtJQUdRLGVBQUE7RUF1QmQ7QUFDRjtBQWxCWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFvQmhCO0FBbkJnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQXFCcEI7QUFuQmdCO0VBQUUsY0FBQTtBQXNCbEI7QUFyQmdCO0VBQ0ksV0FBQTtBQXVCcEI7QUFyQmdCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBdUJwQjtBQXJCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBdUJwQjtBQXJCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBdUJwQjtBQXJCZ0I7RUFDSSw0QkFBQTtBQXVCcEI7QUF0Qm9CO0VBQ0ksT0FBQTtBQXdCeEI7QUF0Qm9CO0VBQ0ksUUFBQTtBQXdCeEI7QUF0Qm9CO0VBQ0ksV0FBQTtBQXdCeEI7QUFyQmdCO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF1QnBCO0FBZkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWtCSjtBQWZZO0VBQ0ksY0FBQTtBQWlCaEI7QUFmWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaUJoQjtBQWhCZ0I7RUFKSjtJQUtRLGVBQUE7RUFtQmxCO0FBQ0Y7QUFqQlk7RUFDSSxjQUFBO0FBbUJoQjtBQWxCZ0I7RUFGSjtJQUdRLGVBQUE7RUFxQmxCO0FBQ0Y7QUFuQlk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDSixtQkFBQTtFQUNJLGdCQUFBO0FBcUJoQjtBQXBCZ0I7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFzQnBCO0FBcEJnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQXNCcEI7QUFwQmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBc0JwQjtBQWxCb0I7RUFBRSxjQUFBO0FBcUJ0QjtBQXBCb0I7RUFDSSxPQUFBO0FBc0J4QjtBQXBCb0I7RUFDSSxRQUFBO0FBc0J4QjtBQWpCUTtFQUNJLGtCQUFBO0FBbUJaO0FBbEJZO0VBRko7SUFHWSxnQkFBQTtFQXFCbEI7QUFDRjtBQXBCWTtFQUNRLGtCQUFBO0FBc0JwQjtBQXJCZ0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBdUJwQjtBQXJCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF1QnBCO0FBdEJvQjtFQVZKO0lBV1EsYUFBQTtFQXlCdEI7QUFDRjtBQXZCZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF5QnBCO0FBeEJvQjtFQVZKO0lBV1EsYUFBQTtFQTJCdEI7QUFDRjtBQWhCWTtFQUNJLG1CQUFBO0FBbUJoQjtBQWxCZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW9CcEI7QUFuQm9CO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXFCeEI7QUFuQm9CO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFxQnhCO0FBbEJnQjtFQUNJLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFvQnBCO0FBbEJnQjs7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBb0JwQjtBQWxCZ0I7O0VBRUksbUJBQUE7RUFDQSxXQUFBO0FBb0JwQjtBQWxCZ0I7RUFDSSxtQkFBQTtBQW9CcEI7QUFaQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFlSjtBQWRJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBZ0JOO0FBZk07RUFMRjtJQU1NLFVBQUE7SUFDQSxtQkFBQTtFQWtCUjtBQUNGO0FBaEJVO0VBREo7SUFFUSxlQUFBO0VBbUJaO0FBQ0Y7QUFoQlU7RUFESjtJQUVRLGVBQUE7RUFtQlo7QUFDRjtBQWZRO0VBQ0ksa0JBQUE7QUFpQlo7QUFoQlk7RUFGSjtJQUdRLG1CQUFBO0VBbUJkO0FBQ0Y7QUFsQlk7RUFDSSxrQkFBQTtBQW9CaEI7QUFuQmdCO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXFCcEI7QUFuQmdCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXFCcEI7QUFwQm9CO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0RBQUE7QUFzQnhCO0FBbEJvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQW9CeEI7QUFiQTtFQUNJO0lBQ0ksV0FBQTtFQWdCTjtFQWRFO0lBQ0ksVUFBQTtFQWdCTjtBQUNGO0FBWEE7RUFDSSxnQkFBQTtBQWFKO0FBWkk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWNSO0FBYlE7RUFKSjtJQUtRLFVBQUE7RUFnQlY7QUFDRjtBQWZRO0VBQ0ksY0FBQTtBQWlCWjtBQWZRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWlCWjtBQWhCWTtFQUpKO0lBS1EsZUFBQTtJQUNBLG1CQUFBO0VBbUJkO0FBQ0Y7QUFqQlE7RUFDSSxjQUFBO0FBbUJaO0FBbEJZO0VBRko7SUFHUSxlQUFBO0VBcUJkO0FBQ0Y7QUFqQlE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0FBbUJaO0FBbEJZO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFvQmhCO0FBaEJJO0VBQ0kseUJBQUE7RUFDQSw0Q0FBQTtBQWtCUjtBQWpCUTtFQUNJLGdCQUFBO0FBbUJaO0FBakJRO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBbUJaO0FBaEJZO0VBQ0ksMEJBQUE7QUFrQmhCO0FBZlE7RUFDSSxhQUFBO0FBaUJaO0FBaEJZO0VBQ0ksY0FBQTtBQWtCaEI7QUFmUTtFQUNJLHlCQUFBO0FBaUJaO0FBaEJZO0VBQ0kscUJBQUE7QUFrQmhCO0FBZlE7RUFDSSw0QkFBQTtBQWlCWjtBQWJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBZVo7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQVdKO0FBUlk7RUFBSyxjQUFBO0FBV2pCO0FBVlk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFZaEI7QUFYZ0I7RUFMSjtJQU1RLGVBQUE7RUFjbEI7QUFDRjtBQVpZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBY2hCO0FBYmdCO0VBSEo7SUFJUSxlQUFBO0VBZ0JsQjtBQUNGO0FBZFk7RUFDSSxtQkFBQTtBQWdCaEI7QUFmZ0I7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaUJwQjtBQWhCb0I7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBa0J4QjtBQWRZO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0osbUJBQUE7QUFnQlo7QUFmZ0I7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFpQnBCO0FBZmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBaUJwQjtBQWZnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQWlCcEI7QUFib0I7RUFBRSxjQUFBO0FBZ0J0QjtBQWZvQjtFQUNJLE9BQUE7QUFpQnhCO0FBZm9CO0VBQ0ksUUFBQTtBQWlCeEI7QUFYWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO0FBYWhCO0FBWmdCO0VBSko7SUFLUSxrQkFBQTtFQWVsQjtBQUNGO0FBVkk7RUFDSTtJQUNJLFVBQUE7RUFZVjtFQVZNO0lBQ0ksU0FBQTtFQVlWO0FBQ0Y7QUFMQTtFQUNJLGVBQUE7QUFRSjtBQVBJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFTUjtBQVJRO0VBSko7SUFLUSxXQUFBO0VBV1Y7QUFDRjtBQVZRO0VBQ0ksY0FBQTtBQVlaO0FBVlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWVo7QUFYWTtFQUpKO0lBS1EsZUFBQTtFQWNkO0FBQ0Y7QUFaUTtFQUNJLGNBQUE7QUFjWjtBQVRZO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFXaEI7QUFUb0I7RUFDSSxXQUFBO0FBV3hCO0FBUmdCO0VBQ0ksa0JBQUE7QUFVcEI7QUFUb0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVd4QjtBQVZ3QjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQVk1QjtBQVZ3QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBWTVCO0FBVHdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBVzVCO0FBUm9CO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FBVXhCO0FBVHdCO0VBQ0ksZ0JBQUE7QUFXNUI7QUFWNEI7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFZaEM7QUFINEI7RUFDSSxXQUFBO0FBS2hDO0FBSDRCO0VBQ0ksTUFBQTtBQUtoQztBQUZ3QjtFQUNJLFNBQUE7QUFJNUI7QUFRQTtFQUNJLGVBQUE7QUFMSjtBQU1JO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQUtRO0VBSko7SUFLUSxXQUFBO0VBRlY7QUFDRjtBQUdRO0VBQ0ksY0FBQTtBQURaO0FBR1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRFo7QUFFWTtFQUpKO0lBS1EsYUFBQTtJQUNBLG1CQUFBO0VBQ2Q7QUFDRjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBSVk7RUFDSSwyQ0FBQTtFQUNBLG1CQUFBO0FBRmhCO0FBR2dCO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQURwQjtBQUdnQjtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEcEI7QUFFb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUF4QjtBQUVvQjtFQUFFLHFCQUFBO0FBQ3RCO0FBQW9CO0VBQWEsY0FBQTtFQUFlLGdCQUFBO0FBSWhEO0FBRndCO0VBQ0ksa0JBQUE7QUFJNUI7QUFId0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFLNUI7QUFGd0I7RUFDSSxlQUFBO0FBSTVCO0FBRndCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUk1QjtBQURvQjtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUd4QjtBQURvQjtFQUNJLGNBQUE7QUFHeEI7QUFEb0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUd4QjtBQUF3QjtFQUNJLFFBQUE7QUFFNUI7QUFBd0I7RUFDSSxXQUFBO0FBRTVCO0FBSVE7RUFDSSxZQUFBO0FBRlo7QUFXQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVNJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVFRO0VBSko7SUFLUSxXQUFBO0VBTFY7QUFDRjtBQU1RO0VBQ0ksY0FBQTtBQUpaO0FBTVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSlo7QUFLWTtFQUpKO0lBS1EsZUFBQTtFQUZkO0FBQ0Y7QUFJUTtFQUNJLGNBQUE7QUFGWjtBQU1RO0VBQ0ksa0JBQUE7QUFKWjtBQUtZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMERBQUE7QUFIaEI7QUFJZ0I7RUFKSjtJQUtRLGtCQUFBO0VBRGxCO0FBQ0Y7QUFFZ0I7RUFQSjtJQVFRLGdCQUFBO0VBQ2xCO0FBQ0Y7QUFBZ0I7RUFWSjtJQVdRLG1CQUFBO0VBR2xCO0FBQ0Y7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFDUjtBQUNZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDaEI7QUFHUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRFo7QUFVWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFSaEI7QUFVWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFSaEI7QUFhZ0I7RUFDSSxPQUFBO0FBWHBCO0FBYWdCO0VBQ0ksUUFBQTtBQVhwQjtBQWlCSTtFQUNJO0lBQ0ksVUFBQTtFQWZWO0VBaUJNO0lBQ0ksU0FBQTtFQWZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtb25lL2hvbWUtb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy0yLmMzYzcxMDRiN2U0MDYxODM3YzYyLnBuZyk7O1xyXG4gICAgcGFkZGluZzogNzBweCAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgPiBpbWc6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgIH1cclxuICAgICA+IGltZzpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgIH1cclxuICAgICA+IGltZzpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzAlO1xyXG4gICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICAgICA+IGltZzpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuICAgICA+IGltZzpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgIH1cclxuICAgICA+IGltZzpudGgtY2hpbGQoNil7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGxlZnQ6IDcwJTtcclxuICAgIH1cclxuICAucm93e1xyXG4gICAgLmhlYWRlci1pbmZve1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiA1NDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCkgYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI3cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0ODRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDo0MjVweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo0MjVweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6OTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDQyNXB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXY6Zmlyc3Qtb2YtdHlwZSxcclxuICAgICAgICBkaXY6bnRoLW9mLXR5cGUoMil7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweCA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYXtjb2xvcjogIzI4NDI5ZX1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRpdjpmaXJzdC1vZi10eXBle1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXY6bnRoLW9mLXR5cGUoMil7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy02Om50aC1jaGlsZCgyKXtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICAgICAgICAgICBhbmltYXRpb246IHBvcCAycyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6NDI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNDI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcHtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gc3RhcnQgYXZpYS1wcm92aWRlXHJcbi5hdmlhLXByb3ZpZGV7XHJcbiAgICAucHJvdmlkZS1oZWFke1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NDI1cHgpe1xyXG4gICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogIzI4NDI5ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMDQwNjE7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjQyNXB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogI2FhYWNiZTtcclxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo0MjVweCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIC5jb2wtbGctNHtcclxuICAgICAgICAgICAgLnBhcnR7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDMxcHggI2U2ZTJlMjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgaW1nLGg1LHAsYXtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe2NvbG9yOiByZ2IoMTA5LCAxMDUsIDEwNSk7fVxyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTEyNDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob3Zlci45ZTVkMTk1ODgzZjlkNmI0MWZmMS5wbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwLGg1LGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZW5kIGF2aWEtcHJvdmlkZVxyXG4vLyBzdGFydCBjb21wb255XHJcbi5jb21wb255e1xyXG4gICAgbWFyZ2luOiA3MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmYWZmO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgIC5yb3d7XHJcbiAgICAgICAgLmNvbC1sZy02OmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOGY5MWE1O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNDI1cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZDQyZDk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGF7Y29sb3I6ICMyODQyOWV9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLWxnLTY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOjQyNXB4KSBhbmQgKG1heC13aWR0aDoxMTk5cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTYzMzVhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTEyNDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMjVweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBlbmQgY29tcG9ueVxyXG4vLyBzdGFydCBjaG9vc2VcclxuLmNob29zZXtcclxuICAgIC5yb3d7XHJcbiAgICAgICAgLmNvbC1sZy02Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIC5jb2xsYXB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZWJmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNTEyNDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGk6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmMWU4ZTg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNob3csXHJcbiAgICAgICAgICAgICAgICAuc2hvd3N7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5iZ2gsXHJcbiAgICAgICAgICAgICAgICAuYmdoc3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGVuZCBjaG9vc2VcclxuLy8gc3RhcnQgd29ya1xyXG4ud29yay1wcm9jZXNze1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgcGFkZGluZzogOTBweCAwO1xyXG4gICAgLndvcmstaGVhZHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgICAgfVxyXG4gICAgICBoMntcclxuICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcHtcclxuICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3d7XHJcbiAgICAgICAgLndvcmstcGFydHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOjQyNXB4KSBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53b3JrLWljb257XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICA+IGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWUyYTU1O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDRweDsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG1vdmUgMS41cyBsaW5lYXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNzFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBtb3Zle1xyXG4gICAgZnJvbXtcclxuICAgICAgICBsZWZ0OiAtMzVweDtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICAgIGxlZnQ6LTVweDtcclxuICAgIH1cclxufVxyXG4vLyBlbmQgd29ya1xyXG5cclxuLy8gc3RhcnQgY2FzZS1zdHVkeVxyXG4uY2FzZS1zdHVkeXtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAuY2FzZS1zdHVkeS1oZWFke1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo0MjVweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDc2YmVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo0MjVweCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODY4OThlO1xyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjQyNXB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YXBze1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjVhZWFlO1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowIDIwcHggMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MDYwN2Y7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhcHMtc2VjdGlvbntcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2U7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggM3B4IHJnYmEoMCwwLDAsLjA1KTtcclxuICAgICAgICBhOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFwcy1zZWN0aW9uLWltZ3tcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhcHMtc2VjdGlvbi1pbmZve1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3YTdlOWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvdntcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC42cyBlYXNlO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGl2ZXtcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFkNDJkOTtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgYm90dG9tOiAtMTRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGVuZCBjYXNlLXN0dWR5XHJcblxyXG4vLyBzdGFydCBmZWF0dXJlXHJcbi5mZWF0dXJle1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcclxuICAgIHBhZGRpbmc6IDcwcHggMDtcclxuICAgIC5yb3d7XHJcbiAgICAgICAgLmNvbC1sZy02OmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBzcGFue2NvbG9yOiAjMWQ0MmQ5O31cclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo0MjVweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdhN2U5YTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjQyNXB4KXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzk5YTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGF7Y29sb3I6ICMyODQyOWV9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLWxnLTY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTNweDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdXB0b2Rvd24gMS41cyBsaW5lYXIgIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHVwdG9kb3duIHtcclxuICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3tcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBlbmQgZmVhdHVyZVxyXG5cclxuXHJcbi8vIHN0YXJ0IG1lbWJlclxyXG4ubWVtYmVye1xyXG4gICAgcGFkZGluZzogNzBweCAwO1xyXG4gICAgLm1lbWJlci1oZWFke1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo0MjVweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NmJlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NDI1cHgpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODY4OThlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zbGlkZXIxe1xyXG4gICAgICAgIC5jYXJvdXNlbHtcclxuICAgICAgICAgICAgLnNsaWRle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgLnNsaWRlLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zbGlkZS1pbmZve1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAucGVyLWluZm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgjMDUxMjQyLCAuOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dCAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi40O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlLWluZm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wZXItaW5mb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg0LHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGVuZCBtZW1iZXJcclxuXHJcbi8vIHN0YXJ0IGJsb2dcclxuLmJsb2d7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAuYmxvZy1oZWFke1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo0MjVweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NmJlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NDI1cHgpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzODtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICM4Njg5OGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICAuY29sLWxnLTR7XHJcbiAgICAgICAgICAgIC5ibG9nLXBvc3R7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsb2ctcG9zdC1pbmZve1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBhLHAsaDUsbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXt0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxyXG4gICAgICAgICAgICAgICAgICAgIGE6bGFzdC1jaGlsZHtjb2xvcjogIzA1MTI0Mjtmb250LXdlaWdodDogNTAwO31cclxuICAgICAgICAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhZGEyYTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzdhN2U5YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYSxwLGg1LGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1sZy00Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZW5kIGJsb2dcclxuXHJcblxyXG5cclxuLy8gc3RhcnQgY29udGFjdFxyXG4uY29udGFjdHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWZhZmY7XHJcbiAgICBwYWRkaW5nIDoxMTVweCAwO1xyXG4gICAgLmNvbnRhY3QtaGVhZHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NDI1cHgpe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM0NzZiZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjQyNXB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzg2ODk4ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIC5jb2wtbWQtNjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdXB0b2Rvd24gMS41cyBsaW5lYXIgIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNDI1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm17XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gICAgICAgIC5jb2wtbGctMTJ7XHJcbiAgICAgICAgICAgIGlucHV0LHRleHRhcmVhe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTFweCAzNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgLy8gYXtcclxuICAgICAgICAgICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLy8gICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAvLyB9ICBcclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTEyNDI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMjg0MjllfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgdXB0b2Rvd24ge1xyXG4gICAgICAgIGZyb217XHJcbiAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRve1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGVuZCBjb250YWN0ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-one',
                templateUrl: './home-one.component.html',
                styleUrls: ['./home-one.component.scss']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home-three/home-three.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/home-three/home-three.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeThreeComponent", function() { return HomeThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeThreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeThreeComponent.ɵfac = function HomeThreeComponent_Factory(t) { return new (t || HomeThreeComponent)(); };
HomeThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeThreeComponent, selectors: [["app-home-three"]], decls: 2, vars: 0, template: function HomeThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home-three works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS10aHJlZS9ob21lLXRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-three',
                templateUrl: './home-three.component.html',
                styleUrls: ['./home-three.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home-two/home-two.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/home-two/home-two.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTwoComponent", function() { return HomeTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");








function HomeTwoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lets Talke!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Know More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r5.head);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r5.para);
} }
function HomeTwoComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coll_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", coll_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coll_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coll_r6.desc);
} }
function HomeTwoComponent_div_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r7.desc);
} }
class HomeTwoComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "vertical": true, "arrows": false };
        this.slideConf = { "slidesToShow": 4, "slidesToScroll": 1, "arrows": false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ] };
    }
    ngOnInit() {
        this.commonService.getHomeSlide().subscribe(data => {
            this.slideCollec2 = data;
            console.log(this.slideCollec2);
        });
        this.commonService.getProvide().subscribe(data => {
            this.collection = data;
            console.log(data);
            console.log(this.collection);
        });
        this.commonService.getSlide1().subscribe(data => {
            this.slide1Collection = data;
            console.log(this.slide1Collection);
        });
    }
}
HomeTwoComponent.ɵfac = function HomeTwoComponent_Factory(t) { return new (t || HomeTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
HomeTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeTwoComponent, selectors: [["app-home-two"]], decls: 320, vars: 5, consts: [[1, "banar"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["class", "slide-part", "ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "three-part"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "main-part"], ["src", "../../../assets/images/i1 (1).jpg", 1, "img-fluid"], [1, "part-info"], [1, "far", "fa-address-card"], ["href", "#"], [1, "fas", "fa-chevron-right"], ["src", "../../../assets/images/i2 (1).jpg", 1, "img-fluid"], ["src", "../../../assets/images/i3 (1).jpg", 1, "img-fluid"], [1, "avia-provide"], [1, "provide-head"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "work-process"], [1, "work-head"], [1, "col-lg-3", "col-md-6", "col-md-6"], [1, "work-part"], [1, "work-icon"], ["src", "../../../assets/images/p1.png"], [1, "d-none", "d-lg-block"], ["src", "../../../assets/images/next.png"], [1, "work-info"], ["src", "../../../assets/images/p2.png"], ["src", "../../../assets/images/p3.png"], ["src", "../../../assets/images/p4.png"], [1, "update"], [1, "col-lg-6"], [1, "update-vedio"], ["src", "../../../assets/images/choose-img1 (1).jpg", 1, "img-fluid"], [1, "fas", "fa-play"], [1, "case-study"], [1, "case-study-head"], [1, "taps"], [1, "list-unstyled"], [1, "active"], [1, "row", "mt-5"], [1, "col-lg-4", "col-md-6"], [1, "taps-section", "mb-4"], [1, "taps-section-img"], ["src", "../../../assets/images/c1.jpg", 1, "img-fluid"], [1, "taps-section-info"], ["href", "#", 1, "hov"], ["src", "../../../assets/images/c2.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c3.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c4.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c5.jpg", 1, "img-fluid"], ["src", "../../../assets/images/c6.jpg", 1, "img-fluid"], [1, "member"], [1, "member-head"], [1, "slider1"], [1, "blog"], [1, "blog-head"], [1, "blog-post"], ["src", "../../../assets/images/1.jpg", 1, "img-fluid"], [1, "blog-post-info"], ["src", "../../../assets/images/5.jpg", 1, "img-fluid"], ["src", "../../../assets/images/3.jpg", 1, "img-fluid"], [1, "contact"], [1, "contact-head"], [1, "contact-form"], [1, "col-lg-12"], ["type", "text", "placeholder", "Your Name"], ["type", "email", "placeholder", "Your Email"], ["type", "tel", "placeholder", "Your Phone"], ["type", "text", "placeholder", "Subject"], ["placeholder", "Your Message", "rows", "5"], [1, "col-lg-12", "text-center"], ["src", "../../../assets/images/contact-img2.jpg", 1, "img-fluid", "d-sm-block", "d-lg-none", "mt-5"], [1, "contact-img", "d-none", "d-lg-block"], ["ngxSlickItem", "", 1, "slide"], [1, "slider2"], [1, "img-fluid", 3, "src"], [1, "box-btn"], ["href", "#", 1, "box-btn-link"], [1, "part"], [3, "src"], [1, "slide-img"], [1, "slide-info"], [1, "per-info"], [1, "icon"], [1, "fas", "fa-check-circle"]], template: function HomeTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-slick-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeTwoComponent_div_5_Template, 15, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Our Vision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Our Gole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Smart Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Aiva Provide All Kind Of Tech Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HomeTwoComponent_div_43_Template, 9, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Working Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "We Are Popular Because Of Our Way Of Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Research Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "User Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Product Handover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Updated Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going There are many variations of passages of Lorem Ipsum available, but the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Have A Look Our Work Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Cyber Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Joe\u2019s Company Software Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Ride Share App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Restaurant Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "IT Software Company Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Temperature App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Parking Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "View Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "section", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "People Who Are Behind The Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ngx-slick-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](225, HomeTwoComponent_div_225_Template, 19, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "section", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Our Regular Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Joe\u2019s Company Software Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Temperature App UX Studies & Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "10 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "IT Software Company Development Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "section", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Let Us Know About Your Project Idea!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "textarea", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slideCollec2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slide1Collection);
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickItemDirective"]], styles: ["@media (min-width: 768px) and (max-width: 1024px) {\n  .banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  outline: none;\n  width: 1587px;\n  height: 747px;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (max-width: 1440px) {\n  .banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  position: relative;\n}\n@media (max-width: 1440px) {\n  .banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    height: 100%;\n  }\n}\n@media (max-width: 1440px) {\n  .banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:after {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  border-bottom-left-radius: 80px;\n  border-bottom-right-radius: 80px;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  position: absolute;\n  text-align: center;\n  width: 45%;\n  right: 0;\n  left: 0;\n  margin: auto;\n  color: #fff;\n  top: 30%;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   h2[_ngcontent-%COMP%] {\n  font-size: 57px;\n  font-weight: 600;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   p[_ngcontent-%COMP%] {\n  letter-spacing: 1.2px;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 56px;\n  position: relative;\n  margin-right: 20px;\n  overflow: hidden;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 25px;\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  z-index: 2;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:after, .banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  transition: all 0.4s ease;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:after {\n  top: 0;\n  right: -100%;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  left: -100%;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:hover:after {\n  right: 0;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:hover:before {\n  left: 0;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:hover   .box-btn-link[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:first-of-type {\n  background: #1d42d9;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:first-of-type:after, .banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:first-of-type:before {\n  background: #051242;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:nth-of-type(2) {\n  background: transparent;\n  border: 1px solid #fff;\n}\n.banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:nth-of-type(2):after, .banar[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slider2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .box-btn[_ngcontent-%COMP%]:nth-of-type(2):before {\n  background: #fff;\n}\n.three-part[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n@media (max-width: 575px) {\n  .three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] {\n  position: relative;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -85px;\n  left: 44%;\n  background: #1d42d9;\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 2.5;\n  opacity: 0;\n  transition: all 0.5s ease;\n  color: #fff;\n  z-index: 10;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80%;\n  margin: auto;\n  background: #fff;\n  color: #051242;\n  border-radius: 5px;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  right: 0;\n  bottom: -35px;\n  font-size: 18px;\n  font-weight: 700;\n  overflow: hidden;\n  z-index: 2;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 5px;\n  color: #1d42d9;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: -100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  transition: all 0.4s ease;\n  z-index: -1;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  bottom: -50px;\n  opacity: 1;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]:hover   .part-info[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]:hover   .part-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]:hover   .part-info[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n@media (min-width: 576px) and (max-width: 991px) {\n  .three-part[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]:last-child {\n    margin: 60px auto 0;\n  }\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n  margin: 60px auto;\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #28429e;\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 37px;\n  font-weight: 700;\n  color: #304061;\n  margin: 20px 0;\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaacbe;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n  box-shadow: 0px 0px 31px #e6e2e2;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6d6969;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  font-weight: 600;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 0;\n  left: 100%;\n  border-radius: 5px;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('hover.9e5d195883f9d6b41ff1.png');\n  top: 0;\n  right: 100%;\n  z-index: 2;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover {\n  transform: translateY(-15px);\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  color: #333;\n}\n.work-process[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #051242;\n  padding: 90px 0;\n}\n.work-process[_ngcontent-%COMP%]   .work-head[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n  margin: auto;\n  margin-bottom: 100px;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  background: #1e2a55;\n  padding: 10px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 270px;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  left: -16px;\n  z-index: 10;\n  animation: move 1.5s linear infinite alternate-reverse;\n}\n.work-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .work-part[_ngcontent-%COMP%]   .work-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  border: 1px dashed #fff;\n  height: 180px;\n  transform: rotate(90deg);\n  top: -71px;\n}\n@keyframes move {\n  from {\n    left: -35px;\n  }\n  to {\n    left: -5px;\n  }\n}\n.update[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #f5faff;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%] {\n  position: relative;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 75px;\n  height: 75px;\n  background: #163fe6;\n  color: #fff;\n  text-align: center;\n  line-height: 80px;\n  border-radius: 50%;\n  text-decoration: none;\n}\n.update[_ngcontent-%COMP%]   .update-vedio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background: #1d42d9;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  border-radius: 50%;\n  animation: wave 1s ease-out infinite;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 700;\n  color: #293a5c;\n  margin-bottom: 25px;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%] {\n  background: #1d42d9;\n  display: inline-block;\n  \n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px 28px;\n  display: block;\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  z-index: 2;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]::after, .update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #293a5c;\n  z-index: 1;\n  transition: all 0.5s ease;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:after {\n  top: 0;\n  right: 100%;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]::before {\n  bottom: 0;\n  left: 100%;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:hover:after {\n  right: 0;\n}\n.update[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%]:hover:before {\n  left: 0;\n}\n@keyframes wave {\n  0% {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 1;\n  }\n  25% {\n    top: -10px;\n    right: -10px;\n    bottom: -10px;\n    left: -10px;\n    opacity: 0.9;\n  }\n  50% {\n    top: -20px;\n    right: -20px;\n    bottom: -20px;\n    left: -20px;\n    opacity: 0.7;\n  }\n  100% {\n    top: -30px;\n    right: -30px;\n    bottom: -30px;\n    left: -30px;\n    opacity: 0.1;\n  }\n}\n.case-study[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n.case-study[_ngcontent-%COMP%]   .case-study-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.case-study[_ngcontent-%COMP%]   .taps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid #b5aeae;\n}\n.case-study[_ngcontent-%COMP%]   .taps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px 10px 0;\n  color: #50607f;\n  font-size: 16px;\n  font-weight: 500;\n  position: relative;\n  cursor: pointer;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%] {\n  transition: all 0.8s ease;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #293a5c;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0 0;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-info[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .taps-section-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .hov[_ngcontent-%COMP%] {\n  transition: all 0.6s ease;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]   .hov[_ngcontent-%COMP%]:hover {\n  letter-spacing: 1.3px;\n}\n.case-study[_ngcontent-%COMP%]   .taps-section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n}\n.case-study[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  background: #1d42d9;\n  content: \"\";\n  bottom: -14px;\n  right: 0;\n}\n.member[_ngcontent-%COMP%] {\n  padding: 70px 0;\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n.member[_ngcontent-%COMP%]   .member-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  outline: none;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%] {\n  position: relative;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #f5faff;\n  position: relative;\n  padding: 25px 0;\n  z-index: 10;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #051242;\n  font-weight: 600;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #949494;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 110px;\n  right: 0;\n  transition: all 0.3s ease-out;\n  z-index: -1;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: rgba(5, 18, 66, 0.9);\n  padding: 10px 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: all 0.2s ease-out 0.2s;\n  opacity: 0.9;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  display: inline-block;\n  background: #fff;\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  line-height: 2.4;\n  border-radius: 50%;\n  margin: 0px 3px;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .per-info[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n.member[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:hover   .slide-info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  top: -50%;\n}\n.blog[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n.blog[_ngcontent-%COMP%]   .blog-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n@media (max-width: 991px) {\n  .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1);\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  position: relative;\n  overflow: hidden;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  transition: all 0.4s ease;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  color: #051242;\n  font-weight: 500;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  position: relative;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 14px;\n  background: #ada2a2;\n  top: 6px;\n  right: -11px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  font-size: 15px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 21px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #293a5c;\n  margin-bottom: 15px;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7e9a;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 0;\n  right: -100%;\n  transition: all 0.5s ease;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover:after {\n  right: 0;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .blog-post[_ngcontent-%COMP%]   .blog-post-info[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]:last-child {\n  margin: auto;\n}\n.contact[_ngcontent-%COMP%] {\n  background: #f5faff;\n  padding: 115px 0;\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 60px;\n  text-align: center;\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #476bef;\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #293a5c;\n  font-size: 40px;\n  margin-bottom: 25px;\n}\n.contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86898e;\n}\n.contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   .contact-img[_ngcontent-%COMP%] {\n  background-image: url('contact-img2.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 25px;\n  margin-bottom: 15px;\n  background: #f9f9f9;\n  border: 1px solid #eee;\n  outline: none;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 11px 35px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #1d42d9;\n  background: #1d42d9;\n  color: #fff;\n  z-index: 2;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #051242;\n  top: 0;\n  left: 100%;\n  z-index: -1;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background: #051242;\n  bottom: 0;\n  right: 100%;\n  z-index: -1;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  transition: all 0.5s ease;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n@keyframes uptodown {\n  from {\n    top: -10px;\n  }\n  to {\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXR3by9ob21lLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTTtFQURGO0lBRUksYUFBQTtFQUZOO0FBQ0Y7QUFJSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBR0EsYUFBQTtBQUpOO0FBS007RUFDRSxrQkFBQTtBQUhSO0FBSVE7RUFGRjtJQUdJLFlBQUE7RUFEUjtBQUNGO0FBRVE7RUFDRSxrQkFBQTtBQUFWO0FBQ1U7RUFGRjtJQUdJLFlBQUE7RUFFVjtBQUNGO0FBQ1k7RUFERjtJQUVJLFlBQUE7RUFFWjtBQUNGO0FBQVU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBRVo7QUFDUTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFDVjtBQUNVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFDVTtFQUNFLHFCQUFBO0FBQ1o7QUFDVTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUFZO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRWQ7QUFBWTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDZDtBQUNZO0VBQ0UsTUFBQTtFQUNBLFlBQUE7QUFDZDtBQUNZO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUFDZDtBQUVjO0VBQ0UsUUFBQTtBQUFoQjtBQUVjO0VBQ0UsT0FBQTtBQUFoQjtBQUVjO0VBQ0UsY0FBQTtBQUFoQjtBQUlVO0VBQ0UsbUJBQUE7QUFGWjtBQUdZO0VBRUUsbUJBQUE7QUFGZDtBQUtVO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQUhaO0FBSVk7RUFFRSxnQkFBQTtBQUhkO0FBY0E7RUFDRSxlQUFBO0FBWEY7QUFjTTtFQURGO0lBRUksZ0JBQUE7RUFYTjtBQUNGO0FBWU07RUFDRSxrQkFBQTtBQVZSO0FBV1E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVRWO0FBV1E7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBVFY7QUFXUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBVFY7QUFVVTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUlo7QUFVVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQVJaO0FBWVU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQVZaO0FBWVU7RUFDRSxXQUFBO0FBVlo7QUFXWTtFQUNFLFdBQUE7QUFUZDtBQVdZO0VBQ0UsTUFBQTtBQVRkO0FBaUJNO0VBREY7SUFFSSxtQkFBQTtFQWROO0FBQ0Y7QUFzQkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQW5CSjtBQW9CSTtFQUNFLGNBQUE7QUFsQk47QUFvQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWxCTjtBQW9CSTtFQUNFLGNBQUE7QUFsQk47QUF1Qk07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBckJSO0FBc0JROzs7O0VBSUUsV0FBQTtFQUNBLGtCQUFBO0FBcEJWO0FBc0JRO0VBQ0UsY0FBQTtBQXBCVjtBQXNCUTtFQUNFLFdBQUE7QUFwQlY7QUFzQlE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFwQlY7QUFzQlE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBcEJWO0FBc0JRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBcEJWO0FBc0JRO0VBQ0UsNEJBQUE7QUFwQlY7QUFxQlU7RUFDRSxPQUFBO0FBbkJaO0FBcUJVO0VBQ0UsUUFBQTtBQW5CWjtBQXFCVTs7O0VBR0UsV0FBQTtBQW5CWjtBQXNCUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBcEJWO0FBNkJBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTFCRjtBQTJCRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQXpCSjtBQTRCSTtFQUNFLGtCQUFBO0FBMUJOO0FBMkJNO0VBQ0Usa0JBQUE7QUF6QlI7QUEwQlE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXhCVjtBQXlCVTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNEQUFBO0FBdkJaO0FBMEJVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FBeEJaO0FBK0JBO0VBQ0U7SUFDRSxXQUFBO0VBNUJGO0VBOEJBO0lBQ0UsVUFBQTtFQTVCRjtBQUNGO0FBaUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQS9CRjtBQWdDRTtFQUNFLGtCQUFBO0FBOUJKO0FBK0JJO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBN0JOO0FBOEJNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUE1QlI7QUE2QlE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQTNCVjtBQW1DTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWpDUjtBQW1DTTtFQUVFLGNBQUE7QUFsQ1I7QUFzQ007RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFwQ1I7QUFxQ1E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFuQ1Y7QUFxQ1E7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBcENWO0FBc0NRO0VBQ0UsTUFBQTtFQUNBLFdBQUE7QUFwQ1Y7QUFzQ1E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQXBDVjtBQXVDVTtFQUNFLFFBQUE7QUFyQ1o7QUF1Q1U7RUFDRSxPQUFBO0FBckNaO0FBMkNFO0VBQ0U7SUFDRSxNQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtFQXpDSjtFQTJDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBekNKO0VBMkNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUF6Q0o7RUEyQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQXpDSjtBQUNGO0FBOENBO0VBQ0UsZ0JBQUE7QUEzQ0Y7QUE0Q0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTFDSjtBQTJDSTtFQUNFLGNBQUE7QUF6Q047QUEyQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBekNOO0FBMkNJO0VBQ0UsY0FBQTtBQXpDTjtBQTZDSTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7QUEzQ047QUE0Q007RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTFDUjtBQThDRTtFQUNFLHlCQUFBO0VBQ0EsNENBQUE7QUE1Q0o7QUE2Q0k7RUFDRSxnQkFBQTtBQTNDTjtBQTZDSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQTNDTjtBQThDTTtFQUNFLDBCQUFBO0FBNUNSO0FBK0NJO0VBQ0UsYUFBQTtBQTdDTjtBQThDTTtFQUNFLGNBQUE7QUE1Q1I7QUErQ0k7RUFDRSx5QkFBQTtBQTdDTjtBQThDTTtFQUNFLHFCQUFBO0FBNUNSO0FBK0NJO0VBQ0UsNEJBQUE7QUE3Q047QUFpREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUEvQ047QUFzREE7RUFDRSxlQUFBO0FBbkRGO0FBb0RFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFsREo7QUFtREk7RUFDRSxjQUFBO0FBakROO0FBbURJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWpETjtBQW1ESTtFQUNFLGNBQUE7QUFqRE47QUFzRE07RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQXBEUjtBQXFEUTtFQUNFLGtCQUFBO0FBbkRWO0FBb0RVO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFsRFo7QUFtRFk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFqRGQ7QUFtRFk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWpEZDtBQW9EWTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQWxEZDtBQXFEVTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQW5EWjtBQW9EWTtFQUNFLGdCQUFBO0FBbERkO0FBbURjO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBakRoQjtBQXlEYzs7RUFFRSxXQUFBO0FBdkRoQjtBQXlEYztFQUNFLE1BQUE7QUF2RGhCO0FBMERZO0VBQ0UsU0FBQTtBQXhEZDtBQW1FQTtFQUNFLGVBQUE7QUFoRUY7QUFpRUU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQS9ESjtBQWdFSTtFQUNFLGNBQUE7QUE5RE47QUFnRUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBOUROO0FBZ0VJO0VBQ0UsY0FBQTtBQTlETjtBQW1FTTtFQURGO0lBRUksbUJBQUE7RUFoRU47QUFDRjtBQWlFTTtFQUNFLDJDQUFBO0FBL0RSO0FBZ0VRO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQTlEVjtBQWdFUTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE5RFY7QUErRFU7Ozs7RUFJRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQTdEWjtBQStEVTtFQUNFLHFCQUFBO0FBN0RaO0FBK0RVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBN0RaO0FBZ0VZO0VBQ0Usa0JBQUE7QUE5RGQ7QUErRGM7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUE3RGhCO0FBZ0VZO0VBQ0UsZUFBQTtBQTlEZDtBQWdFWTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUE5RGQ7QUFpRVU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUEvRFo7QUFpRVU7RUFDRSxjQUFBO0FBL0RaO0FBaUVVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUEvRFo7QUFrRVk7RUFDRSxRQUFBO0FBaEVkO0FBa0VZOzs7O0VBSUUsV0FBQTtBQWhFZDtBQXNFSTtFQUNFLFlBQUE7QUFwRU47QUEyRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBeEVGO0FBeUVFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF2RUo7QUF3RUk7RUFDRSxjQUFBO0FBdEVOO0FBd0VJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXRFTjtBQXdFSTtFQUNFLGNBQUE7QUF0RU47QUEyRU07RUFDRSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQXpFUjtBQThFUTtFQURGO0lBRUksVUFBQTtJQUNBLFlBQUE7RUEzRVI7QUFDRjtBQStFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUE3RUo7QUE4RUk7RUFMRjtJQU1JLFVBQUE7SUFDQSxZQUFBO0VBM0VKO0FBQ0Y7QUE2RU07O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQTNFUjtBQThFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBNUVOO0FBcUZNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQW5GUjtBQXFGTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFuRlI7QUF1RlE7RUFDRSxPQUFBO0FBckZWO0FBdUZRO0VBQ0UsUUFBQTtBQXJGVjtBQTBGRTtFQUNFO0lBQ0UsVUFBQTtFQXhGSjtFQTBGRTtJQUNFLFNBQUE7RUF4Rko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS10d28vaG9tZS10d28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdGFydCBiYW5hclxyXG4uYmFuYXIge1xyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICAuc2xpY2stbGlzdCB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxNTg3cHg7XHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgICBoZWlnaHQ6IDc0N3B4O1xyXG4gICAgICAuc2xpZGVyMiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoIzAwMDAwMCwgMC41KTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0b3A6IDMwJTtcclxuXHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTdweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWJ0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjVweDtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlcixcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICByaWdodDogLTEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYm94LWJ0bi1saW5rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1idG46Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIsXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWJ0bjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAmOmFmdGVyLFxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBlbmQgYmFuYXJcclxuXHJcbi8vIHN0YXJ0IHBhcnQtdGhyZWVcclxuLnRocmVlLXBhcnQge1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICAucm93IHtcclxuICAgIC5jb2wtbGctNCB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4tcGFydCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtODVweDtcclxuICAgICAgICAgIGxlZnQ6IDQ0JTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZDQyZDk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYXJ0LWluZm8ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogIzA1MTI0MjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogLTM1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFydC1pbmZvIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctNDpsYXN0LWNoaWxkIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBtYXJnaW46IDYwcHggYXV0byAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIGVuZCBwYXJ0LXRocmVlXHJcblxyXG4vLyBzdGFydCBzbWFydC1zZXJ2aWNlXHJcbi5hdmlhLXByb3ZpZGUge1xyXG4gIC5wcm92aWRlLWhlYWQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjMjg0MjllO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDM3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMzA0MDYxO1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogI2FhYWNiZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICAuY29sLWxnLTQge1xyXG4gICAgICAucGFydCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDI4cHggMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDMxcHggI2U2ZTJlMjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgIGltZyxcclxuICAgICAgICBoNSxcclxuICAgICAgICBwLFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMDksIDEwNSwgMTA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob3Zlci45ZTVkMTk1ODgzZjlkNmI0MWZmMS5wbmcpO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCxcclxuICAgICAgICAgIGg1LFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gZW5kIHNtYXJ0LXNlcnZpc2VcclxuXHJcbi8vIHN0YXJ0IHdvcmtcclxuLndvcmstcHJvY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICBwYWRkaW5nOiA5MHB4IDA7XHJcbiAgLndvcmstaGVhZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgLndvcmstcGFydCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLndvcmstaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgID4gaW1nIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZTJhNTU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIGxlZnQ6IDI3MHB4O1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvKiBtYXJnaW4tbGVmdDogNHB4OyAqL1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTZweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZSAxLjVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICB0b3A6IC03MXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmUge1xyXG4gIGZyb20ge1xyXG4gICAgbGVmdDogLTM1cHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgfVxyXG59XHJcbi8vIGVuZCB3b3JrXHJcblxyXG4vLyBzdGFydCB1cGRhdGVcclxuLnVwZGF0ZSB7XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmYWZmO1xyXG4gIC51cGRhdGUtdmVkaW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTYzZmU2O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZDQyZDk7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogd2F2ZSAxcyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgLmNvbC1sZy02IHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2E3ZTlhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFkNDJkOTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLyogcGFkZGluZzogMTVweCAzMHB4OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjhweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlcixcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkzYTVjO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3YXZlIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgICBib3R0b206IC0yMHB4O1xyXG4gICAgICBsZWZ0OiAtMjBweDtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgIHJpZ2h0OiAtMzBweDtcclxuICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gZW5kIHVwZGF0ZVxyXG4vLyBzdGFydCBjYXNlLXN0dWR5XHJcbi5jYXNlLXN0dWR5IHtcclxuICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIC5jYXNlLXN0dWR5LWhlYWQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICM0NzZiZWY7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM4Njg5OGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YXBzIHtcclxuICAgIHVsIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I1YWVhZTtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMjBweCAxMHB4IDA7XHJcbiAgICAgICAgY29sb3I6ICM1MDYwN2Y7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGFwcy1zZWN0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICB9XHJcbiAgICAudGFwcy1zZWN0aW9uLWltZyB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50YXBzLXNlY3Rpb24taW5mbyB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjN2E3ZTlhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaG92IHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxZDQyZDk7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJvdHRvbTogLTE0cHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBlbmQgY2FzZS1zdHVkeVxyXG5cclxuLy8gc3RhcnQgbWVtYmVyXHJcbi5tZW1iZXIge1xyXG4gIHBhZGRpbmc6IDcwcHggMDtcclxuICAubWVtYmVyLWhlYWQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICM0NzZiZWY7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM4Njg5OGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zbGlkZXIxIHtcclxuICAgIC5jYXJvdXNlbCB7XHJcbiAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAuc2xpZGUtaW5mbyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAucGVyLWluZm8ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWZhZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICAgICAgICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoIzA1MTI0MiwgMC45KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dCAwLjJzO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgLnNsaWRlLWluZm8ge1xyXG4gICAgICAgICAgICAucGVyLWluZm8ge1xyXG4gICAgICAgICAgICAgIGg0LFxyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgdG9wOiAtNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIGVuZCBtZW1iZXJcclxuXHJcbi8vIHN0YXJ0IGJsb2dcclxuLmJsb2cge1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICAuYmxvZy1oZWFkIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjNDc2YmVmO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogIzI5M2E1YztcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjODY4OThlO1xyXG4gICAgfVxyXG4gIH1cclxuICAucm93IHtcclxuICAgIC5jb2wtbGctNCB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJsb2ctcG9zdCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2ctcG9zdC1pbmZvIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBwLFxyXG4gICAgICAgICAgaDUsXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwNTEyNDI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhZGEyYTI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjkzYTVjO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN2E3ZTlhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA1MTI0MjtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogLTEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSxcclxuICAgICAgICAgICAgcCxcclxuICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy00Omxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIGVuZCBibG9nXHJcblxyXG4vLyBzdGFydCBjb250YWN0XHJcbi5jb250YWN0IHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmYWZmO1xyXG4gIHBhZGRpbmc6IDExNXB4IDA7XHJcbiAgLmNvbnRhY3QtaGVhZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogIzQ3NmJlZjtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzg2ODk4ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICAuY29sLWxnLTY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIC5jb250YWN0LWltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvL2NvbnRhY3QtaW1nMi5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy02Omxhc3QtY2hpbGQge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5jb2wtbGctMTIge1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggMzVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0MmQ5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgLy8gYXtcclxuICAgICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAvLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAvLyB9XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC8vIGNvbG9yOiAjMjg0MjllfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgdXB0b2Rvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gZW5kIGNvbnRhY3RcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-two',
                templateUrl: './home-two.component.html',
                styleUrls: ['./home-two.component.scss']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pricing/pricing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.ts ***!
  \*********************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");





class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 110, vars: 0, consts: [[1, "about-head"], ["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "pricing"], [1, "pricing-head"], [1, "pricing-section"], ["href", "#"], [1, "row"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "price-part"], [1, "pricing-head-part"], [1, "rotate"], [1, "col-lg-4", "col-md-6", "mb-4", "mx-auto"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pricing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pricing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What We Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Our Pricing Plan For You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Build A Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "$29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Build A Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "$29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Popular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Build A Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "$29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "app-footer");
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".about-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.about-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 7px;\n  right: 63px;\n}\n.pricing[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-head[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n  margin: auto;\n  margin-bottom: 100px;\n}\n@media (max-width: 768px) {\n  .pricing[_ngcontent-%COMP%]   .pricing-head[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.pricing[_ngcontent-%COMP%]   .pricing-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 700;\n  color: #293a5c;\n}\n@media (max-width: 768px) {\n  .pricing[_ngcontent-%COMP%]   .pricing-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n.pricing[_ngcontent-%COMP%]   .pricing-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7b88b7;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  border: 1px solid #1d42d9;\n  display: inline-block;\n  text-align: center;\n  border-radius: 10px;\n  margin-bottom: 35px;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n  font-family: Catamaran, sans-serif;\n  \n  font-size: 20px;\n  font-weight: 700;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1d42d9;\n  text-decoration: none;\n  padding: 15px 13px;\n  display: inline-block;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n  border-top-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n  padding: 40px 0;\n  overflow: hidden;\n  position: relative;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   .pricing-head-part[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #293a5c;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   .pricing-head-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7b88b7;\n  font-weight: 600;\n  font-size: 15px;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  line-height: 4.6;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n  font-size: 28px;\n  font-weight: 700;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   sub[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-size: 16px;\n  font-weight: 500;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #7b88b7;\n  opacity: 0.7;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: #1d42d9;\n  border: 1px solid #1d42d9;\n  padding: 15px 20px;\n  border-radius: 5px;\n  color: #fff;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  display: inline-block;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  z-index: -1;\n  background: #051242;\n  transition: all 0.5s ease;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  top: 0;\n  left: 100%;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  right: 100%;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.pricing[_ngcontent-%COMP%]   .pricing-section[_ngcontent-%COMP%]   .price-part[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  background: #ccc;\n  \n  position: absolute;\n  \n  \n  \n  line-height: 2.4;\n  transform: rotate(45deg);\n  top: -27px;\n  right: -58px;\n  padding: 40px 45px 5px;\n  background: red;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBZ0I7RUFDSSxjQUFBO0FBRXBCO0FBR1E7RUFDSSxrQkFBQTtBQURaO0FBRVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFBaEI7QUFPQTtFQUNJLGVBQUE7QUFKSjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSFI7QUFJUTtFQUxKO0lBTVEsV0FBQTtFQURWO0FBQ0Y7QUFFUTtFQUNJLGNBQUE7QUFBWjtBQUVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFaO0FBQ1k7RUFKSjtJQUtRLGVBQUE7RUFFZDtBQUNGO0FBQVE7RUFDSSxjQUFBO0FBRVo7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFBUTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFWjtBQURZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdoQjtBQUZnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFJcEI7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFWjtBQUFnQjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUVwQjtBQUFnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFcEI7QUFDWTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRXBCO0FBQ1k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVwQjtBQUNZO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVwQjtBQUFnQjtFQUNJLE1BQUE7RUFDQSxVQUFBO0FBRXBCO0FBQWdCO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUFFcEI7QUFDb0I7RUFDSSxPQUFBO0FBQ3hCO0FBQ29CO0VBQ0ksUUFBQTtBQUN4QjtBQUdZO0VBQ0ksZ0JBQUE7RUFDWixtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtaGVhZHtcclxuICAgIGJhY2tncm91bmQ6ICMwNTEyNDIgO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgyKXtcclxuICAgICAgICB0b3A6IDI3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDI2NHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCgzKXtcclxuICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCg0KXtcclxuICAgICAgICB0b3A6IDEzMnB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NDdweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICByaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojN2I4OGI3O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzdiODhiNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDYzcHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBzdGFydCBwcmljaW5nXHJcbi5wcmljaW5ne1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgLnByaWNpbmctaGVhZHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogIzFkNDJkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzdiODhiNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1zZWN0aW9ue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICA+IHVse1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2F0YW1hcmFuLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAvKiBjb2xvcjogIzI5M2E1YzsgKi9cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZS1wYXJ0e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5wcmljaW5nLWhlYWQtcGFydHtcclxuICAgICAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2I4OGI3O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQuNjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDNweCByZ2JhKDAsMCwwLC4wNSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgc3Vie1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2I4OGI3O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFkNDJkOTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyLCY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJvdGF0ZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogd2lkdGg6IDIwMHB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OiAzN3B4OyAqL1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRvcDogLTI3cHg7XHJcbiAgICByaWdodDogLTU4cHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQ1cHggNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZW5kIHByaWNpbmciXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing',
                templateUrl: './pricing.component.html',
                styleUrls: ['./pricing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/solutions/solutions.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/solutions/solutions.component.ts ***!
  \*************************************************************/
/*! exports provided: SolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsComponent", function() { return SolutionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");







function SolutionsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coll_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", coll_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coll_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coll_r1.desc);
} }
class SolutionsComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.commonService.getProvide().subscribe(data => {
            this.collection = data;
            console.log(data);
            console.log(this.collection);
        });
    }
}
SolutionsComponent.ɵfac = function SolutionsComponent_Factory(t) { return new (t || SolutionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
SolutionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolutionsComponent, selectors: [["app-solutions"]], decls: 29, vars: 1, consts: [[1, "about-head"], ["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "avia-provide"], [1, "provide-head"], [1, "row"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "part"], [3, "src"], ["href", "#"]], template: function SolutionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Smart Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aiva Provide All Kind Of Tech Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SolutionsComponent_div_27_Template, 9, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection);
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".about-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.about-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 7px;\n  right: 80px;\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n  margin: 60px auto;\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #28429e;\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 37px;\n  font-weight: 700;\n  color: #304061;\n  margin: 20px 0;\n}\n@media (max-width: 768px) {\n  .avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 10px;\n  }\n}\n.avia-provide[_ngcontent-%COMP%]   .provide-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaacbe;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n  box-shadow: 0px 0px 31px #e6e2e2;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6d6969;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  font-weight: 600;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #051242;\n  top: 0;\n  left: 100%;\n  border-radius: 5px;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('hover.9e5d195883f9d6b41ff1.png');\n  background-size: cover;\n  top: 0;\n  right: 100%;\n  z-index: 2;\n  transition: all 0.5s ease;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover {\n  transform: translateY(-15px);\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%], .avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.avia-provide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2x1dGlvbnMvc29sdXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFBSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFUjtBQUNRO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRWhCO0FBRGdCO0VBQ0ksY0FBQTtBQUdwQjtBQUNRO0VBQ0ksa0JBQUE7QUFDWjtBQUFZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBRWhCO0FBS0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZSO0FBR1E7RUFDSSxjQUFBO0FBRFo7QUFHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBRFo7QUFFWTtFQUxKO0lBTVEsZUFBQTtJQUNBLG1CQUFBO0VBQ2Q7QUFDRjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBSVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRmhCO0FBR2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRHBCO0FBR2dCO0VBQUUsY0FBQTtBQUFsQjtBQUNnQjtFQUNJLFdBQUE7QUFDcEI7QUFDZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDcEI7QUFDZ0I7RUFDSSw0QkFBQTtBQUNwQjtBQUFvQjtFQUNJLE9BQUE7QUFFeEI7QUFBb0I7RUFDSSxRQUFBO0FBRXhCO0FBQW9CO0VBQ0ksV0FBQTtBQUV4QjtBQUNnQjtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2x1dGlvbnMvc29sdXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyIDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIGltZzpmaXJzdC1jaGlsZHtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgdG9wOiAyNzBweDtcclxuICAgICAgICBsZWZ0OiAyNjRweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgdG9wOiAzMDBweDtcclxuICAgIH1cclxuICAgIGltZzpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgdG9wOiAxMzJweDtcclxuICAgICAgICByaWdodDogNDQ3cHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgIHRvcDogMzAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IzdiODhiNztcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzdiODhiNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogODBweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gc3RhcnQgYXZpYS1wcm92aWRlXHJcbi5hdmlhLXByb3ZpZGV7XHJcbiAgICAucHJvdmlkZS1oZWFke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjg0MjllO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMwNDA2MTtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICNhYWFjYmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICAuY29sLWxnLTR7XHJcbiAgICAgICAgICAgIC5wYXJ0e1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzMXB4ICNlNmUyZTI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIGltZyxoNSxwLGF7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHtjb2xvcjogcmdiKDEwOSwgMTA1LCAxMDUpO31cclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG92ZXIuOWU1ZDE5NTg4M2Y5ZDZiNDFmZjEucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAsaDUsYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBlbmQgYXZpYS1wcm92aWRlIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolutionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-solutions',
                templateUrl: './solutions.component.html',
                styleUrls: ['./solutions.component.scss']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shard/top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shard/main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shard/footer/footer.component */ "./src/app/shard/footer/footer.component.ts");





class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 158, vars: 0, consts: [[1, "about-head"], ["src", "../../../assets/images/11.png"], ["src", "../../../assets/images/13.png"], ["src", "../../../assets/images/14.png"], ["src", "../../../assets/images/15.png"], ["src", "../../../assets/images/16.png"], [1, "container"], [1, "list-unstyled"], ["href", "home-one"], [1, "team"], [1, "team-head"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "team-single"], [1, "team-img"], ["src", "../../../assets/images/g1.jpg", 1, "img-fluid"], [1, "team-info"], ["href", "#"], [1, "fab", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], ["src", "../../../assets/images/g3.jpg", 1, "img-fluid"], ["src", "../../../assets/images/g2.jpg", 1, "img-fluid"], ["src", "../../../assets/images/g5.jpg", 1, "img-fluid"], ["src", "../../../assets/images/g4.jpg", 1, "img-fluid"], ["src", "../../../assets/images/g6.jpg", 1, "img-fluid"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "People Who Are Behind The Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Evana Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Maria Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Smith Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Leo Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Project Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Jhon Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Marketing Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Brian Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Agent Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "app-footer");
    } }, directives: [_shard_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _shard_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _shard_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".about-head[_ngcontent-%COMP%] {\n  background: #051242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  text-align: center;\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  top: 20px;\n  left: 50px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  top: 270px;\n  left: 264px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  top: 300px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  top: 132px;\n  right: 447px;\n}\n.about-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  top: 300px;\n  right: 400px;\n}\n.about-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  transition: all 0.4s ease;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7b88b7;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.about-head[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  top: 7px;\n  right: 52px;\n}\n.team[_ngcontent-%COMP%] {\n  padding: 90px 0;\n}\n.team[_ngcontent-%COMP%]   .team-head[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n  margin: auto;\n  margin-bottom: 65px;\n}\n.team[_ngcontent-%COMP%]   .team-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 40px;\n  color: #293a5c;\n  margin-bottom: 21px;\n}\n@media (max-width: 768px) {\n  .team[_ngcontent-%COMP%]   .team-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 10px;\n  }\n}\n.team[_ngcontent-%COMP%]   .team-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a7a7a7;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.15);\n  margin-bottom: 35px;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-img[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: hidden;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  text-align: center;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 21px;\n  color: #121e4c;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #7b88b7;\n  display: block;\n  margin-bottom: 10px;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 5px;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #121e4c;\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  color: #fff;\n  line-height: 2;\n}\n.team[_ngcontent-%COMP%]   .team-single[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQUFBO0FBR3BCO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFNQTtFQUNJLGVBQUE7QUFISjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRlI7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURaO0FBRVk7RUFMSjtJQU1RLGVBQUE7SUFDQSxtQkFBQTtFQUNkO0FBQ0Y7QUFDUTtFQUNJLGNBQUE7QUFDWjtBQUdJO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUNZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQ2hCO0FBRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUNZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNoQjtBQUNZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNoQjtBQUNZO0VBQ0ksU0FBQTtBQUNoQjtBQUFnQjtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUVwQjtBQURvQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUd4QjtBQUZ3QjtFQUNJLGVBQUE7QUFJNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1oZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzA1MTI0MiA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICBpbWc6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIHRvcDogMjcwcHg7XHJcbiAgICAgICAgbGVmdDogMjY0cHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgIHRvcDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWc6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIHRvcDogMTMycHg7XHJcbiAgICAgICAgcmlnaHQ6IDQ0N3B4O1xyXG4gICAgfVxyXG4gICAgaW1nOm50aC1jaGlsZCg1KXtcclxuICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM3Yjg4Yjc7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Yjg4Yjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gc3RhcnQgdGVhbVxyXG4udGVhbXtcclxuICAgIHBhZGRpbmc6IDkwcHggMDtcclxuICAgIC50ZWFtLWhlYWR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyOTNhNWM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICNhN2E3YTc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZWFtLXNpbmdsZXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLDAsMCwuMTUpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICAgICAgLnRlYW0taW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWluZm97XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzEyMWU0YztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Yjg4Yjc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTIxZTRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZW5kIHRlYW0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shard/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shard/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 117, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "footer-part"], [1, "footer-top"], ["src", "../../../assets/images/logo2.png"], [1, "footer-form"], ["type", "email", "placeholder", "Your Email"], [1, "footer-icon"], [1, "fab", "fa-facebook-f"], [1, "col-lg-3", "col-md-6"], [1, "list-unstyled"], ["href", "#"], [1, "col-lg-2", "col-md-6"], [1, "fas", "fa-mobile-alt"], [1, "footer-bottom"], [1, "footer-nav"], [1, "footer-copy"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Join Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Our Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Visual Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "QA & Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "IT Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cyber Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Wireless Connection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Career");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Privacy & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "+1 123 456 789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "+1 975 456 789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "hello@aiva.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "support@aiva.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "28/A street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Case Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Copyright \u00A9 2020 Aiva. All Rights Reserved by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "HiBootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-image: url('footer-bg.ce05c5b48b72fb6fc69b.png');\n  background-position: center;\n  padding-top: 100px;\n  background-size: cover;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.6s ease;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  letter-spacing: 1.1px;\n}\n@media (min-width: 425px) and (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .footer-part[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]   .footer-part[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%]   .footer-part[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #fff;\n  border: none;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  position: relative;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  outline: none;\n  background: transparent;\n  border: 1px solid #fff;\n  color: #fff;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #1d42d9;\n  padding: 10px 15px;\n  border: 1px solid #1d42d9;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  outline: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 500;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .footer-icon[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   .footer-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #1d42d9;\n  padding: 10px 13px;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #fff;\n  border-left: 4px solid #e6335a;\n  padding-left: 10px;\n  margin-left: -14px;\n  margin-bottom: 29px;\n}\n@media (min-width: 425px) and (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    border: none;\n    margin-bottom: 10px;\n  }\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]:last-child   li[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]:last-child   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #1d42d9;\n  font-size: 17px;\n  margin-right: 14px;\n  padding: 5px 7px;\n  border-radius: 5px;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]:last-child   li[_ngcontent-%COMP%]:last-child {\n  color: #fff;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #7d7777;\n  margin-top: 65px;\n  padding: 20px 0;\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 25px;\n  font-size: 16px;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e3e6e9;\n  text-decoration: none;\n  font-weight: 400;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-copy[_ngcontent-%COMP%] {\n  color: #e3e6e9;\n  font-size: 17px;\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-copy[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-left: -10px;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16;\n  color: #e6335a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFTztFQUNJLHlCQUFBO0FBQVg7QUFDVztFQUNJLHFCQUFBO0FBQ2Y7QUFTYTtFQUZKOzs7SUFJTyxtQkFBQTtFQUxkO0FBQ0Y7QUFXUTtFQUNJLG1CQUFBO0FBVFo7QUFXUTtFQUNJLFdBQUE7QUFUWjtBQVdRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVRaO0FBV1E7RUFDSSxrQkFBQTtBQVRaO0FBVVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVJoQjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJoQjtBQVdRO0VBQ0ksZ0JBQUE7QUFUWjtBQVVZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUmhCO0FBY1E7O0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFYWjtBQVlnQjtFQVBSOztJQVFhLFlBQUE7SUFDQSxtQkFBQTtFQVJuQjtBQUNGO0FBVVE7O0VBQ0ksY0FBQTtBQVBaO0FBUWdCOztFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUxwQjtBQVdRO0VBQ0ksbUJBQUE7QUFUWjtBQVVZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJoQjtBQVdRO0VBQ0ksV0FBQTtBQVRaO0FBYUc7RUFDQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVhKO0FBWUk7RUFKRDtJQUtLLGdCQUFBO0VBVE47QUFDRjtBQVVLO0VBQ0csYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVNRO0VBSkg7SUFLTyxjQUFBO0lBQ0Esa0JBQUE7RUFOVjtBQUNGO0FBUVk7RUFDSSxnQkFBQTtBQU5oQjtBQU9nQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTHBCO0FBTW9CO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFKeEI7QUFTUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBUFo7QUFRWTtFQUhKO0lBSVEsZUFBQTtJQUNBLGtCQUFBO0VBTGQ7QUFDRjtBQU1ZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFKaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZm9vdGVyXHJcbi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3Rlci1iZy5jZTA1YzViNDhiNzJmYjZmYzY5Yi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgLnJvd3tcclxuICAgICAgIGF7XHJcbiAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC42cyBlYXNlO1xyXG4gICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjFweDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcblxyXG5cclxuICAgICAuY29sLWxnLTQsXHJcbiAgICAgLmNvbC1sZy0zLFxyXG4gICAgIC5jb2wtbGctMntcclxuICAgICAgICAgLmZvb3Rlci1wYXJ0e1xyXG5cclxuICAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDQyNXB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICAgICAgICAgICAgLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgfVxyXG4gICAgLmNvbC1sZy00e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFkNDJkOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTMsXHJcbiAgICAuY29sLWxnLTJ7XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNlNjMzNWE7ICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo0MjVweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTM6bGFzdC1jaGlsZHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFkNDJkOTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICB9XHJcbiAgIC5mb290ZXItYm90dG9te1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZDc3Nzc7XHJcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXItbmF2e1xyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTNlNmU5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXItY29weXtcclxuICAgICAgICAgICAgY29sb3I6ICNlM2U2ZTk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2U2MzM1YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxufVxyXG4vLyBmb290ZXIiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shard/main-nav/main-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shard/main-nav/main-nav.component.ts ***!
  \******************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "show": a0 }; };
class MainNavComponent {
    constructor() {
        this.isOpen = false;
    }
    ngOnInit() {
    }
    opend() {
        this.isOpen = !this.isOpen;
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 102, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-dark", "sticky-top"], [1, "container"], ["src", "../../../assets/images/logo.png", 1, "d-lg-none"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ml-auto", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "javascript:void(0)", 1, "nav-link"], [1, "fas", "fa-plus"], [1, "list-unstyled", "sub-menu"], ["href", "home-one", 1, "active-link"], ["href", "home-two"], ["href", "#"], [1, "nav-item"], ["href", "about", 1, "nav-link"], ["href", "solutions"], ["href", "case-study"], ["href", "blog"], ["href", "team"], ["href", "pricing"], ["href", "gallery"], ["href", "contact", 1, "nav-link"], [1, "input-button", "d-none", "d-lg-flex"], [1, "input-nav"], ["type", "text", "placeholder", "search..."], [1, "fas", "fa-search"], [1, "button-nav"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_button_click_3_listener() { return ctx.opend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Home Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Solution Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Case Studies Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Testimonilas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Privacy Police");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background: #051242 !important;\n  padding: 20px 0;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    background: #fff !important;\n  }\n}\n@media (max-width: 575px) {\n  .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%] {\n  top: 200%;\n  position: absolute;\n  width: 200px;\n  background: #fff;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px dashed #e2dddd;\n  position: relative;\n  overflow: hidden;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n  display: block;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #1d42d9;\n  top: 0;\n  right: 100%;\n  transition: all 0.4s ease;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:after {\n  right: 0;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%] {\n  color: #1d42d9 !important;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #fff;\n  border-left: 8px solid transparent;\n  top: -8px;\n  left: 25px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #fff;\n  margin-left: 5px;\n  transition: all 0.6s ease;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n  color: #fff;\n  font-size: 16px;\n  margin-right: 15px;\n}\n@media (min-width: 992px) and (max-width: 1200px) {\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #90a3ee;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n  top: 100%;\n  opacity: 1;\n  visibility: visible;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .input-nav[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .input-nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #fff;\n  padding-bottom: 5px;\n  color: #fff;\n  outline: none;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .input-nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:placeholder {\n  color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .input-nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  position: absolute;\n  top: 6px;\n  right: 6px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .button-nav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 10px 20px;\n  border-radius: 5px;\n  background: #1d42d9;\n  position: relative;\n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .button-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #fff;\n  font-size: 17px;\n  text-decoration: none;\n  position: relative;\n  z-index: 1;\n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .button-nav[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 105%;\n  height: 50%;\n  background: #fff;\n  width: 100%;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .button-nav[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 105%;\n  height: 50%;\n  background: #fff;\n  width: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .button-nav[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #1d42d9;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .button-nav[_ngcontent-%COMP%]:hover:after {\n  left: 0;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%]   .button-nav[_ngcontent-%COMP%]:hover:before {\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmQvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSw4QkFBQTtFQUNBLGVBQUE7QUFDUjtBQUlRO0VBUFI7SUFRWSwyQkFBQTtFQURWO0FBQ0Y7QUFRWTtFQURKO0lBRVEsaUJBQUE7SUFDQSxrQkFBQTtFQUxkO0FBQ0Y7QUFTWTtFQUNJLGtCQUFBO0FBUGhCO0FBUWdCO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFOcEI7QUFPb0I7RUFDSSxtQkFBQTtBQUx4QjtBQU9vQjtFQUNJLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMeEI7QUFNdUI7RUFDSyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSjVCO0FBT3dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFMNUI7QUFRNEI7RUFDSSxRQUFBO0FBTmhDO0FBUTRCO0VBQ0ksc0JBQUE7QUFOaEM7QUFVb0I7RUFDSSx5QkFBQTtBQVJ4QjtBQVVvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFSeEI7QUFXZ0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFUcEI7QUFXZTtFQUNLLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVRwQjtBQVVvQjtFQUxMO0lBTVMsaUJBQUE7RUFQdEI7QUFDRjtBQVVvQjtFQUNJLGNBQUE7QUFSeEI7QUFVb0I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBUnhCO0FBY0s7RUFDSSxxQkFBQTtBQVpUO0FBYVM7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBWGI7QUFZYTtFQUNHLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVZoQjtBQVdnQjtFQUNJLFdBQUE7QUFUcEI7QUFZYTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQVZoQjtBQWFTO0VBQ0ksZ0JBQUE7RUFDRCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBWFo7QUFZYTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBVmpCO0FBWWE7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFWaEI7QUFZYTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNELDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQVZoQjtBQWNpQjtFQUNJLGNBQUE7QUFackI7QUFjaUI7RUFDSSxPQUFBO0FBWnJCO0FBZWlCO0VBQ0ksUUFBQTtBQWJyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJkL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDUxMjQyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIC8vIC5uYXZiYXItY29sbGFwc2V7XHJcbiAgICAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbWd7XHJcbiAgICAgICAgLy8gICAgIEBtZWRpYSAobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcclxuICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vICAgICB9IFxyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIC5jb2xsYXBzZXtcclxuICAgICAgICAubmF2YmFyLW5hdntcclxuICAgICAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLnN1Yi1tZW51e1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlMmRkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZS1saW5re1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFkNDJkOSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjZzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgID4gYXtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCkgYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBhLGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTBhM2VlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OnZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAuaW5wdXQtYnV0dG9ue1xyXG4gICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgIC5pbnB1dC1uYXZ7XHJcbiAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjpwbGFjZWhvbGRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICAuYnV0dG9uLW5hdntcclxuICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0MmQ5O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICBsZWZ0OiAxMDUlO1xyXG4gICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFkNDJkOTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shard/shard.module.ts":
/*!***************************************!*\
  !*** ./src/app/shard/shard.module.ts ***!
  \***************************************/
/*! exports provided: ShardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardModule", function() { return ShardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/shard/top-nav/top-nav.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/shard/main-nav/main-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shard/footer/footer.component.ts");






class ShardModule {
}
ShardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShardModule });
ShardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShardModule_Factory(t) { return new (t || ShardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShardModule, { declarations: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ], exports: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shard/top-nav/top-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shard/top-nav/top-nav.component.ts ***!
  \****************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TopNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopNavComponent.ɵfac = function TopNavComponent_Factory(t) { return new (t || TopNavComponent)(); };
TopNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopNavComponent, selectors: [["app-top-nav"]], decls: 24, vars: 0, consts: [[1, "t-nav"], [1, "container"], [1, "t-nav-img", "d-none", "d-lg-block"], ["src", "../../../assets/images/logo.png"], [1, "t-nav-info"], [1, "t-nav-conect"], [1, "t-conect", "mr-3"], [1, "fas", "fa-phone-alt"], ["href", "#"], [1, "fas", "fa-envelope"], [1, "t-icons"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-youtube"]], template: function TopNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+1 123 456 789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " hello@aiva.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".t-nav[_ngcontent-%COMP%] {\n  background: #f5faff;\n  padding: 17px 0px;\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 1023px) {\n  .t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 1023px) {\n  .t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-nav-conect[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 505px) {\n  .t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-nav-conect[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-nav-conect[_ngcontent-%COMP%]   .t-conect[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 15px;\n}\n@media (max-width: 505px) {\n  .t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-nav-conect[_ngcontent-%COMP%]   .t-conect[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-nav-conect[_ngcontent-%COMP%]   .t-conect[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-nav-conect[_ngcontent-%COMP%]   .t-conect[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1d42d9;\n  font-size: 14px;\n  margin-right: 5px;\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-icons[_ngcontent-%COMP%] {\n  border-left: 1px solid #1d42d9;\n  padding-left: 25px;\n}\n@media (max-width: 505px) {\n  .t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-icons[_ngcontent-%COMP%] {\n    border: none;\n  }\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0px 7px;\n  text-decoration: none;\n  color: #1d42d9;\n  font-size: 13px;\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n}\n.t-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .t-nav-info[_ngcontent-%COMP%]   .t-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmQvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFKSjtJQUtRLHVCQUFBO0VBSVY7QUFDRjtBQURnQjtFQURKO0lBRVEsYUFBQTtFQUlsQjtBQUNGO0FBQVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFaEI7QUFEZ0I7RUFISjtJQUlRLGNBQUE7RUFJbEI7QUFDRjtBQURvQjtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFHeEI7QUFGd0I7RUFISjtJQUlRLGNBQUE7RUFLMUI7QUFDRjtBQUp3QjtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQU01QjtBQUp3QjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNNUI7QUFEWTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUFHaEI7QUFGZ0I7RUFISjtJQUlRLFlBQUE7RUFLbEI7QUFDRjtBQUpnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTXBCO0FBTG9CO0VBQ0kseUJBQUE7QUFPeEI7QUFOd0I7RUFDSSwyQkFBQTtBQVE1QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJkL3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50LW5hdntcclxuICAgIGJhY2tncm91bmQ6I2Y1ZmFmZjtcclxuICAgIHBhZGRpbmc6IDE3cHggMHB4O1xyXG4gICAgLmNvbnRhaW5lcnsgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMDIzcHgpe1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnQtbmF2LWltZ3tcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50LW5hdi1pbmZve1xyXG4gICAgICAgICAgICAudC1uYXYtY29uZWN0e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjUwNXB4KXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50LWNvbmVjdHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjUwNXB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZDQyZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudC1pY29uc3tcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzFkNDJkOTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NTA1cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFkNDJkOTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-nav',
                templateUrl: './top-nav.component.html',
                styleUrls: ['./top-nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Projects (Eslam Saeed)\Avia\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map