(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"toolbar \">\n        <ion-row>\n          <ion-col size=\"1.5\" class=\"alignment no-padding\">\n            <img src=\"assets/imgs/back-arrow-icon.png\" (click)=\"goBack()\" class=\"toolbarBtn\" />\n          </ion-col>\n          <ion-col size=\"9\" class=\"alignment no-padding headerTxt\">\n            Customer List </ion-col>\n          <ion-col size=\"1.5\" class=\"alignment no-padding\">\n            <ion-menu-button>\n              <img src=\"assets/imgs/list-icon.png\" class=\"toolbarBtn\" />\n            </ion-menu-button>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor=\"let item of data;let ind=index\">\n        <ion-grid no-padding>\n            <ion-row>\n                <ion-col size=\"1\" class=\"doCenter\">\n                    <span>{{ind}} </span>\n                </ion-col>\n                <ion-col size=\"6\" class=\"doCenter\">\n                    <ion-label>{{item.name}}</ion-label>\n                </ion-col>\n                <ion-col size=\"5\" class=\"doCenter\">\n                    <ion-item>\n                        <ion-toggle slot=\"end\" checked={{item.status}}></ion-toggle>\n                        <ion-label>Paid</ion-label>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"goToAddCustomer()\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-input type=\"number\" placeholder=\"Awesome Input\"></ion-input>\n</ion-content>"

/***/ }),

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function() { return CustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");




const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPage"]
    }
];
let CustomerPageRoutingModule = class CustomerPageRoutingModule {
};
CustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerPageRoutingModule);



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");







let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerPageRoutingModule"]
        ],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
    })
], CustomerPageModule);



/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/customer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let CustomerPage = class CustomerPage {
    constructor(formBuilder, http, alertController, navCtrl) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.data = [{ "name": "akshay dongave", "status": "paid" },
            { "name": "akshay dongave", "status": "true" },
            { "name": "akshay dongave", "status": "true" },
            { "name": "akshay dongave", "status": "false" },
            { "name": "akshay dongave", "status": "true" }
        ];
        this.customForm = formBuilder.group({
            CustName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    }
    ngOnInit() {
    }
    goToAddCustomer() {
        this.navCtrl.navigateForward("add-new-customer");
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let str = '<div class="doCenterData">  <form id="cform"> <span>Customer Name</span>' +
                '<ion-input id="cname" formControlName="CustName" class="input" type="text" mode="ios"></ion-input>' +
                '<span>Mobile Number</span><ion-input formControlName="CustMob" id="mob" max="10" class="input" mode="ios"></ion-input>' +
                '<span>Email -Id</span><ion-input formControlName="CustMail" id="mail" class="input" mode="ios"></ion-input>' +
                '<span>Select Range</span><ion-item><ion-label class="chkTxt">MONTH</ion-label><ion-checkbox checked="true"></ion-checkbox></ion-item>' +
                '<ion-item><ion-label class="chkTxt">WEEK</ion-label><ion-checkbox checked="true"></ion-checkbox></ion-item></form></div>';
            const alert = yield this.alertController.create({
                header: "New Customer",
                message: str,
                buttons: [{
                        text: 'ADD',
                        handler: () => {
                            // let mobNumber: string = document.getElementById("cname");
                            console.log(this.CustName);
                        }
                    }]
            });
            let mob = document.getElementById("mob");
            mob.setAttribute("type", "number");
            mob.setAttribute("maxlength", "10");
            let elementWrap = document.getElementsByClassName("alert-wrapper")[0];
            elementWrap.style.borderRadius = "20px";
            elementWrap.style.width = "90%";
            let elementInnerGroup = document.getElementsByClassName("alert-message")[0];
            elementInnerGroup.style.paddingLeft = "10px";
            elementInnerGroup.style.paddingRight = "10px";
            elementInnerGroup.style.paddingTop = "20px";
            elementInnerGroup.style.paddingBottom = "0px";
            elementInnerGroup.style.overflowX = "scroll";
            let elementBtn = document.getElementsByClassName("alert-button-group")[0];
            elementBtn.style.width = "70%";
            elementBtn.style.background = "cyan";
            elementBtn.style.margin = "0 auto";
            elementBtn.style.display = "flex";
            elementBtn.style.justifyContent = "center";
            elementBtn.style.borderRadius = "40px";
            let CustForm = document.getElementById('cform');
            CustForm.setAttribute("formGroup", "CustName");
            let CustNameElm = document.getElementById('cname');
            CustNameElm.setAttribute("formControlName", "CustName");
            yield alert.present();
        });
    }
};
CustomerPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
CustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(/*! raw-loader!./customer.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html"),
        styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CustomerPage);



/***/ })

}]);
//# sourceMappingURL=customer-customer-module-es2015.js.map