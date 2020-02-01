(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-new-customer-add-new-customer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-new-customer/add-new-customer.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-new-customer/add-new-customer.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"toolbar \">\n    <ion-row>\n      <ion-col size=\"1.5\" class=\"alignment no-padding\">\n        <img src=\"assets/imgs/back-arrow-icon.png\" (click)=\"goBack()\" class=\"toolbarBtn\" />\n      </ion-col>\n      <ion-col size=\"9\" class=\"alignment no-padding headerTxt\">\n        Login </ion-col>\n      <ion-col size=\"1.5\" class=\"alignment no-padding\">\n        <ion-menu-button>\n          <img src=\"assets/imgs/list-icon.png\" class=\"toolbarBtn\" />\n        </ion-menu-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div\">\n    <ion-card class=\"card\">\n      <ion-card-content class=\"cardContent\">\n        <form [formGroup]=\"customerForm\" (ngSubmit)=\"submitData()\" method=\"get\">\n          <ion-item class=\"input\">\n            <ion-label> Customer Name : </ion-label>\n            <ion-input class=\"inputText\" formControlName=\"firstName\" type=\"text\" placeholder=\"User Id\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input\">\n            <ion-label>Mobile Number : </ion-label>\n            <ion-input formControlName=\"lastName\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input\">\n            <ion-label>Mail-Id : </ion-label>\n            <ion-input class=\"inputText\" formControlName=\"firstName\" type=\"text\" placeholder=\"User Id\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input\">\n            <ion-label>Area : </ion-label>\n            <ion-input formControlName=\"lastName\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-button type=\"submit\" expand=\"block\" mode=\"ios\">Login</ion-button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/add-new-customer/add-new-customer-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/add-new-customer/add-new-customer-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddNewCustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCustomerPageRoutingModule", function() { return AddNewCustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_new_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-new-customer.page */ "./src/app/add-new-customer/add-new-customer.page.ts");




var routes = [
    {
        path: '',
        component: _add_new_customer_page__WEBPACK_IMPORTED_MODULE_3__["AddNewCustomerPage"]
    }
];
var AddNewCustomerPageRoutingModule = /** @class */ (function () {
    function AddNewCustomerPageRoutingModule() {
    }
    AddNewCustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddNewCustomerPageRoutingModule);
    return AddNewCustomerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/add-new-customer/add-new-customer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-new-customer/add-new-customer.module.ts ***!
  \*************************************************************/
/*! exports provided: AddNewCustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCustomerPageModule", function() { return AddNewCustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_new_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-customer-routing.module */ "./src/app/add-new-customer/add-new-customer-routing.module.ts");
/* harmony import */ var _add_new_customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-customer.page */ "./src/app/add-new-customer/add-new-customer.page.ts");







var AddNewCustomerPageModule = /** @class */ (function () {
    function AddNewCustomerPageModule() {
    }
    AddNewCustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _add_new_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewCustomerPageRoutingModule"]
            ],
            declarations: [_add_new_customer_page__WEBPACK_IMPORTED_MODULE_6__["AddNewCustomerPage"]]
        })
    ], AddNewCustomerPageModule);
    return AddNewCustomerPageModule;
}());



/***/ }),

/***/ "./src/app/add-new-customer/add-new-customer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/add-new-customer/add-new-customer.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1uZXctY3VzdG9tZXIvYWRkLW5ldy1jdXN0b21lci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/add-new-customer/add-new-customer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-new-customer/add-new-customer.page.ts ***!
  \***********************************************************/
/*! exports provided: AddNewCustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCustomerPage", function() { return AddNewCustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");






var AddNewCustomerPage = /** @class */ (function () {
    function AddNewCustomerPage(formBuilder, http, navCtrl) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.navCtrl = navCtrl;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.submitAttempt = false;
        this.customerForm = formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    AddNewCustomerPage.prototype.ngOnInit = function () {
    };
    AddNewCustomerPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    AddNewCustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-new-customer',
            template: __webpack_require__(/*! raw-loader!./add-new-customer.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-new-customer/add-new-customer.page.html"),
            styles: [__webpack_require__(/*! ./add-new-customer.page.scss */ "./src/app/add-new-customer/add-new-customer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], AddNewCustomerPage);
    return AddNewCustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-new-customer-add-new-customer-module-es5.js.map