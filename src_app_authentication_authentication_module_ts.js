"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_authentication_authentication_module_ts"],{

/***/ 13512:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationRoutingModule: () => (/* binding */ AuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.component */ 6198);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 10645);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 13845);
/* harmony import */ var _otp_verrification_otp_verrification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp-verrification/otp-verrification.component */ 56337);
/* harmony import */ var _conform_pw_conform_pw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conform-pw/conform-pw.component */ 46347);
/* harmony import */ var _conform_merchant_conform_merchant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conform-merchant/conform-merchant.component */ 82873);
/* harmony import */ var _user_management_reset_pw_user_management_reset_pw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management-reset-pw/user-management-reset-pw.component */ 37113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);










const routes = [{
  path: '',
  component: _authentication_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticationComponent,
  children: [{
    path: 'login',
    component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
  }, {
    path: 'forget-password',
    component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordComponent
  }, {
    path: 'otp-verrification',
    component: _otp_verrification_otp_verrification_component__WEBPACK_IMPORTED_MODULE_3__.OtpVerrificationComponent
  }, {
    path: 'reset-password',
    component: _conform_pw_conform_pw_component__WEBPACK_IMPORTED_MODULE_4__.ConformPwComponent
  }, {
    path: 'password-reset',
    component: _conform_merchant_conform_merchant_component__WEBPACK_IMPORTED_MODULE_5__.ConformMerchantComponent
  }, {
    path: 'um-password-reset/:id',
    component: _user_management_reset_pw_user_management_reset_pw_component__WEBPACK_IMPORTED_MODULE_6__.UserManagementResetPwComponent
  }]
}];
class AuthenticationRoutingModule {
  static #_ = this.ɵfac = function AuthenticationRoutingModule_Factory(t) {
    return new (t || AuthenticationRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AuthenticationRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6198:
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationComponent: () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _theme_layouts_auth_layout_auth_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@theme/layouts/auth-layout/auth-layout */ 55005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class AuthenticationComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AuthenticationComponent_Factory(t) {
    return new (t || AuthenticationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AuthenticationComponent,
    selectors: [["ngx-authentication"]],
    decls: 2,
    vars: 0,
    template: function AuthenticationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-auth-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_theme_layouts_auth_layout_auth_layout__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74329:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationModule: () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 69375);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@theme/theme.module */ 3253);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-routing.module */ 13512);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.component */ 6198);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 10645);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 13845);
/* harmony import */ var _otp_verrification_otp_verrification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-verrification/otp-verrification.component */ 56337);
/* harmony import */ var _conform_pw_conform_pw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conform-pw/conform-pw.component */ 46347);
/* harmony import */ var _conform_merchant_conform_merchant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conform-merchant/conform-merchant.component */ 82873);
/* harmony import */ var _user_management_reset_pw_user_management_reset_pw_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-management-reset-pw/user-management-reset-pw.component */ 37113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);












class AuthenticationModule {
  static #_ = this.ɵfac = function AuthenticationModule_Factory(t) {
    return new (t || AuthenticationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AuthenticationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthenticationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AuthenticationModule, {
    declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__.AuthenticationComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgetPasswordComponent, _otp_verrification_otp_verrification_component__WEBPACK_IMPORTED_MODULE_5__.OtpVerrificationComponent, _conform_pw_conform_pw_component__WEBPACK_IMPORTED_MODULE_6__.ConformPwComponent, _conform_merchant_conform_merchant_component__WEBPACK_IMPORTED_MODULE_7__.ConformMerchantComponent, _user_management_reset_pw_user_management_reset_pw_component__WEBPACK_IMPORTED_MODULE_8__.UserManagementResetPwComponent],
    imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthenticationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 82873:
/*!*******************************************************************************!*\
  !*** ./src/app/authentication/conform-merchant/conform-merchant.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConformMerchantComponent: () => (/* binding */ ConformMerchantComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/services */ 81039);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/components */ 99667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







const _c0 = a0 => ({
  "form-control-danger": a0
});
function ConformMerchantComponent_div_14_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformMerchantComponent_div_14_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformMerchantComponent_div_14_div_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please choose a stronger password. Try a mix of letters, numbers and symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformMerchantComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformMerchantComponent_div_14_div_1_small_1_Template, 2, 0, "small", 16)(2, ConformMerchantComponent_div_14_div_1_small_2_Template, 2, 0, "small", 16)(3, ConformMerchantComponent_div_14_div_1_small_3_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("new_password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("new_password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("new_password").errors["pattern"] && !ctx_r0.login_form.get("new_password").errors["minlength"]);
  }
}
function ConformMerchantComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformMerchantComponent_div_14_div_1_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("new_password").invalid && (ctx_r0.login_form.get("new_password").dirty || ctx_r0.login_form.get("new_password").touched));
  }
}
function ConformMerchantComponent_div_17_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformMerchantComponent_div_17_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformMerchantComponent_div_17_div_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please choose a stronger password. Try a mix of letters, numbers and symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformMerchantComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformMerchantComponent_div_17_div_1_small_1_Template, 2, 0, "small", 16)(2, ConformMerchantComponent_div_17_div_1_small_2_Template, 2, 0, "small", 16)(3, ConformMerchantComponent_div_17_div_1_small_3_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("confirm_password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("confirm_password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("confirm_password").errors["pattern"] && !ctx_r0.login_form.get("confirm_password").errors["minlength"]);
  }
}
function ConformMerchantComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformMerchantComponent_div_17_div_1_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("confirm_password").invalid && (ctx_r0.login_form.get("confirm_password").dirty || ctx_r0.login_form.get("confirm_password").touched));
  }
}
function ConformMerchantComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function ConformMerchantComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ConformMerchantComponent {
  constructor(fb, user_service, route, router, toastrComponent) {
    this.user_service = user_service;
    this.route = route;
    this.router = router;
    this.toastrComponent = toastrComponent;
    this.is_pw_change = false;
    this.is_alert = false;
    this.is_loading = false;
    this.message = '';
    this.is_fixed_btn_disable = false;
    this.login_form = fb.group({
      "new_password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}$')]],
      "confirm_password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}$')]]
    });
  }
  ngOnInit() {
    this.allParams = this.route.snapshot.queryParams;
  }
  verify_merchant() {
    this.is_loading = true;
    let password = this.login_form.value['new_password'];
    let psw_repeat = this.login_form.value['confirm_password'];
    if (!password || !psw_repeat) {
      // this.showAlert('Required Password')
      this.toastrComponent.showToast("danger", "Oh Snap!", "Required Password");
      this.is_loading = false;
      return;
    }
    if (password != psw_repeat) {
      // this.showAlert('The passwords did not match. Please try again')
      this.toastrComponent.showToast("danger", "Oh Snap!", "The passwords did not match. Please try again");
      this.is_loading = false;
      console.log('Password Missmatched');
      return;
    }
    console.log('xx33');
    let data = {
      user_id: this.allParams['user_id'],
      token: this.allParams['token'],
      new_password: password,
      confirm_password: psw_repeat
    };
    this.user_service.verifyMerchantData(data).then(res => {
      if (res['status'] == 100) {
        this.is_loading = false;
        this.toastrComponent.showToast("success", "Cheers!", "Success.");
        this.router.navigate(['/authentication/login']);
      } else {
        this.userMessage = res['message'];
        this.is_loading = false;
        // this.showAlert(this.userMessage)
        this.toastrComponent.showToast("danger", "Oh Snap!", this.userMessage);
      }
    });
  }
  showAlert(message) {
    this.is_loading = false;
    this.is_alert = true;
    this.message = message;
    setTimeout(() => {
      this.is_alert = false;
    }, 2000);
  }
  // showAlertSucces(message) {
  //   this.is_alert_succes = true
  //   this.message = message
  //   setTimeout(() => {    
  //     this.is_alert_succes = false
  //   }, 2000);
  // }
  // password validators
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextTypeRepeat() {
    this.fieldTextTypeRepeat = !this.fieldTextTypeRepeat;
  }
  button_disability() {
    if (this.is_fixed_btn_disable) {
      return true;
    } else {
      return !this.login_form.valid;
    }
  }
  static #_ = this.ɵfac = function ConformMerchantComponent_Factory(t) {
    return new (t || ConformMerchantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_components__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ConformMerchantComponent,
    selectors: [["ngx-conform-merchant"]],
    decls: 23,
    vars: 14,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-md-4", "col-md-offset-4"], [1, "account-wall"], ["src", "../../../assets/images/Onepay-pg 1.png", "alt", "", 1, "profile-img"], [1, "text-center", "login-title"], [1, "form-signin", 3, "ngSubmit", "formGroup"], [1, "input-group", "form-group", "form-group-margin"], ["formControlName", "new_password", "nbInput", "", "fullWidth", "", "shape", "rectangle", "placeholder", "Enter Password", 1, "form-control", "form-control-text", 3, "type", "ngClass"], ["class", "input_type", 4, "ngIf"], ["formControlName", "confirm_password", "nbInput", "", "fullWidth", "", "shape", "rectangle", "placeholder", "Repeat Password", 1, "form-control", "form-control-text", 3, "type", "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border loading-spinner spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "input_type"], [4, "ngIf"], ["class", "validation-message", 4, "ngIf"], [1, "validation-message"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "loading-spinner", "spinner-border-sm"], [1, "sr-only"]],
    template: function ConformMerchantComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ConformMerchantComponent_Template_form_ngSubmit_9_listener() {
          return ctx.verify_merchant();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Passwords must contain at least one uppercase letter, one lowercase letter, one number and one special character. The minimum allowed length is eight characters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ConformMerchantComponent_div_14_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ConformMerchantComponent_div_17_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ConformMerchantComponent_span_19_Template, 1, 0, "span", 12)(20, ConformMerchantComponent_span_20_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.login_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, (ctx.login_form.get("new_password").dirty || ctx.login_form.get("new_password").touched) && ctx.login_form.get("new_password").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.login_form.get("new_password").invalid && (ctx.login_form.get("new_password").dirty || ctx.login_form.get("new_password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.fieldTextTypeRepeat ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, (ctx.login_form.get("confirm_password").dirty || ctx.login_form.get("confirm_password").touched) && ctx.login_form.get("confirm_password").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.login_form.get("confirm_password").invalid && (ctx.login_form.get("confirm_password").dirty || ctx.login_form.get("confirm_password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.button_disability());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.account-wall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #FFF;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.login-title[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 50px;\n  margin: 0 auto 10px;\n  display: block;\n}\n\n.need-help[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.new-account[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: rgb(165, 161, 161);\n}\n\n.password-area[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.validation-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.form-control-text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vY29uZm9ybS1tZXJjaGFudC9jb25mb3JtLW1lcmNoYW50LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vb25lcGF5JTIwbWVyY2hhbnQlMjBmZS9XRUItT05FUEFZX01FUkNIQU5UX0FETUlOSVNUUkFUSU9SL3NyYy9hcHAvYXV0aGVudGljYXRpb24vY29uZm9ybS1tZXJjaGFudC9jb25mb3JtLW1lcmNoYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUdBLHNCQUFBO0FDQUo7O0FERUE7RUFFSSxVQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREVBO0VBRUksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBR0EsMENBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBRUksZ0JBQUE7QUNBSjs7QURFQTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLDZCQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FEQ0E7RUFDQSxXQUFBO0FDRUEiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW5cclxue1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tc2lnbmluLWhlYWRpbmcsIC5mb3JtLXNpZ25pbiAuY2hlY2tib3hcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2xcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXNcclxue1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl1cclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmFjY291bnQtd2FsbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAwcHggMjBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4ubG9naW4tdGl0bGVcclxue1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnByb2ZpbGUtaW1nXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5uZWVkLWhlbHBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubmV3LWFjY291bnRcclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGV4dC1ncmF5e1xyXG4gICAgY29sb3I6IHJnYigxNjUsIDE2MSwgMTYxKTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWFyZWF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4udmFsaWRhdGlvbi1tZXNzYWdle1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uZm9ybS1jb250cm9sLXRleHR7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmZvcm0tc2lnbmluIHtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYWNjb3VudC13YWxsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogNDBweCAwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubG9naW4tdGl0bGUge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uZWVkLWhlbHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3LWFjY291bnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRleHQtZ3JheSB7XG4gIGNvbG9yOiByZ2IoMTY1LCAxNjEsIDE2MSk7XG59XG5cbi5wYXNzd29yZC1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi52YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZm9ybS1jb250cm9sLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 46347:
/*!*******************************************************************!*\
  !*** ./src/app/authentication/conform-pw/conform-pw.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConformPwComponent: () => (/* binding */ ConformPwComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/services */ 81039);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/components */ 99667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







const _c0 = a0 => ({
  "form-control-danger": a0
});
function ConformPwComponent_div_14_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformPwComponent_div_14_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformPwComponent_div_14_div_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please choose a stronger password. Try a mix of letters, numbers and symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformPwComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformPwComponent_div_14_div_1_small_1_Template, 2, 0, "small", 16)(2, ConformPwComponent_div_14_div_1_small_2_Template, 2, 0, "small", 16)(3, ConformPwComponent_div_14_div_1_small_3_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("new_password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("new_password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("new_password").errors["pattern"] && !ctx_r0.confirm_pw_from.get("new_password").errors["minlength"]);
  }
}
function ConformPwComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformPwComponent_div_14_div_1_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("new_password").invalid && (ctx_r0.confirm_pw_from.get("new_password").dirty || ctx_r0.confirm_pw_from.get("new_password").touched));
  }
}
function ConformPwComponent_div_17_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformPwComponent_div_17_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformPwComponent_div_17_div_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please choose a stronger password. Try a mix of letters, numbers and symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConformPwComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformPwComponent_div_17_div_1_small_1_Template, 2, 0, "small", 16)(2, ConformPwComponent_div_17_div_1_small_2_Template, 2, 0, "small", 16)(3, ConformPwComponent_div_17_div_1_small_3_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("confirm_password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("confirm_password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("confirm_password").errors["pattern"] && !ctx_r0.confirm_pw_from.get("confirm_password").errors["minlength"]);
  }
}
function ConformPwComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConformPwComponent_div_17_div_1_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.confirm_pw_from.get("confirm_password").invalid && (ctx_r0.confirm_pw_from.get("confirm_password").dirty || ctx_r0.confirm_pw_from.get("confirm_password").touched));
  }
}
function ConformPwComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function ConformPwComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ConformPwComponent {
  constructor(userService, fb, toastrComponent, router, route) {
    this.userService = userService;
    this.fb = fb;
    this.toastrComponent = toastrComponent;
    this.router = router;
    this.route = route;
    this.is_loading = false;
    this.is_fixed_btn_disable = false;
    this.phone_no = "";
    this.message = "";
    this.is_alert = false;
    this.is_alert_succes = false;
    this.confirm_pw_from = fb.group({
      phone_number: [''],
      "new_password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}$')]],
      "confirm_password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}$')]]
    });
  }
  ngOnInit() {
    if (this.route.snapshot.queryParams && this.route.snapshot.queryParams['phone_no']) {
      this.phone_no = this.route.snapshot.queryParams['phone_no'];
    } else {
      console.log('kkllll');
      this.router.navigate(['/reset-password']);
    }
    this.allParams = this.route.snapshot.queryParams;
  }
  confirmPassword() {
    // console.log('phone number', this.queryParams['phone_no'])
    this.is_loading = true;
    let password = this.confirm_pw_from.value['new_password'];
    let psw_repeat = this.confirm_pw_from.value['confirm_password'];
    let phone_number = this.route.snapshot.queryParams['phone_no'];
    if (!password || !psw_repeat) {
      // this.showAlert('Required Password')
      this.toastrComponent.showToast("danger", "Oh Snap!", "Required Password");
      console.log('Required Password');
      this.is_loading = false;
      return;
    }
    if (password != psw_repeat) {
      this.toastrComponent.showToast("danger", "Oh Snap!", "The passwords did not match. Please try again");
      // this.showAlert('The passwords did not match. Please try again')
      console.log('The passwords did not match.Please try again');
      this.is_loading = false;
      return;
    }
    console.log('xx');
    let data = {
      phone_number: this.allParams['phone_no'],
      new_password: password,
      confirm_password: psw_repeat
    };
    console.log(data, 'hhhhhh ddjf rest');
    this.userService.postPwResetData(data).then(res => {
      if (res['status'] == 100) {
        this.is_loading = false;
        this.toastrComponent.showToast("success", "Cheers!", "Success.");
        console.log('sucess');
        this.router.navigate(['/authentication/login']);
      } else {
        this.userMessage = res['message'];
        this.is_loading = false;
        // this.showAlert(this.userMessage)
        this.toastrComponent.showToast("danger", "Oh Snap!", this.userMessage);
      }
    });
  }
  showAlert(message) {
    this.is_alert = true;
    this.message = message;
    setTimeout(() => {
      this.is_alert = false;
    }, 2000);
  }
  showAlertSucces(message) {
    this.is_alert_succes = true;
    this.message = message;
    setTimeout(() => {
      this.is_alert_succes = false;
    }, 2000);
  }
  // password validators
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextTypeRepeat() {
    this.fieldTextTypeRepeat = !this.fieldTextTypeRepeat;
  }
  button_disability() {
    if (this.is_fixed_btn_disable) {
      return true;
    } else {
      return !this.confirm_pw_from.valid;
    }
  }
  static #_ = this.ɵfac = function ConformPwComponent_Factory(t) {
    return new (t || ConformPwComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_components__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ConformPwComponent,
    selectors: [["ngx-conform-pw"]],
    decls: 23,
    vars: 14,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-md-4", "col-md-offset-4"], [1, "account-wall"], ["src", "../../../assets/images/Onepay-pg 1.png", "alt", "", 1, "profile-img"], [1, "text-center", "login-title"], [1, "form-signin", 3, "ngSubmit", "formGroup"], [1, "input-group", "form-group", "form-group-margin"], ["formControlName", "new_password", "nbInput", "", "fullWidth", "", "shape", "rectangle", "placeholder", "Enter Password", 1, "form-control", "form-control-text", 3, "type", "ngClass"], ["class", "input_type", 4, "ngIf"], ["formControlName", "confirm_password", "nbInput", "", "fullWidth", "", "shape", "rectangle", "placeholder", "Repeat Password", 1, "form-control", "form-control-text", 3, "type", "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border loading-spinner spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "input_type"], [4, "ngIf"], ["class", "validation-message", 4, "ngIf"], [1, "validation-message"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "loading-spinner", "spinner-border-sm"], [1, "sr-only"]],
    template: function ConformPwComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ConformPwComponent_Template_form_ngSubmit_9_listener() {
          return ctx.confirmPassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Passwords must contain at least one uppercase letter, one lowercase letter, one number and one special character. The minimum allowed length is eight characters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ConformPwComponent_div_14_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ConformPwComponent_div_17_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ConformPwComponent_span_19_Template, 1, 0, "span", 12)(20, ConformPwComponent_span_20_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.confirm_pw_from);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, (ctx.confirm_pw_from.get("new_password").dirty || ctx.confirm_pw_from.get("new_password").touched) && ctx.confirm_pw_from.get("new_password").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.confirm_pw_from.get("new_password").invalid && (ctx.confirm_pw_from.get("new_password").dirty || ctx.confirm_pw_from.get("new_password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.fieldTextTypeRepeat ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, (ctx.confirm_pw_from.get("confirm_password").dirty || ctx.confirm_pw_from.get("confirm_password").touched) && ctx.confirm_pw_from.get("confirm_password").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.confirm_pw_from.get("confirm_password").invalid && (ctx.confirm_pw_from.get("confirm_password").dirty || ctx.confirm_pw_from.get("confirm_password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.button_disability());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.account-wall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #FFF;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.login-title[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 50px;\n  margin: 0 auto 10px;\n  display: block;\n}\n\n.need-help[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.new-account[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: rgb(165, 161, 161);\n}\n\n.password-area[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.validation-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.form-control-text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vY29uZm9ybS1wdy9jb25mb3JtLXB3LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vb25lcGF5JTIwbWVyY2hhbnQlMjBmZS9XRUItT05FUEFZX01FUkNIQU5UX0FETUlOSVNUUkFUSU9SL3NyYy9hcHAvYXV0aGVudGljYXRpb24vY29uZm9ybS1wdy9jb25mb3JtLXB3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUdBLHNCQUFBO0FDQUo7O0FERUE7RUFFSSxVQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREVBO0VBRUksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBR0EsMENBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREtBO0VBRUksZ0JBQUE7QUNISjs7QURLQTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURNQTtFQUNJLDZCQUFBO0FDSEo7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FESUE7RUFDQSxXQUFBO0FDREEiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW5cclxue1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tc2lnbmluLWhlYWRpbmcsIC5mb3JtLXNpZ25pbiAuY2hlY2tib3hcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2xcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXNcclxue1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl1cclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmFjY291bnQtd2FsbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAwcHggMjBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4ubG9naW4tdGl0bGVcclxue1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnByb2ZpbGUtaW1nXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ubmVlZC1oZWxwXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm5ldy1hY2NvdW50XHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRleHQtZ3JheXtcclxuICAgIGNvbG9yOiByZ2IoMTY1LCAxNjEsIDE2MSk7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1hcmVhe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnZhbGlkYXRpb24tbWVzc2FnZXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmZvcm0tY29udHJvbC10ZXh0e1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi5mb3JtLXNpZ25pbiB7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tc2lnbmluLWhlYWRpbmcsIC5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT10ZXh0XSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmFjY291bnQtd2FsbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDQwcHggMHB4IDIwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmxvZ2luLXRpdGxlIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmVlZC1oZWxwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5ldy1hY2NvdW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50ZXh0LWdyYXkge1xuICBjb2xvcjogcmdiKDE2NSwgMTYxLCAxNjEpO1xufVxuXG4ucGFzc3dvcmQtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4udmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZvcm0tY29udHJvbC10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13845:
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forget-password/forget-password.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetPasswordComponent: () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/services */ 81039);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/components */ 99667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







const _c0 = a0 => ({
  "form-control-danger": a0
});
function ForgetPasswordComponent_div_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Register Phone Number is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ForgetPasswordComponent_div_13_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid Phone Number try again!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ForgetPasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgetPasswordComponent_div_13_small_1_Template, 2, 0, "small", 14)(2, ForgetPasswordComponent_div_13_small_2_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.forget_pw_from.get("phone_number").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.forget_pw_from.get("phone_number").errors["pattern"]);
  }
}
function ForgetPasswordComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 16);
  }
}
function ForgetPasswordComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ForgetPasswordComponent {
  constructor(userService, fb, toastrComponent, router) {
    this.userService = userService;
    this.fb = fb;
    this.toastrComponent = toastrComponent;
    this.router = router;
    this.is_loading = false;
    this.is_fixed_btn_disable = false;
    this.forget_pw_from = fb.group({
      phone_number: ['+94', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?:\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$')]]
      // phone_number: ['+94',[Validators.required,Validators.pattern('^(?:0|94|\+94|0094)?(?:(?P<area>11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(?P<land_carrier>0|2|3|4|5|7|9)|7(?P<mobile_carrier>0|1|2|4|5|6|7|8)\d)\d{6}$`')]],
    });
  }
  ngOnInit() {}
  getOtp() {
    this.is_loading = true;
    this.is_fixed_btn_disable = true;
    this.userService.requestPasswordResetOtp(this.forget_pw_from.value.phone_number).then(res => {
      this.is_fixed_btn_disable = false;
      this.is_loading = false;
      if (res['status'] == 100) {
        this.toastrComponent.showToast("success", "Cheers!", "OTP sent to your registered email address, Please verify OTP.");
        this.router.navigate(['/authentication/otp-verrification'], {
          queryParams: {
            phone_no: this.forget_pw_from.value['phone_number']
          }
        });
      } else {
        this.toastrComponent.showToast("danger", "Oh Snap!", res['message']);
      }
    }, error => {
      this.toastrComponent.showToast("danger", "Oh Snap!", "Internal Server Error");
      this.is_fixed_btn_disable = false;
      this.is_loading = false;
    });
  }
  button_disability() {
    if (this.is_fixed_btn_disable) {
      return true;
    } else {
      return !this.forget_pw_from.valid;
    }
  }
  static #_ = this.ɵfac = function ForgetPasswordComponent_Factory(t) {
    return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_components__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ForgetPasswordComponent,
    selectors: [["ngx-forget-password"]],
    decls: 21,
    vars: 8,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-8", "col-md-7", "col-lg-4"], [1, "account-wall"], ["src", "../../../assets/images/Onepay-pg 1.png", "alt", "", 1, "profile-img"], [1, "text-center", "login-title"], [1, "form-signin", 3, "ngSubmit", "formGroup"], [1, "mb-2"], ["type", "text", "placeholder", "Phone Number", "formControlName", "phone_number", 1, "form-control", 3, "ngClass"], ["class", "input_type", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border loading-spinner spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "input_type"], ["class", "validation-message text-danger", 4, "ngIf"], [1, "validation-message", "text-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "loading-spinner", "spinner-border-sm"], [1, "sr-only"]],
    template: function ForgetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgetPasswordComponent_Template_form_ngSubmit_9_listener() {
          return ctx.getOtp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Enter your phone number and we'll send a code to reset your password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ForgetPasswordComponent_div_13_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ForgetPasswordComponent_span_16_Template, 1, 0, "span", 11)(17, ForgetPasswordComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Request OTP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.forget_pw_from);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, (ctx.forget_pw_from.get("phone_number").dirty || ctx.forget_pw_from.get("phone_number").touched) && ctx.forget_pw_from.get("phone_number").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.forget_pw_from.get("phone_number").invalid && (ctx.forget_pw_from.get("phone_number").dirty || ctx.forget_pw_from.get("phone_number").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.button_disability());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".form-signin[_ngcontent-%COMP%] {\n  max-width: 350px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.account-wall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #FFF;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.login-title[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 50px;\n  margin: 0 auto 10px;\n  display: block;\n}\n\n.need-help[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.new-account[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: rgb(165, 161, 161);\n}\n\n.password-area[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL29uZXBheSUyMG1lcmNoYW50JTIwZmUvV0VCLU9ORVBBWV9NRVJDSEFOVF9BRE1JTklTVFJBVElPUi9zcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBR0Esc0JBQUE7QUNBSjs7QURFQTtFQUVJLFVBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDQUo7O0FERUE7RUFFSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFHQSwwQ0FBQTtBQ0FKOztBREVBO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FES0E7RUFFSSxnQkFBQTtBQ0hKOztBREtBO0VBRUksY0FBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0ksNkJBQUE7QUNISiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNpZ25pblxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIC5jaGVja2JveFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3hcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1c1xyXG57XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1cclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uYWNjb3VudC13YWxsXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweCAyMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi5sb2dpbi10aXRsZVxyXG57XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucHJvZmlsZS1pbWdcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5uZWVkLWhlbHBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubmV3LWFjY291bnRcclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGV4dC1ncmF5e1xyXG4gICAgY29sb3I6IHJnYigxNjUsIDE2MSwgMTYxKTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWFyZWF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufSIsIi5mb3JtLXNpZ25pbiB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tc2lnbmluLWhlYWRpbmcsIC5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT10ZXh0XSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmFjY291bnQtd2FsbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDQwcHggMHB4IDIwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmxvZ2luLXRpdGxlIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmVlZC1oZWxwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5ldy1hY2NvdW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50ZXh0LWdyYXkge1xuICBjb2xvcjogcmdiKDE2NSwgMTYxLCAxNjEpO1xufVxuXG4ucGFzc3dvcmQtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 10645:
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/services */ 81039);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@core/components */ 99667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);








const _c0 = a0 => ({
  "form-control-danger": a0
});
const _c1 = (a0, a1) => ({
  "fa-eye-slash": a0,
  "fa-eye": a1
});
function LoginComponent_div_18_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Provider email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_18_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid email.Try again!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_18_small_1_Template, 2, 0, "small", 33)(2, LoginComponent_div_18_small_2_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("email").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("email").errors["pattern"]);
  }
}
function LoginComponent_div_26_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_26_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password must be at least 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_26_div_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a stronger password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_26_div_1_small_1_Template, 2, 0, "small", 33)(2, LoginComponent_div_26_div_1_small_2_Template, 2, 0, "small", 37)(3, LoginComponent_div_26_div_1_small_3_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("password").errors["pattern"] && !ctx_r0.login_form.get("password").errors["minlength"]);
  }
}
function LoginComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_26_div_1_Template, 4, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.login_form.get("password").invalid && (ctx_r0.login_form.get("password").dirty || ctx_r0.login_form.get("password").touched));
  }
}
function LoginComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 39);
  }
}
function LoginComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(encriptionService, userService, fb, toastrComponent, router) {
    this.encriptionService = encriptionService;
    this.userService = userService;
    this.fb = fb;
    this.toastrComponent = toastrComponent;
    this.router = router;
    this.is_loading = false;
    this.is_fixed_btn_disable = false;
    this.app_version = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
    this.login_form = this.fb.group({
      "email": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      "password": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {}
  login() {
    localStorage.setItem("sub_user", "0");
    this.is_fixed_btn_disable = true;
    this.is_loading = true;
    console.log(this.login_form.value, 'Login pay load');
    this.userService.merchant_login(this.login_form.value).then(res => {
      // console.log(res,'freef');
      this.is_fixed_btn_disable = false;
      this.is_loading = false;
      if (res?.status === 100) {
        console.log(res, 'ff');
        localStorage.setItem("xsrftr", res['data']['refresh_token']);
        localStorage.setItem("xsrft", res['data']['access_token']);
        localStorage.setItem("xu", this.encriptionService.request_encript(res['data']['user']));
        localStorage.setItem("sub_user", res['data']['user']['is_sub_user']);
        localStorage.setItem("email", res['data']['user']['email']);
        localStorage.setItem("privileges", this.encriptionService.request_encript(res['data']['user']['privileges']));
        //localStorage.setItem("privileges",res['data']['user']['privileges']);
        this.router.navigate(['/pages/dashboard']);
      } else {
        this.toastrComponent.showToast("danger", "Oh Snap!", res?.message);
      }
    }, error => {
      this.toastrComponent.showToast("danger", "Oh Snap!", "Internal Server Error");
      this.is_fixed_btn_disable = false;
      this.is_loading = false;
    });
  }
  button_disability() {
    if (this.is_fixed_btn_disable) {
      return true;
    } else {
      return !this.login_form.valid;
    }
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.EncriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_components__WEBPACK_IMPORTED_MODULE_2__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["ngx-login"]],
    decls: 48,
    vars: 14,
    consts: [[1, "row", 2, "background-color", "white", "height", "100%"], [1, "col-sm-6", "col-md-6"], [1, "left_con"], ["src", "../../../assets/images/Onepay-pg 1.png", "alt", "", 1, "onepay_logo"], [1, "row"], [1, "col-12"], [1, "text_con"], [1, "content_dis"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control"], ["class", "input_type", 4, "ngIf"], [1, "form-group", "input-group", "form-group", "form-group-margin"], [2, "width", "100%"], ["placeholder", "Enter your password", "name", "password", "formControlName", "password", "required", "", 1, "form-control", "form-control-text", 3, "type", "ngClass"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "click", "ngClass"], ["class", "input_type_pw", 4, "ngIf"], [1, "text-left"], [1, "forgot_text"], ["href", "/authentication/forget-password"], ["type", "submit", 1, "btn", 3, "disabled"], ["class", "spinner-border loading-spinner spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "footer"], [1, "created-by"], ["href", "https://spemai.com", "target", "_blank"], [1, "col-sm-6", "col-md-6", "right-panel", 2, "overflow", "hidden"], [1, "bac_image"], ["src", "../../../assets/images/Project costing 2.png", "alt", "", 1, "login_image"], [1, "translate-rotate"], [1, "input_type"], ["class", "validation-message text-danger", 4, "ngIf"], [1, "validation-message", "text-danger"], [1, "input_type_pw"], [4, "ngIf"], ["class", "validation-message text-danger text-danger", 4, "ngIf"], [1, "validation-message", "text-danger", "text-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "loading-spinner", "spinner-border-sm"], [1, "sr-only"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Hello,");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Welcome back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Please login to the Merchant Admin Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "section", 9)(15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "section", 12)(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15)(24, "span", 16)(25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_25_listener() {
          return ctx.toggleFieldTextType();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "section", 19)(28, "p", 20)(29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, LoginComponent_span_33_Template, 1, 0, "span", 23)(34, LoginComponent_span_34_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "section", 25)(37, "section")(38, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Created with \u2665 by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "b")(41, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Spemai");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " \u00A9 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 28)(45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.login_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.login_form.get("email").invalid && (ctx.login_form.get("email").dirty || ctx.login_form.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, (ctx.login_form.get("password").dirty || ctx.login_form.get("password").touched) && ctx.login_form.get("password").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c1, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.login_form.get("password").invalid && (ctx.login_form.get("password").dirty || ctx.login_form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.button_disability());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.is_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.is_loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["[_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.account-wall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #FFF;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.login-title[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n.need-help[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.new-account[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: rgb(165, 161, 161);\n}\n\n.password-area[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.onepay_logo[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\n.text_con[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 40px 120px;\n}\n\nh1[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n\n.content_dis[_ngcontent-%COMP%] {\n  color: #3B8968;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 20px;\n  padding-bottom: 30px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  padding-bottom: 6px;\n}\n\n.forgot_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  display: inline-block;\n  margin: 0 auto;\n  overflow: hidden;\n  position: fixed;\n  text-align: center;\n  font-size: 10px;\n  padding-top: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  float: right;\n  padding: 10px 40px;\n  font-size: 16px;\n  font-weight: 600px;\n  background-color: #3B8968;\n  color: white;\n}\n\n.translate-rotate[_ngcontent-%COMP%] {\n  background-color: #E4F3ED;\n  transform: translateX(40px) rotate(65deg);\n  width: 133%;\n  height: 100%;\n  top: 58px;\n  position: absolute;\n}\n\n.login_image[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  height: 401px;\n  width: auto;\n  top: 100px;\n  left: 175px;\n}\n\n.input_type_pw[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 540px) {\n  .text_con[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n  .right-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 1400px) {\n  .login_image[_ngcontent-%COMP%] {\n    top: 200px;\n  }\n  .translate-rotate[_ngcontent-%COMP%] {\n    transform: translateX(65px) rotate(65deg);\n  }\n  .login_image[_ngcontent-%COMP%] {\n    top: 200px;\n    left: 376px;\n  }\n  .text_con[_ngcontent-%COMP%] {\n    padding: 150px 120px;\n  }\n  .login_image[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9vbmVwYXklMjBtZXJjaGFudCUyMGZlL1dFQi1PTkVQQVlfTUVSQ0hBTlRfQURNSU5JU1RSQVRJT1Ivc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUVJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNESjs7QURHQTtFQUVJLG1CQUFBO0FDREo7O0FER0E7RUFFSSxtQkFBQTtBQ0RKOztBREdBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFHQSxzQkFBQTtBQ0RKOztBREdBO0VBRUksVUFBQTtBQ0RKOztBREdBO0VBRUksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDREo7O0FER0E7RUFFSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNESjs7QURHQTtFQUVJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUdBLDBDQUFBO0FDREo7O0FER0E7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFHQSxrQkFBQTtBQ0RKOztBREdBO0VBRUksZ0JBQUE7QUNESjs7QURHQTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURJQTtFQUNJLDZCQUFBO0FDREo7O0FEVUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQQTs7QURTQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOQTs7QURRQTtFQUNBLG1CQUFBO0FDTEE7O0FET0E7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0pBOztBRE1BO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNIQTs7QURLQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZBOztBRElBO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBQTs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0EsV0FBQTtBQ0dBOztBRERBO0VBQ0E7SUFDQSxrQkFBQTtFQ0lFO0VERkY7SUFDSSxhQUFBO0VDSUY7QUFDRjtBREZBO0VBQ0k7SUFDSSxVQUFBO0VDSU47RURGRjtJQUNBLHlDQUFBO0VDSUU7RURGRjtJQUNBLFVBQUE7SUFDQSxXQUFBO0VDSUU7RURGRjtJQUNBLG9CQUFBO0VDSUU7RURGRjtJQUNBLGFBQUE7RUNJRTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGlkZSBlZGdlIGJyb3dzZXIgZXllIG1hc2sgb24gcGFzc3dvcmQgaW5wdXQgZmllbGRzXHJcbjo6LW1zLXJldmVhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pblxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIC5jaGVja2JveFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3hcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1c1xyXG57XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1cclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uYWNjb3VudC13YWxsXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweCAyMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi5sb2dpbi10aXRsZVxyXG57XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucHJvZmlsZS1pbWdcclxue1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5uZWVkLWhlbHBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubmV3LWFjY291bnRcclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGV4dC1ncmF5e1xyXG4gICAgY29sb3I6IHJnYigxNjUsIDE2MSwgMTYxKTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWFyZWF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLm9uZXBheV9sb2dve1xyXG5oZWlnaHQ6NDBweCA7XHJcbndpZHRoOiBhdXRvO1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG5tYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4udGV4dF9jb257XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbnBhZGRpbmc6IDQwcHggMTIwcHg7XHJcbn1cclxuaDF7XHJcbmxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuLmNvbnRlbnRfZGlze1xyXG5jb2xvcjogIzNCODk2ODtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG5wYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5sYWJlbHtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcbi5mb3Jnb3RfdGV4dHtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5mb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb290ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4uYnRue1xyXG5mbG9hdDogcmlnaHQ7XHJcbnBhZGRpbmc6IDEwcHggNDBweDtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5mb250LXdlaWdodDogNjAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IzNCODk2OCA7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4udHJhbnNsYXRlLXJvdGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRGM0VEO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpIHJvdGF0ZSg2NWRlZyk7XHJcbiAgICB3aWR0aDogMTMzJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogNThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbi5sb2dpbl9pbWFnZXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDAxcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAxNzVweDtcclxufVxyXG4uaW5wdXRfdHlwZV9wd3tcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuLnRleHRfY29ue1xyXG5wYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuLnJpZ2h0LXBhbmVse1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC5sb2dpbl9pbWFnZXtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG4udHJhbnNsYXRlLXJvdGF0ZXtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKDY1cHgpIHJvdGF0ZSg2NWRlZyk7XHJcbn1cclxuLmxvZ2luX2ltYWdle1xyXG50b3A6IDIwMHB4O1xyXG5sZWZ0OiAzNzZweDtcclxufVxyXG4udGV4dF9jb257XHJcbnBhZGRpbmc6IDE1MHB4IDEyMHB4O1xyXG59XHJcbi5sb2dpbl9pbWFnZXtcclxuaGVpZ2h0OiA1MDBweDtcclxufVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiOjotbXMtcmV2ZWFsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYWNjb3VudC13YWxsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogNDBweCAwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubG9naW4tdGl0bGUge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubmVlZC1oZWxwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5ldy1hY2NvdW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50ZXh0LWdyYXkge1xuICBjb2xvcjogcmdiKDE2NSwgMTYxLCAxNjEpO1xufVxuXG4ucGFzc3dvcmQtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ub25lcGF5X2xvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnRleHRfY29uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNDBweCAxMjBweDtcbn1cblxuaDEge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4uY29udGVudF9kaXMge1xuICBjb2xvcjogIzNCODk2ODtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5mb3Jnb3RfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvb3RlciB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNCODk2ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJhbnNsYXRlLXJvdGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEYzRUQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KSByb3RhdGUoNjVkZWcpO1xuICB3aWR0aDogMTMzJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDU4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ2luX2ltYWdlIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDAxcHg7XG4gIHdpZHRoOiBhdXRvO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAxNzVweDtcbn1cblxuLmlucHV0X3R5cGVfcHcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLnRleHRfY29uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIH1cbiAgLnJpZ2h0LXBhbmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5sb2dpbl9pbWFnZSB7XG4gICAgdG9wOiAyMDBweDtcbiAgfVxuICAudHJhbnNsYXRlLXJvdGF0ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDY1cHgpIHJvdGF0ZSg2NWRlZyk7XG4gIH1cbiAgLmxvZ2luX2ltYWdlIHtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDM3NnB4O1xuICB9XG4gIC50ZXh0X2NvbiB7XG4gICAgcGFkZGluZzogMTUwcHggMTIwcHg7XG4gIH1cbiAgLmxvZ2luX2ltYWdlIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 56337:
/*!*********************************************************************************!*\
  !*** ./src/app/authentication/otp-verrification/otp-verrification.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpVerrificationComponent: () => (/* binding */ OtpVerrificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/services */ 81039);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/components */ 99667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







const _c0 = a0 => ({
  "form-control-danger": a0
});
function OtpVerrificationComponent_div_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Register Phone Number is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OtpVerrificationComponent_div_13_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid Phone Number try again!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OtpVerrificationComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OtpVerrificationComponent_div_13_small_1_Template, 2, 0, "small", 14)(2, OtpVerrificationComponent_div_13_small_2_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.otp_verification_from.get("phone_number").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.otp_verification_from.get("phone_number").errors["pattern"]);
  }
}
function OtpVerrificationComponent_div_15_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " OTP Code is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OtpVerrificationComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OtpVerrificationComponent_div_15_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.otp_verification_from.get("otp").errors["required"]);
  }
}
function OtpVerrificationComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function OtpVerrificationComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class OtpVerrificationComponent {
  constructor(userService, fb, toastrComponent, route, router) {
    this.userService = userService;
    this.fb = fb;
    this.toastrComponent = toastrComponent;
    this.route = route;
    this.router = router;
    this.is_loading = false;
    this.is_fixed_btn_disable = false;
    this.otp_verification_from = fb.group({
      phone_number: [''],
      otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    console.log(this.route.snapshot);
    if (this.route.snapshot.queryParams && this.route.snapshot.queryParams['phone_no']) {
      console.log('email', route.snapshot.queryParams.email);
      this.otp_verification_from.setValue({
        phone_number: this.route.snapshot.queryParams['phone_no'],
        otp: ''
      });
    } else {
      console.log('kkllll');
      this.router.navigate(['/authentication/otp-verrification']);
    }
  }
  ngOnInit() {}
  getVerification() {
    this.is_loading = true;
    if (!this.otp_verification_from.valid) {
      this.is_loading = false;
      this.toastrComponent.showToast("danger", "Oh Snap!", "Please provide required data");
      return;
    }
    this.userService.postPwResetOtpData(this.otp_verification_from.value).then(res => {
      console.log(res);
      if (res['status'] == 100) {
        this.is_loading = false;
        this.router.navigate(['/authentication/reset-password'], {
          queryParams: {
            phone_no: this.otp_verification_from.value['phone_number']
          }
        });
        this.otp_verification_from.reset();
        this.toastrComponent.showToast("success", "Cheers!", "OTP sent to your registered email address, Please verify OTP.");
      } else {
        this.is_loading = false;
        this.toastrComponent.showToast("danger", "Oh Snap!", res['message']);
      }
    }, error => {
      this.is_fixed_btn_disable = false;
      this.is_loading = false;
      this.toastrComponent.showToast("danger", "Oh Snap!", "Internal Server Error");
    });
  }
  button_disability() {
    if (this.is_fixed_btn_disable) {
      return true;
    } else {
      return !this.otp_verification_from.valid;
    }
  }
  static #_ = this.ɵfac = function OtpVerrificationComponent_Factory(t) {
    return new (t || OtpVerrificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_components__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OtpVerrificationComponent,
    selectors: [["ngx-otp-verrification"]],
    decls: 23,
    vars: 12,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-md-4", "col-md-offset-4"], [1, "account-wall"], ["src", "../../../assets/images/Onepay-pg 1.png", "alt", "", 1, "profile-img"], [1, "text-center", "login-title"], [1, "form-signin", 3, "ngSubmit", "formGroup"], ["disabled", "", "type", "text", "placeholder", "Phone Number", "formControlName", "phone_number", 1, "form-control", 3, "ngClass"], ["class", "input_type", 4, "ngIf"], ["formControlName", "otp", "type", "text", "nbInput", "", "fullWidth", "", "shape", "rectangle", "placeholder", "Enter Verification Code", 1, "form-control", "form-control-text", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border loading-spinner spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "input_type"], ["class", "validation-message text-danger", 4, "ngIf"], [1, "validation-message", "text-danger"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "loading-spinner", "spinner-border-sm"], [1, "sr-only"]],
    template: function OtpVerrificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function OtpVerrificationComponent_Template_form_ngSubmit_9_listener() {
          return ctx.getVerification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Please check your email. Your code is 4 characters in length.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OtpVerrificationComponent_div_13_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, OtpVerrificationComponent_div_15_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OtpVerrificationComponent_span_18_Template, 1, 0, "span", 11)(19, OtpVerrificationComponent_span_19_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Request OTP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.otp_verification_from);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, (ctx.otp_verification_from.get("phone_number").dirty || ctx.otp_verification_from.get("phone_number").touched) && ctx.otp_verification_from.get("phone_number").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.otp_verification_from.get("phone_number").invalid && (ctx.otp_verification_from.get("phone_number").dirty || ctx.otp_verification_from.get("phone_number").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, (ctx.otp_verification_from.get("otp").dirty || ctx.otp_verification_from.get("otp").touched) && ctx.otp_verification_from.get("otp").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.otp_verification_from.get("otp").invalid && (ctx.otp_verification_from.get("otp").dirty || ctx.otp_verification_from.get("otp").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.button_disability());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.account-wall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #FFF;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.login-title[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 50px;\n  margin: 0 auto 10px;\n  display: block;\n}\n\n.need-help[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.new-account[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: rgb(165, 161, 161);\n}\n\n.password-area[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vb3RwLXZlcnJpZmljYXRpb24vb3RwLXZlcnJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9vbmVwYXklMjBtZXJjaGFudCUyMGZlL1dFQi1PTkVQQVlfTUVSQ0hBTlRfQURNSU5JU1RSQVRJT1Ivc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9vdHAtdmVycmlmaWNhdGlvbi9vdHAtdmVycmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtBQ0FKOztBREVBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFHQSxzQkFBQTtBQ0FKOztBREVBO0VBRUksVUFBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURFQTtFQUVJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUdBLDBDQUFBO0FDQUo7O0FERUE7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURLQTtFQUVJLGdCQUFBO0FDSEo7O0FES0E7RUFFSSxjQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FETUE7RUFDSSw2QkFBQTtBQ0hKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluXHJcbntcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveFxyXG57XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzXHJcbntcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJ0ZXh0XCJdXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5hY2NvdW50LXdhbGxcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuLmxvZ2luLXRpdGxlXHJcbntcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wcm9maWxlLWltZ1xyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm5lZWQtaGVscFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5uZXctYWNjb3VudFxyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWdyYXl7XHJcbiAgICBjb2xvcjogcmdiKDE2NSwgMTYxLCAxNjEpO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtYXJlYXtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59IiwiLmZvcm0tc2lnbmluIHtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYWNjb3VudC13YWxsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogNDBweCAwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubG9naW4tdGl0bGUge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uZWVkLWhlbHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3LWFjY291bnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRleHQtZ3JheSB7XG4gIGNvbG9yOiByZ2IoMTY1LCAxNjEsIDE2MSk7XG59XG5cbi5wYXNzd29yZC1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37113:
/*!***********************************************************************************************!*\
  !*** ./src/app/authentication/user-management-reset-pw/user-management-reset-pw.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserManagementResetPwComponent: () => (/* binding */ UserManagementResetPwComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/services */ 81039);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/components */ 99667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core_services_app_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@core/services/app_services/user-management.service */ 20012);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);








const _c0 = a0 => ({
  "form-control-danger": a0
});
function UserManagementResetPwComponent_div_0_div_14_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserManagementResetPwComponent_div_0_div_14_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password must be at least 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserManagementResetPwComponent_div_0_div_14_div_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a stronger password. Try a mix of letters, numbers and symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserManagementResetPwComponent_div_0_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserManagementResetPwComponent_div_0_div_14_div_1_small_1_Template, 2, 0, "small", 19)(2, UserManagementResetPwComponent_div_0_div_14_div_1_small_2_Template, 2, 0, "small", 19)(3, UserManagementResetPwComponent_div_0_div_14_div_1_small_3_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("new_password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("new_password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("new_password").errors["pattern"] && !ctx_r1.confirm_pw_from.get("new_password").errors["minlength"]);
  }
}
function UserManagementResetPwComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserManagementResetPwComponent_div_0_div_14_div_1_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("new_password").invalid && (ctx_r1.confirm_pw_from.get("new_password").dirty || ctx_r1.confirm_pw_from.get("new_password").touched));
  }
}
function UserManagementResetPwComponent_div_0_div_17_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserManagementResetPwComponent_div_0_div_17_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password must be at least 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserManagementResetPwComponent_div_0_div_17_div_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a stronger password. Try a mix of letters, numbers and symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserManagementResetPwComponent_div_0_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserManagementResetPwComponent_div_0_div_17_div_1_small_1_Template, 2, 0, "small", 19)(2, UserManagementResetPwComponent_div_0_div_17_div_1_small_2_Template, 2, 0, "small", 19)(3, UserManagementResetPwComponent_div_0_div_17_div_1_small_3_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("confirm_password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("confirm_password").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("confirm_password").errors["pattern"] && !ctx_r1.confirm_pw_from.get("confirm_password").errors["minlength"]);
  }
}
function UserManagementResetPwComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserManagementResetPwComponent_div_0_div_17_div_1_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("confirm_password").invalid && (ctx_r1.confirm_pw_from.get("confirm_password").dirty || ctx_r1.confirm_pw_from.get("confirm_password").touched));
  }
}
function UserManagementResetPwComponent_div_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 21);
  }
}
function UserManagementResetPwComponent_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserManagementResetPwComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br")(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Reset Password User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserManagementResetPwComponent_div_0_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Passwords must contain at least one uppercase letter, one lowercase letter, one number and one special character. The minimum allowed length is eight characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UserManagementResetPwComponent_div_0_div_14_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UserManagementResetPwComponent_div_0_div_17_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, UserManagementResetPwComponent_div_0_span_19_Template, 1, 0, "span", 15)(20, UserManagementResetPwComponent_div_0_span_20_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.confirm_pw_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, (ctx_r1.confirm_pw_from.get("new_password").dirty || ctx_r1.confirm_pw_from.get("new_password").touched) && ctx_r1.confirm_pw_from.get("new_password").errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("new_password").invalid && (ctx_r1.confirm_pw_from.get("new_password").dirty || ctx_r1.confirm_pw_from.get("new_password").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.fieldTextTypeRepeat ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, (ctx_r1.confirm_pw_from.get("confirm_password").dirty || ctx_r1.confirm_pw_from.get("confirm_password").touched) && ctx_r1.confirm_pw_from.get("confirm_password").errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.confirm_pw_from.get("confirm_password").invalid && (ctx_r1.confirm_pw_from.get("confirm_password").dirty || ctx_r1.confirm_pw_from.get("confirm_password").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.button_disability());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.is_loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.is_loading);
  }
}
function UserManagementResetPwComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "You are not authorized to access this site");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
}
function UserManagementResetPwComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Redirect in progress. Please wait while we redirect you.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
class UserManagementResetPwComponent {
  constructor(userService, fb, toastrComponent, router, route, UserMService) {
    this.userService = userService;
    this.fb = fb;
    this.toastrComponent = toastrComponent;
    this.router = router;
    this.route = route;
    this.UserMService = UserMService;
    this.is_loading = false;
    this.is_fixed_btn_disable = false;
    this.email = "";
    this.message = "";
    this.is_alert = false;
    this.is_alert_succes = false;
    this.is_loading_1 = false;
    this.redirecting = true;
    this.confirm_pw_from = fb.group({
      "email": [''],
      "new_password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}$')]],
      "confirm_password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}$')]]
    });
  }
  ngOnInit() {
    this.email = this.route.snapshot.params.id;
    this.getUserStatus();
  }
  getUserStatus() {
    this.is_loading_1 = true;
    this.redirecting = true;
    this.UserMService.getStatus(this.route.snapshot.params.id).then(res => {
      console.log('get status', res);
      this.is_loading_1 = false;
      if (res?.status_code === 200) {
        if (res?.data['invitation_status'] === "Pending") {
          console.log('fffstatus');
          this.invitation_status = true;
          this.redirecting = false;
        } else {
          this.invitation_status = false;
          this.redirecting = false;
        }
      } else {
        this.toastrComponent.showToast('danger', 'Error!', res?.description || 'Gettings data failed.');
        this.redirecting = false;
      }
    }, error => {
      this.is_loading_1 = false;
      console.log('Internal Server Error', error);
      this.toastrComponent.showToast("danger", "Oh Snap!", this.userMessage);
      this.redirecting = false;
    });
  }
  confirmPassword() {
    // console.log('phone number', this.queryParams['phone_no'])
    this.is_loading = true;
    let password = this.confirm_pw_from.value['new_password'];
    let psw_repeat = this.confirm_pw_from.value['confirm_password'];
    if (!password || !psw_repeat) {
      // this.showAlert('Required Password')
      this.toastrComponent.showToast("danger", "Oh Snap!", "Required Password");
      console.log('Required Password');
      this.is_loading = false;
      return;
    }
    if (password != psw_repeat) {
      this.toastrComponent.showToast("danger", "Oh Snap!", "The passwords did not match. Please try again");
      // this.showAlert('The passwords did not match. Please try again')
      console.log('The passwords did not match.Please try again');
      this.is_loading = false;
      return;
    }
    console.log('xx');
    let data = {
      email: this.email,
      password: password
      // confirm_password: psw_repeat
    };
    console.log(data, 'hhhhhh ddjf rest');
    this.userService.postUserMpasswordreset(data).then(res => {
      console.log(res, 'password user');
      if (res?.status_code === 200) {
        this.is_loading = false;
        this.toastrComponent.showToast("success", "Cheers!", "Success.");
        console.log('sucess');
        this.router.navigate(['/authentication/login']);
      } else {
        this.userMessage = res['message'];
        this.is_loading = false;
        // this.showAlert(this.userMessage)
        this.toastrComponent.showToast("danger", "Oh Snap!", this.userMessage);
      }
    });
  }
  showAlert(message) {
    this.is_alert = true;
    this.message = message;
    setTimeout(() => {
      this.is_alert = false;
    }, 2000);
  }
  showAlertSucces(message) {
    this.is_alert_succes = true;
    this.message = message;
    setTimeout(() => {
      this.is_alert_succes = false;
    }, 2000);
  }
  // password validators
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextTypeRepeat() {
    this.fieldTextTypeRepeat = !this.fieldTextTypeRepeat;
  }
  button_disability() {
    if (this.is_fixed_btn_disable) {
      return true;
    } else {
      return !this.confirm_pw_from.valid;
    }
  }
  static #_ = this.ɵfac = function UserManagementResetPwComponent_Factory(t) {
    return new (t || UserManagementResetPwComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_components__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_app_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__.UserManagementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: UserManagementResetPwComponent,
    selectors: [["ngx-user-management-reset-pw"]],
    decls: 3,
    vars: 3,
    consts: [["class", "container", 4, "ngIf"], ["class", "container2", 4, "ngIf"], ["class", "container3", 4, "ngIf"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-md-4", "col-md-offset-4"], [1, "account-wall"], ["src", "../../../assets/images/Onepay-pg 1.png", "alt", "", 1, "profile-img"], [1, "text-center", "login-title"], [1, "form-signin", 3, "ngSubmit", "formGroup"], [1, "input-group", "form-group", "form-group-margin"], ["formControlName", "new_password", "nbInput", "", "fullWidth", "", "shape", "rectangle", "placeholder", "Enter Password", 1, "form-control", "form-control-text", 3, "type", "ngClass"], ["class", "input_type", 4, "ngIf"], ["formControlName", "confirm_password", "nbInput", "", "fullWidth", "", "shape", "rectangle", "placeholder", "Repeat Password", 1, "form-control", "form-control-text", 3, "type", "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border loading-spinner spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "input_type"], [4, "ngIf"], ["class", "validation-message", 4, "ngIf"], [1, "validation-message"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "loading-spinner", "spinner-border-sm"], [1, "sr-only"], [1, "container2"], [1, "h-100"], [1, "d-flex", "h-100"], [1, "align-self-center", "mx-auto"], [1, "d-flex", "justify-content-center", 2, "align-items", "flex-start", "align-self", "flex-start"], ["src", "../../../assets/images/error_401.png", 1, "style401"], ["src", "../../../assets/images/unauth_text.png", 1, "unauthStyle"], [1, "text-center", "text2"], [1, "container3"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], [1, "align-self-center", "mx-auto", "text-center"], ["src", "../../../assets/images/loading-green-loading.gif"], [1, "text2"]],
    template: function UserManagementResetPwComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UserManagementResetPwComponent_div_0_Template, 23, 14, "div", 0)(1, UserManagementResetPwComponent_div_1_Template, 10, 0, "div", 1)(2, UserManagementResetPwComponent_div_2_Template, 6, 0, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invitation_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.invitation_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.redirecting);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.account-wall[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #FFF;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.login-title[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 50px;\n  margin: 0 auto 10px;\n  display: block;\n}\n\n.need-help[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.new-account[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: rgb(165, 161, 161);\n}\n\n.password-area[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.validation-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.form-control-text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container2[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.align-self-center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n@media only screen and (max-width: 768px) {\n  .style401[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .unauthStyle[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n.container3[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: darkseagreen;\n}\n\n.container3[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%] {\n  color: #fff; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vdXNlci1tYW5hZ2VtZW50LXJlc2V0LXB3L3VzZXItbWFuYWdlbWVudC1yZXNldC1wdy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL29uZXBheSUyMG1lcmNoYW50JTIwZmUvV0VCLU9ORVBBWV9NRVJDSEFOVF9BRE1JTklTVFJBVElPUi9zcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3VzZXItbWFuYWdlbWVudC1yZXNldC1wdy91c2VyLW1hbmFnZW1lbnQtcmVzZXQtcHcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBR0Esc0JBQUE7QUNBSjs7QURFQTtFQUVJLFVBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDQUo7O0FERUE7RUFFSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFHQSwwQ0FBQTtBQ0FKOztBREVBO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FES0E7RUFFSSxnQkFBQTtBQ0hKOztBREtBO0VBRUksY0FBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0ksNkJBQUE7QUNISjs7QURLQTtFQUNJLFVBQUE7QUNGSjs7QURJQTtFQUNBLFdBQUE7QUNEQTs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDRSx1QkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0FDRko7O0FES0U7RUFDRTtJQUNFLFVBQUE7RUNGSjtFREtFO0lBQ0UsVUFBQTtFQ0hKO0FBQ0Y7QURNRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNKSjs7QURPRTtFQUNFLFdBQUEsRUFBQSwyQ0FBQTtBQ0pKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluXHJcbntcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveFxyXG57XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzXHJcbntcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJ0ZXh0XCJdXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5hY2NvdW50LXdhbGxcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuLmxvZ2luLXRpdGxlXHJcbntcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wcm9maWxlLWltZ1xyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm5lZWQtaGVscFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5uZXctYWNjb3VudFxyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWdyYXl7XHJcbiAgICBjb2xvcjogcmdiKDE2NSwgMTYxLCAxNjEpO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtYXJlYXtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wtdGV4dHtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuLy8gdW51dGggc3R5bGVcclxuXHJcbi5jb250YWluZXIyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmFsaWduLXNlbGYtY2VudGVyIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm14LWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudGV4dDIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnN0eWxlNDAxIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICBcclxuICAgIC51bmF1dGhTdHlsZSB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyMyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrc2VhZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIzIC50ZXh0MiB7XHJcbiAgICBjb2xvcjogI2ZmZjsgLyogT3B0aW9uYWw6IHNldHMgdGhlIHRleHQgY29sb3IgdG8gd2hpdGUgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmZvcm0tc2lnbmluIHtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYWNjb3VudC13YWxsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogNDBweCAwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubG9naW4tdGl0bGUge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uZWVkLWhlbHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3LWFjY291bnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRleHQtZ3JheSB7XG4gIGNvbG9yOiByZ2IoMTY1LCAxNjEsIDE2MSk7XG59XG5cbi5wYXNzd29yZC1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi52YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZm9ybS1jb250cm9sLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lcjIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubXgtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3R5bGU0MDEge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnVuYXV0aFN0eWxlIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4uY29udGFpbmVyMyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBkYXJrc2VhZ3JlZW47XG59XG5cbi5jb250YWluZXIzIC50ZXh0MiB7XG4gIGNvbG9yOiAjZmZmOyAvKiBPcHRpb25hbDogc2V0cyB0aGUgdGV4dCBjb2xvciB0byB3aGl0ZSAqL1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_authentication_authentication_module_ts.js.map