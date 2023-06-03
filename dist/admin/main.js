"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _shared_file_not_found_file_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/file-not-found/file-not-found.component */ 7809);
/* harmony import */ var _lib_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/auth.guard */ 8804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 5705)).then(m => m.MainModule),
  canActivate: [_lib_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'signinoptions',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/change-password/change-password.module */ 8311)).then(m => m.ChangePasswordModule)
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: '**',
  component: _shared_file_not_found_file_not_found_component__WEBPACK_IMPORTED_MODULE_1__.FileNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.title = 'admin';
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.loadScripts();
  }
  loadScripts() {
    this.renderExternalScript('assets/js/ace-elements.min.js').onload = () => {};
    this.renderExternalScript('assets/js/ace-extra.min.js').onload = () => {};
    this.renderExternalScript('assets/js/ace.min.js').onload = () => {};
  }
  renderExternalScript(src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _lib_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/error.interceptor */ 7539);
/* harmony import */ var _lib_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/jwt.interceptor */ 3806);
/* harmony import */ var _ng_prime_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-prime.module */ 8990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);













class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    useClass: _lib_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    useClass: _lib_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor,
    multi: true
  }],
  imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ng_prime_module__WEBPACK_IMPORTED_MODULE_6__.NgPrimeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent],
    imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ng_prime_module__WEBPACK_IMPORTED_MODULE_6__.NgPrimeModule]
  });
})();

/***/ }),

/***/ 5185:
/*!************************************!*\
  !*** ./src/app/lib/api.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






class ApiService {
  constructor(_http, router) {
    this._http = _http;
    this.router = router;
    this.host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  post(url, obj) {
    const body = JSON.stringify(obj);
    // const body = obj;
    let cloneHeader = {};
    cloneHeader['Content-Type'] = 'application/json';
    const headerOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(cloneHeader);
    return this._http.post(this.host + url, body, {
      headers: headerOptions
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
  sendMail(url, obj) {
    const body = JSON.stringify(obj);
    // const body = obj;
    let cloneHeader = {};
    cloneHeader['Content-Type'] = 'multipart/form-data';
    const headerOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(cloneHeader);
    return this._http.post(this.host + url, body, {
      headers: headerOptions
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
  get(url) {
    // let cloneHeader: any = {};
    // cloneHeader['Content-Type'] = 'application/json';
    // const headerOptions = new HttpHeaders(cloneHeader);
    return this._http.get(this.host + url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8804:
/*!***********************************!*\
  !*** ./src/app/lib/auth.guard.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard),
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 4849);



class AuthGuard {
  constructor(router, authenticationService) {
    this.router = router;
    this.authenticationService = authenticationService;
  }
  canActivate(route, state) {
    const user = this.authenticationService.userValue;
    if (user) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});
class RoleGuard {
  constructor(router, authenticationService) {
    this.router = router;
    this.authenticationService = authenticationService;
  }
  canActivate(route) {
    const user = this.authenticationService.userValue;
    if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) {
  return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
};
RoleGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RoleGuard,
  factory: RoleGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4849:
/*!***********************************************!*\
  !*** ./src/app/lib/authentication.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);






class AuthenticationService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  get userValue() {
    return this.userSubject.value;
  }
  login(username, password) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/users/authenticate`, {
      username,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      debugger;
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  remove() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9689:
/*!***************************************!*\
  !*** ./src/app/lib/base-component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/api.service */ 5185);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 6261);






class BaseComponent {
  constructor(injector) {
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.today = new Date();
    this.dateFormat = "dd/mm/yy";
    this.genders = [{
      label: 'Nam',
      value: 'Nam'
    }, {
      label: 'Nữ',
      value: 'Nữ'
    }, {
      label: 'Khác',
      value: 'Khác'
    }];
    this.roles = [{
      label: 'Admin',
      value: 'Admin'
    }, {
      label: 'User',
      value: 'User'
    }, {
      label: 'Student',
      value: 'Student'
    }];
    this.lstRecordStatus = [{
      name: "Đang làm hồ sơ"
    }, {
      name: "Xin thư mời"
    }, {
      name: "Đã xin được visa"
    }, {
      name: "Đang xin visa"
    }, {
      name: "Trượt visa"
    }, {
      name: "Đang xin học bổng"
    }, {
      name: "Bỏ ngang"
    }];
    this.lstCommonStatus = [{
      name: "Đang làm hồ sơ"
    }, {
      name: "Xin thư mời"
    }, {
      name: "Đã xin được visa"
    }, {
      name: "Đang xin visa"
    }, {
      name: "Trượt visa"
    }, {
      name: "Đang xin học bổng"
    }, {
      name: "Bỏ ngang"
    }];
    this.lstIncomeStatus = [{
      name: "Tiền mặt"
    }, {
      name: "Trực tuyến"
    }];
    this.lstIncomeType = [{
      name: "Thu"
    }, {
      name: "Chi"
    }];
    this.locale_vn = {
      "firstDayOfWeek": 1,
      "dayNames": ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
      "dayNamesShort": ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      "dayNamesMin": ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      "monthNames": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      "monthNamesShort": ["Th 1", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7", "Th 8", "Th 9", "Th 10", "Th 11", "Th 12"],
      "today": "Hôm nay",
      "clear": "Xóa"
    };
    this._api = injector.get(_lib_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService);
    this._route = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
    this._messageService = injector.get(primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService);
    this._primengConfig = injector.get(primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig);
  }
  getEncodeFromImage(fileUpload) {
    if (fileUpload) {
      if (fileUpload.files == null || fileUpload.files.length == 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
      }
      let file = fileUpload.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(reader, 'load').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(e => {
        let result = '';
        let tmp = reader.result;
        let baseCode = tmp.substring(tmp.indexOf('base64,', 0) + 7);
        result = file.name + ';' + file.size + ';' + baseCode;
        return result;
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    }
  }
}

/***/ }),

/***/ 7539:
/*!******************************************!*\
  !*** ./src/app/lib/error.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 4849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class ErrorInterceptor {
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if ([401, 403].indexOf(err.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        this.router.navigate(['/unauthorized']);
      } else if ([404].indexOf(err.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        this.router.navigate(['/not-found']);
      }
      const error = err.error.message || err.statusText;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 3806:
/*!****************************************!*\
  !*** ./src/app/lib/jwt.interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment.prod */ 9019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ 4849);



class JwtInterceptor {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }
  intercept(request, next) {
    // add auth header with jwt if user is logged in and request is to api url
    const user = this.authenticationService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = request.url.startsWith(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });
    }
    return next.handle(request);
  }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
  return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
};
JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: JwtInterceptor,
  factory: JwtInterceptor.ɵfac
});

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _lib_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/authentication.service */ 4849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function LoginComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ch\u01B0a nh\u1EADp t\u00E0i kho\u1EA3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_8_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
  }
}
function LoginComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ch\u01B0a nh\u1EADp m\u1EADt kh\u1EA9u!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_11_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
  }
}
class LoginComponent {
  constructor(formBuilder, route, router, authenticationService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.loading = false;
    this.submitted = false;
    this.error = '';
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      remember: ['']
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    console.log(this.loginForm);
    this.authenticationService.login(this.f.username.value, this.f.password.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, error => {
      this.error = error;
      this.loading = false;
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_lib_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 19,
  vars: 4,
  consts: [[1, "page-container", 2, "background", "url(../assets/images/LOGIN_BG_AiO.png) center no-repeat", "background-size", "cover"], [1, "page-login-box"], [1, "page-login-widget", "animated", "fadeInRight"], [3, "formGroup", "ngSubmit"], [1, "ui-form-group"], ["type", "text", "formControlName", "username", "placeholder", "T\u00EAn t\u00E0i kho\u1EA3n"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "M\u1EADt kh\u1EA9u"], [1, "checkbox"], ["formControlName", "remember", "type", "checkbox", 1, "ace"], [1, "lbl"], ["type", "submit", 3, "disabled"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0110\u0103ng nh\u1EADp");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Ghi nh\u1EDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u0110\u0103ng nh\u1EADp");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.loading);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".page-container[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n  }\r\n  \r\n  .page-login-box[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    padding-bottom: 45px;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%] {\r\n    margin-right: 51%;\r\n    margin-top: 5%;\r\n    padding: 20px;\r\n    display: inline-block;\r\n    background: #fff;\r\n    box-shadow: -1px 1px 40px 0 #666;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #3d3d3d;\r\n    margin: 0;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin-bottom: 0;\r\n    clear: both;\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 305px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ui-form-group[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    float: right;\r\n    margin-right: -4px;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-top: 12px;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   error-messages[_ngcontent-%COMP%]   .ace-icon[_ngcontent-%COMP%] {\r\n    top: 6px;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 42px;\r\n    padding: 0 15px !important;\r\n    background: #fff;\r\n    border-radius: 0;\r\n    border: 1px solid #d9d9d9;\r\n    font-size: 14px;\r\n    color: #333333;\r\n    transition: all .2s;\r\n    -o-transition: all .2s;\r\n    -moz-transition: all .2s;\r\n    -webkit-transition: all .2s;\r\n    -ms-transition: all .2s;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\r\n    cursor: default !important;\r\n    opacity: .5;\r\n  }\r\n  \r\n  .page-login-widgetinput[_ngcontent-%COMP%]:-moz-placeholder {\r\n    color: #d9d9d9;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n    color: #d9d9d9;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #d9d9d9;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 44px;\r\n    margin-top: 0;\r\n    padding: 0;\r\n    background: #428bca;\r\n    border-radius: 0;\r\n    border: 1px solid #428bca;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    transition: all .2s;\r\n    -o-transition: all .2s;\r\n    -moz-transition: all .2s;\r\n    -webkit-transition: all .2s;\r\n    -ms-transition: all .2s;\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .15) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  }\r\n  \r\n  .page-login-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, .1) inset, 0 1px 4px 0 rgba(0, 0, 0, .1);\r\n    border: 0px solid #ef4300;\r\n  }\r\n  \r\n  input[type=checkbox].ace.ace-switch.lang-switch[_ngcontent-%COMP%] + .lbl[_ngcontent-%COMP%]::before {\r\n    white-space: pre;\r\n    content: attr(lang) !important;\r\n  }\n/*# sourceURL=webpack://./src/app/login/login.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBR2IsOEVBQThFO0VBQ2hGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBR0UsdUZBQXVGO0VBQ3pGOztFQUVBO0lBR0UsOEVBQThFO0lBQzlFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQiw4QkFBOEI7RUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWxvZ2luLWJveCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAucGFnZS1sb2dpbi13aWRnZXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggNDBweCAwICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWxvZ2luLXdpZGdldCBoMSB7XHJcbiAgICBjb2xvcjogIzNkM2QzZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWxvZ2luLXdpZGdldCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWxvZ2luLXdpZGdldCBmb3JtIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzA1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGZvcm0gLnVpLWZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGZvcm0+bGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogLTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGZvcm0gLmNoZWNrYm94IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGZvcm0gLmNoZWNrYm94IGxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGZvcm0gZXJyb3ItbWVzc2FnZXMgLmFjZS1pY29uIHtcclxuICAgIHRvcDogNnB4O1xyXG4gIH1cclxuICBcclxuICAucGFnZS1sb2dpbi13aWRnZXQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0aW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2Q5ZDlkOTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2Q5ZDlkOTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZDlkOWQ5O1xyXG4gIH1cclxuICBcclxuICAucGFnZS1sb2dpbi13aWRnZXQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMSkgaW5zZXQsIDAgMnB4IDdweCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xKSBpbnNldCwgMCAycHggN3B4IDAgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xKSBpbnNldCwgMCAycHggN3B4IDAgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWxvZ2luLXdpZGdldCBidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6ICM0MjhiY2E7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyOGJjYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWxvZ2luLXdpZGdldCBidXR0b246aG92ZXIge1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSBpbnNldCwgMCAycHggN3B4IDAgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIGluc2V0LCAwIDJweCA3cHggMCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIGluc2V0LCAwIDJweCA3cHggMCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbG9naW4td2lkZ2V0IGJ1dHRvbjphY3RpdmUge1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSBpbnNldCwgMCAycHggN3B4IDAgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIGluc2V0LCAwIDJweCA3cHggMCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgLjEpIGluc2V0LCAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNlZjQzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmFjZS5hY2Utc3dpdGNoLmxhbmctc3dpdGNoKy5sYmw6OmJlZm9yZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgY29udGVudDogYXR0cihsYW5nKSAhaW1wb3J0YW50O1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1158:
/*!***************************************************!*\
  !*** ./src/app/main/profile/profile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class ProfileComponent {
  constructor() {}
  ngOnInit() {}
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)();
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 1245,
  vars: 0,
  consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "breadcrumb"], [1, "ace-icon", "fa", "fa-home", "home-icon"], ["href", "#"], [1, "active"], [1, "page-content"], ["id", "ace-settings-container", 1, "ace-settings-container"], ["id", "ace-settings-box", 1, "ace-settings-box", "clearfix"], [1, "pull-left", "width-50"], [1, "ace-settings-item"], [1, "pull-left"], ["id", "skin-colorpicker", 1, "hide"], ["data-skin", "no-skin", "value", "#438EB9"], ["data-skin", "skin-1", "value", "#222A2D"], ["data-skin", "skin-2", "value", "#C6487E"], ["data-skin", "skin-3", "value", "#D0D0D0"], ["type", "checkbox", "id", "ace-settings-navbar", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-navbar", 1, "lbl"], ["type", "checkbox", "id", "ace-settings-sidebar", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-sidebar", 1, "lbl"], ["type", "checkbox", "id", "ace-settings-breadcrumbs", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-breadcrumbs", 1, "lbl"], ["type", "checkbox", "id", "ace-settings-rtl", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-rtl", 1, "lbl"], ["type", "checkbox", "id", "ace-settings-add-container", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-add-container", 1, "lbl"], ["type", "checkbox", "id", "ace-settings-hover", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-hover", 1, "lbl"], ["type", "checkbox", "id", "ace-settings-compact", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-compact", 1, "lbl"], ["type", "checkbox", "id", "ace-settings-highlight", 1, "ace", "ace-checkbox-2"], ["for", "ace-settings-highlight", 1, "lbl"], [1, "page-header"], [1, "ace-icon", "fa", "fa-angle-double-right"], [1, "row"], [1, "col-xs-12"], ["id", "user-profile-1", 1, "user-profile", "row"], [1, "col-xs-12", "col-sm-3", "center"], [1, "profile-picture"], ["id", "avatar", "alt", "Alex's Avatar", "src", "assets/avatars/profile-pic.jpg", 1, "editable", "img-responsive"], [1, "space-4"], [1, "width-80", "label", "label-info", "label-xlg", "arrowed-in", "arrowed-in-right"], [1, "inline", "position-relative"], ["href", "#", "data-toggle", "dropdown", 1, "user-title-label", "dropdown-toggle"], [1, "ace-icon", "fa", "fa-circle", "light-green"], [1, "white"], [1, "align-left", "dropdown-menu", "dropdown-caret", "dropdown-lighter"], [1, "dropdown-header"], [1, "ace-icon", "fa", "fa-circle", "green"], [1, "green"], [1, "ace-icon", "fa", "fa-circle", "red"], [1, "red"], [1, "ace-icon", "fa", "fa-circle", "grey"], [1, "grey"], [1, "space-6"], [1, "profile-contact-info"], [1, "profile-contact-links", "align-left"], ["href", "#", 1, "btn", "btn-link"], [1, "ace-icon", "fa", "fa-plus-circle", "bigger-120", "green"], [1, "ace-icon", "fa", "fa-envelope", "bigger-120", "pink"], [1, "ace-icon", "fa", "fa-globe", "bigger-125", "blue"], [1, "profile-social-links", "align-center"], ["href", "#", "title", "", "data-original-title", "Visit my Facebook", 1, "tooltip-info"], [1, "middle", "ace-icon", "fa", "fa-facebook-square", "fa-2x", "blue"], ["href", "#", "title", "", "data-original-title", "Visit my Twitter", 1, "tooltip-info"], [1, "middle", "ace-icon", "fa", "fa-twitter-square", "fa-2x", "light-blue"], ["href", "#", "title", "", "data-original-title", "Visit my Pinterest", 1, "tooltip-error"], [1, "middle", "ace-icon", "fa", "fa-pinterest-square", "fa-2x", "red"], [1, "hr", "hr12", "dotted"], [1, "clearfix"], [1, "grid2"], [1, "bigger-175", "blue"], [1, "hr", "hr16", "dotted"], [1, "col-xs-12", "col-sm-9"], [1, "center"], [1, "btn", "btn-app", "btn-sm", "btn-light", "no-hover"], [1, "line-height-1", "bigger-170", "blue"], [1, "line-height-1", "smaller-90"], [1, "btn", "btn-app", "btn-sm", "btn-yellow", "no-hover"], [1, "line-height-1", "bigger-170"], [1, "btn", "btn-app", "btn-sm", "btn-pink", "no-hover"], [1, "btn", "btn-app", "btn-sm", "btn-grey", "no-hover"], [1, "btn", "btn-app", "btn-sm", "btn-success", "no-hover"], [1, "btn", "btn-app", "btn-sm", "btn-primary", "no-hover"], [1, "space-12"], [1, "profile-user-info", "profile-user-info-striped"], [1, "profile-info-row"], [1, "profile-info-name"], [1, "profile-info-value"], ["id", "username", 1, "editable"], [1, "fa", "fa-map-marker", "light-orange", "bigger-110"], ["id", "country", 1, "editable"], ["id", "city", 1, "editable"], ["id", "age", 1, "editable"], ["id", "signup", 1, "editable"], ["id", "login", 1, "editable"], ["id", "about", 1, "editable"], [1, "space-20"], [1, "widget-box", "transparent"], [1, "widget-header", "widget-header-small"], [1, "widget-title", "blue", "smaller"], [1, "ace-icon", "fa", "fa-rss", "orange"], [1, "widget-toolbar", "action-buttons"], ["href", "#", "data-action", "reload"], [1, "ace-icon", "fa", "fa-refresh", "blue"], ["href", "#", 1, "pink"], [1, "ace-icon", "fa", "fa-trash-o"], [1, "widget-body"], [1, "widget-main", "padding-8"], ["id", "profile-feed-1", 1, "profile-feed"], [1, "profile-activity", "clearfix"], ["alt", "Alex Doe's avatar", "src", "assets/avatars/avatar5.png", 1, "pull-left"], ["href", "#", 1, "user"], [1, "time"], [1, "ace-icon", "fa", "fa-clock-o", "bigger-110"], [1, "tools", "action-buttons"], ["href", "#", 1, "blue"], [1, "ace-icon", "fa", "fa-pencil", "bigger-125"], ["href", "#", 1, "red"], [1, "ace-icon", "fa", "fa-times", "bigger-125"], ["alt", "Susan Smith's avatar", "src", "assets/avatars/avatar1.png", 1, "pull-left"], [1, "pull-left", "thumbicon", "fa", "fa-check", "btn-success", "no-hover"], [1, "pull-left", "thumbicon", "fa", "fa-picture-o", "btn-info", "no-hover"], ["alt", "David Palms's avatar", "src", "assets/avatars/avatar4.png", 1, "pull-left"], [1, "pull-left", "thumbicon", "fa", "fa-pencil-square-o", "btn-pink", "no-hover"], [1, "pull-left", "thumbicon", "fa", "fa-key", "btn-info", "no-hover"], [1, "pull-left", "thumbicon", "fa", "fa-power-off", "btn-inverse", "no-hover"], [1, "hr", "hr2", "hr-double"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-white", "btn-round"], [1, "ace-icon", "fa", "fa-rss", "bigger-150", "middle", "orange2"], [1, "bigger-110"], [1, "icon-on-right", "ace-icon", "fa", "fa-arrow-right"], [1, "hide"], ["id", "user-profile-2", 1, "user-profile"], [1, "tabbable"], [1, "nav", "nav-tabs", "padding-18"], ["data-toggle", "tab", "href", "#home"], [1, "green", "ace-icon", "fa", "fa-user", "bigger-120"], ["data-toggle", "tab", "href", "#feed"], [1, "orange", "ace-icon", "fa", "fa-rss", "bigger-120"], ["data-toggle", "tab", "href", "#friends"], [1, "blue", "ace-icon", "fa", "fa-users", "bigger-120"], ["data-toggle", "tab", "href", "#pictures"], [1, "pink", "ace-icon", "fa", "fa-picture-o", "bigger-120"], [1, "tab-content", "no-border", "padding-24"], ["id", "home", 1, "tab-pane", "in", "active"], ["alt", "Alex's Avatar", "id", "avatar2", "src", "assets/avatars/profile-pic.jpg", 1, "editable", "img-responsive"], [1, "space", "space-4"], ["href", "#", 1, "btn", "btn-sm", "btn-block", "btn-success"], [1, "ace-icon", "fa", "fa-plus-circle", "bigger-120"], ["href", "#", 1, "btn", "btn-sm", "btn-block", "btn-primary"], [1, "ace-icon", "fa", "fa-envelope-o", "bigger-110"], [1, "blue"], [1, "middle"], [1, "label", "label-purple", "arrowed-in-right"], [1, "ace-icon", "fa", "fa-circle", "smaller-80", "align-middle"], [1, "profile-user-info"], [1, "hr", "hr-8", "dotted"], ["href", "#", "target", "_blank"], [1, "middle", "ace-icon", "fa", "fa-facebook-square", "bigger-150", "blue"], [1, "middle", "ace-icon", "fa", "fa-twitter-square", "bigger-150", "light-blue"], [1, "col-xs-12", "col-sm-6"], [1, "widget-title", "smaller"], [1, "ace-icon", "fa", "fa-check-square-o", "bigger-110"], [1, "widget-main"], [1, "widget-header", "widget-header-small", "header-color-blue2"], [1, "ace-icon", "fa", "fa-lightbulb-o", "bigger-120"], [1, "widget-main", "padding-16"], [1, "grid3", "center"], ["data-percent", "45", "data-color", "#CA5952", 1, "easy-pie-chart", "percentage"], [1, "percent"], [1, "space-2"], ["data-percent", "90", "data-color", "#59A84B", 1, "center", "easy-pie-chart", "percentage"], ["data-percent", "80", "data-color", "#9585BF", 1, "center", "easy-pie-chart", "percentage"], [1, "hr", "hr-16"], [1, "profile-skills"], [1, "progress"], [1, "progress-bar", 2, "width", "80%"], [1, "pull-right"], [1, "progress-bar", "progress-bar-success", 2, "width", "72%"], [1, "progress-bar", "progress-bar-purple", 2, "width", "70%"], [1, "progress-bar", "progress-bar-warning", 2, "width", "50%"], [1, "progress-bar", "progress-bar-danger", 2, "width", "38%"], ["id", "feed", 1, "tab-pane"], [1, "profile-feed", "row"], [1, "col-sm-6"], ["id", "friends", 1, "tab-pane"], [1, "profile-users", "clearfix"], [1, "itemdiv", "memberdiv"], [1, "inline", "pos-rel"], [1, "user"], ["src", "assets/avatars/avatar4.png", "alt", "Bob Doe's avatar"], [1, "body"], [1, "name"], [1, "user-status", "status-online"], [1, "popover"], [1, "arrow"], [1, "popover-content"], [1, "bolder"], [1, "ace-icon", "fa", "fa-clock-o", "middle", "bigger-120", "orange"], [1, "hr", "dotted", "hr-8"], [1, "ace-icon", "fa", "fa-facebook-square", "blue", "bigger-150"], [1, "ace-icon", "fa", "fa-twitter-square", "light-blue", "bigger-150"], [1, "ace-icon", "fa", "fa-google-plus-square", "red", "bigger-150"], ["src", "assets/avatars/avatar1.png", "alt", "Rose Doe's avatar"], [1, "user-status", "status-offline"], [1, "ace-icon", "fa", "fa-clock-o", "middle", "bigger-120", "grey"], ["src", "assets/avatars/avatar.png", "alt", "Jim Doe's avatar"], [1, "user-status", "status-busy"], [1, "ace-icon", "fa", "fa-clock-o", "middle", "bigger-120", "red"], ["src", "assets/avatars/avatar5.png", "alt", "Alex Doe's avatar"], [1, "user-status", "status-idle"], [1, ""], ["src", "assets/avatars/avatar2.png", "alt", "Phil Doe's avatar"], ["src", "assets/avatars/avatar3.png", "alt", "Susan Doe's avatar"], ["src", "assets/avatars/avatar1.png", "alt", "Jennifer Doe's avatar"], ["src", "assets/avatars/avatar3.png", "alt", "Alexa Doe's avatar"], [1, "hr", "hr10", "hr-double"], [1, "pager", "pull-right"], [1, "previous", "disabled"], [1, "next"], ["id", "pictures", 1, "tab-pane"], [1, "ace-thumbnails"], ["href", "#", "data-rel", "colorbox"], ["alt", "150x150", "src", "assets/images/gallery/thumb-1.jpg"], [1, "text"], [1, "inner"], [1, "tools", "tools-bottom"], [1, "ace-icon", "fa", "fa-link"], [1, "ace-icon", "fa", "fa-paperclip"], [1, "ace-icon", "fa", "fa-pencil"], [1, "ace-icon", "fa", "fa-times", "red"], ["alt", "150x150", "src", "assets/images/gallery/thumb-2.jpg"], ["alt", "150x150", "src", "assets/images/gallery/thumb-3.jpg"], ["alt", "150x150", "src", "assets/images/gallery/thumb-4.jpg"], ["alt", "150x150", "src", "assets/images/gallery/thumb-5.jpg"], ["alt", "150x150", "src", "assets/images/gallery/thumb-6.jpg"], ["id", "user-profile-3", 1, "user-profile", "row"], [1, "col-sm-offset-1", "col-sm-10"], [1, "well", "well-sm"], [1, "inline", "middle", "blue", "bigger-110"], ["data-percent", "70%", 1, "inline", "middle", "no-margin", "progress", "progress-striped", "active", 2, "width", "200px"], [1, "progress-bar", "progress-bar-success", 2, "width", "70%"], [1, "space"], [1, "form-horizontal"], [1, "nav", "nav-tabs", "padding-16"], ["data-toggle", "tab", "href", "#edit-basic"], [1, "green", "ace-icon", "fa", "fa-pencil-square-o", "bigger-125"], ["data-toggle", "tab", "href", "#edit-settings"], [1, "purple", "ace-icon", "fa", "fa-cog", "bigger-125"], ["data-toggle", "tab", "href", "#edit-password"], [1, "blue", "ace-icon", "fa", "fa-key", "bigger-125"], [1, "tab-content", "profile-edit-tab-content"], ["id", "edit-basic", 1, "tab-pane", "in", "active"], [1, "header", "blue", "bolder", "smaller"], [1, "col-xs-12", "col-sm-4"], ["type", "file"], [1, "vspace-12-sm"], [1, "col-xs-12", "col-sm-8"], [1, "form-group"], ["for", "form-field-username", 1, "col-sm-4", "control-label", "no-padding-right"], [1, "col-sm-8"], ["type", "text", "id", "form-field-username", "placeholder", "Username", "value", "alexdoe", 1, "col-xs-12", "col-sm-10"], ["for", "form-field-first", 1, "col-sm-4", "control-label", "no-padding-right"], ["type", "text", "id", "form-field-first", "placeholder", "First Name", "value", "Alex", 1, "input-small"], ["type", "text", "id", "form-field-last", "placeholder", "Last Name", "value", "Doe", 1, "input-small"], ["for", "form-field-date", 1, "col-sm-3", "control-label", "no-padding-right"], [1, "col-sm-9"], [1, "input-medium"], [1, "input-group"], ["id", "form-field-date", "type", "text", "data-date-format", "dd-mm-yyyy", "placeholder", "dd-mm-yyyy", 1, "input-medium", "date-picker"], [1, "input-group-addon"], [1, "ace-icon", "fa", "fa-calendar"], [1, "col-sm-3", "control-label", "no-padding-right"], [1, "inline"], ["name", "form-field-radio", "type", "radio", 1, "ace"], [1, "lbl", "middle"], ["for", "form-field-comment", 1, "col-sm-3", "control-label", "no-padding-right"], ["id", "form-field-comment"], ["for", "form-field-email", 1, "col-sm-3", "control-label", "no-padding-right"], [1, "input-icon", "input-icon-right"], ["type", "email", "id", "form-field-email", "value", "alexdoe@gmail.com"], [1, "ace-icon", "fa", "fa-envelope"], ["for", "form-field-website", 1, "col-sm-3", "control-label", "no-padding-right"], ["type", "url", "id", "form-field-website", "value", "http://www.alexdoe.com/"], [1, "ace-icon", "fa", "fa-globe"], ["for", "form-field-phone", 1, "col-sm-3", "control-label", "no-padding-right"], ["type", "text", "id", "form-field-phone", 1, "input-medium", "input-mask-phone"], [1, "ace-icon", "fa", "fa-phone", "fa-flip-horizontal"], ["for", "form-field-facebook", 1, "col-sm-3", "control-label", "no-padding-right"], [1, "input-icon"], ["type", "text", "value", "facebook_alexdoe", "id", "form-field-facebook"], [1, "ace-icon", "fa", "fa-facebook", "blue"], ["for", "form-field-twitter", 1, "col-sm-3", "control-label", "no-padding-right"], ["type", "text", "value", "twitter_alexdoe", "id", "form-field-twitter"], [1, "ace-icon", "fa", "fa-twitter", "light-blue"], ["for", "form-field-gplus", 1, "col-sm-3", "control-label", "no-padding-right"], ["type", "text", "value", "google_alexdoe", "id", "form-field-gplus"], [1, "ace-icon", "fa", "fa-google-plus", "red"], ["id", "edit-settings", 1, "tab-pane"], [1, "space-10"], ["type", "checkbox", "name", "form-field-checkbox", 1, "ace"], [1, "lbl"], [1, "space-8"], [1, "space-2", "block"], ["type", "text", "maxlength", "3", 1, "input-mini"], ["id", "edit-password", 1, "tab-pane"], ["for", "form-field-pass1", 1, "col-sm-3", "control-label", "no-padding-right"], ["type", "password", "id", "form-field-pass1"], ["for", "form-field-pass2", 1, "col-sm-3", "control-label", "no-padding-right"], ["type", "password", "id", "form-field-pass2"], [1, "clearfix", "form-actions"], [1, "col-md-offset-3", "col-md-9"], ["type", "button", 1, "btn", "btn-info"], [1, "ace-icon", "fa", "fa-check", "bigger-110"], ["type", "reset", 1, "btn"], [1, "ace-icon", "fa", "fa-undo", "bigger-110"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trang ch\u1EE7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Th\u00F4ng tin t\u00E0i kho\u1EA3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "select", 11)(15, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "#438EB9");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "#222A2D");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "#C6487E");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "#D0D0D0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0 Choose Skin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Fixed Navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Fixed Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Fixed Breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Right To Left (rtl)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Inside ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ".container");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Submenu on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Compact Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Alt. Active Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32)(61, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " User Profile Page ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 3 styles with inline editable feature ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34)(67, "div", 35)(68, "div")(69, "div", 36)(70, "div", 37)(71, "div")(72, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 41)(76, "div", 42)(77, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Alex M. Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 46)(83, "li", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Change Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li")(86, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Available");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li")(92, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Busy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li")(98, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Invisible");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 55)(105, "div", 56)(106, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Add as a friend ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Send a message ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " www.alexdoe.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 61)(117, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 69)(125, "div", 70)(126, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Followers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 70)(131, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "12");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Following ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 73)(137, "div", 74)(138, "span", 75)(139, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " 1,411 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Views ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 78)(145, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " 32 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Followers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 80)(151, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " 4 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 81)(157, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " 23 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Reviews ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 82)(163, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " 7 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Albums ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 83)(169, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " 55 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Contacts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 85)(176, "div", 86)(177, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Username ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 88)(180, "span", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "alexdoe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 86)(183, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Netherlands");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Amsterdam");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 86)(192, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Age ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 88)(195, "span", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 86)(198, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Joined ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 88)(201, "span", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "2010/06/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 86)(204, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Last Online ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 88)(207, "span", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "3 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 86)(210, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " About Me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 88)(213, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Editable as WYSIWYG");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 98)(217, "div", 99)(218, "h4", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Recent Activities ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 102)(222, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\n\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 107)(228, "div", 108)(229, "div", 109)(230, "div", 110)(231, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " changed his profile photo. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Take a look");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " an hour ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 115)(242, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 110)(247, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " Susan Smith ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " is now friends with Alex Doe. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " 2 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 115)(256, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 110)(261, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " joined ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Country Music");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " group. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " 5 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 115)(273, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 110)(278, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " uploaded a new photo. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Take a look");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " 5 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 115)(289, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 110)(294, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "img", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " David Palms ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " left a comment on Alex's wall. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " 8 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 115)(303, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 110)(308, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "i", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " published a new blog post. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Read now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " 11 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 115)(319, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 110)(324, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "img", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " upgraded his skills. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " 12 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 115)(333, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 110)(338, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " logged in. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " 12 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 115)(347, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 110)(352, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, " logged out. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " 16 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 115)(361, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 110)(366, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " logged in. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, " 16 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 115)(375, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "div", 127)(380, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 74)(382, "button", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "i", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "span", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "View more activities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "i", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 132)(388, "div", 133)(389, "div", 134)(390, "ul", 135)(391, "li", 4)(392, "a", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "i", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " Profile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "li")(396, "a", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "i", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " Activity Feed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "li")(400, "a", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, " Friends ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li")(404, "a", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "i", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " Pictures ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 144)(408, "div", 145)(409, "div", 34)(410, "div", 37)(411, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "img", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "div", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "a", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "i", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Add as a friend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "a", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "i", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "span", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Send a message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 73)(423, "h4", 152)(424, "span", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Alex M. Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, " online ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 156)(430, "div", 86)(431, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " Username ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 88)(434, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "alexdoe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 86)(437, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, " Location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "i", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Netherlands");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Amsterdam");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 86)(446, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " Age ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 88)(449, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 86)(452, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " Joined ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 88)(455, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "2010/06/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 86)(458, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " Last Online ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 88)(461, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "3 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "div", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 156)(465, "div", 86)(466, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " Website ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 88)(469, "a", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "www.alexdoe.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 86)(472, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "i", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 88)(475, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Find me on Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 86)(478, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 88)(481, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Follow me on Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 34)(485, "div", 161)(486, "div", 98)(487, "div", 99)(488, "h4", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "i", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, " Little About Me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "div", 107)(492, "div", 164)(493, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, " My job is mostly lorem ipsuming and dolor sit ameting as long as consectetur adipiscing elit. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " Sometimes quisque commodo massa gets in the way and sed ipsum porttitor facilisis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, " The best thing about my job is that vestibulum id ligula porta felis euismod and nullam quis risus eget urna mollis ornare. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, " Thanks for visiting my profile. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 161)(502, "div", 98)(503, "div", 165)(504, "h4", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "i", 166);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " My Skills ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 107)(508, "div", 167)(509, "div", 69)(510, "div", 168)(511, "div", 169)(512, "span", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "% ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "div", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, " Graphic Design ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 168)(518, "div", 172)(519, "span", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "90");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "% ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](522, "div", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, " HTML5 & CSS3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 168)(525, "div", 173)(526, "span", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "80");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "% ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "div", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, " Javascript/jQuery ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "div", 174);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "div", 175)(533, "div", 176)(534, "div", 177)(535, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "HTML5 & CSS3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "span", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "div", 176)(540, "div", 179)(541, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Javascript & jQuery");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "span", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "72%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "div", 176)(546, "div", 180)(547, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "PHP & MySQL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "span", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "70%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 176)(552, "div", 181)(553, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "Wordpress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "span", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "50%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div", 176)(558, "div", 182)(559, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "Photoshop");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "span", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "38%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "div", 183)(564, "div", 184)(565, "div", 185)(566, "div", 110)(567, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](568, "img", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, " changed his profile photo. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Take a look");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](575, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, " an hour ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 115)(578, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](579, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "div", 110)(583, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](584, "img", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, " Susan Smith ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, " is now friends with Alex Doe. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](589, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, " 2 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "div", 115)(592, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "div", 110)(597, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "i", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, " joined ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Country Music");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, " group. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](606, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, " 5 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 115)(609, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](612, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "div", 110)(614, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](615, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, " uploaded a new photo. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "Take a look");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](622, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " 5 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "div", 115)(625, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](626, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](628, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 110)(630, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "img", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, " David Palms ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, " left a comment on Alex's wall. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](636, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, " 8 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "div", 115)(639, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](640, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](642, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "div", 185)(644, "div", 110)(645, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](646, "i", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, " published a new blog post. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "Read now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](653, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, " 11 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "div", 115)(656, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](657, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](659, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "div", 110)(661, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](662, "img", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, " upgraded his skills. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](667, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, " 12 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "div", 115)(670, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](671, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](673, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div", 110)(675, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](676, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, " logged in. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](681, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, " 12 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "div", 115)(684, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](685, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](687, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "div", 110)(689, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](690, "i", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, " logged out. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](695, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, " 16 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "div", 115)(698, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](701, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "div", 110)(703, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](704, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, " logged in. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](709, "i", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, " 16 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "div", 115)(712, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](713, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](715, "i", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](716, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "div", 74)(718, "button", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](719, "i", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "span", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "View more activities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](722, "i", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "div", 186)(724, "div", 187)(725, "div", 188)(726, "div", 189)(727, "div", 190)(728, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](729, "img", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "div", 192)(731, "div", 193)(732, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "span", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](734, " Bob Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](736, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 197)(738, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "Content Editor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](741, "i", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, " 20 mins ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](744, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "div", 115)(746, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](747, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](749, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](751, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "div", 188)(753, "div", 189)(754, "div", 190)(755, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](756, "img", 204);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "div", 192)(758, "div", 193)(759, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](760, "span", 205);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, " Rose Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](763, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "div", 197)(765, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "Graphic Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](768, "i", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, " 30 min ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](771, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "div", 115)(773, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](774, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](776, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](778, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "div", 188)(780, "div", 189)(781, "div", 190)(782, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](783, "img", 207);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "div", 192)(785, "div", 193)(786, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](787, "span", 208);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, " Jim Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "div", 197)(792, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "SEO & Advertising");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](795, "i", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, " 1 hour ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](798, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "div", 115)(800, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](801, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](805, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 188)(807, "div", 189)(808, "div", 190)(809, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](810, "img", 210);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "div", 192)(812, "div", 193)(813, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](814, "span", 211);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, " Alex Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](817, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "div", 197)(819, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](822, "i", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "span", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, " 40 minutes idle ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](825, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "div", 115)(827, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](828, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](830, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](832, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "div", 188)(834, "div", 189)(835, "div", 190)(836, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](837, "img", 213);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "div", 192)(839, "div", 193)(840, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](841, "span", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](842, " Phil Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](844, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "div", 197)(846, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Public Relations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](849, "i", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, " 2 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](852, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "div", 115)(854, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](855, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](857, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](859, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 188)(861, "div", 189)(862, "div", 190)(863, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](864, "img", 214);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "div", 192)(866, "div", 193)(867, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](868, "span", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, " Susan Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](871, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "div", 197)(873, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, "HR Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](876, "i", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, " 20 mins ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](879, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "div", 115)(881, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](882, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](884, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](886, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "div", 188)(888, "div", 189)(889, "div", 190)(890, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "img", 215);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "div", 192)(893, "div", 193)(894, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](895, "span", 205);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, " Jennifer Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](898, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "div", 197)(900, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, "Graphic Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](903, "i", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, " 2 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](906, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "div", 115)(908, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](909, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](911, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](913, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "div", 188)(915, "div", 189)(916, "div", 190)(917, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "img", 216);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "div", 192)(920, "div", 193)(921, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](922, "span", 205);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, " Alexa Doe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "div", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](925, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "div", 197)(927, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, "Accounting");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](930, "i", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, " 4 hours ago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](933, "div", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "div", 115)(935, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](936, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](938, "i", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](940, "i", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](941, "div", 217);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "ul", 218)(943, "li", 219)(944, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "\u2190 Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "li", 220)(947, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, "Next \u2192");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "div", 221)(950, "ul", 222)(951, "li")(952, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](953, "img", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "div", 225)(955, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "div", 227)(958, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](959, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](960, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](961, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](963, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](965, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "li")(967, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](968, "img", 232);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "div", 225)(970, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](971, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "div", 227)(973, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](974, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](976, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](978, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](980, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "li")(982, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](983, "img", 233);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "div", 225)(985, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](986, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "div", 227)(988, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](989, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](991, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](993, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](995, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "li")(997, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](998, "img", 234);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "div", 225)(1000, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "div", 227)(1003, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1004, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1006, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1008, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1010, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "li")(1012, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1013, "img", 235);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "div", 225)(1015, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "div", 227)(1018, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1019, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1021, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1023, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1025, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "li")(1027, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1028, "img", 236);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "div", 225)(1030, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1031, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "div", 227)(1033, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1034, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1036, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1038, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1040, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "li")(1042, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1043, "img", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "div", 225)(1045, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1046, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "div", 227)(1048, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1049, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1051, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1053, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1055, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "li")(1057, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1058, "img", 232);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "div", 225)(1060, "div", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1061, "Sample Caption on Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "div", 227)(1063, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1064, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1066, "i", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1068, "i", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1070, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1071, "div", 132)(1072, "div", 237)(1073, "div", 238)(1074, "div", 239)(1075, "div", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1076, " Your profile is 70% complete ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1077, " \u00A0 \u00A0 \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "div", 241);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1079, "div", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1080, "div", 243);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "form", 244)(1082, "div", 134)(1083, "ul", 245)(1084, "li", 4)(1085, "a", 246);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1086, "i", 247);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, " Basic Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "li")(1089, "a", 248);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1090, "i", 249);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, " Settings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "li")(1093, "a", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1094, "i", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1095, " Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "div", 252)(1097, "div", 253)(1098, "h4", 254);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, "General");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "div", 34)(1101, "div", 255);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1102, "input", 256);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1103, "div", 257);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "div", 258)(1105, "div", 259)(1106, "label", 260);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1107, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1108, "div", 261);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1109, "input", 262);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1110, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "div", 259)(1112, "label", 263);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1113, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "div", 261);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1115, "input", 264)(1116, "input", 265);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1117, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "div", 259)(1119, "label", 266);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "Birth Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "div", 267)(1122, "div", 268)(1123, "div", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1124, "input", 270);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "span", 271);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1126, "i", 272);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1127, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "div", 259)(1129, "label", 273);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, "Gender");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "div", 267)(1132, "label", 274);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1133, "input", 275);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "span", 276);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, " Male");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1136, " \u00A0 \u00A0 \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "label", 274);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1138, "input", 275);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "span", 276);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, " Female");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1141, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "div", 259)(1143, "label", 277);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1144, "Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "div", 267);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1146, "textarea", 278);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "div", 243);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "h4", 254);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1149, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "div", 259)(1151, "label", 279);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1152, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "div", 267)(1154, "span", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1155, "input", 281)(1156, "i", 282);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1157, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "div", 259)(1159, "label", 283);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, "Website");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "div", 267)(1162, "span", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1163, "input", 284)(1164, "i", 285);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1165, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "div", 259)(1167, "label", 286);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1168, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "div", 267)(1170, "span", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1171, "input", 287)(1172, "i", 288);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1173, "div", 243);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "h4", 254);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1175, "Social");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1176, "div", 259)(1177, "label", 289);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1178, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1179, "div", 267)(1180, "span", 290);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1181, "input", 291)(1182, "i", 292);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1183, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "div", 259)(1185, "label", 293);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1186, "Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "div", 267)(1188, "span", 290);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1189, "input", 294)(1190, "i", 295);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1191, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1192, "div", 259)(1193, "label", 296);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1194, "Google+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "div", 267)(1196, "span", 290);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1197, "input", 297)(1198, "i", 298);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "div", 299);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1200, "div", 300);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1201, "div")(1202, "label", 274);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1203, "input", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "span", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, " Make my profile public");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1206, "div", 303);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "div")(1208, "label", 274);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1209, "input", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "span", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, " Email me new updates");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1212, "div", 303);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1213, "div")(1214, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1215, "input", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "span", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, " Keep a history of my conversations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1219, "span", 304);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1220, " for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1221, "input", 305);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1222, " days ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "div", 306);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1224, "div", 300);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "div", 259)(1226, "label", 307);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1227, "New Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1228, "div", 267);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1229, "input", 308);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1230, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1231, "div", 259)(1232, "label", 309);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1233, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1234, "div", 267);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1235, "input", 310);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "div", 311)(1237, "div", 312)(1238, "button", 313);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1239, "i", 314);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1240, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, " \u00A0 \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "button", 315);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1243, "i", 316);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1244, " Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8990:
/*!************************************!*\
  !*** ./src/app/ng-prime.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPrimeModule": () => (/* binding */ NgPrimeModule)
/* harmony export */ });
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/paginator */ 9518);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/editor */ 4384);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 7212);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 1849);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/steps */ 9950);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/password */ 2062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);







class NgPrimeModule {}
NgPrimeModule.ɵfac = function NgPrimeModule_Factory(t) {
  return new (t || NgPrimeModule)();
};
NgPrimeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgPrimeModule
});
NgPrimeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [primeng_paginator__WEBPACK_IMPORTED_MODULE_1__.PaginatorModule, primeng_editor__WEBPACK_IMPORTED_MODULE_2__.EditorModule, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.ToastModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_steps__WEBPACK_IMPORTED_MODULE_5__.StepsModule, primeng_password__WEBPACK_IMPORTED_MODULE_6__.PasswordModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_1__.PaginatorModule, primeng_editor__WEBPACK_IMPORTED_MODULE_2__.EditorModule, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.ToastModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_steps__WEBPACK_IMPORTED_MODULE_5__.StepsModule, primeng_password__WEBPACK_IMPORTED_MODULE_6__.PasswordModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgPrimeModule, {
    imports: [primeng_paginator__WEBPACK_IMPORTED_MODULE_1__.PaginatorModule, primeng_editor__WEBPACK_IMPORTED_MODULE_2__.EditorModule, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.ToastModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_steps__WEBPACK_IMPORTED_MODULE_5__.StepsModule, primeng_password__WEBPACK_IMPORTED_MODULE_6__.PasswordModule],
    exports: [primeng_paginator__WEBPACK_IMPORTED_MODULE_1__.PaginatorModule, primeng_editor__WEBPACK_IMPORTED_MODULE_2__.EditorModule, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.ToastModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_steps__WEBPACK_IMPORTED_MODULE_5__.StepsModule, primeng_password__WEBPACK_IMPORTED_MODULE_6__.PasswordModule]
  });
})();

/***/ }),

/***/ 7809:
/*!*******************************************************************!*\
  !*** ./src/app/shared/file-not-found/file-not-found.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileNotFoundComponent": () => (/* binding */ FileNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _lib_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/authentication.service */ 4849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class FileNotFoundComponent {
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
  }
  ngOnInit() {
    const user = this.authenticationService.userValue;
    if (user) {
      this.router.navigate(['/not-found']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
FileNotFoundComponent.ɵfac = function FileNotFoundComponent_Factory(t) {
  return new (t || FileNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_lib_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
FileNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FileNotFoundComponent,
  selectors: [["app-file-not-found"]],
  decls: 21,
  vars: 0,
  consts: [[1, "col-xs-12"], [1, "error-container"], [1, "well"], [1, "grey", "lighter", "smaller"], [1, "blue", "bigger-125"], [1, "ace-icon", "fa", "fa-sitemap"], [1, "lighter", "smaller"], [1, "space"], [1, "center"], ["href", "javascript:history.back()", 1, "btn", "btn-grey"], [1, "ace-icon", "fa", "fa-arrow-left"], ["href", "/", 1, "btn", "btn-primary"], [1, "ace-icon", "fa", "fa-home"]],
  template: function FileNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3)(5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " 404 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Kh\u00F4ng t\u00ECm th\u1EA5y trang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " R\u1EA5t ti\u1EBFc, trang b\u1EA1n mu\u1ED1n t\u00ECm kh\u00F4ng t\u1ED3n t\u1EA1i");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr")(13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Quay l\u1EA1i ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Trang ch\u1EE7 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5035:
/*!*****************************************************************!*\
  !*** ./src/app/shared/modal/commission/commission.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommissionComponent": () => (/* binding */ CommissionComponent)
/* harmony export */ });
/* harmony import */ var src_app_lib_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/base-component */ 9689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CommissionComponent extends src_app_lib_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(injector) {
    super(injector);
  }
  ngOnInit() {}
}
CommissionComponent.ɵfac = function CommissionComponent_Factory(t) {
  return new (t || CommissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
CommissionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CommissionComponent,
  selectors: [["app-commission"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 73,
  vars: 0,
  consts: [[1, "modal-dialog", "modal-lg", "full-height-modal"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "form-horizontal", "utehy-form"], [1, "modal-body", "no-padding"], [1, "form-group"], [1, "col-sm-2", "control-label", "no-padding-right"], [2, "color", "red"], [1, "col-sm-4"], ["type", "text", "placeholder", "H\u1ECD t\u00EAn", "formControlName", "name"], [1, "col-sm-3", "control-label", "no-padding-right"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "col-sm-10"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "btn-submit"], [1, "fa", "fa-save"], ["type", "button", 1, "btn", "btn-default", "btn-sm"], [1, "fa", "fa-times"]],
  template: function CommissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "S\u1EEDa th\u00F4ng tin h\u00F3a \u0111\u01A1n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " H\u1ECDc sinh(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " S\u0110T(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6)(23, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Email(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Tr\u1EA1ng th\u00E1i(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6)(38, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Nh\u00E2n vi\u00EAn TV(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Ng\u00E0y li\u00EAn h\u1EC7 g\u1EA7n nh\u1EA5t(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Ng\u00E0y li\u00EAn h\u1EC7 ti\u1EBFp theo(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6)(59, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " N\u1ED9i dung(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 15)(67, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " \u0110\u1ED3ng \u00FD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " \u0110\u00F3ng l\u1EA1i ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8975:
/*!**********************************************!*\
  !*** ./src/app/shared/modal/modal.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _commission_commission_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commission/commission.component */ 5035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class Modal {}
Modal.ɵfac = function Modal_Factory(t) {
  return new (t || Modal)();
};
Modal.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: Modal
});
Modal.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Modal, {
    declarations: [_commission_commission_component__WEBPACK_IMPORTED_MODULE_0__.CommissionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_commission_commission_component__WEBPACK_IMPORTED_MODULE_0__.CommissionComponent]
  });
})();

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 2836);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 5688);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ 8893);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 1943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 9114);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fileupload */ 2098);
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ 6371);
/* harmony import */ var _file_not_found_file_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-not-found/file-not-found.component */ 7809);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/editor */ 4384);
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.module */ 8975);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ 6062);
/* harmony import */ var _main_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/profile/profile.component */ 1158);
/* harmony import */ var _ng_prime_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ng-prime.module */ 8990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);

















class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUploadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, primeng_editor__WEBPACK_IMPORTED_MODULE_15__.EditorModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_2__.Modal, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinnerModule,
  // CardModule,
  _ng_prime_module__WEBPACK_IMPORTED_MODULE_4__.NgPrimeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUploadModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, primeng_editor__WEBPACK_IMPORTED_MODULE_15__.EditorModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_2__.Modal, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinnerModule,
  // CardModule,
  _ng_prime_module__WEBPACK_IMPORTED_MODULE_4__.NgPrimeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedComponent, _file_not_found_file_not_found_component__WEBPACK_IMPORTED_MODULE_1__.FileNotFoundComponent, _main_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUploadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, primeng_editor__WEBPACK_IMPORTED_MODULE_15__.EditorModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_2__.Modal, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinnerModule,
    // CardModule,
    _ng_prime_module__WEBPACK_IMPORTED_MODULE_4__.NgPrimeModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUploadModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, primeng_editor__WEBPACK_IMPORTED_MODULE_15__.EditorModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_2__.Modal, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinnerModule,
    // CardModule,
    _ng_prime_module__WEBPACK_IMPORTED_MODULE_4__.NgPrimeModule]
  });
})();

/***/ }),

/***/ 6371:
/*!***************************************************************!*\
  !*** ./src/app/shared/unauthorized/unauthorized.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthorizedComponent": () => (/* binding */ UnauthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UnauthorizedComponent {
  constructor() {}
  ngOnInit() {}
}
UnauthorizedComponent.ɵfac = function UnauthorizedComponent_Factory(t) {
  return new (t || UnauthorizedComponent)();
};
UnauthorizedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UnauthorizedComponent,
  selectors: [["app-unauthorized"]],
  decls: 32,
  vars: 0,
  consts: [[1, "row"], [1, "col-xs-12"], [1, "error-container"], [1, "well"], [1, "grey", "lighter", "smaller"], [1, "blue", "bigger-125"], [1, "ace-icon", "fa", "fa-random"], [1, "lighter", "smaller"], [1, "space"], [1, "list-unstyled", "spaced", "inline", "bigger-110", "margin-15"], [1, "ace-icon", "fa", "fa-hand-point-right", "blue"], [1, "center"], ["href", "javascript:history.back()", 1, "btn", "btn-grey"], [1, "ace-icon", "fa", "fa-arrow-left"], ["href", "/", 1, "btn", "btn-primary"], [1, "ace-icon", "fa", "fa-home"]],
  template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 401 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Kh\u00F4ng c\u00F3 quy\u1EC1n truy c\u1EADp ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Vui l\u00F2ng li\u00EAn h\u1EC7 qu\u1EA3n tr\u1ECB vi\u00EAn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div")(14, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "B\u1EA1n c\u00F3 th\u1EC3 th\u1EF1c hi\u1EC7n nh\u1EEFng thao t\u00E1c sau:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 9)(17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Xem h\u01B0\u1EDBng d\u1EABn th\u1EF1c hi\u1EC7n c\u1EE7a m\u00E0n h\u00ECnh \u1EDF g\u00F3c tr\u00EAn b\u00EAn ph\u1EA3i ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ph\u1EA3n h\u1ED3i th\u00F4ng tin v\u1EDBi qu\u1EA3n tr\u1ECB vi\u00EAn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr")(24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11)(26, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Quay l\u1EA1i ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Trang ch\u1EE7 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  // apiUrl: 'http://localhost:6868'
  apiUrl: 'http://quanlyduhoc.somee.com'
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  // apiUrl: 'http://localhost:6868'
  apiUrl: 'http://quanlyduhoc.somee.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map