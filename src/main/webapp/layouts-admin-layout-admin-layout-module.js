(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "RU0v");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.css */ "9WCt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/datos.service */ "ATXi");
/* harmony import */ var app_model_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_model/usuario */ "y/Q2");
/* harmony import */ var app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/_services/usuarios.service */ "8I8D");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(datosService, usuariosService) {
        this.datosService = datosService;
        this.usuariosService = usuariosService;
        this.usuario = new app_model_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.datosService.obtenerDatos().subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    UserProfileComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.usuario = JSON.parse(sessionStorage.getItem("CLINICA.usuario"));
        }, 500);
        console.log(this.usuario.perfil);
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: app_services_datos_service__WEBPACK_IMPORTED_MODULE_3__["DatosService"] },
        { type: app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] }
    ]; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_datos_service__WEBPACK_IMPORTED_MODULE_3__["DatosService"], app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "0IaG":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \************************************************************************/
/*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _MatDialogBase, _MatDialogContainerBase, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogBase", function() { return _MatDialogBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogContainerBase", function() { return _MatDialogContainerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function() { return _closeDialogVia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */







function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

var MatDialogConfig = function MatDialogConfig() {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogConfig);

  /** The ARIA role of the dialog element. */
  this.role = 'dialog';
  /** Custom class for the overlay pane. */

  this.panelClass = '';
  /** Whether the dialog has a backdrop. */

  this.hasBackdrop = true;
  /** Custom class for the backdrop. */

  this.backdropClass = '';
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */

  this.disableClose = false;
  /** Width of the dialog. */

  this.width = '';
  /** Height of the dialog. */

  this.height = '';
  /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

  this.maxWidth = '80vw';
  /** Data being injected into the child component. */

  this.data = null;
  /** ID of the element that describes the dialog. */

  this.ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */

  this.ariaLabelledBy = null;
  /** Aria label to assign to the dialog element. */

  this.ariaLabel = null;
  /** Whether the dialog should focus the first focusable element on open. */

  this.autoFocus = true;
  /**
   * Whether the dialog should restore focus to the
   * previously-focused element, after it's closed.
   */

  this.restoreFocus = true;
  /**
   * Whether the dialog should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */

  this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatDialog.
 * @docs-private
 */


var matDialogAnimations = {
  /** Animation that is applied on the dialog container by defalt. */
  dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the dialog content and
  // decimate the animation performance. Leaving it as `none` solves both issues.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    opacity: 0,
    transform: 'scale(0.7)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    transform: 'none'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    transform: 'none',
    opacity: 1
  }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */

function throwMatDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Base class for the `MatDialogContainer`. The base class does not implement
 * animations as these are left to implementers of the dialog container.
 */


var _MatDialogContainerBase = /*#__PURE__*/function (_BasePortalOutlet) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatDialogContainerBase, _BasePortalOutlet);

  var _super = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(_MatDialogContainerBase);

  function _MatDialogContainerBase(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
  /** The dialog configuration. */
  _config, _focusMonitor) {
    var _this;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatDialogContainerBase);

    _this = _super.call(this);
    _this._elementRef = _elementRef;
    _this._focusTrapFactory = _focusTrapFactory;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._config = _config;
    _this._focusMonitor = _focusMonitor;
    /** Emits when an animation state changes. */

    _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */

    _this._elementFocusedBeforeDialogWasOpened = null;
    /**
     * Type of interaction that led to the dialog being closed. This is used to determine
     * whether the focus style will be applied when returning focus to its original location
     * after the dialog is closed.
     */

    _this._closeInteractionType = null;
    /**
     * Attaches a DOM portal to the dialog container.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */

    _this.attachDomPortal = function (portal) {
      if (_this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }

      return _this._portalOutlet.attachDomPortal(portal);
    };

    _this._ariaLabelledBy = _config.ariaLabelledBy || null;
    _this._document = _document;
    return _this;
  }
  /** Initializes the dialog container with the attached content. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_MatDialogContainerBase, [{
    key: "_initializeWithAttachedContent",
    value: function _initializeWithAttachedContent() {
      this._setupFocusTrap(); // Save the previously focused element. This element will be re-focused
      // when the dialog closes.


      this._capturePreviouslyFocusedElement(); // Move focus onto the dialog immediately in order to prevent the user
      // from accidentally opening multiple dialogs at the same time.


      this._focusDialogContainer();
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */

  }, {
    key: "attachComponentPortal",
    value: function attachComponentPortal(portal) {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }

      return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */

  }, {
    key: "attachTemplatePortal",
    value: function attachTemplatePortal(portal) {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }

      return this._portalOutlet.attachTemplatePortal(portal);
    }
    /** Moves focus back into the dialog if it was moved out. */

  }, {
    key: "_recaptureFocus",
    value: function _recaptureFocus() {
      if (!this._containsFocus()) {
        var focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();

        if (focusContainer) {
          this._elementRef.nativeElement.focus();
        }
      }
    }
    /** Moves the focus inside the focus trap. */

  }, {
    key: "_trapFocus",
    value: function _trapFocus() {
      // If we were to attempt to focus immediately, then the content of the dialog would not yet be
      // ready in instances where change detection has to run first. To deal with this, we simply
      // wait for the microtask queue to be empty.
      if (this._config.autoFocus) {
        this._focusTrap.focusInitialElementWhenReady();
      } else if (!this._containsFocus()) {
        // Otherwise ensure that focus is on the dialog container. It's possible that a different
        // component tried to move focus while the open animation was running. See:
        // https://github.com/angular/components/issues/16215. Note that we only want to do this
        // if the focus isn't inside the dialog already, because it's possible that the consumer
        // turned off `autoFocus` in order to move focus themselves.
        this._elementRef.nativeElement.focus();
      }
    }
    /** Restores focus to the element that was focused before the dialog opened. */

  }, {
    key: "_restoreFocus",
    value: function _restoreFocus() {
      var previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

      if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
        var activeElement = this._document.activeElement;
        var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
        // non-focusable element like the backdrop was clicked) before moving it. It's possible that
        // the consumer moved it themselves before the animation was done, in which case we shouldn't
        // do anything.

        if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
          if (this._focusMonitor) {
            this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

            this._closeInteractionType = null;
          } else {
            previousElement.focus();
          }
        }
      }

      if (this._focusTrap) {
        this._focusTrap.destroy();
      }
    }
    /** Sets up the focus trap. */

  }, {
    key: "_setupFocusTrap",
    value: function _setupFocusTrap() {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }
    /** Captures the element that was focused before the dialog was opened. */

  }, {
    key: "_capturePreviouslyFocusedElement",
    value: function _capturePreviouslyFocusedElement() {
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
      }
    }
    /** Focuses the dialog container. */

  }, {
    key: "_focusDialogContainer",
    value: function _focusDialogContainer() {
      // Note that there is no focus method when rendering on the server.
      if (this._elementRef.nativeElement.focus) {
        this._elementRef.nativeElement.focus();
      }
    }
    /** Returns whether focus is inside the dialog. */

  }, {
    key: "_containsFocus",
    value: function _containsFocus() {
      var element = this._elementRef.nativeElement;
      var activeElement = this._document.activeElement;
      return element === activeElement || element.contains(activeElement);
    }
  }]);

  return _MatDialogContainerBase;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["BasePortalOutlet"]);

_MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) {
  return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"]));
};

_MatDialogContainerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: _MatDialogContainerBase,
  viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});

_MatDialogContainerBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusTrapFactory"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
    }]
  }, {
    type: MatDialogConfig
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"]
  }];
};

_MatDialogContainerBase.propDecorators = {
  _portalOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"], {
      static: true
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusTrapFactory"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
      }]
    }, {
      type: MatDialogConfig
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"]
    }];
  }, {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"], {
        static: true
      }]
    }]
  });
})();
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 */


var MatDialogContainer = /*#__PURE__*/function (_MatDialogContainerBa) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatDialogContainer, _MatDialogContainerBa);

  var _super2 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatDialogContainer);

  function MatDialogContainer() {
    var _this2;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogContainer);

    _this2 = _super2.apply(this, arguments);
    /** State of the dialog animation. */

    _this2._state = 'enter';
    return _this2;
  }
  /** Callback, invoked whenever an animation on the host completes. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogContainer, [{
    key: "_onAnimationDone",
    value: function _onAnimationDone(_ref) {
      var toState = _ref.toState,
          totalTime = _ref.totalTime;

      if (toState === 'enter') {
        this._trapFocus();

        this._animationStateChanged.next({
          state: 'opened',
          totalTime: totalTime
        });
      } else if (toState === 'exit') {
        this._restoreFocus();

        this._animationStateChanged.next({
          state: 'closed',
          totalTime: totalTime
        });
      }
    }
    /** Callback, invoked when an animation on the host starts. */

  }, {
    key: "_onAnimationStart",
    value: function _onAnimationStart(_ref2) {
      var toState = _ref2.toState,
          totalTime = _ref2.totalTime;

      if (toState === 'enter') {
        this._animationStateChanged.next({
          state: 'opening',
          totalTime: totalTime
        });
      } else if (toState === 'exit' || toState === 'void') {
        this._animationStateChanged.next({
          state: 'closing',
          totalTime: totalTime
        });
      }
    }
    /** Starts the dialog exit animation. */

  }, {
    key: "_startExitAnimation",
    value: function _startExitAnimation() {
      this._state = 'exit'; // Mark the container for check so it can react if the
      // view container is using OnPush change detection.

      this._changeDetectorRef.markForCheck();
    }
  }]);

  return MatDialogContainer;
}(_MatDialogContainerBase);

MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
  return ɵMatDialogContainer_BaseFactory(t || MatDialogContainer);
};

MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MatDialogContainer,
  selectors: [["mat-dialog-container"]],
  hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
  hostVars: 6,
  hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
        return ctx._onAnimationStart($event);
      })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
        return ctx._onAnimationDone($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("id", ctx._id);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function MatDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"]],
  styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  data: {
    animation: [matDialogAnimations.dialogContainer]
  }
});
var ɵMatDialogContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatDialogContainer);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'mat-dialog-container',
      template: "<ng-template cdkPortalOutlet></ng-template>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].Default,
      animations: [matDialogAnimations.dialogContainer],
      host: {
        'class': 'mat-dialog-container',
        'tabindex': '-1',
        'aria-modal': 'true',
        '[id]': '_id',
        '[attr.role]': '_config.role',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
        '[@dialogContainer]': '_state',
        '(@dialogContainer.start)': '_onAnimationStart($event)',
        '(@dialogContainer.done)': '_onAnimationDone($event)'
      },
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.


var uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 */

var MatDialogRef = /*#__PURE__*/function () {
  function MatDialogRef(_overlayRef, _containerInstance) {
    var _this3 = this;

    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogRef);

    this._overlayRef = _overlayRef;
    this._containerInstance = _containerInstance;
    this.id = id;
    /** Whether the user is allowed to close the dialog. */

    this.disableClose = this._containerInstance._config.disableClose;
    /** Subject for notifying the user that the dialog has finished opening. */

    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Subject for notifying the user that the dialog has finished closing. */

    this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Subject for notifying the user that the dialog has started closing. */

    this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Current state of the dialog. */

    this._state = 0
    /* OPEN */
    ; // Pass the id along to the container.

    _containerInstance._id = id; // Emit when opening animation completes

    _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
      return event.state === 'opened';
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
      _this3._afterOpened.next();

      _this3._afterOpened.complete();
    }); // Dispose overlay when closing animation is complete


    _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
      return event.state === 'closed';
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
      clearTimeout(_this3._closeFallbackTimeout);

      _this3._finishDialogClose();
    });

    _overlayRef.detachments().subscribe(function () {
      _this3._beforeClosed.next(_this3._result);

      _this3._beforeClosed.complete();

      _this3._afterClosed.next(_this3._result);

      _this3._afterClosed.complete();

      _this3.componentInstance = null;

      _this3._overlayRef.dispose();
    });

    _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
      return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event);
    })).subscribe(function (event) {
      event.preventDefault();

      _closeDialogVia(_this3, 'keyboard');
    });

    _overlayRef.backdropClick().subscribe(function () {
      if (_this3.disableClose) {
        _this3._containerInstance._recaptureFocus();
      } else {
        _closeDialogVia(_this3, 'mouse');
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogRef, [{
    key: "close",
    value: function close(dialogResult) {
      var _this4 = this;

      this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

      this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
        return event.state === 'closing';
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function (event) {
        _this4._beforeClosed.next(dialogResult);

        _this4._beforeClosed.complete();

        _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
        // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
        // timeout which will clean everything up if the animation hasn't fired within the specified
        // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
        // vast majority of cases the timeout will have been cleared before it has the chance to fire.


        _this4._closeFallbackTimeout = setTimeout(function () {
          return _this4._finishDialogClose();
        }, event.totalTime + 100);
      });

      this._state = 1
      /* CLOSING */
      ;

      this._containerInstance._startExitAnimation();
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */

  }, {
    key: "afterOpened",
    value: function afterOpened() {
      return this._afterOpened;
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */

  }, {
    key: "afterClosed",
    value: function afterClosed() {
      return this._afterClosed;
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */

  }, {
    key: "beforeClosed",
    value: function beforeClosed() {
      return this._beforeClosed;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */

  }, {
    key: "backdropClick",
    value: function backdropClick() {
      return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */

  }, {
    key: "keydownEvents",
    value: function keydownEvents() {
      return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */

  }, {
    key: "updatePosition",
    value: function updatePosition(position) {
      var strategy = this._getPositionStrategy();

      if (position && (position.left || position.right)) {
        position.left ? strategy.left(position.left) : strategy.right(position.right);
      } else {
        strategy.centerHorizontally();
      }

      if (position && (position.top || position.bottom)) {
        position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
      } else {
        strategy.centerVertically();
      }

      this._overlayRef.updatePosition();

      return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */

  }, {
    key: "updateSize",
    value: function updateSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      this._getPositionStrategy().width(width).height(height);

      this._overlayRef.updatePosition();

      return this;
    }
    /** Add a CSS class or an array of classes to the overlay pane. */

  }, {
    key: "addPanelClass",
    value: function addPanelClass(classes) {
      this._overlayRef.addPanelClass(classes);

      return this;
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */

  }, {
    key: "removePanelClass",
    value: function removePanelClass(classes) {
      this._overlayRef.removePanelClass(classes);

      return this;
    }
    /** Gets the current state of the dialog's lifecycle. */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     */

  }, {
    key: "_finishDialogClose",
    value: function _finishDialogClose() {
      this._state = 2
      /* CLOSED */
      ;

      this._overlayRef.dispose();
    }
    /** Fetches the position strategy object from the overlay ref. */

  }, {
    key: "_getPositionStrategy",
    value: function _getPositionStrategy() {
      return this._overlayRef.getConfig().positionStrategy;
    }
  }]);

  return MatDialogRef;
}();
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


function _closeDialogVia(ref, interactionType, result) {
  // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
  // For those, we keep the behavior as is and do not deal with the interaction type.
  if (ref._containerInstance !== undefined) {
    ref._containerInstance._closeInteractionType = interactionType;
  }

  return ref.close(result);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to access the data that was passed in to a dialog. */


var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MatDialogData');
/** Injection token that can be used to specify default dialog options. */

var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */

var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-dialog-scroll-strategy');
/** @docs-private */

function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.block();
  };
}
/** @docs-private */


function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.block();
  };
}
/** @docs-private */


var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]],
  useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/**
 * Base class for dialog services. The base dialog service allows
 * for arbitrary dialog refs and dialog container components.
 */

var _MatDialogBase = /*#__PURE__*/function () {
  function _MatDialogBase(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
    var _this5 = this;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatDialogBase);

    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._dialogRefConstructor = _dialogRefConstructor;
    this._dialogContainerType = _dialogContainerType;
    this._dialogDataToken = _dialogDataToken;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */

    this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["defer"])(function () {
      return _this5.openDialogs.length ? _this5._getAfterAllClosed() : _this5._getAfterAllClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(undefined));
    });
    this._scrollStrategy = scrollStrategy;
  }
  /** Keeps track of the currently-open dialogs. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_MatDialogBase, [{
    key: "openDialogs",
    get: function get() {
      return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /** Stream that emits when a dialog has been opened. */

  }, {
    key: "afterOpened",
    get: function get() {
      return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
  }, {
    key: "_getAfterAllClosed",
    value: function _getAfterAllClosed() {
      var parent = this._parentDialog;
      return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    /**
     * Opens a modal dialog containing the given component.
     * @param componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */

  }, {
    key: "open",
    value: function open(componentOrTemplateRef, config) {
      var _this6 = this;

      config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

      if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
      }

      var overlayRef = this._createOverlay(config);

      var dialogContainer = this._attachDialogContainer(overlayRef, config);

      var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


      if (!this.openDialogs.length) {
        this._hideNonDialogContentFromAssistiveTechnology();
      }

      this.openDialogs.push(dialogRef);
      dialogRef.afterClosed().subscribe(function () {
        return _this6._removeOpenDialog(dialogRef);
      });
      this.afterOpened.next(dialogRef); // Notify the dialog container that the content has been attached.

      dialogContainer._initializeWithAttachedContent();

      return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     */

  }, {
    key: "closeAll",
    value: function closeAll() {
      this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */

  }, {
    key: "getDialogById",
    value: function getDialogById(id) {
      return this.openDialogs.find(function (dialog) {
        return dialog.id === id;
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Only close the dialogs at this level on destroy
      // since the parent service may still be active.
      this._closeDialogs(this._openDialogsAtThisLevel);

      this._afterAllClosedAtThisLevel.complete();

      this._afterOpenedAtThisLevel.complete();
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param config The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */

  }, {
    key: "_createOverlay",
    value: function _createOverlay(config) {
      var overlayConfig = this._getOverlayConfig(config);

      return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an overlay config from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */

  }, {
    key: "_getOverlayConfig",
    value: function _getOverlayConfig(dialogConfig) {
      var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayConfig"]({
        positionStrategy: this._overlay.position().global(),
        scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
        panelClass: dialogConfig.panelClass,
        hasBackdrop: dialogConfig.hasBackdrop,
        direction: dialogConfig.direction,
        minWidth: dialogConfig.minWidth,
        minHeight: dialogConfig.minHeight,
        maxWidth: dialogConfig.maxWidth,
        maxHeight: dialogConfig.maxHeight,
        disposeOnNavigation: dialogConfig.closeOnNavigation
      });

      if (dialogConfig.backdropClass) {
        state.backdropClass = dialogConfig.backdropClass;
      }

      return state;
    }
    /**
     * Attaches a dialog container to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */

  }, {
    key: "_attachDialogContainer",
    value: function _attachDialogContainer(overlay, config) {
      var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
      var injector = _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"].create({
        parent: userInjector || this._injector,
        providers: [{
          provide: MatDialogConfig,
          useValue: config
        }]
      });
      var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
      var containerRef = overlay.attach(containerPortal);
      return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created dialog container.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping dialog container.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MatDialogRef that should be returned to the user.
     */

  }, {
    key: "_attachDialogContent",
    value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
      // Create a reference to the dialog we're creating in order to give the user a handle
      // to modify and close it.
      var dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);

      if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]) {
        dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](componentOrTemplateRef, null, {
          $implicit: config.data,
          dialogRef: dialogRef
        }));
      } else {
        var injector = this._createInjector(config, dialogRef, dialogContainer);

        var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
        dialogRef.componentInstance = contentRef.instance;
      }

      dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
      return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @param config Config object that is used to construct the dialog.
     * @param dialogRef Reference to the dialog.
     * @param dialogContainer Dialog container element that wraps all of the contents.
     * @returns The custom injector that can be used inside the dialog.
     */

  }, {
    key: "_createInjector",
    value: function _createInjector(config, dialogRef, dialogContainer) {
      var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The dialog container should be provided as the dialog container and the dialog's
      // content are created out of the same `ViewContainerRef` and as such, are siblings
      // for injector purposes. To allow the hierarchy that is expected, the dialog
      // container is explicitly provided in the injector.

      var providers = [{
        provide: this._dialogContainerType,
        useValue: dialogContainer
      }, {
        provide: this._dialogDataToken,
        useValue: config.data
      }, {
        provide: this._dialogRefConstructor,
        useValue: dialogRef
      }];

      if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], null))) {
        providers.push({
          provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          useValue: {
            value: config.direction,
            change: Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])()
          }
        });
      }

      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"].create({
        parent: userInjector || this._injector,
        providers: providers
      });
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @param dialogRef Dialog to be removed.
     */

  }, {
    key: "_removeOpenDialog",
    value: function _removeOpenDialog(dialogRef) {
      var index = this.openDialogs.indexOf(dialogRef);

      if (index > -1) {
        this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
        // to a the siblings and emit to the `afterAllClosed` stream.

        if (!this.openDialogs.length) {
          this._ariaHiddenElements.forEach(function (previousValue, element) {
            if (previousValue) {
              element.setAttribute('aria-hidden', previousValue);
            } else {
              element.removeAttribute('aria-hidden');
            }
          });

          this._ariaHiddenElements.clear();

          this._getAfterAllClosed().next();
        }
      }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     */

  }, {
    key: "_hideNonDialogContentFromAssistiveTechnology",
    value: function _hideNonDialogContentFromAssistiveTechnology() {
      var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


      if (overlayContainer.parentElement) {
        var siblings = overlayContainer.parentElement.children;

        for (var i = siblings.length - 1; i > -1; i--) {
          var sibling = siblings[i];

          if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
            this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

            sibling.setAttribute('aria-hidden', 'true');
          }
        }
      }
    }
    /** Closes all of the dialogs in an array. */

  }, {
    key: "_closeDialogs",
    value: function _closeDialogs(dialogs) {
      var i = dialogs.length;

      while (i--) {
        // The `_openDialogs` property isn't updated after close until the rxjs subscription
        // runs on the next microtask, in addition to modifying the array as we're going
        // through it. We loop through all of them and call close without assuming that
        // they'll be removed from the list instantaneously.
        dialogs[i].close();
      }
    }
  }]);

  return _MatDialogBase;
}();

_MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) {
  return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]));
};

_MatDialogBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: _MatDialogBase
});

_MatDialogBase.ctorParameters = function () {
  return [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
  }, {
    type: undefined
  }, {
    type: undefined
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
  }, {
    type: undefined
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](_MatDialogBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
    }, {
      type: undefined
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]
    }];
  }, null);
})();
/**
 * Service to open Material Design modal dialogs.
 */


var MatDialog = /*#__PURE__*/function (_MatDialogBase2) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatDialog, _MatDialogBase2);

  var _super3 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatDialog);

  function MatDialog(overlay, injector,
  /**
   * @deprecated `_location` parameter to be removed.
   * @breaking-change 10.0.0
   */
  location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialog);

    return _super3.call(this, overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
  }

  return MatDialog;
}(_MatDialogBase);

MatDialog.ɵfac = function MatDialog_Factory(t) {
  return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]));
};

MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MatDialog,
  factory: MatDialog.ɵfac
});

MatDialog.ctorParameters = function () {
  return [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: MatDialogConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: MatDialog,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["SkipSelf"]
    }]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: MatDialogConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_DIALOG_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_DIALOG_SCROLL_STRATEGY]
      }]
    }, {
      type: MatDialog,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["SkipSelf"]
      }]
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
    }];
  }, null);
})();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */


function _applyConfigDefaults(config, defaultOptions) {
  return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique IDs for dialog elements. */


var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */

var MatDialogClose = /*#__PURE__*/function () {
  function MatDialogClose( // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  dialogRef, _elementRef, _dialog) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogClose);

    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Default to "button" to prevents accidental form submits. */

    this.type = 'button';
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogClose, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.dialogRef) {
        // When this directive is included in a dialog via TemplateRef (rather than being
        // in a Component), the DialogRef isn't available via injection because embedded
        // views cannot be given a custom injector. Instead, we look up the DialogRef by
        // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
        // be resolved at constructor time.
        this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

      if (proxiedChange) {
        this.dialogResult = proxiedChange.currentValue;
      }
    }
  }, {
    key: "_onButtonClick",
    value: function _onButtonClick(event) {
      // Determinate the focus origin using the click event, because using the FocusMonitor will
      // result in incorrect origins. Most of the time, close buttons will be auto focused in the
      // dialog, and therefore clicking the button won't result in a focus change. This means that
      // the FocusMonitor won't detect any origin change, and will always output `program`.
      _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
    }
  }]);

  return MatDialogClose;
}();

MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
  return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialog));
};

MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogClose,
  selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
  hostVars: 2,
  hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
        return ctx._onButtonClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    }
  },
  inputs: {
    type: "type",
    dialogResult: ["mat-dialog-close", "dialogResult"],
    ariaLabel: ["aria-label", "ariaLabel"],
    _matDialogClose: ["matDialogClose", "_matDialogClose"]
  },
  exportAs: ["matDialogClose"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});

MatDialogClose.ctorParameters = function () {
  return [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: MatDialog
  }];
};

MatDialogClose.propDecorators = {
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['aria-label']
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  dialogResult: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['mat-dialog-close']
  }],
  _matDialogClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matDialogClose']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogClose, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[mat-dialog-close], [matDialogClose]',
      exportAs: 'matDialogClose',
      host: {
        '(click)': '_onButtonClick($event)',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.type]': 'type'
      }
    }]
  }], function () {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: MatDialog
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    dialogResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['mat-dialog-close']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['aria-label']
    }],
    _matDialogClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matDialogClose']
    }]
  });
})();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */


var MatDialogTitle = /*#__PURE__*/function () {
  function MatDialogTitle( // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  _dialogRef, _elementRef, _dialog) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogTitle);

    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this.id = "mat-dialog-title-".concat(dialogElementUid++);
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogTitle, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this7 = this;

      if (!this._dialogRef) {
        this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
      }

      if (this._dialogRef) {
        Promise.resolve().then(function () {
          var container = _this7._dialogRef._containerInstance;

          if (container && !container._ariaLabelledBy) {
            container._ariaLabelledBy = _this7.id;
          }
        });
      }
    }
  }]);

  return MatDialogTitle;
}();

MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
  return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialog));
};

MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogTitle,
  selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
  hostAttrs: [1, "mat-dialog-title"],
  hostVars: 1,
  hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matDialogTitle"]
});

MatDialogTitle.ctorParameters = function () {
  return [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: MatDialog
  }];
};

MatDialogTitle.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[mat-dialog-title], [matDialogTitle]',
      exportAs: 'matDialogTitle',
      host: {
        'class': 'mat-dialog-title',
        '[id]': 'id'
      }
    }]
  }], function () {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: MatDialog
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();
/**
 * Scrollable content container of a dialog.
 */


var MatDialogContent = function MatDialogContent() {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogContent);
};

MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
  return new (t || MatDialogContent)();
};

MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogContent,
  selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
  hostAttrs: [1, "mat-dialog-content"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
      host: {
        'class': 'mat-dialog-content'
      }
    }]
  }], null, null);
})();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */


var MatDialogActions = function MatDialogActions() {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogActions);
};

MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
  return new (t || MatDialogActions)();
};

MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogActions,
  selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
  hostAttrs: [1, "mat-dialog-actions"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
      host: {
        'class': 'mat-dialog-actions'
      }
    }]
  }], null, null);
})();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */


function getClosestDialog(element, openDialogs) {
  var parent = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains('mat-dialog-container')) {
    parent = parent.parentElement;
  }

  return parent ? openDialogs.find(function (dialog) {
    return dialog.id === parent.id;
  }) : null;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatDialogModule = function MatDialogModule() {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogModule);
};

MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatDialogModule
});
MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatDialogModule_Factory(t) {
    return new (t || MatDialogModule)();
  },
  providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatDialogModule, {
    declarations: function declarations() {
      return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
    },
    imports: function imports() {
      return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
      exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
      declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
      providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
      entryComponents: [MatDialogContainer]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "45No":
/*!**********************************************************************************************!*\
  !*** ./src/app/especialidades/components/especialidades-reg/especialidades-reg.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EspecialidadesRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecialidadesRegComponent", function() { return EspecialidadesRegComponent; });
/* harmony import */ var _raw_loader_especialidades_reg_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./especialidades-reg.component.html */ "rm19");
/* harmony import */ var _especialidades_reg_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./especialidades-reg.component.css */ "XeLt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EspecialidadesRegComponent = /** @class */ (function () {
    function EspecialidadesRegComponent() {
    }
    EspecialidadesRegComponent.prototype.ngOnInit = function () {
    };
    EspecialidadesRegComponent.ctorParameters = function () { return []; };
    EspecialidadesRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-especialidades-reg',
            template: _raw_loader_especialidades_reg_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_especialidades_reg_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], EspecialidadesRegComponent);
    return EspecialidadesRegComponent;
}());



/***/ }),

/***/ "6RZi":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pacientes/components/pacientes-reg/pacientes-reg.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Registro de Paciente</h4>\n                        <p class=\"card-category\">Información del registro de Paciente</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form name=\"editForm\" role=\"form\" #editForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"ID\" [(ngModel)]=\"paciente.id\" name=\"id\" disabled>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Nº DNI\" [(ngModel)]=\"paciente.numDni\" name=\"numDni\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Nombre Completo\" [(ngModel)]=\"paciente.nomCompleto\" name=\"nomCompleto\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Email\" [(ngModel)]=\"paciente.correo\" name=\"correo\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Teléfono\" [(ngModel)]=\"paciente.numTelefono\" name=\"numTelefono\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Dirección\" [(ngModel)]=\"paciente.direccion\" name=\"direccion\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Edad\" [(ngModel)]=\"paciente.edad\" name=\"edad\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput [matDatepicker]=\"fecNacimiento\" placeholder=\"Fecha de Nacimiento\"\n                                        [(ngModel)]=\"paciente.fecNacimiento\" name=\"fecNacimiento\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"fecNacimiento\"></mat-datepicker-toggle>\n                                        <mat-datepicker #fecNacimiento></mat-datepicker>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput [matDatepicker]=\"fecIngreso\" placeholder=\"Fecha de ingreso\"\n                                        [(ngModel)]=\"paciente.fecIngreso\" name=\"fecIngreso\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"fecIngreso\"></mat-datepicker-toggle>\n                                        <mat-datepicker #fecIngreso></mat-datepicker>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <button mat-raised-button type=\"submit\" [disabled]=\"editForm.form.invalid\"\n                                class=\"btn btn-danger pull-right\" (click)=\"save()\" style=\"float:right\">\n                                <span class=\"fa fa-save\"></span>&nbsp;&nbsp;<span>Guardar</span>\n                            </button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "6TAj":
/*!*****************************************************************************!*\
  !*** ./src/app/doctores/components/doctores-reg/doctores-reg.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3RvcmVzL2NvbXBvbmVudHMvZG9jdG9yZXMtcmVnL2RvY3RvcmVzLXJlZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "9Sjr":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctores/components/doctores-reg/doctores-reg.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Registro de Doctor</h4>\n                        <p class=\"card-category\">Información del registro de Doctor</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form name=\"editForm\" role=\"form\" #editForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"ID\" [(ngModel)]=\"doctor.id\" name=\"id\" disabled>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Nº DNI\" [(ngModel)]=\"doctor.numDni\" name=\"numDni\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Nombre Completo\" [(ngModel)]=\"doctor.nomCompleto\" name=\"nomCompleto\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Email\" [(ngModel)]=\"doctor.desEmail\" name=\"desEmail\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput [matDatepicker]=\"fecIngreso\" placeholder=\"Fecha de ingreso\" [(ngModel)]=\"doctor.fecIngreso\" name=\"fecIngreso\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"fecIngreso\"></mat-datepicker-toggle>\n                                        <mat-datepicker #fecIngreso></mat-datepicker>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Colegiatura\" [(ngModel)]=\"doctor.numColegiatura\" name=\"numColegiatura\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Estudios\"  [(ngModel)]=\"doctor.estudios\" name=\"estudios\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-select name=\"especialidad\" [ngModel]=\"especialidadSel | json\" (ngModelChange)=\"onChangeSelect($event)\" placeholder=\"Especialidad\">\n                                            <mat-option *ngFor=\"let item of especialidades\" [value]=\"item | json\" >\n                                            {{ item.nomEspecialidad}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <!-- <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div> -->\n                            <button mat-raised-button type=\"submit\" [disabled]=\"editForm.form.invalid\" class=\"btn btn-danger pull-right\" (click)=\"save()\" style=\"float:right\">\n                                <span class=\"fa fa-save\"></span>&nbsp;&nbsp;<span>Guardar</span>\n                            </button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "9WCt":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-success\">\n                      <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Citas Diarias</h4>\n                      <p class=\"card-category\">\n                          <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> incremento del día de hoy.</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> actualizado hace 4 minutos.\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-warning\">\n                      <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Pacientes Registrados</h4>\n                      <p class=\"card-category\">Indice de registro de pacientes</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> actualizado hace 2 días.\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 d-none\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-danger\">\n                      <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Completed Tasks</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-warning\">\n                      <h4 class=\"card-title\">Estadísticas de Empleados</h4>\n                      <p class=\"card-category\">Empleados nuevos a Junio de 2021</p>\n                  </div>\n                  <div class=\"card-body table-responsive\">\n                      <table class=\"table table-hover\">\n                          <thead class=\"text-warning\">\n                              <th>ID</th>\n                              <th>Nombre Completo</th>\n                              <th>Sueldo</th>\n                              <th>País</th>\n                          </thead>\n                          <tbody>\n                              <tr>\n                                  <td>1</td>\n                                  <td>Dakota Rice</td>\n                                  <td>$36,738</td>\n                                  <td>Niger</td>\n                              </tr>\n                              <tr>\n                                  <td>2</td>\n                                  <td>Minerva Hooper</td>\n                                  <td>$23,789</td>\n                                  <td>Curaçao</td>\n                              </tr>\n                              <tr>\n                                  <td>3</td>\n                                  <td>Sage Rodriguez</td>\n                                  <td>$56,142</td>\n                                  <td>Netherlands</td>\n                              </tr>\n                              <tr>\n                                  <td>4</td>\n                                  <td>Philip Chaney</td>\n                                  <td>$38,735</td>\n                                  <td>Korea, South</td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Ij4w":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historia/components/historia-reg/historia-reg.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Registro de Historia Clinica</h4>\n                            <p class=\"card-category\">Información del registro de Historias</p>\n                        </div>\n                        <div class=\"card-body\">\n                            <form name=\"editForm\" role=\"form\" #editForm=\"ngForm\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <mat-form-field class=\"example-full-width\">\n                                          <input matInput placeholder=\"ID\" [(ngModel)]=\"historia.id\" name=\"id\" disabled>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <mat-select name=\"pacienteSel\" [ngModel]=\"pacienteSel | json\" (ngModelChange)=\"onChangeSelect($event)\" placeholder=\"Paciente\">\n                                                <mat-option *ngFor=\"let item of pacientes\" [value]=\"item | json\" >\n                                                {{ item.nomCompleto}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput [matDatepicker]=\"fecha\" placeholder=\"Fecha de Registro\" [(ngModel)]=\"historia.fecha\" name=\"fecha\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"fecha\"></mat-datepicker-toggle>\n                                            <mat-datepicker #fecha></mat-datepicker>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <mat-form-field class=\"example-full-width\">\n                                          <textarea matInput placeholder=\"Observaciones\" [(ngModel)]=\"historia.observaciones\" name=\"observaciones\"></textarea>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                <!-- <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                                <div class=\"clearfix\"></div> -->\n                                <button mat-raised-button type=\"submit\" [disabled]=\"editForm.form.invalid\" class=\"btn btn-danger pull-right\" (click)=\"save()\" style=\"float:right\">\n                                    <span class=\"fa fa-save\"></span>&nbsp;&nbsp;<span>Guardar</span>\n                                </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n      ");

/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var app_doctores_components_doctores_reg_doctores_reg_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/doctores/components/doctores-reg/doctores-reg.component */ "QvN5");
/* harmony import */ var app_especialidades_components_especialidades_reg_especialidades_reg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/especialidades/components/especialidades-reg/especialidades-reg.component */ "45No");
/* harmony import */ var app_historia_components_historia_reg_historia_reg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/historia/components/historia-reg/historia-reg.component */ "c2KY");
/* harmony import */ var app_pacientes_components_pacientes_reg_pacientes_reg_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/pacientes/components/pacientes-reg/pacientes-reg.component */ "mDKE");
/* harmony import */ var app_citas_components_citas_reg_citas_reg_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/citas/components/citas-reg/citas-reg.component */ "sbhi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                app_doctores_components_doctores_reg_doctores_reg_component__WEBPACK_IMPORTED_MODULE_15__["DoctoresRegComponent"],
                app_especialidades_components_especialidades_reg_especialidades_reg_component__WEBPACK_IMPORTED_MODULE_16__["EspecialidadesRegComponent"],
                app_historia_components_historia_reg_historia_reg_component__WEBPACK_IMPORTED_MODULE_17__["HistoriaRegComponent"],
                app_citas_components_citas_reg_citas_reg_component__WEBPACK_IMPORTED_MODULE_19__["CitasRegComponent"],
                app_historia_components_historia_reg_historia_reg_component__WEBPACK_IMPORTED_MODULE_17__["HistoriaRegComponent"],
                app_pacientes_components_pacientes_reg_pacientes_reg_component__WEBPACK_IMPORTED_MODULE_18__["PacientesRegComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__["UpgradeComponent"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "NL5l":
/*!***********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZ3JhZGUvdXBncmFkZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "PO8C":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Material Dashboard PRO Angular</h4>\n                        <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $59</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_services_datos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_services/datos.service */ "ATXi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(datosService) {
        this.datosService = datosService;
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        this.datosService.obtenerDatos().subscribe(function (data) {
            if (data) {
                console.log(data);
                //this.resultado = data;
            }
        });
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Bar"]('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: app_services_datos_service__WEBPACK_IMPORTED_MODULE_4__["DatosService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_datos_service__WEBPACK_IMPORTED_MODULE_4__["DatosService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "QvN5":
/*!****************************************************************************!*\
  !*** ./src/app/doctores/components/doctores-reg/doctores-reg.component.ts ***!
  \****************************************************************************/
/*! exports provided: DoctoresRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctoresRegComponent", function() { return DoctoresRegComponent; });
/* harmony import */ var _raw_loader_doctores_reg_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./doctores-reg.component.html */ "9Sjr");
/* harmony import */ var _doctores_reg_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctores-reg.component.css */ "6TAj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_model_especialidad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_model/especialidad */ "VcF1");
/* harmony import */ var app_services_especialidad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_services/especialidad.service */ "T1lJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_services/doctor.service */ "595m");
/* harmony import */ var app_model_doctor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/_model/doctor */ "fCvf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DoctoresRegComponent = /** @class */ (function () {
    function DoctoresRegComponent(route, router, especialidadesService, doctoresService) {
        this.route = route;
        this.router = router;
        this.especialidadesService = especialidadesService;
        this.doctoresService = doctoresService;
        this.isNew = true;
        this.especialidadSel = new app_model_especialidad__WEBPACK_IMPORTED_MODULE_3__["Especialidad"]();
        this.doctor = new app_model_doctor__WEBPACK_IMPORTED_MODULE_7__["Doctor"]();
    }
    DoctoresRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            console.log("params", params);
            _this.idDoctor = params['page'].split("_")[0] || 0;
            setTimeout(function () {
                if (_this.idDoctor != 0) {
                    _this.doctoresService.obtener(_this.idDoctor).subscribe(function (data) {
                        //console.log(data);
                        _this.doctor = data;
                        _this.especialidadSel = _this.doctor.especialidad;
                    });
                }
            }, 500);
            console.log("parametro obtenido", _this.idDoctor);
        });
        this.especialidadesService.listar().subscribe(function (data) {
            if (data) {
                _this.especialidades = data;
            }
        });
    };
    DoctoresRegComponent.prototype.ngAfterViewInit = function () {
        if (this.idDoctor != 0)
            this.isNew = false;
    };
    DoctoresRegComponent.prototype.onChangeSelect = function (newObj) {
        var selectedObj = JSON.parse(newObj);
        //this.isChoosing = true;
        this.especialidadSel = selectedObj;
        // this.initSubSeccionSelect();
        this.doctor.especialidad = this.especialidadSel;
        console.log(this.doctor);
    };
    DoctoresRegComponent.prototype.save = function () {
        this.prepareToSave();
        this.previousState();
    };
    DoctoresRegComponent.prototype.previousState = function () {
        //window.history.back();
        this.router.navigate(['/doctores']);
    };
    DoctoresRegComponent.prototype.prepareToSave = function () {
        var _this = this;
        if (this.isNew) {
            this.doctoresService.create(this.doctor)
                .subscribe(function (data) {
                console.log("Entro al Success Create");
                if (data) {
                    _this.onSaveSuccess(data);
                }
            }, function (error) {
                console.log("Error en Grabación", JSON.parse(error._body));
                alert(JSON.parse(error._body).message);
            });
        }
        else {
            this.doctoresService.update(this.doctor)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
        }
        //}
    };
    DoctoresRegComponent.prototype.onSaveSuccess = function (result) {
        // this.$sessionStorage.store('currentSeccionSel', this.seccionSel );
        // this.$sessionStorage.store('currentSubSeccionSel', this.subseccionSel );
        //this.$sessionStorage.store('currentTemaSaved', result );
        this.previousState();
        console.log("OK", result);
    };
    DoctoresRegComponent.prototype.onSaveError = function (error) {
        console.log("Error", error);
        //this.onError(error);
    };
    DoctoresRegComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_services_especialidad_service__WEBPACK_IMPORTED_MODULE_4__["EspecialidadService"] },
        { type: app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"] }
    ]; };
    DoctoresRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-doctores-reg',
            template: _raw_loader_doctores_reg_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_doctores_reg_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_services_especialidad_service__WEBPACK_IMPORTED_MODULE_4__["EspecialidadService"], app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"]])
    ], DoctoresRegComponent);
    return DoctoresRegComponent;
}());



/***/ }),

/***/ "RNHK":
/*!********************************************************************************!*\
  !*** ./src/app/pacientes/components/pacientes-reg/pacientes-reg.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhY2llbnRlcy9jb21wb25lbnRzL3BhY2llbnRlcy1yZWcvcGFjaWVudGVzLXJlZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "RU0v":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Usuario</h4>\n                      <p class=\"card-category\">Datos del Usuario en Sesión</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Usuario (disabled)\" disabled [(ngModel)]=\"usuario.usuario\" name=\"usuario\" >\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-3\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Perfil Asignado\" [(ngModel)]=\"usuario.perfil\" name=\"perfil\">\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\" *ngIf=\"usuario.paciente\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Correo Electrónico\" [(ngModel)]=\"usuario.paciente.correo\" name=\"correo\">\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-12\" *ngIf=\"usuario.paciente\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Nombre Completo\" [(ngModel)]=\"usuario.paciente.nomCompleto\" name=\"pacNomCompleto\">\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-12\" *ngIf=\"usuario.doctor\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Nombre Doctor\" [(ngModel)]=\"usuario.doctor.nomCompleto \" name=\"docNomCompleto\">\n                                  </mat-form-field>\n                              </div>                              \n                              <div class=\"col-md-12\" *ngIf=\"usuario.doctor\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email Doctor\" [(ngModel)]=\"usuario.doctor.email \" name=\"email\">\n                                  </mat-form-field>\n                              </div>                              \n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Rg5v":
/*!*****************************************************************************!*\
  !*** ./src/app/historia/components/historia-reg/historia-reg.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcmlhL2NvbXBvbmVudHMvaGlzdG9yaWEtcmVnL2hpc3RvcmlhLXJlZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Sc8U":
/*!************************************!*\
  !*** ./src/app/_model/historia.ts ***!
  \************************************/
/*! exports provided: Historia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Historia", function() { return Historia; });
var Historia = /** @class */ (function () {
    function Historia() {
    }
    return Historia;
}());



/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VcF1":
/*!****************************************!*\
  !*** ./src/app/_model/especialidad.ts ***!
  \****************************************/
/*! exports provided: Especialidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Especialidad", function() { return Especialidad; });
var Especialidad = /** @class */ (function () {
    function Especialidad() {
    }
    return Especialidad;
}());



/***/ }),

/***/ "XeLt":
/*!***********************************************************************************************!*\
  !*** ./src/app/especialidades/components/especialidades-reg/especialidades-reg.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzcGVjaWFsaWRhZGVzL2NvbXBvbmVudHMvZXNwZWNpYWxpZGFkZXMtcmVnL2VzcGVjaWFsaWRhZGVzLXJlZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Zfkz":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upgrade.component.html */ "PO8C");
/* harmony import */ var _upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade.component.css */ "NL5l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.ctorParameters = function () { return []; };
    UpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upgrade',
            template: _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "c2KY":
/*!****************************************************************************!*\
  !*** ./src/app/historia/components/historia-reg/historia-reg.component.ts ***!
  \****************************************************************************/
/*! exports provided: HistoriaRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaRegComponent", function() { return HistoriaRegComponent; });
/* harmony import */ var _raw_loader_historia_reg_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./historia-reg.component.html */ "Ij4w");
/* harmony import */ var _historia_reg_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historia-reg.component.css */ "Rg5v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_model_paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_model/paciente */ "dor3");
/* harmony import */ var app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_services/paciente.service */ "gbOS");
/* harmony import */ var app_services_historia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/_services/historia.service */ "zGAM");
/* harmony import */ var app_model_historia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_model/historia */ "Sc8U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HistoriaRegComponent = /** @class */ (function () {
    function HistoriaRegComponent(route, router, pacienteService, historiaService) {
        this.route = route;
        this.router = router;
        this.pacienteService = pacienteService;
        this.historiaService = historiaService;
        this.pacienteSel = new app_model_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"]();
        this.pacientes = [];
        this.historia = new app_model_historia__WEBPACK_IMPORTED_MODULE_6__["Historia"]();
        this.isNew = true;
    }
    HistoriaRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            console.log("params", params);
            _this.idHistoria = params['page'].split("_")[0] || 0;
            _this.pacienteService.listar().subscribe(function (data) {
                if (data) {
                    console.log(data);
                    _this.pacientes = data;
                    _this.pacienteSel = _this.pacientes[0];
                }
            });
            setTimeout(function () {
                if (_this.idHistoria != 0) {
                    _this.historiaService.obtener(_this.idHistoria).subscribe(function (data) {
                        _this.historia = data;
                    });
                }
            }, 500);
            console.log("parametro obtenido", _this.idHistoria);
        });
    };
    HistoriaRegComponent.prototype.ngAfterViewInit = function () {
        if (this.idHistoria != 0)
            this.isNew = false;
    };
    HistoriaRegComponent.prototype.onChangeSelect = function (newObj) {
        var selectedObj = JSON.parse(newObj);
        this.pacienteSel = selectedObj;
        console.log(this.pacienteSel);
    };
    HistoriaRegComponent.prototype.save = function () {
        this.prepareToSave();
        this.previousState();
    };
    HistoriaRegComponent.prototype.previousState = function () {
        this.router.navigate(['/historia']);
    };
    HistoriaRegComponent.prototype.prepareToSave = function () {
        var _this = this;
        if (this.isNew) {
            this.historia.paciente = this.pacienteSel;
            this.historiaService.create(this.historia)
                .subscribe(function (data) {
                console.log("Entro al Success Create");
                if (data) {
                    _this.onSaveSuccess(data);
                }
            }, function (error) {
                console.log("Error en Grabación", JSON.parse(error._body));
                alert(JSON.parse(error._body).message);
            });
        }
        else {
            this.historiaService.update(this.historia)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
        }
    };
    HistoriaRegComponent.prototype.onSaveSuccess = function (result) {
        this.previousState();
        console.log("OK", result);
    };
    HistoriaRegComponent.prototype.onSaveError = function (error) {
        console.log("Error", error);
        //this.onError(error);
    };
    HistoriaRegComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__["PacienteService"] },
        { type: app_services_historia_service__WEBPACK_IMPORTED_MODULE_5__["HistoriaService"] }
    ]; };
    HistoriaRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-historia-reg',
            template: _raw_loader_historia_reg_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_historia_reg_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__["PacienteService"], app_services_historia_service__WEBPACK_IMPORTED_MODULE_5__["HistoriaService"]])
    ], HistoriaRegComponent);
    return HistoriaRegComponent;
}());



/***/ }),

/***/ "fCvf":
/*!**********************************!*\
  !*** ./src/app/_model/doctor.ts ***!
  \**********************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
var Doctor = /** @class */ (function () {
    function Doctor() {
    }
    return Doctor;
}());



/***/ }),

/***/ "hSyq":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/citas/components/citas-reg/citas-reg.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Registro de Cita</h4>\n                            <p class=\"card-category\">Información del registro de Cita</p>\n                        </div>\n                        <div class=\"card-body\">\n                            <form name=\"editForm\" role=\"form\" #editForm=\"ngForm\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        <mat-form-field class=\"example-full-width\">\n                                          <input matInput placeholder=\"ID\" [(ngModel)]=\"cita.id\" name=\"id\" disabled>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput [matDatepicker]=\"fecCita\" placeholder=\"Fecha de Cita\" [(ngModel)]=\"cita.fecCita\" name=\"fecCita\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"fecCita\"></mat-datepicker-toggle>\n                                            <mat-datepicker #fecCita></mat-datepicker>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"Hora de Cita\" [(ngModel)]=\"cita.horCita\" name=\"horCita\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <mat-select name=\"pacienteSel\" [ngModel]=\"pacienteSel | json\" (ngModelChange)=\"onChangeSelectPac($event)\" placeholder=\"Paciente\">\n                                                <mat-option *ngFor=\"let item of pacientes\" [value]=\"item | json\" >\n                                                {{ item.nomCompleto}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <mat-select name=\"doctorSel\" [ngModel]=\"doctorSel | json\" (ngModelChange)=\"onChangeSelectDoc($event)\" placeholder=\"Doctor\">\n                                                <mat-option *ngFor=\"let item of doctores\" [value]=\"item | json\" >\n                                                {{ item.nomCompleto}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <mat-form-field class=\"example-full-width\">\n                                          <input matInput placeholder=\"Monto S/.\" [(ngModel)]=\"cita.mtoCita\" name=\"mtoCita\">\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                <!-- <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                                <div class=\"clearfix\"></div> -->\n                                <button mat-raised-button type=\"submit\" [disabled]=\"editForm.form.invalid\" class=\"btn btn-danger pull-right\" (click)=\"save()\" style=\"float:right\">\n                                    <span class=\"fa fa-save\"></span>&nbsp;&nbsp;<span>Guardar</span>\n                                </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n      ");

/***/ }),

/***/ "iadO":
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js ***!
  \****************************************************************************/
/*! exports provided: DateRange, DefaultMatCalendarRangeStrategy, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATE_RANGE_SELECTION_STRATEGY, MAT_RANGE_DATE_SELECTION_MODEL_FACTORY, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY, MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, MatCalendar, MatCalendarBody, MatCalendarCell, MatCalendarHeader, MatDateRangeInput, MatDateRangePicker, MatDateSelectionModel, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatEndDate, MatMonthView, MatMultiYearView, MatRangeDateSelectionModel, MatSingleDateSelectionModel, MatStartDate, MatYearView, matDatepickerAnimations, yearsPerPage, yearsPerRow, ɵangular_material_src_material_datepicker_datepicker_a, ɵangular_material_src_material_datepicker_datepicker_b, ɵangular_material_src_material_datepicker_datepicker_c, ɵangular_material_src_material_datepicker_datepicker_d, ɵangular_material_src_material_datepicker_datepicker_e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRange", function() { return DateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMatCalendarRangeStrategy", function() { return DefaultMatCalendarRangeStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function() { return MAT_DATEPICKER_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function() { return MAT_DATEPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_RANGE_SELECTION_STRATEGY", function() { return MAT_DATE_RANGE_SELECTION_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_FACTORY", function() { return MAT_RANGE_DATE_SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER", function() { return MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY", function() { return MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER", function() { return MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendar", function() { return MatCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function() { return MatCalendarBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function() { return MatCalendarCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function() { return MatCalendarHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDateRangeInput", function() { return MatDateRangeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDateRangePicker", function() { return MatDateRangePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDateSelectionModel", function() { return MatDateSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepicker", function() { return MatDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function() { return MatDatepickerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function() { return MatDatepickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function() { return MatDatepickerInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function() { return MatDatepickerIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function() { return MatDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function() { return MatDatepickerToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function() { return MatDatepickerToggleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatEndDate", function() { return MatEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMonthView", function() { return MatMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function() { return MatMultiYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRangeDateSelectionModel", function() { return MatRangeDateSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSingleDateSelectionModel", function() { return MatSingleDateSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStartDate", function() { return MatStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatYearView", function() { return MatYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function() { return matDatepickerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerPage", function() { return yearsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerRow", function() { return yearsPerRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_a", function() { return MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_b", function() { return MAT_CALENDAR_RANGE_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_c", function() { return MatDatepickerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_d", function() { return MatDatepickerInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_e", function() { return MAT_DATE_RANGE_INPUT_PARENT; });
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JX7q");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");


























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */












var _c0 = ["mat-calendar-body", ""];

function MatCalendarBody_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
  }
}

function MatCalendarBody_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
  }
}

function MatCalendarBody_tr_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      var item_r6 = ctx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r8._cellClicked(item_r6, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var colIndex_r7 = ctx.index;
    var rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6.compareValue))("mat-calendar-body-comparison-identical", ctx_r5._isComparisonIdentical(item_r6.compareValue))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
  }
}

function MatCalendarBody_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 4, 46, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r2 = ctx.$implicit;
    var rowIndex_r3 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", row_r2);
  }
}

function MatMonthView_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](day_r1.narrow);
  }
}

var _c1 = ["*"];

function MatCalendar_ng_template_0_Template(rf, ctx) {}

function MatCalendar_mat_month_view_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-month-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r4.activeDate = $event;
    })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r6._dateSelected($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd);
  }
}

function MatCalendar_mat_year_view_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-year-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r7.activeDate = $event;
    })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r9._monthSelectedInYearView($event);
    })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r10._goToDateInView($event, "month");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
  }
}

function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-multi-year-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r11.activeDate = $event;
    })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r13._yearSelectedInMultiYearView($event);
    })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r14._goToDateInView($event, "year");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
  }
}

var _c2 = ["button"];

function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

var _c3 = [[["", "matDatepickerToggleIcon", ""]]];
var _c4 = ["[matDatepickerToggleIcon]"];
var _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
var _c6 = ["input[matStartDate]", "input[matEndDate]"];

function createMissingDateImplError(provider) {
  return Error("MatDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " + "custom implementation.");
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Datepicker data that requires internationalization. */


var MatDatepickerIntl = /*#__PURE__*/function () {
  function MatDatepickerIntl() {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerIntl);

    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
    /** A label for the calendar popup (used by screen readers). */

    this.calendarLabel = 'Calendar';
    /** A label for the button used to open the calendar popup (used by screen readers). */

    this.openCalendarLabel = 'Open calendar';
    /** A label for the previous month button (used by screen readers). */

    this.prevMonthLabel = 'Previous month';
    /** A label for the next month button (used by screen readers). */

    this.nextMonthLabel = 'Next month';
    /** A label for the previous year button (used by screen readers). */

    this.prevYearLabel = 'Previous year';
    /** A label for the next year button (used by screen readers). */

    this.nextYearLabel = 'Next year';
    /** A label for the previous multi-year button (used by screen readers). */

    this.prevMultiYearLabel = 'Previous 20 years';
    /** A label for the next multi-year button (used by screen readers). */

    this.nextMultiYearLabel = 'Next 20 years';
    /** A label for the 'switch to month view' button (used by screen readers). */

    this.switchToMonthViewLabel = 'Choose date';
    /** A label for the 'switch to year view' button (used by screen readers). */

    this.switchToMultiYearViewLabel = 'Choose month and year';
  }
  /** Formats a range of years. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDatepickerIntl, [{
    key: "formatYearRange",
    value: function formatYearRange(start, end) {
      return "".concat(start, " \u2013 ").concat(end);
    }
  }]);

  return MatDatepickerIntl;
}();

MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) {
  return new (t || MatDatepickerIntl)();
};

MatDatepickerIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"])({
  factory: function MatDatepickerIntl_Factory() {
    return new MatDatepickerIntl();
  },
  token: MatDatepickerIntl,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */


var MatCalendarCell = function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
  var cssClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var compareValue = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : value;
  var rawValue = arguments.length > 6 ? arguments[6] : undefined;

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatCalendarCell);

  this.value = value;
  this.displayValue = displayValue;
  this.ariaLabel = ariaLabel;
  this.enabled = enabled;
  this.cssClasses = cssClasses;
  this.compareValue = compareValue;
  this.rawValue = rawValue;
};
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */


var MatCalendarBody = /*#__PURE__*/function () {
  function MatCalendarBody(_elementRef, _ngZone) {
    var _this = this;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatCalendarBody);

    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    /** The number of columns in the table. */

    this.numCols = 7;
    /** The cell number of the active cell in the table. */

    this.activeCell = 0;
    /** Whether a range is being selected. */

    this.isRange = false;
    /**
     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
     * maintained even as the table resizes.
     */

    this.cellAspectRatio = 1;
    /** Start of the preview range. */

    this.previewStart = null;
    /** End of the preview range. */

    this.previewEnd = null;
    /** Emits when a new value is selected. */

    this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when the preview has changed as a result of a user action. */

    this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /**
     * Event handler for when the user enters an element
     * inside the calendar body (e.g. by hovering in or focus).
     */

    this._enterHandler = function (event) {
      if (_this._skipNextFocus && event.type === 'focus') {
        _this._skipNextFocus = false;
        return;
      } // We only need to hit the zone when we're selecting a range.


      if (event.target && _this.isRange) {
        var cell = _this._getCellFromElement(event.target);

        if (cell) {
          _this._ngZone.run(function () {
            return _this.previewChange.emit({
              value: cell.enabled ? cell : null,
              event: event
            });
          });
        }
      }
    };
    /**
     * Event handler for when the user's pointer leaves an element
     * inside the calendar body (e.g. by hovering out or blurring).
     */


    this._leaveHandler = function (event) {
      // We only need to hit the zone when we're selecting a range.
      if (_this.previewEnd !== null && _this.isRange) {
        // Only reset the preview end value when leaving cells. This looks better, because
        // we have a gap between the cells and the rows and we don't want to remove the
        // range just for it to show up again when the user moves a few pixels to the side.
        if (event.target && isTableCell(event.target)) {
          _this._ngZone.run(function () {
            return _this.previewChange.emit({
              value: null,
              event: event
            });
          });
        }
      }
    };

    _ngZone.runOutsideAngular(function () {
      var element = _elementRef.nativeElement;
      element.addEventListener('mouseenter', _this._enterHandler, true);
      element.addEventListener('focus', _this._enterHandler, true);
      element.addEventListener('mouseleave', _this._leaveHandler, true);
      element.addEventListener('blur', _this._leaveHandler, true);
    });
  }
  /** Called when a cell is clicked. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatCalendarBody, [{
    key: "_cellClicked",
    value: function _cellClicked(cell, event) {
      if (cell.enabled) {
        this.selectedValueChange.emit({
          value: cell.value,
          event: event
        });
      }
    }
    /** Returns whether a cell should be marked as selected. */

  }, {
    key: "_isSelected",
    value: function _isSelected(value) {
      return this.startValue === value || this.endValue === value;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var columnChanges = changes['numCols'];
      var rows = this.rows,
          numCols = this.numCols;

      if (changes['rows'] || columnChanges) {
        this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
      }

      if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
        this._cellPadding = "".concat(50 * this.cellAspectRatio / numCols, "%");
      }

      if (columnChanges || !this._cellWidth) {
        this._cellWidth = "".concat(100 / numCols, "%");
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var element = this._elementRef.nativeElement;
      element.removeEventListener('mouseenter', this._enterHandler, true);
      element.removeEventListener('focus', this._enterHandler, true);
      element.removeEventListener('mouseleave', this._leaveHandler, true);
      element.removeEventListener('blur', this._leaveHandler, true);
    }
    /** Returns whether a cell is active. */

  }, {
    key: "_isActiveCell",
    value: function _isActiveCell(rowIndex, colIndex) {
      var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

      if (rowIndex) {
        cellNumber -= this._firstRowOffset;
      }

      return cellNumber == this.activeCell;
    }
    /** Focuses the active cell after the microtask queue is empty. */

  }, {
    key: "_focusActiveCell",
    value: function _focusActiveCell() {
      var _this2 = this;

      var movePreview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._ngZone.runOutsideAngular(function () {
        _this2._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["take"])(1)).subscribe(function () {
          var activeCell = _this2._elementRef.nativeElement.querySelector('.mat-calendar-body-active');

          if (activeCell) {
            if (!movePreview) {
              _this2._skipNextFocus = true;
            }

            activeCell.focus();
          }
        });
      });
    }
    /** Gets whether a value is the start of the main range. */

  }, {
    key: "_isRangeStart",
    value: function _isRangeStart(value) {
      return isStart(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is the end of the main range. */

  }, {
    key: "_isRangeEnd",
    value: function _isRangeEnd(value) {
      return isEnd(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is within the currently-selected range. */

  }, {
    key: "_isInRange",
    value: function _isInRange(value) {
      return isInRange(value, this.startValue, this.endValue, this.isRange);
    }
    /** Gets whether a value is the start of the comparison range. */

  }, {
    key: "_isComparisonStart",
    value: function _isComparisonStart(value) {
      return isStart(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Whether the cell is a start bridge cell between the main and comparison ranges. */

  }, {
    key: "_isComparisonBridgeStart",
    value: function _isComparisonBridgeStart(value, rowIndex, colIndex) {
      if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
        return false;
      }

      var previousCell = this.rows[rowIndex][colIndex - 1];

      if (!previousCell) {
        var previousRow = this.rows[rowIndex - 1];
        previousCell = previousRow && previousRow[previousRow.length - 1];
      }

      return previousCell && !this._isRangeEnd(previousCell.compareValue);
    }
    /** Whether the cell is an end bridge cell between the main and comparison ranges. */

  }, {
    key: "_isComparisonBridgeEnd",
    value: function _isComparisonBridgeEnd(value, rowIndex, colIndex) {
      if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
        return false;
      }

      var nextCell = this.rows[rowIndex][colIndex + 1];

      if (!nextCell) {
        var nextRow = this.rows[rowIndex + 1];
        nextCell = nextRow && nextRow[0];
      }

      return nextCell && !this._isRangeStart(nextCell.compareValue);
    }
    /** Gets whether a value is the end of the comparison range. */

  }, {
    key: "_isComparisonEnd",
    value: function _isComparisonEnd(value) {
      return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Gets whether a value is within the current comparison range. */

  }, {
    key: "_isInComparisonRange",
    value: function _isInComparisonRange(value) {
      return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }
    /**
     * Gets whether a value is the same as the start and end of the comparison range.
     * For context, the functions that we use to determine whether something is the start/end of
     * a range don't allow for the start and end to be on the same day, because we'd have to use
     * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
     * the regular range, because when it happens, the selected styles take over and still show where
     * the range would've been, however we don't have these selected styles for a comparison range.
     * This function is used to apply a class that serves the same purpose as the one for selected
     * dates, but it only applies in the context of a comparison range.
     */

  }, {
    key: "_isComparisonIdentical",
    value: function _isComparisonIdentical(value) {
      // Note that we don't need to null check the start/end
      // here, because the `value` will always be defined.
      return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
    }
    /** Gets whether a value is the start of the preview range. */

  }, {
    key: "_isPreviewStart",
    value: function _isPreviewStart(value) {
      return isStart(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is the end of the preview range. */

  }, {
    key: "_isPreviewEnd",
    value: function _isPreviewEnd(value) {
      return isEnd(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is inside the preview range. */

  }, {
    key: "_isInPreview",
    value: function _isInPreview(value) {
      return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }
    /** Finds the MatCalendarCell that corresponds to a DOM node. */

  }, {
    key: "_getCellFromElement",
    value: function _getCellFromElement(element) {
      var cell;

      if (isTableCell(element)) {
        cell = element;
      } else if (isTableCell(element.parentNode)) {
        cell = element.parentNode;
      }

      if (cell) {
        var row = cell.getAttribute('data-mat-row');
        var col = cell.getAttribute('data-mat-col');

        if (row && col) {
          return this.rows[parseInt(row)][parseInt(col)];
        }
      }

      return null;
    }
  }]);

  return MatCalendarBody;
}();

MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) {
  return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]));
};

MatCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatCalendarBody,
  selectors: [["", "mat-calendar-body", ""]],
  hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"],
  inputs: {
    numCols: "numCols",
    activeCell: "activeCell",
    isRange: "isRange",
    cellAspectRatio: "cellAspectRatio",
    previewStart: "previewStart",
    previewEnd: "previewEnd",
    label: "label",
    rows: "rows",
    todayValue: "todayValue",
    startValue: "startValue",
    endValue: "endValue",
    labelMinRequiredCells: "labelMinRequiredCells",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd"
  },
  outputs: {
    selectedValueChange: "selectedValueChange",
    previewChange: "previewChange"
  },
  exportAs: ["matCalendarBody"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
  attrs: _c0,
  decls: 2,
  vars: 2,
  consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]],
  template: function MatCalendarBody_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.rows);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
  styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatCalendarBody.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }];
};

MatCalendarBody.propDecorators = {
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  rows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  todayValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  startValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  endValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  labelMinRequiredCells: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  numCols: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  activeCell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  isRange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  cellAspectRatio: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  previewStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  previewEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedValueChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  previewChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatCalendarBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: '[mat-calendar-body]',
      template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [attr.data-mat-row]=\"rowIndex\"\n      [attr.data-mat-col]=\"colIndex\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"_isSelected(item.compareValue)\"\n      (click)=\"_cellClicked(item, $event)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n        [class.mat-calendar-body-selected]=\"_isSelected(item.compareValue)\"\n        [class.mat-calendar-body-comparison-identical]=\"_isComparisonIdentical(item.compareValue)\"\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n        {{item.displayValue}}\n      </div>\n      <div class=\"mat-calendar-body-cell-preview\"></div>\n  </td>\n</tr>\n",
      host: {
        'class': 'mat-calendar-body',
        'role': 'grid',
        'aria-readonly': 'true'
      },
      exportAs: 'matCalendarBody',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }];
  }, {
    numCols: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    activeCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    isRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    cellAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    previewStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    previewEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selectedValueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    previewChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    todayValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    startValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    endValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    labelMinRequiredCells: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/** Checks whether a node is a table cell element. */


function isTableCell(node) {
  return node.nodeName === 'TD';
}
/** Checks whether a value is the start of a range. */


function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */


function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */


function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** A class representing a range of dates. */


var DateRange = function DateRange(
/** The start date of the range. */
start,
/** The end date of the range. */
end) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, DateRange);

  this.start = start;
  this.end = end;
};
/** A selection model containing a date selection. */


var MatDateSelectionModel = /*#__PURE__*/function () {
  function MatDateSelectionModel(
  /** The current selection. */
  selection, _adapter) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDateSelectionModel);

    this.selection = selection;
    this._adapter = _adapter;
    this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
    /** Emits when the selection has changed. */

    this.selectionChanged = this._selectionChanged;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDateSelectionModel, [{
    key: "updateSelection",
    value: function updateSelection(value, source) {
      this.selection = value;

      this._selectionChanged.next({
        selection: value,
        source: source
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._selectionChanged.complete();
    }
  }, {
    key: "_isValidDateInstance",
    value: function _isValidDateInstance(date) {
      return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
    }
  }]);

  return MatDateSelectionModel;
}();

MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) {
  return new (t || MatDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]));
};

MatDateSelectionModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatDateSelectionModel
});

MatDateSelectionModel.ctorParameters = function () {
  return [{
    type: undefined
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: undefined
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
    }];
  }, null);
})();
/**  A selection model that contains a single date. */


var MatSingleDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatSingleDateSelectionModel, _MatDateSelectionMode);

  var _super = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatSingleDateSelectionModel);

  function MatSingleDateSelectionModel(adapter) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatSingleDateSelectionModel);

    return _super.call(this, null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatSingleDateSelectionModel, [{
    key: "add",
    value: function add(date) {
      Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSingleDateSelectionModel.prototype), "updateSelection", this).call(this, date, this);
    }
    /** Checks whether the current selection is valid. */

  }, {
    key: "isValid",
    value: function isValid() {
      return this.selection != null && this._isValidDateInstance(this.selection);
    }
    /**
     * Checks whether the current selection is complete. In the case of a single date selection, this
     * is true if the current selection is not null.
     */

  }, {
    key: "isComplete",
    value: function isComplete() {
      return this.selection != null;
    }
  }]);

  return MatSingleDateSelectionModel;
}(MatDateSelectionModel);

MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) {
  return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]));
};

MatSingleDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: MatSingleDateSelectionModel,
  factory: MatSingleDateSelectionModel.ɵfac
});

MatSingleDateSelectionModel.ctorParameters = function () {
  return [{
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injectable"]
  }], function () {
    return [{
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
    }];
  }, null);
})();
/**  A selection model that contains a date range. */


var MatRangeDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode2) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatRangeDateSelectionModel, _MatDateSelectionMode2);

  var _super2 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatRangeDateSelectionModel);

  function MatRangeDateSelectionModel(adapter) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatRangeDateSelectionModel);

    return _super2.call(this, new DateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatRangeDateSelectionModel, [{
    key: "add",
    value: function add(date) {
      var _this$selection = this.selection,
          start = _this$selection.start,
          end = _this$selection.end;

      if (start == null) {
        start = date;
      } else if (end == null) {
        end = date;
      } else {
        start = date;
        end = null;
      }

      Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatRangeDateSelectionModel.prototype), "updateSelection", this).call(this, new DateRange(start, end), this);
    }
    /** Checks whether the current selection is valid. */

  }, {
    key: "isValid",
    value: function isValid() {
      var _this$selection2 = this.selection,
          start = _this$selection2.start,
          end = _this$selection2.end; // Empty ranges are valid.

      if (start == null && end == null) {
        return true;
      } // Complete ranges are only valid if both dates are valid and the start is before the end.


      if (start != null && end != null) {
        return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
      } // Partial ranges are valid if the start/end is valid.


      return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
    }
    /**
     * Checks whether the current selection is complete. In the case of a date range selection, this
     * is true if the current selection has a non-null `start` and `end`.
     */

  }, {
    key: "isComplete",
    value: function isComplete() {
      return this.selection.start != null && this.selection.end != null;
    }
  }]);

  return MatRangeDateSelectionModel;
}(MatDateSelectionModel);

MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) {
  return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]));
};

MatRangeDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: MatRangeDateSelectionModel,
  factory: MatRangeDateSelectionModel.ɵfac
});

MatRangeDateSelectionModel.ctorParameters = function () {
  return [{
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injectable"]
  }], function () {
    return [{
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
    }];
  }, null);
})();
/** @docs-private */


function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
/** Used to provide a single selection model to a component. */


var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_12__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
/** @docs-private */

function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
/** Used to provide a range selection model to a component. */


var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_12__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token used to customize the date range selection behavior. */

var MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */

var DefaultMatCalendarRangeStrategy = /*#__PURE__*/function () {
  function DefaultMatCalendarRangeStrategy(_dateAdapter) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, DefaultMatCalendarRangeStrategy);

    this._dateAdapter = _dateAdapter;
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(DefaultMatCalendarRangeStrategy, [{
    key: "selectionFinished",
    value: function selectionFinished(date, currentRange) {
      var start = currentRange.start,
          end = currentRange.end;

      if (start == null) {
        start = date;
      } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
        end = date;
      } else {
        start = date;
        end = null;
      }

      return new DateRange(start, end);
    }
  }, {
    key: "createPreview",
    value: function createPreview(activeDate, currentRange) {
      var start = null;
      var end = null;

      if (currentRange.start && !currentRange.end && activeDate) {
        start = currentRange.start;
        end = activeDate;
      }

      return new DateRange(start, end);
    }
  }]);

  return DefaultMatCalendarRangeStrategy;
}();

DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) {
  return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]));
};

DefaultMatCalendarRangeStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: DefaultMatCalendarRangeStrategy,
  factory: DefaultMatCalendarRangeStrategy.ɵfac
});

DefaultMatCalendarRangeStrategy.ctorParameters = function () {
  return [{
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injectable"]
  }], function () {
    return [{
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
    }];
  }, null);
})();
/** @docs-private */


function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */


var MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_12__["SkipSelf"](), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */

var MatMonthView = /*#__PURE__*/function () {
  function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatMonthView);

    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rangeStrategy = _rangeStrategy;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"].EMPTY;
    /** Emits when a new date is selected. */

    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when any date is selected. */

    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when any date is activated. */

    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }

      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }

    this._activeDate = this._dateAdapter.today();
  }
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatMonthView, [{
    key: "activeDate",
    get: function get() {
      return this._activeDate;
    },
    set: function set(value) {
      var oldActiveDate = this._activeDate;

      var validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

      if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
        this._init();
      }
    }
    /** The currently selected date. */

  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }

      this._setRanges(this._selected);
    }
    /** The minimum selectable date. */

  }, {
    key: "minDate",
    get: function get() {
      return this._minDate;
    },
    set: function set(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */

  }, {
    key: "maxDate",
    get: function get() {
      return this._maxDate;
    },
    set: function set(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this3 = this;

      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(null)).subscribe(function () {
        return _this3._init();
      });
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];

      if (comparisonChange && !comparisonChange.firstChange) {
        this._setRanges(this.selected);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new date is selected. */

  }, {
    key: "_dateSelected",
    value: function _dateSelected(event) {
      var date = event.value;

      var selectedYear = this._dateAdapter.getYear(this.activeDate);

      var selectedMonth = this._dateAdapter.getMonth(this.activeDate);

      var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);

      var rangeStartDate;
      var rangeEndDate;

      if (this._selected instanceof DateRange) {
        rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
        rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
      } else {
        rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
      }

      if (rangeStartDate !== date || rangeEndDate !== date) {
        this.selectedChange.emit(selectedDate);
      }

      this._userSelection.emit({
        value: selectedDate,
        event: event.event
      });
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */

  }, {
    key: "_handleCalendarBodyKeydown",
    value: function _handleCalendarBodyKeydown(event) {
      // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
      // disabled ones from being selected. This may not be ideal, we should look into whether
      // navigation should skip over disabled dates, and if so, how to implement that efficiently.
      var oldActiveDate = this._activeDate;

      var isRtl = this._isRtl();

      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["LEFT_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["RIGHT_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["UP_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["DOWN_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["HOME"]:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["END"]:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["PAGE_UP"]:
          this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["PAGE_DOWN"]:
          this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["ENTER"]:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["SPACE"]:
          if (!this.dateFilter || this.dateFilter(this._activeDate)) {
            this._dateSelected({
              value: this._dateAdapter.getDate(this._activeDate),
              event: event
            }); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }

          return;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["ESCAPE"]:
          // Abort the current range selection if the user presses escape mid-selection.
          if (this._previewEnd != null) {
            this._previewStart = this._previewEnd = null;
            this.selectedChange.emit(null);

            this._userSelection.emit({
              value: null,
              event: event
            });

            event.preventDefault();
            event.stopPropagation(); // Prevents the overlay from closing.
          }

          return;

        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }

      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }

      this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


      event.preventDefault();
    }
    /** Initializes this month view. */

  }, {
    key: "_init",
    value: function _init() {
      this._setRanges(this.selected);

      this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
      this._monthLabel = this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();

      var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);

      this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

      this._initWeekdays();

      this._createWeekCells();

      this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */

  }, {
    key: "_focusActiveCell",
    value: function _focusActiveCell(movePreview) {
      this._matCalendarBody._focusActiveCell(movePreview);
    }
    /** Called when the user has activated a new cell and the preview needs to be updated. */

  }, {
    key: "_previewChanged",
    value: function _previewChanged(_ref) {
      var event = _ref.event,
          cell = _ref.value;

      if (this._rangeStrategy) {
        // We can assume that this will be a range, because preview
        // events aren't fired for single date selections.
        var _value = cell ? cell.rawValue : null;

        var previewRange = this._rangeStrategy.createPreview(_value, this.selected, event);

        this._previewStart = this._getCellCompareValue(previewRange.start);
        this._previewEnd = this._getCellCompareValue(previewRange.end); // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
        // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
        // when navigating one month back using the keyboard which will cause this handler
        // to throw a "changed after checked" error when updating the preview state.

        this._changeDetectorRef.detectChanges();
      }
    }
    /** Initializes the weekdays. */

  }, {
    key: "_initWeekdays",
    value: function _initWeekdays() {
      var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();

      var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');

      var longWeekdays = this._dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.


      var weekdays = longWeekdays.map(function (long, i) {
        return {
          long: long,
          narrow: narrowWeekdays[i]
        };
      });
      this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /** Creates MatCalendarCells for the dates in this month. */

  }, {
    key: "_createWeekCells",
    value: function _createWeekCells() {
      var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);

      var dateNames = this._dateAdapter.getDateNames();

      this._weeks = [[]];

      for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
        if (cell == DAYS_PER_WEEK) {
          this._weeks.push([]);

          cell = 0;
        }

        var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);

        var enabled = this._shouldEnableDate(date);

        var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);

        var cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;

        this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
      }
    }
    /** Date filter for the month */

  }, {
    key: "_shouldEnableDate",
    value: function _shouldEnableDate(date) {
      return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */

  }, {
    key: "_getDateInCurrentMonth",
    value: function _getDateInCurrentMonth(date) {
      return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
    }
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */

  }, {
    key: "_hasSameMonthAndYear",
    value: function _hasSameMonthAndYear(d1, d2) {
      return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /** Gets the value that will be used to one cell to another. */

  }, {
    key: "_getCellCompareValue",
    value: function _getCellCompareValue(date) {
      if (date) {
        // We use the time since the Unix epoch to compare dates in this view, rather than the
        // cell values, because we need to support ranges that span across multiple months/years.
        var year = this._dateAdapter.getYear(date);

        var month = this._dateAdapter.getMonth(date);

        var day = this._dateAdapter.getDate(date);

        return new Date(year, month, day).getTime();
      }

      return null;
    }
    /** Determines whether the user has the RTL layout direction. */

  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the current range based on a model value. */

  }, {
    key: "_setRanges",
    value: function _setRanges(selectedValue) {
      if (selectedValue instanceof DateRange) {
        this._rangeStart = this._getCellCompareValue(selectedValue.start);
        this._rangeEnd = this._getCellCompareValue(selectedValue.end);
        this._isRange = true;
      } else {
        this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
        this._isRange = false;
      }

      this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
      this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
    }
  }]);

  return MatMonthView;
}();

MatMonthView.ɵfac = function MatMonthView_Factory(t) {
  return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
};

MatMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatMonthView,
  selectors: [["mat-month-view"]],
  viewQuery: function MatMonthView_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](MatCalendarBody, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd"
  },
  outputs: {
    selectedChange: "selectedChange",
    _userSelection: "_userSelection",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matMonthView"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 13,
  consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keydown"], ["scope", "col"]],
  template: function MatMonthView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "thead", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 2, 2, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "tbody", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) {
        return ctx._dateSelected($event);
      })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) {
        return ctx._previewChanged($event);
      })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx._weekdays);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});

MatMonthView.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }];
};

MatMonthView.propDecorators = {
  activeDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _userSelection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  activeDateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _matCalendarBody: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatCalendarBody]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatMonthView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-month-view',
      template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
      exportAs: 'matMonthView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }];
  }, {
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    _userSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatCalendarBody]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var yearsPerPage = 24;
var yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */

var MatMultiYearView = /*#__PURE__*/function () {
  function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatMultiYearView);

    this._changeDetectorRef = _changeDetectorRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"].EMPTY;
    /** Emits when a new year is selected. */

    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits the selected year. This doesn't imply a change on the selected date */

    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when any date is activated. */

    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();

    if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }

    this._activeDate = this._dateAdapter.today();
  }
  /** The date to display in this multi-year view (everything other than the year is ignored). */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatMultiYearView, [{
    key: "activeDate",
    get: function get() {
      return this._activeDate;
    },
    set: function set(value) {
      var oldActiveDate = this._activeDate;

      var validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

      if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
        this._init();
      }
    }
    /** The currently selected date. */

  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }

      this._setSelectedYear(value);
    }
    /** The minimum selectable date. */

  }, {
    key: "minDate",
    get: function get() {
      return this._minDate;
    },
    set: function set(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */

  }, {
    key: "maxDate",
    get: function get() {
      return this._maxDate;
    },
    set: function set(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this4 = this;

      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(null)).subscribe(function () {
        return _this4._init();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Initializes this multi-year view. */

  }, {
    key: "_init",
    value: function _init() {
      var _this5 = this;

      this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today()); // We want a range years such that we maximize the number of
      // enabled dates visible at once. This prevents issues where the minimum year
      // is the last item of a page OR the maximum year is the first item of a page.
      // The offset from the active year to the "slot" for the starting year is the
      // *actual* first rendered year in the multi-year view.

      var activeYear = this._dateAdapter.getYear(this._activeDate);

      var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
      this._years = [];

      for (var i = 0, row = []; i < yearsPerPage; i++) {
        row.push(minYearOfPage + i);

        if (row.length == yearsPerRow) {
          this._years.push(row.map(function (year) {
            return _this5._createCellForYear(year);
          }));

          row = [];
        }
      }

      this._changeDetectorRef.markForCheck();
    }
    /** Handles when a new year is selected. */

  }, {
    key: "_yearSelected",
    value: function _yearSelected(event) {
      var year = event.value;
      this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));

      var month = this._dateAdapter.getMonth(this.activeDate);

      var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));

      this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */

  }, {
    key: "_handleCalendarBodyKeydown",
    value: function _handleCalendarBodyKeydown(event) {
      var oldActiveDate = this._activeDate;

      var isRtl = this._isRtl();

      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["LEFT_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["RIGHT_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["UP_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["DOWN_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["HOME"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["END"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["PAGE_UP"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["PAGE_DOWN"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["ENTER"]:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["SPACE"]:
          this._yearSelected({
            value: this._dateAdapter.getYear(this._activeDate),
            event: event
          });

          break;

        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }

      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }

      this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


      event.preventDefault();
    }
  }, {
    key: "_getActiveCell",
    value: function _getActiveCell() {
      return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }
    /** Focuses the active cell after the microtask queue is empty. */

  }, {
    key: "_focusActiveCell",
    value: function _focusActiveCell() {
      this._matCalendarBody._focusActiveCell();
    }
    /** Creates an MatCalendarCell for the given year. */

  }, {
    key: "_createCellForYear",
    value: function _createCellForYear(year) {
      var date = this._dateAdapter.createDate(year, 0, 1);

      var yearName = this._dateAdapter.getYearName(date);

      var cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
      return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
    }
    /** Whether the given year is enabled. */

  }, {
    key: "_shouldEnableYear",
    value: function _shouldEnableYear(year) {
      // disable if the year is greater than maxDate lower than minDate
      if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
        return false;
      } // enable if it reaches here and there's no filter defined


      if (!this.dateFilter) {
        return true;
      }

      var firstOfYear = this._dateAdapter.createDate(year, 0, 1); // If any date in the year is enabled count the year as enabled.


      for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
        if (this.dateFilter(date)) {
          return true;
        }
      }

      return false;
    }
    /** Determines whether the user has the RTL layout direction. */

  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-highlighted year based on a model value. */

  }, {
    key: "_setSelectedYear",
    value: function _setSelectedYear(value) {
      this._selectedYear = null;

      if (value instanceof DateRange) {
        var displayValue = value.start || value.end;

        if (displayValue) {
          this._selectedYear = this._dateAdapter.getYear(displayValue);
        }
      } else if (value) {
        this._selectedYear = this._dateAdapter.getYear(value);
      }
    }
  }]);

  return MatMultiYearView;
}();

MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) {
  return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"], 8));
};

MatMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatMultiYearView,
  selectors: [["mat-multi-year-view"]],
  viewQuery: function MatMultiYearView_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](MatCalendarBody, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass"
  },
  outputs: {
    selectedChange: "selectedChange",
    yearSelected: "yearSelected",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matMultiYearView"],
  decls: 5,
  vars: 7,
  consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
  template: function MatMultiYearView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "thead", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "tbody", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
        return ctx._yearSelected($event);
      })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
    }
  },
  directives: [MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});

MatMultiYearView.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }];
};

MatMultiYearView.propDecorators = {
  activeDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  yearSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  activeDateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _matCalendarBody: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatCalendarBody]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatMultiYearView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-multi-year-view',
      template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
      exportAs: 'matMultiYearView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }];
  }, {
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatCalendarBody]
    }]
  });
})();

function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  var year1 = dateAdapter.getYear(date1);
  var year2 = dateAdapter.getYear(date2);
  var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */


function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  var activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */


function getStartingYear(dateAdapter, minDate, maxDate) {
  var startingYear = 0;

  if (maxDate) {
    var maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }

  return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */


function euclideanModulo(a, b) {
  return (a % b + b) % b;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */


var MatYearView = /*#__PURE__*/function () {
  function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatYearView);

    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"].EMPTY;
    /** Emits when a new month is selected. */

    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits the selected month. This doesn't imply a change on the selected date */

    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when any date is activated. */

    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }

      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }

    this._activeDate = this._dateAdapter.today();
  }
  /** The date to display in this year view (everything other than the year is ignored). */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatYearView, [{
    key: "activeDate",
    get: function get() {
      return this._activeDate;
    },
    set: function set(value) {
      var oldActiveDate = this._activeDate;

      var validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

      if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
        this._init();
      }
    }
    /** The currently selected date. */

  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }

      this._setSelectedMonth(value);
    }
    /** The minimum selectable date. */

  }, {
    key: "minDate",
    get: function get() {
      return this._minDate;
    },
    set: function set(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */

  }, {
    key: "maxDate",
    get: function get() {
      return this._maxDate;
    },
    set: function set(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this6 = this;

      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(null)).subscribe(function () {
        return _this6._init();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new month is selected. */

  }, {
    key: "_monthSelected",
    value: function _monthSelected(event) {
      var month = event.value;

      var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

      this.monthSelected.emit(normalizedDate);

      var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

      this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */

  }, {
    key: "_handleCalendarBodyKeydown",
    value: function _handleCalendarBodyKeydown(event) {
      // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
      // disabled ones from being selected. This may not be ideal, we should look into whether
      // navigation should skip over disabled dates, and if so, how to implement that efficiently.
      var oldActiveDate = this._activeDate;

      var isRtl = this._isRtl();

      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["LEFT_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["RIGHT_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["UP_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["DOWN_ARROW"]:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["HOME"]:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["END"]:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["PAGE_UP"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["PAGE_DOWN"]:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["ENTER"]:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["SPACE"]:
          this._monthSelected({
            value: this._dateAdapter.getMonth(this._activeDate),
            event: event
          });

          break;

        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }

      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }

      this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


      event.preventDefault();
    }
    /** Initializes this year view. */

  }, {
    key: "_init",
    value: function _init() {
      var _this7 = this;

      this._setSelectedMonth(this.selected);

      this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
      this._yearLabel = this._dateAdapter.getYearName(this.activeDate);

      var monthNames = this._dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.


      this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
        return row.map(function (month) {
          return _this7._createCellForMonth(month, monthNames[month]);
        });
      });

      this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */

  }, {
    key: "_focusActiveCell",
    value: function _focusActiveCell() {
      this._matCalendarBody._focusActiveCell();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */

  }, {
    key: "_getMonthInCurrentYear",
    value: function _getMonthInCurrentYear(date) {
      return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
    }
    /** Creates an MatCalendarCell for the given month. */

  }, {
    key: "_createCellForMonth",
    value: function _createCellForMonth(month, monthName) {
      var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

      var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);

      var cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
      return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
    }
    /** Whether the given month is enabled. */

  }, {
    key: "_shouldEnableMonth",
    value: function _shouldEnableMonth(month) {
      var activeYear = this._dateAdapter.getYear(this.activeDate);

      if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
        return false;
      }

      if (!this.dateFilter) {
        return true;
      }

      var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1); // If any date in the month is enabled count the month as enabled.


      for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
        if (this.dateFilter(date)) {
          return true;
        }
      }

      return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */

  }, {
    key: "_isYearAndMonthAfterMaxDate",
    value: function _isYearAndMonthAfterMaxDate(year, month) {
      if (this.maxDate) {
        var maxYear = this._dateAdapter.getYear(this.maxDate);

        var maxMonth = this._dateAdapter.getMonth(this.maxDate);

        return year > maxYear || year === maxYear && month > maxMonth;
      }

      return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */

  }, {
    key: "_isYearAndMonthBeforeMinDate",
    value: function _isYearAndMonthBeforeMinDate(year, month) {
      if (this.minDate) {
        var minYear = this._dateAdapter.getYear(this.minDate);

        var minMonth = this._dateAdapter.getMonth(this.minDate);

        return year < minYear || year === minYear && month < minMonth;
      }

      return false;
    }
    /** Determines whether the user has the RTL layout direction. */

  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-selected month based on a model value. */

  }, {
    key: "_setSelectedMonth",
    value: function _setSelectedMonth(value) {
      if (value instanceof DateRange) {
        this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
      } else {
        this._selectedMonth = this._getMonthInCurrentYear(value);
      }
    }
  }]);

  return MatYearView;
}();

MatYearView.ɵfac = function MatYearView_Factory(t) {
  return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"], 8));
};

MatYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatYearView,
  selectors: [["mat-year-view"]],
  viewQuery: function MatYearView_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](MatCalendarBody, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass"
  },
  outputs: {
    selectedChange: "selectedChange",
    monthSelected: "monthSelected",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matYearView"],
  decls: 5,
  vars: 9,
  consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
  template: function MatYearView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "thead", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "tbody", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
        return ctx._monthSelected($event);
      })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
    }
  },
  directives: [MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});

MatYearView.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }];
};

MatYearView.propDecorators = {
  activeDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  monthSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  activeDateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _matCalendarBody: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatCalendarBody]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatYearView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-year-view',
      template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
      exportAs: 'matYearView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }];
  }, {
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatCalendarBody]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default header for MatCalendar */


var MatCalendarHeader = /*#__PURE__*/function () {
  function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatCalendarHeader);

    this._intl = _intl;
    this.calendar = calendar;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this.calendar.stateChanges.subscribe(function () {
      return changeDetectorRef.markForCheck();
    });
  }
  /** The label for the current calendar view. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatCalendarHeader, [{
    key: "periodButtonText",
    get: function get() {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      }

      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYearName(this.calendar.activeDate);
      } // The offset from the active year to the "slot" for the starting year is the
      // *actual* first rendered year in the multi-year view, and the last year is
      // just yearsPerPage - 1 away.


      var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);

      var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
      var maxYearOfPage = minYearOfPage + yearsPerPage - 1;

      var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));

      var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));

      return this._intl.formatYearRange(minYearName, maxYearName);
    }
  }, {
    key: "periodButtonLabel",
    get: function get() {
      return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /** The label for the previous button. */

  }, {
    key: "prevButtonLabel",
    get: function get() {
      return {
        'month': this._intl.prevMonthLabel,
        'year': this._intl.prevYearLabel,
        'multi-year': this._intl.prevMultiYearLabel
      }[this.calendar.currentView];
    }
    /** The label for the next button. */

  }, {
    key: "nextButtonLabel",
    get: function get() {
      return {
        'month': this._intl.nextMonthLabel,
        'year': this._intl.nextYearLabel,
        'multi-year': this._intl.nextMultiYearLabel
      }[this.calendar.currentView];
    }
    /** Handles user clicks on the period label. */

  }, {
    key: "currentPeriodClicked",
    value: function currentPeriodClicked() {
      this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /** Handles user clicks on the previous button. */

  }, {
    key: "previousClicked",
    value: function previousClicked() {
      this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /** Handles user clicks on the next button. */

  }, {
    key: "nextClicked",
    value: function nextClicked() {
      this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /** Whether the previous period button is enabled. */

  }, {
    key: "previousEnabled",
    value: function previousEnabled() {
      if (!this.calendar.minDate) {
        return true;
      }

      return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /** Whether the next period button is enabled. */

  }, {
    key: "nextEnabled",
    value: function nextEnabled() {
      return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */

  }, {
    key: "_isSameView",
    value: function _isSameView(date1, date2) {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
      }

      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
      } // Otherwise we are in 'multi-year' view.


      return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
  }]);

  return MatCalendarHeader;
}();

MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) {
  return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
    return MatCalendar;
  })), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]));
};

MatCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatCalendarHeader,
  selectors: [["mat-calendar-header"]],
  exportAs: ["matCalendarHeader"],
  ngContentSelectors: _c1,
  decls: 9,
  vars: 8,
  consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], [1, "mat-calendar-arrow"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]],
  template: function MatCalendarHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() {
        return ctx.currentPeriodClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojection"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_7_listener() {
        return ctx.previousClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_8_listener() {
        return ctx.nextClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView != "month");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["CdkAriaLive"]],
  encapsulation: 2,
  changeDetection: 0
});

MatCalendarHeader.ctorParameters = function () {
  return [{
    type: MatDatepickerIntl
  }, {
    type: MatCalendar,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
        return MatCalendar;
      })]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatCalendarHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-calendar-header',
      template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            cdkAriaLive=\"polite\">\n      {{periodButtonText}}\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
      exportAs: 'matCalendarHeader',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: MatDatepickerIntl
    }, {
      type: MatCalendar,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
          return MatCalendar;
        })]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }];
  }, null);
})();
/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */


var MatCalendar = /*#__PURE__*/function () {
  function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
    var _this8 = this;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatCalendar);

    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._changeDetectorRef = _changeDetectorRef;
    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     */

    this._moveFocusOnNextTick = false;
    /** Whether the calendar should be started in month or year view. */

    this.startView = 'month';
    /**
     * Emits when the currently selected date changes.
     * @breaking-change 11.0.0 Emitted value to change to `D | null`.
     */

    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /**
     * Emits the year chosen in multiyear view.
     * This doesn't imply a change on the selected date.
     */

    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /**
     * Emits the month chosen in year view.
     * This doesn't imply a change on the selected date.
     */

    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when any date is selected. */

    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /**
     * Emits whenever there is a state change that the header may need to respond to.
     */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }

      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }

    this._intlChanges = _intl.changes.subscribe(function () {
      _changeDetectorRef.markForCheck();

      _this8.stateChanges.next();
    });
  }
  /** A date representing the period (month or year) to start the calendar in. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatCalendar, [{
    key: "startAt",
    get: function get() {
      return this._startAt;
    },
    set: function set(value) {
      this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The currently selected date. */

  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
    }
    /** The minimum selectable date. */

  }, {
    key: "minDate",
    get: function get() {
      return this._minDate;
    },
    set: function set(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */

  }, {
    key: "maxDate",
    get: function get() {
      return this._maxDate;
    },
    set: function set(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */

  }, {
    key: "activeDate",
    get: function get() {
      return this._clampedActiveDate;
    },
    set: function set(value) {
      this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
      this.stateChanges.next();

      this._changeDetectorRef.markForCheck();
    }
    /** Whether the calendar is in month view. */

  }, {
    key: "currentView",
    get: function get() {
      return this._currentView;
    },
    set: function set(value) {
      this._currentView = value;
      this._moveFocusOnNextTick = true;

      this._changeDetectorRef.markForCheck();
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
      this.activeDate = this.startAt || this._dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

      this._currentView = this.startView;
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this._moveFocusOnNextTick) {
        this._moveFocusOnNextTick = false;
        this.focusActiveCell();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._intlChanges.unsubscribe();

      this.stateChanges.complete();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];

      if (change && !change.firstChange) {
        var view = this._getCurrentViewComponent();

        if (view) {
          // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
          // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
          this._changeDetectorRef.detectChanges();

          view._init();
        }
      }

      this.stateChanges.next();
    }
  }, {
    key: "focusActiveCell",
    value: function focusActiveCell() {
      this._getCurrentViewComponent()._focusActiveCell(false);
    }
    /** Updates today's date after an update of the active date */

  }, {
    key: "updateTodaysDate",
    value: function updateTodaysDate() {
      var currentView = this.currentView;
      var view;

      if (currentView === 'month') {
        view = this.monthView;
      } else if (currentView === 'year') {
        view = this.yearView;
      } else {
        view = this.multiYearView;
      }

      view._init();
    }
    /** Handles date selection in the month view. */

  }, {
    key: "_dateSelected",
    value: function _dateSelected(event) {
      var date = event.value;

      if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
        // @breaking-change 11.0.0 remove non-null assertion
        // once the `selectedChange` is allowed to be null.
        this.selectedChange.emit(date);
      }

      this._userSelection.emit(event);
    }
    /** Handles year selection in the multiyear view. */

  }, {
    key: "_yearSelectedInMultiYearView",
    value: function _yearSelectedInMultiYearView(normalizedYear) {
      this.yearSelected.emit(normalizedYear);
    }
    /** Handles month selection in the year view. */

  }, {
    key: "_monthSelectedInYearView",
    value: function _monthSelectedInYearView(normalizedMonth) {
      this.monthSelected.emit(normalizedMonth);
    }
    /** Handles year/month selection in the multi-year/year views. */

  }, {
    key: "_goToDateInView",
    value: function _goToDateInView(date, view) {
      this.activeDate = date;
      this.currentView = view;
    }
    /** Returns the component instance that corresponds to the current calendar view. */

  }, {
    key: "_getCurrentViewComponent",
    value: function _getCurrentViewComponent() {
      return this.monthView || this.yearView || this.multiYearView;
    }
  }]);

  return MatCalendar;
}();

MatCalendar.ɵfac = function MatCalendar_Factory(t) {
  return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]));
};

MatCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatCalendar,
  selectors: [["mat-calendar"]],
  viewQuery: function MatCalendar_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](MatMonthView, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](MatYearView, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](MatMultiYearView, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
    }
  },
  hostAttrs: [1, "mat-calendar"],
  inputs: {
    startView: "startView",
    startAt: "startAt",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    headerComponent: "headerComponent",
    dateFilter: "dateFilter",
    dateClass: "dateClass",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd"
  },
  outputs: {
    selectedChange: "selectedChange",
    yearSelected: "yearSelected",
    monthSelected: "monthSelected",
    _userSelection: "_userSelection"
  },
  exportAs: ["matCalendar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 5,
  consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]],
  template: function MatCalendar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 8, "mat-month-view", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 6, "mat-year-view", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 6, "mat-multi-year-view", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", ctx.currentView);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "month");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "year");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "multi-year");
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["CdkPortalOutlet"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], MatMonthView, MatYearView, MatMultiYearView],
  styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatCalendar.ctorParameters = function () {
  return [{
    type: MatDatepickerIntl
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }];
};

MatCalendar.propDecorators = {
  headerComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  startAt: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  startView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  yearSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  monthSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _userSelection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  monthView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatMonthView]
  }],
  yearView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatYearView]
  }],
  multiYearView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatMultiYearView]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatCalendar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-calendar',
      template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      (_userSelection)=\"_dateSelected($event)\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
      host: {
        'class': 'mat-calendar'
      },
      exportAs: 'matCalendar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"]
    }]
  }], function () {
    return [{
      type: MatDatepickerIntl
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }];
  }, {
    startView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    _userSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    startAt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    headerComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    monthView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatMonthView]
    }],
    yearView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatYearView]
    }],
    multiYearView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatMultiYearView]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material datepicker.
 * @docs-private
 */


var matDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["style"])({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["style"])({
    opacity: 1,
    transform: 'scale(1, 1)'
  }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["style"])({
    opacity: 0
  })))]),

  /** Fades in the content of the calendar. */
  fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["style"])({
    opacity: 0
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["style"])({
    opacity: 1
  })), // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
  // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_22__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate a unique ID for each datepicker instance. */

var datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */

var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('mat-datepicker-scroll-strategy');
/** @docs-private */

function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition();
  };
}
/** @docs-private */


var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
}; // Boilerplate for applying mixins to MatDatepickerContent.

/** @docs-private */

var MatDatepickerContentBase = function MatDatepickerContentBase(_elementRef) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerContentBase);

  this._elementRef = _elementRef;
};

var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["mixinColor"])(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */


var MatDatepickerContent = /*#__PURE__*/function (_MatDatepickerContent) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatDatepickerContent, _MatDatepickerContent);

  var _super3 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatDatepickerContent);

  function MatDatepickerContent(elementRef,
  /**
   * @deprecated `_changeDetectorRef`, `_model` and `_rangeSelectionStrategy`
   * parameters to become required.
   * @breaking-change 11.0.0
   */
  _changeDetectorRef, _model, _dateAdapter, _rangeSelectionStrategy) {
    var _this9;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerContent);

    _this9 = _super3.call(this, elementRef);
    _this9._changeDetectorRef = _changeDetectorRef;
    _this9._model = _model;
    _this9._dateAdapter = _dateAdapter;
    _this9._rangeSelectionStrategy = _rangeSelectionStrategy;
    _this9._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"]();
    /** Current state of the animation. */

    _this9._animationState = 'enter';
    /** Emits when an animation has finished. */

    _this9._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
    return _this9;
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDatepickerContent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this10 = this;

      // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef.
      if (this._changeDetectorRef) {
        this._subscriptions.add(this.datepicker._stateChanges.subscribe(function () {
          _this10._changeDetectorRef.markForCheck();
        }));
      }

      this._calendar.focusActiveCell();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._subscriptions.unsubscribe();

      this._animationDone.complete();
    }
  }, {
    key: "_handleUserSelection",
    value: function _handleUserSelection(event) {
      // @breaking-change 11.0.0 Remove null checks for _model,
      // _rangeSelectionStrategy and _dateAdapter.
      if (this._model && this._dateAdapter) {
        var selection = this._model.selection;
        var _value2 = event.value;
        var isRange = selection instanceof DateRange; // If we're selecting a range and we have a selection strategy, always pass the value through
        // there. Otherwise don't assign null values to the model, unless we're selecting a range.
        // A null value when picking a range means that the user cancelled the selection (e.g. by
        // pressing escape), whereas when selecting a single value it means that the value didn't
        // change. This isn't very intuitive, but it's here for backwards-compatibility.

        if (isRange && this._rangeSelectionStrategy) {
          var newSelection = this._rangeSelectionStrategy.selectionFinished(_value2, selection, event.event);

          this._model.updateSelection(newSelection, this);
        } else if (_value2 && (isRange || !this._dateAdapter.sameDate(_value2, selection))) {
          this._model.add(_value2);
        }
      }

      if (!this._model || this._model.isComplete()) {
        this.datepicker.close();
      }
    }
  }, {
    key: "_startExitAnimation",
    value: function _startExitAnimation() {
      this._animationState = 'void'; // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef`.

      if (this._changeDetectorRef) {
        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "_getSelected",
    value: function _getSelected() {
      // @breaking-change 11.0.0 Remove null check for `_model`.
      return this._model ? this._model.selection : null;
    }
  }]);

  return MatDatepickerContent;
}(_MatDatepickerContentMixinBase);

MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) {
  return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
};

MatDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatDatepickerContent,
  selectors: [["mat-datepicker-content"]],
  viewQuery: function MatDatepickerContent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](MatCalendar, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
    }
  },
  hostAttrs: [1, "mat-datepicker-content"],
  hostVars: 3,
  hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() {
        return ctx._animationDone.next();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matDatepickerContent"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 13,
  consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "yearSelected", "monthSelected", "_userSelection"]],
  template: function MatDatepickerContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-calendar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_0_listener($event) {
        return ctx.datepicker._selectYear($event);
      })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_0_listener($event) {
        return ctx.datepicker._selectMonth($event);
      })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_0_listener($event) {
        return ctx._handleUserSelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter");
    }
  },
  directives: [MatCalendar, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
  styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"],
  encapsulation: 2,
  data: {
    animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
  },
  changeDetection: 0
});

MatDatepickerContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: MatDateSelectionModel
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }]
  }];
};

MatDatepickerContent.propDecorators = {
  _calendar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatCalendar]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-datepicker-content',
      template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\">\n</mat-calendar>\n",
      host: {
        'class': 'mat-datepicker-content',
        '[@transformPanel]': '_animationState',
        '(@transformPanel.done)': '_animationDone.next()',
        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
      },
      animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
      exportAs: 'matDatepickerContent',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush,
      inputs: ['color'],
      styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: MatDateSelectionModel
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
      }]
    }];
  }, {
    _calendar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatCalendar]
    }]
  });
})();
/** Base class for a datepicker. */


var MatDatepickerBase = /*#__PURE__*/function () {
  function MatDatepickerBase(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document, _model) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerBase);

    this._dialog = _dialog;
    this._overlay = _overlay;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._document = _document;
    this._model = _model;
    this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"].EMPTY;
    /** The view that the calendar should start in. */

    this.startView = 'month';
    this._touchUi = false;
    /** Preferred position of the datepicker in the X axis. */

    this.xPosition = 'start';
    /** Preferred position of the datepicker in the Y axis. */

    this.yPosition = 'below';
    /**
     * Emits selected year in multiyear view.
     * This doesn't imply a change on the selected date.
     */

    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /**
     * Emits selected month in year view.
     * This doesn't imply a change on the selected date.
     */

    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when the datepicker has been opened. */

    this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when the datepicker has been closed. */

    this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    this._opened = false;
    /** The id for the datepicker calendar. */

    this.id = "mat-datepicker-".concat(datepickerUid++);
    /** The element that was focused before the datepicker was opened. */

    this._focusedElementBeforeOpen = null;
    /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */

    this._backdropHarnessClass = "".concat(this.id, "-backdrop");
    /** Emits when the datepicker's state changes. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();

    if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }

    this._scrollStrategy = scrollStrategy;
  }
  /** The date to open the calendar to initially. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDatepickerBase, [{
    key: "startAt",
    get: function get() {
      // If an explicit startAt is set we start there, otherwise we start at whatever the currently
      // selected value is.
      return this._startAt || (this._datepickerInput ? this._datepickerInput.getStartValue() : null);
    },
    set: function set(value) {
      this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** Color palette to use on the datepicker's calendar. */

  }, {
    key: "color",
    get: function get() {
      return this._color || (this._datepickerInput ? this._datepickerInput.getThemePalette() : undefined);
    },
    set: function set(value) {
      this._color = value;
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */

  }, {
    key: "touchUi",
    get: function get() {
      return this._touchUi;
    },
    set: function set(value) {
      this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value);
    }
    /** Whether the datepicker pop-up should be disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled === undefined && this._datepickerInput ? this._datepickerInput.disabled : !!this._disabled;
    },
    set: function set(value) {
      var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value);

      if (newValue !== this._disabled) {
        this._disabled = newValue;

        this._stateChanges.next(undefined);
      }
    }
    /** Whether the calendar is open. */

  }, {
    key: "opened",
    get: function get() {
      return this._opened;
    },
    set: function set(value) {
      Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value) ? this.open() : this.close();
    }
    /** The minimum selectable date. */

  }, {
    key: "_getMinDate",
    value: function _getMinDate() {
      return this._datepickerInput && this._datepickerInput.min;
    }
    /** The maximum selectable date. */

  }, {
    key: "_getMaxDate",
    value: function _getMaxDate() {
      return this._datepickerInput && this._datepickerInput.max;
    }
  }, {
    key: "_getDateFilter",
    value: function _getDateFilter() {
      return this._datepickerInput && this._datepickerInput.dateFilter;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var positionChange = changes['xPosition'] || changes['yPosition'];

      if (positionChange && !positionChange.firstChange && this._popupRef) {
        this._setConnectedPositions(this._popupRef.getConfig().positionStrategy);

        if (this.opened) {
          this._popupRef.updatePosition();
        }
      }

      this._stateChanges.next(undefined);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyPopup();

      this.close();

      this._inputStateChanges.unsubscribe();

      this._stateChanges.complete();
    }
    /** Selects the given date */

  }, {
    key: "select",
    value: function select(date) {
      this._model.add(date);
    }
    /** Emits the selected year in multiyear view */

  }, {
    key: "_selectYear",
    value: function _selectYear(normalizedYear) {
      this.yearSelected.emit(normalizedYear);
    }
    /** Emits selected month in year view */

  }, {
    key: "_selectMonth",
    value: function _selectMonth(normalizedMonth) {
      this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     * @returns Selection model that the input should hook itself up to.
     */

  }, {
    key: "_registerInput",
    value: function _registerInput(input) {
      var _this11 = this;

      if (this._datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('A MatDatepicker can only be associated with a single input.');
      }

      this._inputStateChanges.unsubscribe();

      this._datepickerInput = input;
      this._inputStateChanges = input.stateChanges.subscribe(function () {
        return _this11._stateChanges.next(undefined);
      });
      return this._model;
    }
    /** Open the calendar. */

  }, {
    key: "open",
    value: function open() {
      if (this._opened || this.disabled) {
        return;
      }

      if (!this._datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Attempted to open an MatDatepicker with no associated input.');
      }

      if (this._document) {
        this._focusedElementBeforeOpen = this._document.activeElement;
      }

      this.touchUi ? this._openAsDialog() : this._openAsPopup();
      this._opened = true;
      this.openedStream.emit();
    }
    /** Close the calendar. */

  }, {
    key: "close",
    value: function close() {
      var _this12 = this;

      if (!this._opened) {
        return;
      }

      if (this._popupComponentRef && this._popupRef) {
        var instance = this._popupComponentRef.instance;

        instance._startExitAnimation();

        instance._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["take"])(1)).subscribe(function () {
          return _this12._destroyPopup();
        });
      }

      if (this._dialogRef) {
        this._dialogRef.close();

        this._dialogRef = null;
      }

      var completeClose = function completeClose() {
        // The `_opened` could've been reset already if
        // we got two events in quick succession.
        if (_this12._opened) {
          _this12._opened = false;

          _this12.closedStream.emit();

          _this12._focusedElementBeforeOpen = null;
        }
      };

      if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
        // Because IE moves focus asynchronously, we can't count on it being restored before we've
        // marked the datepicker as closed. If the event fires out of sequence and the element that
        // we're refocusing opens the datepicker on focus, the user could be stuck with not being
        // able to close the calendar at all. We work around it by making the logic, that marks
        // the datepicker as closed, async as well.
        this._focusedElementBeforeOpen.focus();

        setTimeout(completeClose);
      } else {
        completeClose();
      }
    }
    /** Open the calendar as a dialog. */

  }, {
    key: "_openAsDialog",
    value: function _openAsDialog() {
      var _this13 = this;

      // Usually this would be handled by `open` which ensures that we can only have one overlay
      // open at a time, however since we reset the variables in async handlers some overlays
      // may slip through if the user opens and closes multiple times in quick succession (e.g.
      // by holding down the enter key).
      if (this._dialogRef) {
        this._dialogRef.close();
      }

      this._dialogRef = this._dialog.open(MatDatepickerContent, {
        direction: this._dir ? this._dir.value : 'ltr',
        viewContainerRef: this._viewContainerRef,
        panelClass: 'mat-datepicker-dialog',
        // These values are all the same as the defaults, but we set them explicitly so that the
        // datepicker dialog behaves consistently even if the user changed the defaults.
        hasBackdrop: true,
        disableClose: false,
        backdropClass: ['cdk-overlay-dark-backdrop', this._backdropHarnessClass],
        width: '',
        height: '',
        minWidth: '',
        minHeight: '',
        maxWidth: '80vw',
        maxHeight: '',
        position: {},
        autoFocus: true,
        // `MatDialog` has focus restoration built in, however we want to disable it since the
        // datepicker also has focus restoration for dropdown mode. We want to do this, in order
        // to ensure that the timing is consistent between dropdown and dialog modes since `MatDialog`
        // restores focus when the animation is finished, but the datepicker does it immediately.
        // Furthermore, this avoids any conflicts where the datepicker consumer might move focus
        // inside the `closed` event which is dispatched immediately.
        restoreFocus: false
      });

      this._dialogRef.afterClosed().subscribe(function () {
        return _this13.close();
      });

      this._forwardContentValues(this._dialogRef.componentInstance);
    }
    /** Open the calendar as a popup. */

  }, {
    key: "_openAsPopup",
    value: function _openAsPopup() {
      var _this14 = this;

      var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);

      this._destroyPopup();

      this._createPopup();

      this._popupComponentRef = this._popupRef.attach(portal);

      this._forwardContentValues(this._popupComponentRef.instance); // Update the position once the calendar has rendered.


      this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["take"])(1)).subscribe(function () {
        _this14._popupRef.updatePosition();
      });
    }
    /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */

  }, {
    key: "_forwardContentValues",
    value: function _forwardContentValues(instance) {
      instance.datepicker = this;
      instance.color = this.color;
    }
    /** Create the popup. */

  }, {
    key: "_createPopup",
    value: function _createPopup() {
      var _this15 = this;

      var positionStrategy = this._overlay.position().flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();

      var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayConfig"]({
        positionStrategy: this._setConnectedPositions(positionStrategy),
        hasBackdrop: true,
        backdropClass: ['mat-overlay-transparent-backdrop', this._backdropHarnessClass],
        direction: this._dir,
        scrollStrategy: this._scrollStrategy(),
        panelClass: 'mat-datepicker-popup'
      });
      this._popupRef = this._overlay.create(overlayConfig);

      this._popupRef.overlayElement.setAttribute('role', 'dialog');

      Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["filter"])(function (event) {
        // Closing on alt + up is only valid when there's an input associated with the datepicker.
        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["ESCAPE"] || _this15._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["UP_ARROW"];
      }))).subscribe(function (event) {
        if (event) {
          event.preventDefault();
        }

        _this15.close();
      });
    }
    /** Destroys the current popup overlay. */

  }, {
    key: "_destroyPopup",
    value: function _destroyPopup() {
      if (this._popupRef) {
        this._popupRef.dispose();

        this._popupRef = this._popupComponentRef = null;
      }
    }
    /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */

  }, {
    key: "_setConnectedPositions",
    value: function _setConnectedPositions(strategy) {
      var primaryX = this.xPosition === 'end' ? 'end' : 'start';
      var secondaryX = primaryX === 'start' ? 'end' : 'start';
      var primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
      var secondaryY = primaryY === 'top' ? 'bottom' : 'top';
      return strategy.withPositions([{
        originX: primaryX,
        originY: secondaryY,
        overlayX: primaryX,
        overlayY: primaryY
      }, {
        originX: primaryX,
        originY: primaryY,
        overlayX: primaryX,
        overlayY: secondaryY
      }, {
        originX: secondaryX,
        originY: secondaryY,
        overlayX: secondaryX,
        overlayY: primaryY
      }, {
        originX: secondaryX,
        originY: primaryY,
        overlayX: secondaryX,
        overlayY: secondaryY
      }]);
    }
  }]);

  return MatDatepickerBase;
}();

MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) {
  return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MatDateSelectionModel));
};

MatDatepickerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatDatepickerBase,
  inputs: {
    startView: "startView",
    xPosition: "xPosition",
    yPosition: "yPosition",
    startAt: "startAt",
    color: "color",
    touchUi: "touchUi",
    disabled: "disabled",
    opened: "opened",
    calendarHeaderComponent: "calendarHeaderComponent",
    panelClass: "panelClass",
    dateClass: "dateClass"
  },
  outputs: {
    yearSelected: "yearSelected",
    monthSelected: "monthSelected",
    openedStream: "opened",
    closedStream: "closed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]]
});

MatDatepickerBase.ctorParameters = function () {
  return [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_DATEPICKER_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
    }]
  }, {
    type: MatDateSelectionModel
  }];
};

MatDatepickerBase.propDecorators = {
  calendarHeaderComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  startAt: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  startView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  touchUi: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  xPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  yPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  yearSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  monthSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  panelClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  openedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"],
    args: ['opened']
  }],
  closedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"],
    args: ['closed']
  }],
  opened: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_DATEPICKER_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
      }]
    }, {
      type: MatDateSelectionModel
    }];
  }, {
    startView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    xPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    yPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"],
      args: ['opened']
    }],
    closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"],
      args: ['closed']
    }],
    startAt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    touchUi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    calendarHeaderComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.

/** Component responsible for managing the datepicker popup/dialog. */


var MatDatepicker = /*#__PURE__*/function (_MatDatepickerBase) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatDatepicker, _MatDatepickerBase);

  var _super4 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatDatepicker);

  function MatDatepicker() {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepicker);

    return _super4.apply(this, arguments);
  }

  return MatDatepicker;
}(MatDatepickerBase);

MatDatepicker.ɵfac = function MatDatepicker_Factory(t) {
  return ɵMatDatepicker_BaseFactory(t || MatDatepicker);
};

MatDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatDatepicker,
  selectors: [["mat-datepicker"]],
  exportAs: ["matDatepicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function MatDatepicker_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
var ɵMatDatepicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetInheritedFactory"](MatDatepicker);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-datepicker',
      template: '',
      exportAs: 'matDatepicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */


var MatDatepickerInputEvent = function MatDatepickerInputEvent(
/** Reference to the datepicker input component that emitted the event. */
target,
/** Reference to the native input element associated with the datepicker input. */
targetElement) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerInputEvent);

  this.target = target;
  this.targetElement = targetElement;
  this.value = this.target.value;
};
/** Base class for datepicker inputs. */


var MatDatepickerInputBase = /*#__PURE__*/function () {
  function MatDatepickerInputBase(_elementRef, _dateAdapter, _dateFormats) {
    var _this16 = this;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerInputBase);

    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    /** Emits when a `change` event is fired on this `<input>`. */

    this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when an `input` event is fired on this `<input>`. */

    this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when the value changes (either due to user input or programmatic change). */

    this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Emits when the internal state has changed */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();

    this._onTouched = function () {};

    this._validatorOnChange = function () {};

    this._cvaOnChange = function () {};

    this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"].EMPTY;
    this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"].EMPTY;
    /** The form control validator for whether the input parses. */

    this._parseValidator = function () {
      return _this16._lastValueValid ? null : {
        'matDatepickerParse': {
          'text': _this16._elementRef.nativeElement.value
        }
      };
    };
    /** The form control validator for the date filter. */


    this._filterValidator = function (control) {
      var controlValue = _this16._dateAdapter.getValidDateOrNull(_this16._dateAdapter.deserialize(control.value));

      var dateFilter = _this16._getDateFilter();

      return !dateFilter || !controlValue || dateFilter(controlValue) ? null : {
        'matDatepickerFilter': true
      };
    };
    /** The form control validator for the min date. */


    this._minValidator = function (control) {
      var controlValue = _this16._dateAdapter.getValidDateOrNull(_this16._dateAdapter.deserialize(control.value));

      var min = _this16._getMinDate();

      return !min || !controlValue || _this16._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
        'matDatepickerMin': {
          'min': min,
          'actual': controlValue
        }
      };
    };
    /** The form control validator for the max date. */


    this._maxValidator = function (control) {
      var controlValue = _this16._dateAdapter.getValidDateOrNull(_this16._dateAdapter.deserialize(control.value));

      var max = _this16._getMaxDate();

      return !max || !controlValue || _this16._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
        'matDatepickerMax': {
          'max': max,
          'actual': controlValue
        }
      };
    };
    /** Whether the last value set on the input was valid. */


    this._lastValueValid = false;

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }

      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    } // Update the displayed date when the locale changes.


    this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
      _this16.value = _this16.value;
    });
  }
  /** The value of the input. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDatepickerInputBase, [{
    key: "value",
    get: function get() {
      return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
    },
    set: function set(value) {
      value = this._dateAdapter.deserialize(value);
      this._lastValueValid = this._isValidValue(value);
      value = this._dateAdapter.getValidDateOrNull(value);
      var oldDate = this.value;

      this._assignValue(value);

      this._formatValue(value);

      if (!this._dateAdapter.sameDate(oldDate, value)) {
        this._valueChange.emit(value);
      }
    }
    /** Whether the datepicker-input is disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return !!this._disabled || this._parentDisabled();
    },
    set: function set(value) {
      var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value);
      var element = this._elementRef.nativeElement;

      if (this._disabled !== newValue) {
        this._disabled = newValue;
        this.stateChanges.next(undefined);
      } // We need to null check the `blur` method, because it's undefined during SSR.
      // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
      // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
      // element has been inserted.


      if (newValue && this._isInitialized && element.blur) {
        // Normally, native input elements automatically blur if they turn disabled. This behavior
        // is problematic, because it would mean that it triggers another change detection cycle,
        // which then causes a changed after checked error if the input element was focused before.
        element.blur();
      }
    }
    /** Gets the base validator functions. */

  }, {
    key: "_getValidators",
    value: function _getValidators() {
      return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
    }
    /** Registers a date selection model with the input. */

  }, {
    key: "_registerModel",
    value: function _registerModel(model) {
      var _this17 = this;

      this._model = model;

      this._valueChangesSubscription.unsubscribe();

      if (this._pendingValue) {
        this._assignValue(this._pendingValue);
      }

      this._valueChangesSubscription = this._model.selectionChanged.subscribe(function (event) {
        if (event.source !== _this17) {
          var _value3 = _this17._getValueFromModel(event.selection);

          _this17._lastValueValid = _this17._isValidValue(_value3);

          _this17._cvaOnChange(_value3);

          _this17._onTouched();

          _this17._formatValue(_value3); // Note that we can't wrap the entire block with this logic, because for the range inputs
          // we want to revalidate whenever either one of the inputs changes and we don't have a
          // good way of distinguishing it at the moment.


          if (_this17._canEmitChangeEvent(event)) {
            _this17.dateInput.emit(new MatDatepickerInputEvent(_this17, _this17._elementRef.nativeElement));

            _this17.dateChange.emit(new MatDatepickerInputEvent(_this17, _this17._elementRef.nativeElement));
          }

          if (_this17._outsideValueChanged) {
            _this17._outsideValueChanged();
          }
        }
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._isInitialized = true;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (dateInputsHaveChanged(changes, this._dateAdapter)) {
        this.stateChanges.next(undefined);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._valueChangesSubscription.unsubscribe();

      this._localeSubscription.unsubscribe();

      this._valueChange.complete();

      this.stateChanges.complete();
    }
    /** @docs-private */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._validatorOnChange = fn;
    }
    /** @docs-private */

  }, {
    key: "validate",
    value: function validate(c) {
      return this._validator ? this._validator(c) : null;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._cvaOnChange = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
  }, {
    key: "_onKeydown",
    value: function _onKeydown(event) {
      var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["DOWN_ARROW"];

      if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
        this._openPopup();

        event.preventDefault();
      }
    }
  }, {
    key: "_onInput",
    value: function _onInput(value) {
      var lastValueWasValid = this._lastValueValid;

      var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);

      this._lastValueValid = this._isValidValue(date);
      date = this._dateAdapter.getValidDateOrNull(date);

      if (!this._dateAdapter.sameDate(date, this.value)) {
        this._assignValue(date);

        this._cvaOnChange(date);

        this._valueChange.emit(date);

        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      } else {
        // Call the CVA change handler for invalid values
        // since this is what marks the control as dirty.
        if (value && !this.value) {
          this._cvaOnChange(date);
        }

        if (lastValueWasValid !== this._lastValueValid) {
          this._validatorOnChange();
        }
      }
    }
  }, {
    key: "_onChange",
    value: function _onChange() {
      this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
    /** Handles blur events on the input. */

  }, {
    key: "_onBlur",
    value: function _onBlur() {
      // Reformat the input only if we have a valid value.
      if (this.value) {
        this._formatValue(this.value);
      }

      this._onTouched();
    }
    /** Formats a value and sets it on the input element. */

  }, {
    key: "_formatValue",
    value: function _formatValue(value) {
      this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    }
    /** Assigns a value to the model. */

  }, {
    key: "_assignValue",
    value: function _assignValue(value) {
      // We may get some incoming values before the model was
      // assigned. Save the value so that we can assign it later.
      if (this._model) {
        this._assignValueToModel(value);

        this._pendingValue = null;
      } else {
        this._pendingValue = value;
      }
    }
    /** Whether a value is considered valid. */

  }, {
    key: "_isValidValue",
    value: function _isValidValue(value) {
      return !value || this._dateAdapter.isValid(value);
    }
    /**
     * Checks whether a parent control is disabled. This is in place so that it can be overridden
     * by inputs extending this one which can be placed inside of a group that can be disabled.
     */

  }, {
    key: "_parentDisabled",
    value: function _parentDisabled() {
      return false;
    }
  }]);

  return MatDatepickerInputBase;
}();

MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) {
  return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8));
};

MatDatepickerInputBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatDatepickerInputBase,
  inputs: {
    value: "value",
    disabled: "disabled"
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]]
});

MatDatepickerInputBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }];
};

MatDatepickerInputBase.propDecorators = {
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  dateInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }];
  }, {
    dateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    dateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */


function dateInputsHaveChanged(changes, adapter) {
  var keys = Object.keys(changes);

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var key = _keys[_i];
    var _changes$key = changes[key],
        previousValue = _changes$key.previousValue,
        currentValue = _changes$key.currentValue;

    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }

  return false;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


var MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
    return MatDatepickerInput;
  }),
  multi: true
};
/** @docs-private */

var MAT_DATEPICKER_VALIDATORS = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
    return MatDatepickerInput;
  }),
  multi: true
};
/** Directive used to connect an input to a MatDatepicker. */

var MatDatepickerInput = /*#__PURE__*/function (_MatDatepickerInputBa) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatDatepickerInput, _MatDatepickerInputBa);

  var _super5 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatDatepickerInput);

  function MatDatepickerInput(elementRef, dateAdapter, dateFormats, _formField) {
    var _thisSuper, _this18;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerInput);

    _this18 = _super5.call(this, elementRef, dateAdapter, dateFormats);
    _this18._formField = _formField;
    _this18._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_23__["Validators"].compose(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])((_thisSuper = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this18), Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatDatepickerInput.prototype)), "_getValidators", _thisSuper).call(_thisSuper));
    return _this18;
  }
  /** The datepicker that this input is associated with. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDatepickerInput, [{
    key: "matDatepicker",
    set: function set(datepicker) {
      if (datepicker) {
        this._datepicker = datepicker;

        this._registerModel(datepicker._registerInput(this));
      }
    }
    /** The minimum valid date. */

  }, {
    key: "min",
    get: function get() {
      return this._min;
    },
    set: function set(value) {
      var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

      if (!this._dateAdapter.sameDate(validValue, this._min)) {
        this._min = validValue;

        this._validatorOnChange();
      }
    }
    /** The maximum valid date. */

  }, {
    key: "max",
    get: function get() {
      return this._max;
    },
    set: function set(value) {
      var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

      if (!this._dateAdapter.sameDate(validValue, this._max)) {
        this._max = validValue;

        this._validatorOnChange();
      }
    }
    /** Function that can be used to filter out dates within the datepicker. */

  }, {
    key: "dateFilter",
    get: function get() {
      return this._dateFilter;
    },
    set: function set(value) {
      this._dateFilter = value;

      this._validatorOnChange();
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */

  }, {
    key: "getConnectedOverlayOrigin",
    value: function getConnectedOverlayOrigin() {
      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Returns the palette used by the input's form field, if any. */

  }, {
    key: "getThemePalette",
    value: function getThemePalette() {
      return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */

  }, {
    key: "getStartValue",
    value: function getStartValue() {
      return this.value;
    }
    /**
     * @deprecated
     * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     */

  }, {
    key: "getPopupConnectionElementRef",
    value: function getPopupConnectionElementRef() {
      return this.getConnectedOverlayOrigin();
    }
    /** Opens the associated datepicker. */

  }, {
    key: "_openPopup",
    value: function _openPopup() {
      if (this._datepicker) {
        this._datepicker.open();
      }
    }
  }, {
    key: "_getValueFromModel",
    value: function _getValueFromModel(modelValue) {
      return modelValue;
    }
  }, {
    key: "_assignValueToModel",
    value: function _assignValueToModel(value) {
      if (this._model) {
        this._model.updateSelection(value, this);
      }
    }
    /** Gets the input's minimum date. */

  }, {
    key: "_getMinDate",
    value: function _getMinDate() {
      return this._min;
    }
    /** Gets the input's maximum date. */

  }, {
    key: "_getMaxDate",
    value: function _getMaxDate() {
      return this._max;
    }
    /** Gets the input's date filtering function. */

  }, {
    key: "_getDateFilter",
    value: function _getDateFilter() {
      return this._dateFilter;
    }
  }, {
    key: "_canEmitChangeEvent",
    value: function _canEmitChangeEvent() {
      return true;
    }
  }]);

  return MatDatepickerInput;
}(MatDatepickerInputBase);

MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) {
  return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MAT_FORM_FIELD"], 8));
};

MatDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatDatepickerInput,
  selectors: [["input", "matDatepicker", ""]],
  hostAttrs: [1, "mat-datepicker-input"],
  hostVars: 6,
  hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatDatepickerInput_change_HostBindingHandler() {
        return ctx._onChange();
      })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
        return ctx._onBlur();
      })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵhostProperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
    }
  },
  inputs: {
    matDatepicker: "matDatepicker",
    min: "min",
    max: "max",
    dateFilter: ["matDatepickerFilter", "dateFilter"]
  },
  exportAs: ["matDatepickerInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
    provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MAT_INPUT_VALUE_ACCESSOR"],
    useExisting: MatDatepickerInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

MatDatepickerInput.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MAT_FORM_FIELD"]]
    }]
  }];
};

MatDatepickerInput.propDecorators = {
  matDatepicker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  min: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  max: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['matDatepickerFilter']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: 'input[matDatepicker]',
      providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MAT_INPUT_VALUE_ACCESSOR"],
        useExisting: MatDatepickerInput
      }],
      host: {
        'class': 'mat-datepicker-input',
        '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(blur)': '_onBlur()',
        '(keydown)': '_onKeydown($event)'
      },
      exportAs: 'matDatepickerInput'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MAT_FORM_FIELD"]]
      }]
    }];
  }, {
    matDatepicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
      args: ['matDatepickerFilter']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Can be used to override the icon of a `matDatepickerToggle`. */


var MatDatepickerToggleIcon = function MatDatepickerToggleIcon() {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerToggleIcon);
};

MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
  return new (t || MatDatepickerToggleIcon)();
};

MatDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatDatepickerToggleIcon,
  selectors: [["", "matDatepickerToggleIcon", ""]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: '[matDatepickerToggleIcon]'
    }]
  }], null, null);
})();

var MatDatepickerToggle = /*#__PURE__*/function () {
  function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerToggle);

    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_17__["Subscription"].EMPTY;
    var parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  /** Whether the toggle button is disabled. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDatepickerToggle, [{
    key: "disabled",
    get: function get() {
      if (this._disabled === undefined && this.datepicker) {
        return this.datepicker.disabled;
      }

      return !!this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['datepicker']) {
        this._watchStateChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._stateChanges.unsubscribe();
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      this._watchStateChanges();
    }
  }, {
    key: "_open",
    value: function _open(event) {
      if (this.datepicker && !this.disabled) {
        this.datepicker.open();
        event.stopPropagation();
      }
    }
  }, {
    key: "_watchStateChanges",
    value: function _watchStateChanges() {
      var _this19 = this;

      var datepickerStateChanged = this.datepicker ? this.datepicker._stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])();
      var inputStateChanged = this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput.stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])();
      var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])();

      this._stateChanges.unsubscribe();

      this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(function () {
        return _this19._changeDetectorRef.markForCheck();
      });
    }
  }]);

  return MatDatepickerToggle;
}();

MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) {
  return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinjectAttribute"]('tabindex'));
};

MatDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatDatepickerToggle,
  selectors: [["mat-datepicker-toggle"]],
  contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
    }
  },
  viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    }
  },
  hostAttrs: [1, "mat-datepicker-toggle"],
  hostVars: 8,
  hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function MatDatepickerToggle_focus_HostBindingHandler() {
        return ctx._button.focus();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
    }
  },
  inputs: {
    tabIndex: "tabIndex",
    disabled: "disabled",
    datepicker: ["for", "datepicker"],
    disableRipple: "disableRipple"
  },
  exportAs: ["matDatepickerToggle"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 6,
  consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
  template: function MatDatepickerToggle_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatDatepickerToggle_Template_button_click_0_listener($event) {
        return ctx._open($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx._customIcon);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
  styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatDatepickerToggle.ctorParameters = function () {
  return [{
    type: MatDatepickerIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
      args: ['tabindex']
    }]
  }];
};

MatDatepickerToggle.propDecorators = {
  datepicker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['for']
  }],
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  _customIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
    args: [MatDatepickerToggleIcon]
  }],
  _button: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['button']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-datepicker-toggle',
      template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"_intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\"\n  (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
      host: {
        'class': 'mat-datepicker-toggle',
        // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
        // consumer may have provided, while still being able to receive focus.
        '[attr.tabindex]': 'disabled ? null : -1',
        '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
        '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
        '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        '[attr.data-mat-calendar]': 'datepicker ? datepicker.id : null',
        '(focus)': '_button.focus()'
      },
      exportAs: 'matDatepickerToggle',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"]
    }]
  }], function () {
    return [{
      type: MatDatepickerIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
        args: ['tabindex']
      }]
    }];
  }, {
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    datepicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
      args: ['for']
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    _customIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
      args: [MatDatepickerToggleIcon]
    }],
    _button: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['button']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */


var MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */

var MatDateRangeInputPartBase = /*#__PURE__*/function (_MatDatepickerInputBa2) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatDateRangeInputPartBase, _MatDatepickerInputBa2);

  var _super6 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatDateRangeInputPartBase);

  function MatDateRangeInputPartBase(_rangeInput, elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
    var _this20;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDateRangeInputPartBase);

    _this20 = _super6.call(this, elementRef, dateAdapter, dateFormats);
    _this20._rangeInput = _rangeInput;
    _this20._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    _this20._injector = _injector;
    _this20._parentForm = _parentForm;
    _this20._parentFormGroup = _parentFormGroup;

    _this20._outsideValueChanged = function () {
      // Whenever the value changes outside the input we need to revalidate, because
      // the validation state of each of the inputs depends on the other one.
      _this20._validatorOnChange();
    };

    return _this20;
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDateRangeInputPartBase, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
      // injecting its `NgControl` so that the error state is handled correctly. This introduces a
      // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
      // itself. Usually we can work around it for the CVA, but there's no API to do it for the
      // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
      // everything has been resolved.
      var ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectFlags"].Self);

      if (ngControl) {
        this.ngControl = ngControl;
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      }
    }
    /** Gets whether the input is empty. */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._elementRef.nativeElement.value.length === 0;
    }
    /** Gets the placeholder of the input. */

  }, {
    key: "_getPlaceholder",
    value: function _getPlaceholder() {
      return this._elementRef.nativeElement.placeholder;
    }
    /** Focuses the input. */

  }, {
    key: "focus",
    value: function focus() {
      this._elementRef.nativeElement.focus();
    }
    /** Handles `input` events on the input element. */

  }, {
    key: "_onInput",
    value: function _onInput(value) {
      Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatDateRangeInputPartBase.prototype), "_onInput", this).call(this, value);

      this._rangeInput._handleChildValueChange();
    }
    /** Opens the datepicker associated with the input. */

  }, {
    key: "_openPopup",
    value: function _openPopup() {
      this._rangeInput._openDatepicker();
    }
    /** Gets the minimum date from the range input. */

  }, {
    key: "_getMinDate",
    value: function _getMinDate() {
      return this._rangeInput.min;
    }
    /** Gets the maximum date from the range input. */

  }, {
    key: "_getMaxDate",
    value: function _getMaxDate() {
      return this._rangeInput.max;
    }
    /** Gets the date filter function from the range input. */

  }, {
    key: "_getDateFilter",
    value: function _getDateFilter() {
      return this._rangeInput.dateFilter;
    }
  }, {
    key: "_parentDisabled",
    value: function _parentDisabled() {
      return this._rangeInput._groupDisabled;
    }
  }]);

  return MatDateRangeInputPartBase;
}(MatDatepickerInputBase);

MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) {
  return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8));
};

MatDateRangeInputPartBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatDateRangeInputPartBase,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

MatDateRangeInputPartBase.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_DATE_RANGE_INPUT_PARENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }];
  }, null);
})();

var _MatDateRangeInputBase = // Needs to be `as any`, because the base class is abstract.
Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["mixinErrorState"])(MatDateRangeInputPartBase);
/** Input for entering the start date in a `mat-date-range-input`. */


var MatStartDate = /*#__PURE__*/function (_MatDateRangeInputBas) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatStartDate, _MatDateRangeInputBas);

  var _super7 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatStartDate);

  function MatStartDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    var _thisSuper2, _this21;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatStartDate);

    // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
    // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
    // constructor once ViewEngine is removed.
    _this21 = _super7.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    /** Validator that checks that the start date isn't after the end date. */

    _this21._startValidator = function (control) {
      var start = _this21._dateAdapter.getValidDateOrNull(_this21._dateAdapter.deserialize(control.value));

      var end = _this21._model ? _this21._model.selection.end : null;
      return !start || !end || _this21._dateAdapter.compareDate(start, end) <= 0 ? null : {
        'matStartDateInvalid': {
          'end': end,
          'actual': start
        }
      };
    };

    _this21._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_23__["Validators"].compose([].concat(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])((_thisSuper2 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this21), Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatStartDate.prototype)), "_getValidators", _thisSuper2).call(_thisSuper2)), [_this21._startValidator]));

    _this21._canEmitChangeEvent = function (event) {
      return event.source !== _this21._rangeInput._endInput;
    };

    return _this21;
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatStartDate, [{
    key: "_getValueFromModel",
    value: function _getValueFromModel(modelValue) {
      return modelValue.start;
    }
  }, {
    key: "_assignValueToModel",
    value: function _assignValueToModel(value) {
      if (this._model) {
        var range = new DateRange(value, this._model.selection.end);

        this._model.updateSelection(range, this);

        this._cvaOnChange(value);
      }
    }
  }, {
    key: "_formatValue",
    value: function _formatValue(value) {
      Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatStartDate.prototype), "_formatValue", this).call(this, value); // Any time the input value is reformatted we need to tell the parent.


      this._rangeInput._handleChildValueChange();
    }
    /** Gets the value that should be used when mirroring the input's size. */

  }, {
    key: "getMirrorValue",
    value: function getMirrorValue() {
      var element = this._elementRef.nativeElement;
      var value = element.value;
      return value.length > 0 ? value : element.placeholder;
    }
  }]);

  return MatStartDate;
}(_MatDateRangeInputBase);

MatStartDate.ɵfac = function MatStartDate_Factory(t) {
  return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8));
};

MatStartDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatStartDate,
  selectors: [["input", "matStartDate", ""]],
  hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
  hostVars: 6,
  hostBindings: function MatStartDate_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatStartDate_change_HostBindingHandler() {
        return ctx._onChange();
      })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      })("blur", function MatStartDate_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵhostProperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("id", ctx._rangeInput.id)("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"],
    useExisting: MatStartDate,
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALIDATORS"],
    useExisting: MatStartDate,
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

MatStartDate.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatStartDate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: 'input[matStartDate]',
      host: {
        'class': 'mat-start-date mat-date-range-input-inner',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(keydown)': '_onKeydown($event)',
        '[attr.id]': '_rangeInput.id',
        '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
        '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
        '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
        '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
        '(blur)': '_onBlur()',
        'type': 'text'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"],
        useExisting: MatStartDate,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALIDATORS"],
        useExisting: MatStartDate,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_DATE_RANGE_INPUT_PARENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }];
  }, null);
})();
/** Input for entering the end date in a `mat-date-range-input`. */


var MatEndDate = /*#__PURE__*/function (_MatDateRangeInputBas2) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatEndDate, _MatDateRangeInputBas2);

  var _super8 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatEndDate);

  function MatEndDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    var _thisSuper3, _this22;

    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatEndDate);

    // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
    // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
    // constructor once ViewEngine is removed.
    _this22 = _super8.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    /** Validator that checks that the end date isn't before the start date. */

    _this22._endValidator = function (control) {
      var end = _this22._dateAdapter.getValidDateOrNull(_this22._dateAdapter.deserialize(control.value));

      var start = _this22._model ? _this22._model.selection.start : null;
      return !end || !start || _this22._dateAdapter.compareDate(end, start) >= 0 ? null : {
        'matEndDateInvalid': {
          'start': start,
          'actual': end
        }
      };
    };

    _this22._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_23__["Validators"].compose([].concat(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])((_thisSuper3 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this22), Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatEndDate.prototype)), "_getValidators", _thisSuper3).call(_thisSuper3)), [_this22._endValidator]));

    _this22._canEmitChangeEvent = function (event) {
      return event.source !== _this22._rangeInput._startInput;
    };

    return _this22;
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatEndDate, [{
    key: "_getValueFromModel",
    value: function _getValueFromModel(modelValue) {
      return modelValue.end;
    }
  }, {
    key: "_assignValueToModel",
    value: function _assignValueToModel(value) {
      if (this._model) {
        var range = new DateRange(this._model.selection.start, value);

        this._model.updateSelection(range, this);

        this._cvaOnChange(value);
      }
    }
  }, {
    key: "_onKeydown",
    value: function _onKeydown(event) {
      // If the user is pressing backspace on an empty end input, move focus back to the start.
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["BACKSPACE"] && !this._elementRef.nativeElement.value) {
        this._rangeInput._startInput.focus();
      }

      Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatEndDate.prototype), "_onKeydown", this).call(this, event);
    }
  }]);

  return MatEndDate;
}(_MatDateRangeInputBase);

MatEndDate.ɵfac = function MatEndDate_Factory(t) {
  return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], 8));
};

MatEndDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatEndDate,
  selectors: [["input", "matEndDate", ""]],
  hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
  hostVars: 5,
  hostBindings: function MatEndDate_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatEndDate_change_HostBindingHandler() {
        return ctx._onChange();
      })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      })("blur", function MatEndDate_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵhostProperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"],
    useExisting: MatEndDate,
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALIDATORS"],
    useExisting: MatEndDate,
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

MatEndDate.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatEndDate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: 'input[matEndDate]',
      host: {
        'class': 'mat-end-date mat-date-range-input-inner',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(keydown)': '_onKeydown($event)',
        '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
        '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
        '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
        '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
        '(blur)': '_onBlur()',
        'type': 'text'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"],
        useExisting: MatEndDate,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALIDATORS"],
        useExisting: MatEndDate,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_DATE_RANGE_INPUT_PARENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.

/** Component responsible for managing the date range picker popup/dialog. */


var MatDateRangePicker = /*#__PURE__*/function (_MatDatepickerBase2) {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatDateRangePicker, _MatDatepickerBase2);

  var _super9 = Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatDateRangePicker);

  function MatDateRangePicker() {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDateRangePicker);

    return _super9.apply(this, arguments);
  }

  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDateRangePicker, [{
    key: "_forwardContentValues",
    value: function _forwardContentValues(instance) {
      Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatDateRangePicker.prototype), "_forwardContentValues", this).call(this, instance);

      var input = this._datepickerInput;

      if (input) {
        instance.comparisonStart = input.comparisonStart;
        instance.comparisonEnd = input.comparisonEnd;
      }
    }
  }]);

  return MatDateRangePicker;
}(MatDatepickerBase);

MatDateRangePicker.ɵfac = function MatDateRangePicker_Factory(t) {
  return ɵMatDateRangePicker_BaseFactory(t || MatDateRangePicker);
};

MatDateRangePicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatDateRangePicker,
  selectors: [["mat-date-range-picker"]],
  exportAs: ["matDateRangePicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function MatDateRangePicker_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
var ɵMatDateRangePicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetInheritedFactory"](MatDateRangePicker);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDateRangePicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-date-range-picker',
      template: '',
      exportAs: 'matDateRangePicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId = 0;

var MatDateRangeInput = /*#__PURE__*/function () {
  function MatDateRangeInput(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
    Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDateRangeInput);

    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._formField = _formField;
    /** Unique ID for the input. */

    this.id = "mat-date-range-input-".concat(nextUniqueId++);
    /** Whether the control is focused. */

    this.focused = false;
    /** Name of the form control. */

    this.controlType = 'mat-date-range-input';
    this._groupDisabled = false;
    /** Value for the `aria-describedby` attribute of the inputs. */

    this._ariaDescribedBy = null;
    /** Separator text to be shown between the inputs. */

    this.separator = '–';
    /** Start of the comparison range that should be shown in the calendar. */

    this.comparisonStart = null;
    /** End of the comparison range that should be shown in the calendar. */

    this.comparisonEnd = null;
    /** Emits when the input's state has changed. */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();

    if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    } // TODO(crisbeto): remove `as any` after #18206 lands.


    this.ngControl = control;
  }
  /** Current value of the range input. */


  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatDateRangeInput, [{
    key: "value",
    get: function get() {
      return this._model ? this._model.selection : null;
    }
    /** Whether the control's label should float. */

  }, {
    key: "shouldLabelFloat",
    get: function get() {
      return this.focused || !this.empty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * Set the placeholder attribute on `matStartDate` and `matEndDate`.
     * @docs-private
     */

  }, {
    key: "placeholder",
    get: function get() {
      var _a, _b;

      var start = ((_a = this._startInput) === null || _a === void 0 ? void 0 : _a._getPlaceholder()) || '';
      var end = ((_b = this._endInput) === null || _b === void 0 ? void 0 : _b._getPlaceholder()) || '';
      return start || end ? "".concat(start, " ").concat(this.separator, " ").concat(end) : '';
    }
    /** The range picker that this input is associated with. */

  }, {
    key: "rangePicker",
    get: function get() {
      return this._rangePicker;
    },
    set: function set(rangePicker) {
      if (rangePicker) {
        this._model = rangePicker._registerInput(this);
        this._rangePicker = rangePicker;

        this._registerModel(this._model);
      }
    }
    /** Whether the input is required. */

  }, {
    key: "required",
    get: function get() {
      return !!this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value);
    }
    /** Function that can be used to filter out dates within the date range picker. */

  }, {
    key: "dateFilter",
    get: function get() {
      return this._dateFilter;
    },
    set: function set(value) {
      this._dateFilter = value;

      this._revalidate();
    }
    /** The minimum valid date. */

  }, {
    key: "min",
    get: function get() {
      return this._min;
    },
    set: function set(value) {
      var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

      if (!this._dateAdapter.sameDate(validValue, this._min)) {
        this._min = validValue;

        this._revalidate();
      }
    }
    /** The maximum valid date. */

  }, {
    key: "max",
    get: function get() {
      return this._max;
    },
    set: function set(value) {
      var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

      if (!this._dateAdapter.sameDate(validValue, this._max)) {
        this._max = validValue;

        this._revalidate();
      }
    }
    /** Whether the input is disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
    },
    set: function set(value) {
      var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value);

      if (newValue !== this._groupDisabled) {
        this._groupDisabled = newValue;
        this.stateChanges.next(undefined);
      }
    }
    /** Whether the input is in an error state. */

  }, {
    key: "errorState",
    get: function get() {
      if (this._startInput && this._endInput) {
        return this._startInput.errorState || this._endInput.errorState;
      }

      return false;
    }
    /** Whether the datepicker input is empty. */

  }, {
    key: "empty",
    get: function get() {
      var startEmpty = this._startInput ? this._startInput.isEmpty() : false;
      var endEmpty = this._endInput ? this._endInput.isEmpty() : false;
      return startEmpty && endEmpty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",
    value: function setDescribedByIds(ids) {
      this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick() {
      if (!this.focused && !this.disabled) {
        if (!this._model || !this._model.selection.start) {
          this._startInput.focus();
        } else {
          this._endInput.focus();
        }
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this23 = this;

      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._startInput) {
          throw Error('mat-date-range-input must contain a matStartDate input');
        }

        if (!this._endInput) {
          throw Error('mat-date-range-input must contain a matEndDate input');
        }
      }

      if (this._model) {
        this._registerModel(this._model);
      } // We don't need to unsubscribe from this, because we
      // know that the input streams will be completed on destroy.


      Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(function () {
        _this23.stateChanges.next(undefined);
      });
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (dateInputsHaveChanged(changes, this._dateAdapter)) {
        this.stateChanges.next(undefined);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stateChanges.complete();
    }
    /** Gets the date at which the calendar should start. */

  }, {
    key: "getStartValue",
    value: function getStartValue() {
      return this.value ? this.value.start : null;
    }
    /** Gets the input's theme palette. */

  }, {
    key: "getThemePalette",
    value: function getThemePalette() {
      return this._formField ? this._formField.color : undefined;
    }
    /** Gets the element to which the calendar overlay should be attached. */

  }, {
    key: "getConnectedOverlayOrigin",
    value: function getConnectedOverlayOrigin() {
      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the value that is used to mirror the state input. */

  }, {
    key: "_getInputMirrorValue",
    value: function _getInputMirrorValue() {
      return this._startInput ? this._startInput.getMirrorValue() : '';
    }
    /** Whether the input placeholders should be hidden. */

  }, {
    key: "_shouldHidePlaceholders",
    value: function _shouldHidePlaceholders() {
      return this._startInput ? !this._startInput.isEmpty() : false;
    }
    /** Handles the value in one of the child inputs changing. */

  }, {
    key: "_handleChildValueChange",
    value: function _handleChildValueChange() {
      this.stateChanges.next(undefined);

      this._changeDetectorRef.markForCheck();
    }
    /** Opens the date range picker associated with the input. */

  }, {
    key: "_openDatepicker",
    value: function _openDatepicker() {
      if (this._rangePicker) {
        this._rangePicker.open();
      }
    }
    /** Whether the separate text should be hidden. */

  }, {
    key: "_shouldHideSeparator",
    value: function _shouldHideSeparator() {
      return (!this._formField || this._formField._hideControlPlaceholder()) && this.empty;
    }
    /** Gets the value for the `aria-labelledby` attribute of the inputs. */

  }, {
    key: "_getAriaLabelledby",
    value: function _getAriaLabelledby() {
      var formField = this._formField;
      return formField && formField._hasFloatingLabel() ? formField._labelId : null;
    }
    /** Re-runs the validators on the start/end inputs. */

  }, {
    key: "_revalidate",
    value: function _revalidate() {
      if (this._startInput) {
        this._startInput._validatorOnChange();
      }

      if (this._endInput) {
        this._endInput._validatorOnChange();
      }
    }
    /** Registers the current date selection model with the start/end inputs. */

  }, {
    key: "_registerModel",
    value: function _registerModel(model) {
      if (this._startInput) {
        this._startInput._registerModel(model);
      }

      if (this._endInput) {
        this._endInput._registerModel(model);
      }
    }
  }]);

  return MatDateRangeInput;
}();

MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) {
  return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MAT_FORM_FIELD"], 8));
};

MatDateRangeInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatDateRangeInput,
  selectors: [["mat-date-range-input"]],
  contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, MatStartDate, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, MatEndDate, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
    }
  },
  hostAttrs: ["role", "group", 1, "mat-date-range-input"],
  hostVars: 8,
  hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("id", null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
    }
  },
  inputs: {
    separator: "separator",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd",
    rangePicker: "rangePicker",
    required: "required",
    dateFilter: "dateFilter",
    min: "min",
    max: "max",
    disabled: "disabled"
  },
  exportAs: ["matDateRangeInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldControl"],
    useExisting: MatDateRangeInput
  }, {
    provide: MAT_DATE_RANGE_INPUT_PARENT,
    useExisting: MatDateRangeInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c6,
  decls: 9,
  vars: 4,
  consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-start-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-end-wrapper"]],
  template: function MatDateRangeInput_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojectionDef"](_c5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
        return ctx.focused = $event !== null;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojection"](8, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx._getInputMirrorValue());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.separator);
    }
  },
  directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["CdkMonitorFocus"]],
  styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatDateRangeInput.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Self"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MAT_FORM_FIELD"]]
    }]
  }];
};

MatDateRangeInput.propDecorators = {
  rangePicker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  dateFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  min: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  max: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  separator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  comparisonEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  _startInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
    args: [MatStartDate]
  }],
  _endInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
    args: [MatEndDate]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDateRangeInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-date-range-input',
      template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"focused = $event !== null\">\n  <div class=\"mat-date-range-input-start-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue()}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n  </div>\n</div>\n\n",
      exportAs: 'matDateRangeInput',
      host: {
        'class': 'mat-date-range-input',
        '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
        '[class.mat-date-range-input-required]': 'required',
        '[attr.id]': 'null',
        'role': 'group',
        '[attr.aria-labelledby]': '_getAriaLabelledby()',
        '[attr.aria-describedby]': '_ariaDescribedBy',
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        '[attr.data-mat-calendar]': 'rangePicker ? rangePicker.id : null'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldControl"],
        useExisting: MatDateRangeInput
      }, {
        provide: MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: MatDateRangeInput
      }],
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Self"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MAT_FORM_FIELD"]]
      }]
    }];
  }, {
    separator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    rangePicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    _startInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
      args: [MatStartDate]
    }],
    _endInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
      args: [MatEndDate]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatDatepickerModule = function MatDatepickerModule() {
  Object(D_git_paul_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatDatepickerModule);
};

MatDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: MatDatepickerModule
});
MatDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  factory: function MatDatepickerModule_Factory(t) {
    return new (t || MatDatepickerModule)();
  },
  providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkScrollableModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MatDatepickerModule, {
    declarations: function declarations() {
      return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatDatepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"]],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
      declarations: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
      entryComponents: [MatDatepickerContent, MatCalendarHeader]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "m+Lf":
/*!********************************!*\
  !*** ./src/app/_model/cita.ts ***!
  \********************************/
/*! exports provided: Cita */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cita", function() { return Cita; });
var Cita = /** @class */ (function () {
    function Cita() {
    }
    return Cita;
}());



/***/ }),

/***/ "mDKE":
/*!*******************************************************************************!*\
  !*** ./src/app/pacientes/components/pacientes-reg/pacientes-reg.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PacientesRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesRegComponent", function() { return PacientesRegComponent; });
/* harmony import */ var _raw_loader_pacientes_reg_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./pacientes-reg.component.html */ "6RZi");
/* harmony import */ var _pacientes_reg_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pacientes-reg.component.css */ "RNHK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_model_paciente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_model/paciente */ "dor3");
/* harmony import */ var app_services_paciente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/_services/paciente.service */ "gbOS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PacientesRegComponent = /** @class */ (function () {
    function PacientesRegComponent(route, router, pacienteService) {
        this.route = route;
        this.router = router;
        this.pacienteService = pacienteService;
        this.paciente = new app_model_paciente__WEBPACK_IMPORTED_MODULE_4__["Paciente"]();
        this.isNew = true;
    }
    PacientesRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            console.log("params", params);
            _this.idPaciente = params['page'].split("_")[0] || 0;
            setTimeout(function () {
                if (_this.idPaciente != 0) {
                    _this.pacienteService.obtener(_this.idPaciente).subscribe(function (data) {
                        _this.paciente = data;
                    });
                }
            }, 500);
            console.log("parametro obtenido", _this.idPaciente);
        });
    };
    PacientesRegComponent.prototype.ngAfterViewInit = function () {
        if (this.idPaciente != 0)
            this.isNew = false;
    };
    PacientesRegComponent.prototype.save = function () {
        this.prepareToSave();
        this.previousState();
    };
    PacientesRegComponent.prototype.previousState = function () {
        this.router.navigate(['/pacientes']);
    };
    PacientesRegComponent.prototype.prepareToSave = function () {
        var _this = this;
        if (this.isNew) {
            this.pacienteService.create(this.paciente)
                .subscribe(function (data) {
                console.log("Entro al Success Create");
                if (data) {
                    _this.onSaveSuccess(data);
                }
            }, function (error) {
                console.log("Error en Grabación", JSON.parse(error._body));
                alert(JSON.parse(error._body).message);
            });
        }
        else {
            this.pacienteService.update(this.paciente)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
        }
    };
    PacientesRegComponent.prototype.onSaveSuccess = function (result) {
        this.previousState();
        console.log("OK", result);
    };
    PacientesRegComponent.prototype.onSaveError = function (error) {
        console.log("Error", error);
        //this.onError(error);
    };
    PacientesRegComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_services_paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"] }
    ]; };
    PacientesRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pacientes-reg',
            template: _raw_loader_pacientes_reg_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_pacientes_reg_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_services_paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"]])
    ], PacientesRegComponent);
    return PacientesRegComponent;
}());



/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var app_pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pacientes/pacientes.component */ "uEJH");
/* harmony import */ var app_doctores_doctores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/doctores/doctores.component */ "tCGr");
/* harmony import */ var app_citas_citas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/citas/citas.component */ "UVRA");
/* harmony import */ var app_especialidades_especialidades_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/especialidades/especialidades.component */ "l0Kc");
/* harmony import */ var app_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/usuarios/usuarios.component */ "86Pf");
/* harmony import */ var app_historia_historia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/historia/historia.component */ "sH4r");
/* harmony import */ var app_nomina_nomina_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/nomina/nomina.component */ "6PWE");
/* harmony import */ var app_costos_costos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/costos/costos.component */ "7aVg");
/* harmony import */ var app_impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/impuestos/impuestos.component */ "potb");
/* harmony import */ var app_doctores_components_doctores_reg_doctores_reg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/doctores/components/doctores-reg/doctores-reg.component */ "QvN5");
/* harmony import */ var app_pacientes_components_pacientes_reg_pacientes_reg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pacientes/components/pacientes-reg/pacientes-reg.component */ "mDKE");
/* harmony import */ var app_historia_components_historia_reg_historia_reg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/historia/components/historia-reg/historia-reg.component */ "c2KY");
/* harmony import */ var app_citas_components_citas_reg_citas_reg_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/citas/components/citas-reg/citas-reg.component */ "sbhi");
/* harmony import */ var app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/_guards/authguard.guard */ "l9Q1");

















var AdminLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'upgrade', component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_2__["UpgradeComponent"] },
    { path: 'especialidades', component: app_especialidades_especialidades_component__WEBPACK_IMPORTED_MODULE_6__["EspecialidadesComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'usuarios', component: app_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'nomina', component: app_nomina_nomina_component__WEBPACK_IMPORTED_MODULE_9__["NominaComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'costos', component: app_costos_costos_component__WEBPACK_IMPORTED_MODULE_10__["CostosComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'impuestos', component: app_impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_11__["ImpuestosComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'doctores', component: app_doctores_doctores_component__WEBPACK_IMPORTED_MODULE_4__["DoctoresComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'doctores/edit', component: app_doctores_components_doctores_reg_doctores_reg_component__WEBPACK_IMPORTED_MODULE_12__["DoctoresRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'doctores/new', component: app_doctores_components_doctores_reg_doctores_reg_component__WEBPACK_IMPORTED_MODULE_12__["DoctoresRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'historia', component: app_historia_historia_component__WEBPACK_IMPORTED_MODULE_8__["HistoriaComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'historia/edit', component: app_historia_components_historia_reg_historia_reg_component__WEBPACK_IMPORTED_MODULE_14__["HistoriaRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'historia/new', component: app_historia_components_historia_reg_historia_reg_component__WEBPACK_IMPORTED_MODULE_14__["HistoriaRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'citas', component: app_citas_citas_component__WEBPACK_IMPORTED_MODULE_5__["CitasComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'citas/edit', component: app_citas_components_citas_reg_citas_reg_component__WEBPACK_IMPORTED_MODULE_15__["CitasRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'citas/new', component: app_citas_components_citas_reg_citas_reg_component__WEBPACK_IMPORTED_MODULE_15__["CitasRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'pacientes', component: app_pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_3__["PacientesComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'pacientes/edit', component: app_pacientes_components_pacientes_reg_pacientes_reg_component__WEBPACK_IMPORTED_MODULE_13__["PacientesRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] },
    { path: 'pacientes/new', component: app_pacientes_components_pacientes_reg_pacientes_reg_component__WEBPACK_IMPORTED_MODULE_13__["PacientesRegComponent"], canActivate: [app_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthguardGuard"]] }
];


/***/ }),

/***/ "rm19":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/especialidades/components/especialidades-reg/especialidades-reg.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>especialidades-reg works!</p>\n");

/***/ }),

/***/ "sbhi":
/*!*******************************************************************!*\
  !*** ./src/app/citas/components/citas-reg/citas-reg.component.ts ***!
  \*******************************************************************/
/*! exports provided: CitasRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasRegComponent", function() { return CitasRegComponent; });
/* harmony import */ var _raw_loader_citas_reg_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./citas-reg.component.html */ "hSyq");
/* harmony import */ var _citas_reg_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citas-reg.component.css */ "xyAz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_model_cita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_model/cita */ "m+Lf");
/* harmony import */ var app_model_paciente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_model/paciente */ "dor3");
/* harmony import */ var app_model_doctor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/_model/doctor */ "fCvf");
/* harmony import */ var app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_services/doctor.service */ "595m");
/* harmony import */ var app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/_services/paciente.service */ "gbOS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_cita_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/_services/cita.service */ "JSU2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CitasRegComponent = /** @class */ (function () {
    function CitasRegComponent(doctorService, pacienteService, citaService, router, route) {
        this.doctorService = doctorService;
        this.pacienteService = pacienteService;
        this.citaService = citaService;
        this.router = router;
        this.route = route;
        this.isNew = true;
        this.cita = new app_model_cita__WEBPACK_IMPORTED_MODULE_3__["Cita"]();
        this.doctorSel = new app_model_doctor__WEBPACK_IMPORTED_MODULE_5__["Doctor"]();
        this.pacienteSel = new app_model_paciente__WEBPACK_IMPORTED_MODULE_4__["Paciente"]();
        this.doctores = [];
        this.pacientes = [];
    }
    CitasRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cita.mtoCita = 150.00;
        this.cita.indCancelado = false;
        this.sub = this.route.queryParams.subscribe(function (params) {
            console.log("params", params);
            _this.idCita = params['page'].split("_")[0] || 0;
            _this.doctorService.listar().subscribe(function (data) {
                if (data) {
                    _this.doctores = data;
                }
            });
            _this.pacienteService.listar().subscribe(function (data) {
                if (data) {
                    _this.pacientes = data;
                }
            });
            setTimeout(function () {
                if (_this.idCita != 0) {
                    _this.citaService.obtener(_this.idCita).subscribe(function (data) {
                        _this.cita = data;
                        _this.pacienteSel = _this.cita.paciente;
                        _this.doctorSel = _this.cita.doctor;
                    });
                }
            }, 500);
            console.log("parametro obtenido", _this.idCita);
        });
    };
    CitasRegComponent.prototype.onChangeSelectDoc = function (newObj) {
        var selectedObj = JSON.parse(newObj);
        this.doctorSel = selectedObj;
        console.log(this.doctorSel);
    };
    CitasRegComponent.prototype.onChangeSelectPac = function (newObj) {
        var selectedObj = JSON.parse(newObj);
        this.pacienteSel = selectedObj;
        console.log(this.pacienteSel);
    };
    CitasRegComponent.prototype.save = function () {
        this.prepareToSave();
        this.previousState();
    };
    CitasRegComponent.prototype.previousState = function () {
        this.router.navigate(['/citas']);
    };
    CitasRegComponent.prototype.prepareToSave = function () {
        var _this = this;
        if (this.isNew) {
            this.cita.paciente = this.pacienteSel;
            this.cita.doctor = this.doctorSel;
            this.cita.especialidad = this.doctorSel.especialidad;
            this.citaService.create(this.cita)
                .subscribe(function (data) {
                console.log("Entro al Success Create");
                if (data) {
                    _this.onSaveSuccess(data);
                }
            }, function (error) {
                console.log("Error en Grabación", JSON.parse(error._body));
                alert(JSON.parse(error._body).message);
            });
        }
        else {
            this.citaService.update(this.cita)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
        }
    };
    CitasRegComponent.prototype.onSaveSuccess = function (result) {
        this.previousState();
        console.log("OK", result);
    };
    CitasRegComponent.prototype.onSaveError = function (error) {
        console.log("Error", error);
        //this.onError(error);
    };
    CitasRegComponent.ctorParameters = function () { return [
        { type: app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"] },
        { type: app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__["PacienteService"] },
        { type: app_services_cita_service__WEBPACK_IMPORTED_MODULE_9__["CitaService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    CitasRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-citas-reg',
            template: _raw_loader_citas_reg_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_citas_reg_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"],
            app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__["PacienteService"],
            app_services_cita_service__WEBPACK_IMPORTED_MODULE_9__["CitaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], CitasRegComponent);
    return CitasRegComponent;
}());



/***/ }),

/***/ "uki+":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['Chartist'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /* Chartist.js 0.11.4
   * Copyright © 2019 Gion Kunz
   * Free to use under either the WTFPL license or the MIT license.
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
   */

  /**
   * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
   *
   * @module Chartist.Core
   */
  var Chartist = {
    version: '0.11.4'
  };

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * This object contains all namespaces used within Chartist.
     *
     * @memberof Chartist.Core
     * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
     */

    Chartist.namespaces = {
      svg: 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/xmlns/',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      ct: 'http://gionkunz.github.com/chartist-js/ct'
    };
    /**
     * Helps to simplify functional style code
     *
     * @memberof Chartist.Core
     * @param {*} n This exact value will be returned by the noop function
     * @return {*} The same value that was provided to the n parameter
     */

    Chartist.noop = function (n) {
      return n;
    };
    /**
     * Generates a-z from a number 0 to 26
     *
     * @memberof Chartist.Core
     * @param {Number} n A number from 0 to 26 that will result in a letter a-z
     * @return {String} A character from a-z based on the input number n
     */


    Chartist.alphaNumerate = function (n) {
      // Limit to a-z
      return String.fromCharCode(97 + n % 26);
    };
    /**
     * Simple recursive object extend
     *
     * @memberof Chartist.Core
     * @param {Object} target Target object where the source will be merged into
     * @param {Object...} sources This object (objects) will be merged into target and then target is returned
     * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
     */


    Chartist.extend = function (target) {
      var i, source, sourceProp;
      target = target || {};

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];

        for (var prop in source) {
          sourceProp = source[prop];

          if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
            target[prop] = Chartist.extend(target[prop], sourceProp);
          } else {
            target[prop] = sourceProp;
          }
        }
      }

      return target;
    };
    /**
     * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
     *
     * @memberof Chartist.Core
     * @param {String} str
     * @param {String} subStr
     * @param {String} newSubStr
     * @return {String}
     */


    Chartist.replaceAll = function (str, subStr, newSubStr) {
      return str.replace(new RegExp(subStr, 'g'), newSubStr);
    };
    /**
     * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
     *
     * @memberof Chartist.Core
     * @param {Number} value
     * @param {String} unit
     * @return {String} Returns the passed number value with unit.
     */


    Chartist.ensureUnit = function (value, unit) {
      if (typeof value === 'number') {
        value = value + unit;
      }

      return value;
    };
    /**
     * Converts a number or string to a quantity object.
     *
     * @memberof Chartist.Core
     * @param {String|Number} input
     * @return {Object} Returns an object containing the value as number and the unit as string.
     */


    Chartist.quantity = function (input) {
      if (typeof input === 'string') {
        var match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
          value: +match[1],
          unit: match[2] || undefined
        };
      }

      return {
        value: input
      };
    };
    /**
     * This is a wrapper around document.querySelector that will return the query if it's already of type Node
     *
     * @memberof Chartist.Core
     * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
     * @return {Node}
     */


    Chartist.querySelector = function (query) {
      return query instanceof Node ? query : document.querySelector(query);
    };
    /**
     * Functional style helper to produce array with given length initialized with undefined values
     *
     * @memberof Chartist.Core
     * @param length
     * @return {Array}
     */


    Chartist.times = function (length) {
      return Array.apply(null, new Array(length));
    };
    /**
     * Sum helper to be used in reduce functions
     *
     * @memberof Chartist.Core
     * @param previous
     * @param current
     * @return {*}
     */


    Chartist.sum = function (previous, current) {
      return previous + (current ? current : 0);
    };
    /**
     * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
     *
     * @memberof Chartist.Core
     * @param {Number} factor
     * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
     */


    Chartist.mapMultiply = function (factor) {
      return function (num) {
        return num * factor;
      };
    };
    /**
     * Add helper to be used in `Array.map` for adding a addend to each value of an array.
     *
     * @memberof Chartist.Core
     * @param {Number} addend
     * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
     */


    Chartist.mapAdd = function (addend) {
      return function (num) {
        return num + addend;
      };
    };
    /**
     * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
     *
     * @memberof Chartist.Core
     * @param arr
     * @param cb
     * @return {Array}
     */


    Chartist.serialMap = function (arr, cb) {
      var result = [],
          length = Math.max.apply(null, arr.map(function (e) {
        return e.length;
      }));
      Chartist.times(length).forEach(function (e, index) {
        var args = arr.map(function (e) {
          return e[index];
        });
        result[index] = cb.apply(null, args);
      });
      return result;
    };
    /**
     * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
     *
     * @memberof Chartist.Core
     * @param {Number} value The value that should be rounded with precision
     * @param {Number} [digits] The number of digits after decimal used to do the rounding
     * @returns {number} Rounded value
     */


    Chartist.roundWithPrecision = function (value, digits) {
      var precision = Math.pow(10, digits || Chartist.precision);
      return Math.round(value * precision) / precision;
    };
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     *
     * @memberof Chartist.Core
     * @type {number}
     */


    Chartist.precision = 8;
    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     *
     * @memberof Chartist.Core
     * @type {Object}
     */

    Chartist.escapingMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    /**
     * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
     * If called with null or undefined the function will return immediately with null or undefined.
     *
     * @memberof Chartist.Core
     * @param {Number|String|Object} data
     * @return {String}
     */

    Chartist.serialize = function (data) {
      if (data === null || data === undefined) {
        return data;
      } else if (typeof data === 'number') {
        data = '' + data;
      } else if (typeof data === 'object') {
        data = JSON.stringify({
          data: data
        });
      }

      return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
      }, data);
    };
    /**
     * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
     *
     * @memberof Chartist.Core
     * @param {String} data
     * @return {String|Number|Object}
     */


    Chartist.deserialize = function (data) {
      if (typeof data !== 'string') {
        return data;
      }

      data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
      }, data);

      try {
        data = JSON.parse(data);
        data = data.data !== undefined ? data.data : data;
      } catch (e) {}

      return data;
    };
    /**
     * Create or reinitialize the SVG element for the chart
     *
     * @memberof Chartist.Core
     * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
     * @param {String} width Set the width of the SVG element. Default is 100%
     * @param {String} height Set the height of the SVG element. Default is 100%
     * @param {String} className Specify a class to be added to the SVG element
     * @return {Object} The created/reinitialized SVG element
     */


    Chartist.createSvg = function (container, width, height, className) {
      var svg;
      width = width || '100%';
      height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
      // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

      Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
        return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
      }).forEach(function removePreviousElement(svg) {
        container.removeChild(svg);
      }); // Create svg object with width and height or use 100% as default

      svg = new Chartist.Svg('svg').attr({
        width: width,
        height: height
      }).addClass(className);
      svg._node.style.width = width;
      svg._node.style.height = height; // Add the DOM node to our container

      container.appendChild(svg._node);
      return svg;
    };
    /**
     * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
     *
     * @param  {Object} data The data object that is passed as second argument to the charts
     * @return {Object} The normalized data object
     */


    Chartist.normalizeData = function (data, reverse, multi) {
      var labelCount;
      var output = {
        raw: data,
        normalized: {}
      }; // Check if we should generate some labels based on existing series data

      output.normalized.series = Chartist.getDataArray({
        series: data.series || []
      }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
      // multi series data and we need to find the largest series if they are un-even

      if (output.normalized.series.every(function (value) {
        return value instanceof Array;
      })) {
        // Getting the series with the the most elements
        labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
          return series.length;
        }));
      } else {
        // We're dealing with Pie data so we just take the normalized array length
        labelCount = output.normalized.series.length;
      }

      output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

      Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
        return '';
      }));

      if (reverse) {
        Chartist.reverseData(output.normalized);
      }

      return output;
    };
    /**
     * This function safely checks if an objects has an owned property.
     *
     * @param {Object} object The object where to check for a property
     * @param {string} property The property name
     * @returns {boolean} Returns true if the object owns the specified property
     */


    Chartist.safeHasProperty = function (object, property) {
      return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
    };
    /**
     * Checks if a value is considered a hole in the data series.
     *
     * @param {*} value
     * @returns {boolean} True if the value is considered a data hole
     */


    Chartist.isDataHoleValue = function (value) {
      return value === null || value === undefined || typeof value === 'number' && isNaN(value);
    };
    /**
     * Reverses the series, labels and series data arrays.
     *
     * @memberof Chartist.Core
     * @param data
     */


    Chartist.reverseData = function (data) {
      data.labels.reverse();
      data.series.reverse();

      for (var i = 0; i < data.series.length; i++) {
        if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
          data.series[i].data.reverse();
        } else if (data.series[i] instanceof Array) {
          data.series[i].reverse();
        }
      }
    };
    /**
     * Convert data series into plain array
     *
     * @memberof Chartist.Core
     * @param {Object} data The series object that contains the data to be visualized in the chart
     * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
     * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
     * @return {Array} A plain array that contains the data to be visualized in the chart
     */


    Chartist.getDataArray = function (data, reverse, multi) {
      // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
      // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
      function recursiveConvert(value) {
        if (Chartist.safeHasProperty(value, 'value')) {
          // We are dealing with value object notation so we need to recurse on value property
          return recursiveConvert(value.value);
        } else if (Chartist.safeHasProperty(value, 'data')) {
          // We are dealing with series object notation so we need to recurse on data property
          return recursiveConvert(value.data);
        } else if (value instanceof Array) {
          // Data is of type array so we need to recurse on the series
          return value.map(recursiveConvert);
        } else if (Chartist.isDataHoleValue(value)) {
          // We're dealing with a hole in the data and therefore need to return undefined
          // We're also returning undefined for multi value output
          return undefined;
        } else {
          // We need to prepare multi value output (x and y data)
          if (multi) {
            var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
            // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
            // If multi is a string then it's assumed that it specified which dimension should be filled as default

            if (typeof multi === 'string') {
              multiValue[multi] = Chartist.getNumberOrUndefined(value);
            } else {
              multiValue.y = Chartist.getNumberOrUndefined(value);
            }

            multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
            multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
            return multiValue;
          } else {
            // We can return simple data
            return Chartist.getNumberOrUndefined(value);
          }
        }
      }

      return data.series.map(recursiveConvert);
    };
    /**
     * Converts a number into a padding object.
     *
     * @memberof Chartist.Core
     * @param {Object|Number} padding
     * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
     * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
     */


    Chartist.normalizePadding = function (padding, fallback) {
      fallback = fallback || 0;
      return typeof padding === 'number' ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      } : {
        top: typeof padding.top === 'number' ? padding.top : fallback,
        right: typeof padding.right === 'number' ? padding.right : fallback,
        bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
        left: typeof padding.left === 'number' ? padding.left : fallback
      };
    };

    Chartist.getMetaData = function (series, index) {
      var value = series.data ? series.data[index] : series[index];
      return value ? value.meta : undefined;
    };
    /**
     * Calculate the order of magnitude for the chart scale
     *
     * @memberof Chartist.Core
     * @param {Number} value The value Range of the chart
     * @return {Number} The order of magnitude
     */


    Chartist.orderOfMagnitude = function (value) {
      return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    };
    /**
     * Project a data length into screen coordinates (pixels)
     *
     * @memberof Chartist.Core
     * @param {Object} axisLength The svg element for the chart
     * @param {Number} length Single data value from a series array
     * @param {Object} bounds All the values to set the bounds of the chart
     * @return {Number} The projected data length in pixels
     */


    Chartist.projectLength = function (axisLength, length, bounds) {
      return length / bounds.range * axisLength;
    };
    /**
     * Get the height of the area in the chart for the data series
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @return {Number} The height of the area in the chart for the data series
     */


    Chartist.getAvailableHeight = function (svg, options) {
      return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
    };
    /**
     * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
     *
     * @memberof Chartist.Core
     * @param {Array} data The array that contains the data to be visualized in the chart
     * @param {Object} options The Object that contains the chart options
     * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
     * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
     */


    Chartist.getHighLow = function (data, options, dimension) {
      // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
      options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
      var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
      var findHigh = options.high === undefined;
      var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

      function recursiveHighLow(data) {
        if (data === undefined) {
          return undefined;
        } else if (data instanceof Array) {
          for (var i = 0; i < data.length; i++) {
            recursiveHighLow(data[i]);
          }
        } else {
          var value = dimension ? +data[dimension] : +data;

          if (findHigh && value > highLow.high) {
            highLow.high = value;
          }

          if (findLow && value < highLow.low) {
            highLow.low = value;
          }
        }
      } // Start to find highest and lowest number recursively


      if (findHigh || findLow) {
        recursiveHighLow(data);
      } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
      // used to generate the chart. This is useful when the chart always needs to contain the position of the
      // invisible reference value in the view i.e. for bipolar scales.


      if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
      } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
      // to set the high or low to 0 depending on the polarity


      if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) {
          highLow.high = 1;
        } else if (highLow.low < 0) {
          // If we have the same negative value for the bounds we set bounds.high to 0
          highLow.high = 0;
        } else if (highLow.high > 0) {
          // If we have the same positive value for the bounds we set bounds.low to 0
          highLow.low = 0;
        } else {
          // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
          highLow.high = 1;
          highLow.low = 0;
        }
      }

      return highLow;
    };
    /**
     * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {Boolean}
     */


    Chartist.isNumeric = function (value) {
      return value === null ? false : isFinite(value);
    };
    /**
     * Returns true on all falsey values except the numeric value 0.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {boolean}
     */


    Chartist.isFalseyButZero = function (value) {
      return !value && value !== 0;
    };
    /**
     * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {*}
     */


    Chartist.getNumberOrUndefined = function (value) {
      return Chartist.isNumeric(value) ? +value : undefined;
    };
    /**
     * Checks if provided value object is multi value (contains x or y properties)
     *
     * @memberof Chartist.Core
     * @param value
     */


    Chartist.isMultiValue = function (value) {
      return typeof value === 'object' && ('x' in value || 'y' in value);
    };
    /**
     * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
     *
     * @memberof Chartist.Core
     * @param value
     * @param dimension
     * @param defaultValue
     * @returns {*}
     */


    Chartist.getMultiValue = function (value, dimension) {
      if (Chartist.isMultiValue(value)) {
        return Chartist.getNumberOrUndefined(value[dimension || 'y']);
      } else {
        return Chartist.getNumberOrUndefined(value);
      }
    };
    /**
     * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
     *
     * @memberof Chartist.Core
     * @param {Number} num An integer number where the smallest factor should be searched for
     * @returns {Number} The smallest integer factor of the parameter num.
     */


    Chartist.rho = function (num) {
      if (num === 1) {
        return num;
      }

      function gcd(p, q) {
        if (p % q === 0) {
          return q;
        } else {
          return gcd(q, p % q);
        }
      }

      function f(x) {
        return x * x + 1;
      }

      var x1 = 2,
          x2 = 2,
          divisor;

      if (num % 2 === 0) {
        return 2;
      }

      do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
      } while (divisor === 1);

      return divisor;
    };
    /**
     * Calculate and retrieve all the bounds for the chart and return them in one array
     *
     * @memberof Chartist.Core
     * @param {Number} axisLength The length of the Axis used for
     * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
     * @param {Number} scaleMinSpace The minimum projected length a step should result in
     * @param {Boolean} onlyInteger
     * @return {Object} All the values to set the bounds of the chart
     */


    Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
      var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
        high: highLow.high,
        low: highLow.low
      };
      bounds.valueRange = bounds.high - bounds.low;
      bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
      bounds.step = Math.pow(10, bounds.oom);
      bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
      bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
      bounds.range = bounds.max - bounds.min;
      bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
      // If we are already below the scaleMinSpace value we will scale up

      var length = Chartist.projectLength(axisLength, bounds.step, bounds);
      var scaleUp = length < scaleMinSpace;
      var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

      if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
        bounds.step = 1;
      } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
        // If step 1 was too small, we can try the smallest factor of range
        // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
        // is larger than the scaleMinSpace we should go for it.
        bounds.step = smallestFactor;
      } else {
        // Trying to divide or multiply by 2 and find the best step value
        while (true) {
          if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
            bounds.step *= 2;
          } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
            bounds.step /= 2;

            if (onlyInteger && bounds.step % 1 !== 0) {
              bounds.step *= 2;
              break;
            }
          } else {
            break;
          }

          if (optimizationCounter++ > 1000) {
            throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
          }
        }
      }

      var EPSILON = 2.221E-16;
      bounds.step = Math.max(bounds.step, EPSILON);

      function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) {
          value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        }

        return value;
      } // Narrow min and max based on new step


      newMin = bounds.min;
      newMax = bounds.max;

      while (newMin + bounds.step <= bounds.low) {
        newMin = safeIncrement(newMin, bounds.step);
      }

      while (newMax - bounds.step >= bounds.high) {
        newMax = safeIncrement(newMax, -bounds.step);
      }

      bounds.min = newMin;
      bounds.max = newMax;
      bounds.range = bounds.max - bounds.min;
      var values = [];

      for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
        var value = Chartist.roundWithPrecision(i);

        if (value !== values[values.length - 1]) {
          values.push(value);
        }
      }

      bounds.values = values;
      return bounds;
    };
    /**
     * Calculate cartesian coordinates of polar coordinates
     *
     * @memberof Chartist.Core
     * @param {Number} centerX X-axis coordinates of center point of circle segment
     * @param {Number} centerY X-axis coordinates of center point of circle segment
     * @param {Number} radius Radius of circle segment
     * @param {Number} angleInDegrees Angle of circle segment in degrees
     * @return {{x:Number, y:Number}} Coordinates of point on circumference
     */


    Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    };
    /**
     * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
     * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
     */


    Chartist.createChartRect = function (svg, options, fallbackPadding) {
      var hasAxis = !!(options.axisX || options.axisY);
      var yAxisOffset = hasAxis ? options.axisY.offset : 0;
      var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

      var width = svg.width() || Chartist.quantity(options.width).value || 0;
      var height = svg.height() || Chartist.quantity(options.height).value || 0;
      var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

      width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
      height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
      var chartRect = {
        padding: normalizedPadding,
        width: function width() {
          return this.x2 - this.x1;
        },
        height: function height() {
          return this.y1 - this.y2;
        }
      };

      if (hasAxis) {
        if (options.axisX.position === 'start') {
          chartRect.y2 = normalizedPadding.top + xAxisOffset;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }

        if (options.axisY.position === 'start') {
          chartRect.x1 = normalizedPadding.left + yAxisOffset;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      }

      return chartRect;
    };
    /**
     * Creates a grid line based on a projected value.
     *
     * @memberof Chartist.Core
     * @param position
     * @param index
     * @param axis
     * @param offset
     * @param length
     * @param group
     * @param classes
     * @param eventEmitter
     */


    Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
      var positionalData = {};
      positionalData[axis.units.pos + '1'] = position;
      positionalData[axis.units.pos + '2'] = position;
      positionalData[axis.counterUnits.pos + '1'] = offset;
      positionalData[axis.counterUnits.pos + '2'] = offset + length;
      var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

      eventEmitter.emit('draw', Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData));
    };
    /**
     * Creates a grid background rect and emits the draw event.
     *
     * @memberof Chartist.Core
     * @param gridGroup
     * @param chartRect
     * @param className
     * @param eventEmitter
     */


    Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
      var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
      }, className, true); // Event for grid background draw

      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
    };
    /**
     * Creates a label based on a projected value and an axis.
     *
     * @memberof Chartist.Core
     * @param position
     * @param length
     * @param index
     * @param labels
     * @param axis
     * @param axisOffset
     * @param labelOffset
     * @param group
     * @param classes
     * @param useForeignObject
     * @param eventEmitter
     */


    Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
      var labelElement;
      var positionalData = {};
      positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
      positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
      positionalData[axis.units.len] = length;
      positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

      if (useForeignObject) {
        // We need to set width and height explicitly to px as span will not expand with width and height being
        // 100% in all browsers
        var content = document.createElement('span');
        content.className = classes.join(' ');
        content.setAttribute('xmlns', Chartist.namespaces.xhtml);
        content.innerText = labels[index];
        content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
        content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
        labelElement = group.foreignObject(content, Chartist.extend({
          style: 'overflow: visible;'
        }, positionalData));
      } else {
        labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
      }

      eventEmitter.emit('draw', Chartist.extend({
        type: 'label',
        axis: axis,
        index: index,
        group: group,
        element: labelElement,
        text: labels[index]
      }, positionalData));
    };
    /**
     * Helper to read series specific options from options object. It automatically falls back to the global option if
     * there is no option in the series options.
     *
     * @param {Object} series Series object
     * @param {Object} options Chartist options object
     * @param {string} key The options key that should be used to obtain the options
     * @returns {*}
     */


    Chartist.getSeriesOption = function (series, options, key) {
      if (series.name && options.series && options.series[series.name]) {
        var seriesOptions = options.series[series.name];
        return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
      } else {
        return options[key];
      }
    };
    /**
     * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
     *
     * @memberof Chartist.Core
     * @param {Object} options Options set by user
     * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
     * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
     * @return {Object} The consolidated options object from the defaults, base and matching responsive options
     */


    Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
      var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;

      function updateCurrentOptions(mediaEvent) {
        var previousOptions = currentOptions;
        currentOptions = Chartist.extend({}, baseOptions);

        if (responsiveOptions) {
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);

            if (mql.matches) {
              currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
            }
          }
        }

        if (eventEmitter && mediaEvent) {
          eventEmitter.emit('optionsChanged', {
            previousOptions: previousOptions,
            currentOptions: currentOptions
          });
        }
      }

      function removeMediaQueryListeners() {
        mediaQueryListeners.forEach(function (mql) {
          mql.removeListener(updateCurrentOptions);
        });
      }

      if (!window.matchMedia) {
        throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
      } else if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          mql.addListener(updateCurrentOptions);
          mediaQueryListeners.push(mql);
        }
      } // Execute initially without an event argument so we get the correct options


      updateCurrentOptions();
      return {
        removeMediaQueryListeners: removeMediaQueryListeners,
        getCurrentOptions: function getCurrentOptions() {
          return Chartist.extend({}, currentOptions);
        }
      };
    };
    /**
     * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
     * valueData property describing the segment.
     *
     * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
     * points with undefined values are discarded.
     *
     * **Options**
     * The following options are used to determine how segments are formed
     * ```javascript
     * var options = {
     *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
     *   fillHoles: false,
     *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
     *   increasingX: false
     * };
     * ```
     *
     * @memberof Chartist.Core
     * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
     * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
     * @param {Object} options Options set by user
     * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
     */


    Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
      var defaultOptions = {
        increasingX: false,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var segments = [];
      var hole = true;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
          // if(valueData[i / 2].value === undefined) {
          if (!options.fillHoles) {
            hole = true;
          }
        } else {
          if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
            // X is not increasing, so we need to make sure we start a new segment
            hole = true;
          } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


          if (hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            }); // As we have a valid value now, we are not in a "hole" anymore

            hole = false;
          } // Add to the segment pathCoordinates and valueData


          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    };
  })(this || global, Chartist);

  ;
  /**
  * Chartist path interpolation functions.
  *
  * @module Chartist.Interpolation
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.Interpolation = {};
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.none({
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @return {Function}
     */

    Chartist.Interpolation.none = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function none(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var hole = true;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2];

          if (Chartist.getMultiValue(currData.value) !== undefined) {
            if (hole) {
              path.move(currX, currY, false, currData);
            } else {
              path.line(currX, currY, false, currData);
            }

            hole = false;
          } else if (!options.fillHoles) {
            hole = true;
          }
        }

        return path;
      };
    };
    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     *
     * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.simple({
     *     divisor: 2,
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the simple interpolation factory function.
     * @return {Function}
     */


    Chartist.Interpolation.simple = function (options) {
      var defaultOptions = {
        divisor: 2,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var d = 1 / Math.max(1, options.divisor);
      return function simple(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var length = (currX - prevX) * d;
          var currData = valueData[i / 2];

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = currX = prevData = undefined;
          }
        }

        return path;
      };
    };
    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     *
     * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 1,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the cardinal factory function.
     * @return {Function}
     */


    Chartist.Interpolation.cardinal = function (options) {
      var defaultOptions = {
        tension: 1,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
      return function cardinal(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the cardinal function

          segments.forEach(function (segment) {
            paths.push(cardinal(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;

          for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +pathCoordinates[i - 2],
              y: +pathCoordinates[i - 1]
            }, {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            }, {
              x: +pathCoordinates[i + 2],
              y: +pathCoordinates[i + 3]
            }, {
              x: +pathCoordinates[i + 4],
              y: +pathCoordinates[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +pathCoordinates[iLen - 2],
                  y: +pathCoordinates[iLen - 1]
                };
              } else if (iLen - 4 === i) {
                p[3] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
              } else if (iLen - 2 === i) {
                p[2] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
                p[3] = {
                  x: +pathCoordinates[2],
                  y: +pathCoordinates[3]
                };
              }
            } else {
              if (iLen - 4 === i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                };
              }
            }

            path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
          }

          return path;
        }
      };
    };
    /**
     * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
     *
     * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.monotoneCubic({
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the monotoneCubic factory function.
     * @return {Function}
     */


    Chartist.Interpolation.monotoneCubic = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function monotoneCubic(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles,
          increasingX: true
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the monotoneCubic fn function

          segments.forEach(function (segment) {
            paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var xs = [],
              ys = [],
              i,
              n = pathCoordinates.length / 2,
              ms = [],
              ds = [],
              dys = [],
              dxs = [],
              path; // Populate x and y coordinates into separate arrays, for readability

          for (i = 0; i < n; i++) {
            xs[i] = pathCoordinates[i * 2];
            ys[i] = pathCoordinates[i * 2 + 1];
          } // Calculate deltas and derivative


          for (i = 0; i < n - 1; i++) {
            dys[i] = ys[i + 1] - ys[i];
            dxs[i] = xs[i + 1] - xs[i];
            ds[i] = dys[i] / dxs[i];
          } // Determine desired slope (m) at each point using Fritsch-Carlson method
          // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


          ms[0] = ds[0];
          ms[n - 1] = ds[n - 2];

          for (i = 1; i < n - 1; i++) {
            if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
              ms[i] = 0;
            } else {
              ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

              if (!isFinite(ms[i])) {
                ms[i] = 0;
              }
            }
          } // Now build a path from the slopes


          path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

          for (i = 0; i < n - 1; i++) {
            path.curve( // First control point
            xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
            xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
            xs[i + 1], ys[i + 1], false, valueData[i + 1]);
          }

          return path;
        }
      };
    };
    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.step({
     *     postpone: true,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param options
     * @returns {Function}
     */


    Chartist.Interpolation.step = function (options) {
      var defaultOptions = {
        postpone: true,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function step(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              if (options.postpone) {
                // If postponed we should draw the step line with the value of the previous value
                path.line(currX, prevY, false, prevData);
              } else {
                // If not postponed we should draw the step line with the value of the current value
                path.line(prevX, currY, false, currData);
              } // Line to the actual point (this should only be a Y-Axis movement


              path.line(currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = prevY = prevData = undefined;
          }
        }

        return path;
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * A very basic event module that helps to generate and catch events.
  *
  * @module Chartist.Event
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.EventEmitter = function () {
      var handlers = [];
      /**
       * Add an event handler for a specific event
       *
       * @memberof Chartist.Event
       * @param {String} event The event name
       * @param {Function} handler A event handler function
       */

      function addEventHandler(event, handler) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      }
      /**
       * Remove an event handler of a specific event name or remove all event handlers for a specific event.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name where a specific or all handlers should be removed
       * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
       */


      function removeEventHandler(event, handler) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          // If handler is set we will look for a specific handler and only remove this
          if (handler) {
            handlers[event].splice(handlers[event].indexOf(handler), 1);

            if (handlers[event].length === 0) {
              delete handlers[event];
            }
          } else {
            // If no handler is specified we remove all handlers for this event
            delete handlers[event];
          }
        }
      }
      /**
       * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name that should be triggered
       * @param {*} data Arbitrary data that will be passed to the event handler callback functions
       */


      function emit(event, data) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          handlers[event].forEach(function (handler) {
            handler(data);
          });
        } // Emit event to star event handlers


        if (handlers['*']) {
          handlers['*'].forEach(function (starHandler) {
            starHandler(event, data);
          });
        }
      }

      return {
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler,
        emit: emit
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * This module provides some basic prototype inheritance utilities.
  *
  * @module Chartist.Class
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    function listToArray(list) {
      var arr = [];

      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i]);
        }
      }

      return arr;
    }
    /**
     * Method to extend from current prototype.
     *
     * @memberof Chartist.Class
     * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
     * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
     * @return {Function} Constructor function of the new class
     *
     * @example
     * var Fruit = Class.extend({
       * color: undefined,
       *   sugar: undefined,
       *
       *   constructor: function(color, sugar) {
       *     this.color = color;
       *     this.sugar = sugar;
       *   },
       *
       *   eat: function() {
       *     this.sugar = 0;
       *     return this;
       *   }
       * });
     *
     * var Banana = Fruit.extend({
       *   length: undefined,
       *
       *   constructor: function(length, sugar) {
       *     Banana.super.constructor.call(this, 'Yellow', sugar);
       *     this.length = length;
       *   }
       * });
     *
     * var banana = new Banana(20, 40);
     * console.log('banana instanceof Fruit', banana instanceof Fruit);
     * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
     * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
     * console.log(banana.sugar);
     * console.log(banana.eat().sugar);
     * console.log(banana.color);
     */


    function extend(properties, superProtoOverride) {
      var superProto = superProtoOverride || this.prototype || Chartist.Class;
      var proto = Object.create(superProto);
      Chartist.Class.cloneDefinitions(proto, properties);

      var constr = function constr() {
        var fn = proto.constructor || function () {},
            instance; // If this is linked to the Chartist namespace the constructor was not called with new
        // To provide a fallback we will instantiate here and return the instance


        instance = this === Chartist ? Object.create(proto) : this;
        fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
        // This will not harm when the constructor has been called with new as the returned value is ignored

        return instance;
      };

      constr.prototype = proto;
      constr.super = superProto;
      constr.extend = this.extend;
      return constr;
    } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


    function cloneDefinitions() {
      var args = listToArray(arguments);
      var target = args[0];
      args.splice(1, args.length - 1).forEach(function (source) {
        Object.getOwnPropertyNames(source).forEach(function (propName) {
          // If this property already exist in target we delete it first
          delete target[propName]; // Define the property with the descriptor from source

          Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
      });
      return target;
    }

    Chartist.Class = {
      extend: extend,
      cloneDefinitions: cloneDefinitions
    };
  })(this || global, Chartist);

  ;
  /**
  * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
  *
  * @module Chartist.Base
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

    /**
     * Updates the chart which currently does a full reconstruction of the SVG DOM
     *
     * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
     * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
     * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
     * @memberof Chartist.Base
     */

    function update(data, options, override) {
      if (data) {
        this.data = data || {};
        this.data.labels = this.data.labels || [];
        this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

        this.eventEmitter.emit('data', {
          type: 'update',
          data: this.data
        });
      }

      if (options) {
        this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
        // Otherwise we re-create the optionsProvider at this point

        if (!this.initializeTimeoutId) {
          this.optionsProvider.removeMediaQueryListeners();
          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        }
      } // Only re-created the chart if it has been initialized yet


      if (!this.initializeTimeoutId) {
        this.createChart(this.optionsProvider.getCurrentOptions());
      } // Return a reference to the chart object to chain up calls


      return this;
    }
    /**
     * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
     *
     * @memberof Chartist.Base
     */


    function detach() {
      // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
      // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
      if (!this.initializeTimeoutId) {
        window.removeEventListener('resize', this.resizeListener);
        this.optionsProvider.removeMediaQueryListeners();
      } else {
        window.clearTimeout(this.initializeTimeoutId);
      }

      return this;
    }
    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */


    function on(event, handler) {
      this.eventEmitter.addEventHandler(event, handler);
      return this;
    }
    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event for which a handler should be removed
     * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */


    function off(event, handler) {
      this.eventEmitter.removeEventHandler(event, handler);
      return this;
    }

    function initialize() {
      // Add window resize listener that re-creates the chart
      window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
      // This will also register a listener that is re-creating the chart based on media changes

      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

      this.eventEmitter.addEventHandler('optionsChanged', function () {
        this.update();
      }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
      // Initialize all relevant plugins with our chart object and the plugin options specified in the config

      if (this.options.plugins) {
        this.options.plugins.forEach(function (plugin) {
          if (plugin instanceof Array) {
            plugin[0](this, plugin[1]);
          } else {
            plugin(this);
          }
        }.bind(this));
      } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


      this.eventEmitter.emit('data', {
        type: 'initial',
        data: this.data
      }); // Create the first chart

      this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
      // This is important if the chart gets initialized on the same element twice

      this.initializeTimeoutId = undefined;
    }
    /**
     * Constructor of chart base class.
     *
     * @param query
     * @param data
     * @param defaultOptions
     * @param options
     * @param responsiveOptions
     * @constructor
     */


    function Base(query, data, defaultOptions, options, responsiveOptions) {
      this.container = Chartist.querySelector(query);
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.defaultOptions = defaultOptions;
      this.options = options;
      this.responsiveOptions = responsiveOptions;
      this.eventEmitter = Chartist.EventEmitter();
      this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
      this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

      this.resizeListener = function resizeListener() {
        this.update();
      }.bind(this);

      if (this.container) {
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (this.container.__chartist__) {
          this.container.__chartist__.detach();
        }

        this.container.__chartist__ = this;
      } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
      // the chart was created.


      this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
    } // Creating the chart base class


    Chartist.Base = Chartist.Class.extend({
      constructor: Base,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function createChart() {
        throw new Error('Base chart type can\'t be instantiated!');
      },
      update: update,
      detach: detach,
      on: on,
      off: off,
      version: Chartist.version,
      supportsForeignObject: false
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG module for simple SVG DOM abstraction
  *
  * @module Chartist.Svg
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var document = globalRoot.document;
    /**
     * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
     *
     * @memberof Chartist.Svg
     * @constructor
     * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
     * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} className This class or class list will be added to the SVG element
     * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
     * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     */

    function Svg(name, attributes, className, parent, insertFirst) {
      // If Svg is getting called with an SVG element we just return the wrapper
      if (name instanceof Element) {
        this._node = name;
      } else {
        this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

        if (name === 'svg') {
          this.attr({
            'xmlns:ct': Chartist.namespaces.ct
          });
        }
      }

      if (attributes) {
        this.attr(attributes);
      }

      if (className) {
        this.addClass(className);
      }

      if (parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     *
     * @memberof Chartist.Svg
     * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
     * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
     * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
     */


    function attr(attributes, ns) {
      if (typeof attributes === 'string') {
        if (ns) {
          return this._node.getAttributeNS(ns, attributes);
        } else {
          return this._node.getAttribute(attributes);
        }
      }

      Object.keys(attributes).forEach(function (key) {
        // If the attribute value is undefined we can skip this one
        if (attributes[key] === undefined) {
          return;
        }

        if (key.indexOf(':') !== -1) {
          var namespacedAttribute = key.split(':');

          this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
        } else {
          this._node.setAttribute(key, attributes[key]);
        }
      }.bind(this));
      return this;
    }
    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     *
     * @memberof Chartist.Svg
     * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
     * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
     */


    function elem(name, attributes, className, insertFirst) {
      return new Chartist.Svg(name, attributes, className, this, insertFirst);
    }
    /**
     * Returns the parent Chartist.SVG wrapper object
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
     */


    function parent() {
      return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
    }
    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
     */


    function root() {
      var node = this._node;

      while (node.nodeName !== 'svg') {
        node = node.parentNode;
      }

      return new Chartist.Svg(node);
    }
    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
     */


    function querySelector(selector) {
      var foundNode = this._node.querySelector(selector);

      return foundNode ? new Chartist.Svg(foundNode) : null;
    }
    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
     */


    function querySelectorAll(selector) {
      var foundNodes = this._node.querySelectorAll(selector);

      return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
    }
    /**
     * Returns the underlying SVG node for the current element.
     *
     * @memberof Chartist.Svg
     * @returns {Node}
     */


    function getNode() {
      return this._node;
    }
    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     *
     * @memberof Chartist.Svg
     * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
     * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
     * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
     */


    function foreignObject(content, attributes, className, insertFirst) {
      // If content is string then we convert it to DOM
      // TODO: Handle case where content is not a string nor a DOM Node
      if (typeof content === 'string') {
        var container = document.createElement('div');
        container.innerHTML = content;
        content = container.firstChild;
      } // Adding namespace to content element


      content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
      // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

      var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

      fnObj._node.appendChild(content);

      return fnObj;
    }
    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} t The text that should be added to the text element that is created
     * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
     */


    function text(t) {
      this._node.appendChild(document.createTextNode(t));

      return this;
    }
    /**
     * This method will clear all child nodes of the current wrapper object.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The same wrapper object that got emptied
     */


    function empty() {
      while (this._node.firstChild) {
        this._node.removeChild(this._node.firstChild);
      }

      return this;
    }
    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The parent wrapper object of the element that got removed
     */


    function remove() {
      this._node.parentNode.removeChild(this._node);

      return this.parent();
    }
    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
     * @return {Chartist.Svg} The wrapper of the new element
     */


    function replace(newElement) {
      this._node.parentNode.replaceChild(newElement._node, this._node);

      return newElement;
    }
    /**
     * This method will append an element to the current element as a child.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
     * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
     * @return {Chartist.Svg} The wrapper of the appended object
     */


    function append(element, insertFirst) {
      if (insertFirst && this._node.firstChild) {
        this._node.insertBefore(element._node, this._node.firstChild);
      } else {
        this._node.appendChild(element._node);
      }

      return this;
    }
    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     *
     * @memberof Chartist.Svg
     * @return {Array} A list of classes or an empty array if there are no classes on the current element
     */


    function classes() {
      return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
    }
    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function addClass(names) {
      this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      }).join(' '));

      return this;
    }
    /**
     * Removes one or a space separated list of classes from the current element.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeClass(names) {
      var removedClasses = names.trim().split(/\s+/);

      this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
        return removedClasses.indexOf(name) === -1;
      }).join(' '));

      return this;
    }
    /**
     * Removes all classes from the current element.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeAllClasses() {
      this._node.setAttribute('class', '');

      return this;
    }
    /**
     * Get element height using `getBoundingClientRect`
     *
     * @memberof Chartist.Svg
     * @return {Number} The elements height in pixels
     */


    function height() {
      return this._node.getBoundingClientRect().height;
    }
    /**
     * Get element width using `getBoundingClientRect`
     *
     * @memberof Chartist.Core
     * @return {Number} The elements width in pixels
     */


    function width() {
      return this._node.getBoundingClientRect().width;
    }
    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
     * **An animations object could look like this:**
     * ```javascript
     * element.animate({
     *   opacity: {
     *     dur: 1000,
     *     from: 0,
     *     to: 1
     *   },
     *   x1: {
     *     dur: '1000ms',
     *     from: 100,
     *     to: 200,
     *     easing: 'easeOutQuart'
     *   },
     *   y1: {
     *     dur: '2s',
     *     from: 0,
     *     to: 100
     *   }
     * });
     * ```
     * **Automatic unit conversion**
     * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
     * **Guided mode**
     * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
     * If guided mode is enabled the following behavior is added:
     * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
     * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
     * - The animate element will be forced to use `fill="freeze"`
     * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
     * - After the animation the element attribute value will be set to the `to` value of the animation
     * - The animate element is deleted from the DOM
     *
     * @memberof Chartist.Svg
     * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
     * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
     * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
     * @return {Chartist.Svg} The current element where the animation was added
     */


    function animate(animations, guided, eventEmitter) {
      if (guided === undefined) {
        guided = true;
      }

      Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
        function createAnimate(animationDefinition, guided) {
          var attributeProperties = {},
              animate,
              timeout,
              easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
          // be part of the animate element attributes.

          if (animationDefinition.easing) {
            // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
            easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
            delete animationDefinition.easing;
          } // If numeric dur or begin was provided we assume milli seconds


          animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
          animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

          if (easing) {
            animationDefinition.calcMode = 'spline';
            animationDefinition.keySplines = easing.join(' ');
            animationDefinition.keyTimes = '0;1';
          } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


          if (guided) {
            animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

            attributeProperties[attribute] = animationDefinition.from;
            this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
            // which needs to be in ms aside

            timeout = Chartist.quantity(animationDefinition.begin || 0).value;
            animationDefinition.begin = 'indefinite';
          }

          animate = this.elem('animate', Chartist.extend({
            attributeName: attribute
          }, animationDefinition));

          if (guided) {
            // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
            setTimeout(function () {
              // If beginElement fails we set the animated attribute to the end position and remove the animate element
              // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
              // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
              try {
                animate._node.beginElement();
              } catch (err) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties); // Remove the animate element as it's no longer required

                animate.remove();
              }
            }.bind(this), timeout);
          }

          if (eventEmitter) {
            animate._node.addEventListener('beginEvent', function handleBeginEvent() {
              eventEmitter.emit('animationBegin', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }.bind(this));
          }

          animate._node.addEventListener('endEvent', function handleEndEvent() {
            if (eventEmitter) {
              eventEmitter.emit('animationEnd', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }

            if (guided) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties); // Remove the animate element as it's no longer required

              animate.remove();
            }
          }.bind(this));
        } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


        if (animations[attribute] instanceof Array) {
          animations[attribute].forEach(function (animationDefinition) {
            createAnimate.bind(this)(animationDefinition, false);
          }.bind(this));
        } else {
          createAnimate.bind(this)(animations[attribute], guided);
        }
      }.bind(this));
      return this;
    }

    Chartist.Svg = Chartist.Class.extend({
      constructor: Svg,
      attr: attr,
      elem: elem,
      parent: parent,
      root: root,
      querySelector: querySelector,
      querySelectorAll: querySelectorAll,
      getNode: getNode,
      foreignObject: foreignObject,
      text: text,
      empty: empty,
      remove: remove,
      replace: replace,
      append: append,
      classes: classes,
      addClass: addClass,
      removeClass: removeClass,
      removeAllClasses: removeAllClasses,
      height: height,
      width: width,
      animate: animate
    });
    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     *
     * @memberof Chartist.Svg
     * @param {String} feature The SVG 1.1 feature that should be checked for support.
     * @return {Boolean} True of false if the feature is supported or not
     */

    Chartist.Svg.isSupported = function (feature) {
      return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
    };
    /**
     * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
     *
     * @memberof Chartist.Svg
     */


    var easingCubicBeziers = {
      easeInSine: [0.47, 0, 0.745, 0.715],
      easeOutSine: [0.39, 0.575, 0.565, 1],
      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
      easeInQuad: [0.55, 0.085, 0.68, 0.53],
      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
      easeInCubic: [0.55, 0.055, 0.675, 0.19],
      easeOutCubic: [0.215, 0.61, 0.355, 1],
      easeInOutCubic: [0.645, 0.045, 0.355, 1],
      easeInQuart: [0.895, 0.03, 0.685, 0.22],
      easeOutQuart: [0.165, 0.84, 0.44, 1],
      easeInOutQuart: [0.77, 0, 0.175, 1],
      easeInQuint: [0.755, 0.05, 0.855, 0.06],
      easeOutQuint: [0.23, 1, 0.32, 1],
      easeInOutQuint: [0.86, 0, 0.07, 1],
      easeInExpo: [0.95, 0.05, 0.795, 0.035],
      easeOutExpo: [0.19, 1, 0.22, 1],
      easeInOutExpo: [1, 0, 0, 1],
      easeInCirc: [0.6, 0.04, 0.98, 0.335],
      easeOutCirc: [0.075, 0.82, 0.165, 1],
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      easeInBack: [0.6, -0.28, 0.735, 0.045],
      easeOutBack: [0.175, 0.885, 0.32, 1.275],
      easeInOutBack: [0.68, -0.55, 0.265, 1.55]
    };
    Chartist.Svg.Easing = easingCubicBeziers;
    /**
     * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
     * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
     *
     * @memberof Chartist.Svg
     * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
     * @constructor
     */

    function SvgList(nodeList) {
      var list = this;
      this.svgElements = [];

      for (var i = 0; i < nodeList.length; i++) {
        this.svgElements.push(new Chartist.Svg(nodeList[i]));
      } // Add delegation methods for Chartist.Svg


      Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
        return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
      }).forEach(function (prototypeProperty) {
        list[prototypeProperty] = function () {
          var args = Array.prototype.slice.call(arguments, 0);
          list.svgElements.forEach(function (element) {
            Chartist.Svg.prototype[prototypeProperty].apply(element, args);
          });
          return list;
        };
      });
    }

    Chartist.Svg.List = Chartist.Class.extend({
      constructor: SvgList
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG path module for SVG path description creation and modification.
  *
  * @module Chartist.Svg.Path
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';
    /**
     * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var elementDescriptions = {
      m: ['x', 'y'],
      l: ['x', 'y'],
      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
    };
    /**
     * Default options for newly created SVG path objects.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var defaultOptions = {
      // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
      accuracy: 3
    };

    function element(command, params, pathElements, pos, relative, data) {
      var pathElement = Chartist.extend({
        command: relative ? command.toLowerCase() : command.toUpperCase()
      }, params, data ? {
        data: data
      } : {});
      pathElements.splice(pos, 0, pathElement);
    }

    function forEachParam(pathElements, cb) {
      pathElements.forEach(function (pathElement, pathElementIndex) {
        elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
          cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
      });
    }
    /**
     * Used to construct a new path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
     * @param {Object} options Options object that overrides the default objects. See default options for more details.
     * @constructor
     */


    function SvgPath(close, options) {
      this.pathElements = [];
      this.pos = 0;
      this.close = close;
      this.options = Chartist.extend({}, defaultOptions, options);
    }
    /**
     * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
     * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
     */


    function position(pos) {
      if (pos !== undefined) {
        this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
        return this;
      } else {
        return this.pos;
      }
    }
    /**
     * Removes elements from the path starting at the current position.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} count Number of path elements that should be removed from the current position.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function remove(count) {
      this.pathElements.splice(this.pos, count);
      return this;
    }
    /**
     * Use this function to add a new move SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the move element.
     * @param {Number} y The y coordinate for the move element.
     * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function move(x, y, relative, data) {
      element('M', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new line SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the line element.
     * @param {Number} y The y coordinate for the line element.
     * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function line(x, y, relative, data) {
      element('L', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
     * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
     * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
     * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function curve(x1, y1, x2, y2, x, y, relative, data) {
      element('C', {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new non-bezier curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} rx The radius to be used for the x-axis of the arc.
     * @param {Number} ry The radius to be used for the y-axis of the arc.
     * @param {Number} xAr Defines the orientation of the arc
     * @param {Number} lAf Large arc flag
     * @param {Number} sf Sweep flag
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
      element('A', {
        rx: +rx,
        ry: +ry,
        xAr: +xAr,
        lAf: +lAf,
        sf: +sf,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function parse(path) {
      // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
      var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
        if (element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

      if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
        chunks.pop();
      } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
      // For example {command: 'M', x: '10', y: '10'}


      var elements = chunks.map(function (chunk) {
        var command = chunk.shift(),
            description = elementDescriptions[command.toLowerCase()];
        return Chartist.extend({
          command: command
        }, description.reduce(function (result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

      var spliceArgs = [this.pos, 0];
      Array.prototype.push.apply(spliceArgs, elements);
      Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

      this.pos += elements.length;
      return this;
    }
    /**
     * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
     *
     * @memberof Chartist.Svg.Path
     * @return {String}
     */


    function stringify() {
      var accuracyMultiplier = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function (path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
          return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
        }.bind(this));
        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
    }
    /**
     * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function scale(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] *= paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function translate(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] += paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
     * The method signature of the callback function looks like this:
     * ```javascript
     * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
     * ```
     * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function transform(transformFnc) {
      forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
        var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

        if (transformed || transformed === 0) {
          pathElement[paramName] = transformed;
        }
      });
      return this;
    }
    /**
     * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
     * @return {Chartist.Svg.Path}
     */


    function clone(close) {
      var c = new Chartist.Svg.Path(close || this.close);
      c.pos = this.pos;
      c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
        return Chartist.extend({}, pathElement);
      });
      c.options = Chartist.extend({}, this.options);
      return c;
    }
    /**
     * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} command The command you'd like to use to split the path
     * @return {Array<Chartist.Svg.Path>}
     */


    function splitByCommand(command) {
      var split = [new Chartist.Svg.Path()];
      this.pathElements.forEach(function (pathElement) {
        if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
          split.push(new Chartist.Svg.Path());
        }

        split[split.length - 1].pathElements.push(pathElement);
      });
      return split;
    }
    /**
     * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
     *
     * @memberof Chartist.Svg.Path
     * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
     * @param {boolean} close If the newly created path should be a closed path
     * @param {Object} options Path options for the newly created path.
     * @return {Chartist.Svg.Path}
     */


    function join(paths, close, options) {
      var joinedPath = new Chartist.Svg.Path(close, options);

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        for (var j = 0; j < path.pathElements.length; j++) {
          joinedPath.pathElements.push(path.pathElements[j]);
        }
      }

      return joinedPath;
    }

    Chartist.Svg.Path = Chartist.Class.extend({
      constructor: SvgPath,
      position: position,
      remove: remove,
      move: move,
      line: line,
      curve: curve,
      arc: arc,
      scale: scale,
      translate: translate,
      transform: transform,
      parse: parse,
      stringify: stringify,
      clone: clone,
      splitByCommand: splitByCommand
    });
    Chartist.Svg.Path.elementDescriptions = elementDescriptions;
    Chartist.Svg.Path.join = join;
  })(this || global, Chartist);

  ;
  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    var axisUnits = {
      x: {
        pos: 'x',
        len: 'width',
        dir: 'horizontal',
        rectStart: 'x1',
        rectEnd: 'x2',
        rectOffset: 'y2'
      },
      y: {
        pos: 'y',
        len: 'height',
        dir: 'vertical',
        rectStart: 'y2',
        rectEnd: 'y1',
        rectOffset: 'x1'
      }
    };

    function Axis(units, chartRect, ticks, options) {
      this.units = units;
      this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
      this.chartRect = chartRect;
      this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
      this.gridOffset = chartRect[units.rectOffset];
      this.ticks = ticks;
      this.options = options;
    }

    function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
      var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
      var projectedValues = this.ticks.map(this.projectValue.bind(this));
      var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
      projectedValues.forEach(function (projectedValue, index) {
        var labelOffset = {
          x: 0,
          y: 0
        }; // TODO: Find better solution for solving this problem
        // Calculate how much space we have available for the label

        var labelLength;

        if (projectedValues[index + 1]) {
          // If we still have one label ahead, we can calculate the distance to the next tick / label
          labelLength = projectedValues[index + 1] - projectedValue;
        } else {
          // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
          // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
          // still be visible inside of the chart padding.
          labelLength = Math.max(this.axisLength - projectedValue, 30);
        } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


        if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
          return;
        } // Transform to global coordinates using the chartRect
        // We also need to set the label offset for the createLabel function


        if (this.units.pos === 'x') {
          projectedValue = this.chartRect.x1 + projectedValue;
          labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
          // different offset as for positioned with end (bottom)

          if (chartOptions.axisX.position === 'start') {
            labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          } else {
            labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          }
        } else {
          projectedValue = this.chartRect.y1 - projectedValue;
          labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
          // different offset as for positioned with end (right side)

          if (chartOptions.axisY.position === 'start') {
            labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
          } else {
            labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
          }
        }

        if (axisOptions.showGrid) {
          Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
        }

        if (axisOptions.showLabel) {
          Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
        }
      }.bind(this));
    }

    Chartist.Axis = Chartist.Class.extend({
      constructor: Axis,
      createGridAndLabels: createGridAndLabels,
      projectValue: function projectValue(value, index, data) {
        throw new Error('Base axis can\'t be instantiated!');
      }
    });
    Chartist.Axis.units = axisUnits;
  })(this || global, Chartist);

  ;
  /**
  * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
  *   scaleMinSpace: 20,
  *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
  *   onlyInteger: true,
  *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
  *   referenceValue: 5
  * };
  * ```
  *
  * @module Chartist.AutoScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function AutoScaleAxis(axisUnit, data, chartRect, options) {
      // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      };
      Chartist.AutoScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
    }

    Chartist.AutoScaleAxis = Chartist.Axis.extend({
      constructor: AutoScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
  *   divisor: 4,
  *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
  *   ticks: [1, 10, 20, 30]
  * };
  * ```
  *
  * @module Chartist.FixedScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function FixedScaleAxis(axisUnit, data, chartRect, options) {
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.divisor = options.divisor || 1;
      this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
        return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
      }.bind(this));
      this.ticks.sort(function (a, b) {
        return a - b;
      });
      this.range = {
        min: highLow.low,
        max: highLow.high
      };
      Chartist.FixedScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.ticks, options);
      this.stepLength = this.axisLength / this.divisor;
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }

    Chartist.FixedScaleAxis = Chartist.Axis.extend({
      constructor: FixedScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
  *   ticks: ['One', 'Two', 'Three'],
  *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
  *   stretch: true
  * };
  * ```
  *
  * @module Chartist.StepAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function StepAxis(axisUnit, data, chartRect, options) {
      Chartist.StepAxis.super.constructor.call(this, axisUnit, chartRect, options.ticks, options);
      var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
      this.stepLength = this.axisLength / calc;
    }

    function projectValue(value, index) {
      return this.stepLength * index;
    }

    Chartist.StepAxis = Chartist.Axis.extend({
      constructor: StepAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
  *
  * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
  *
  * @module Chartist.Line
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Line
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // If the line should be drawn or not
      showLine: true,
      // If dots should be drawn or not
      showPoint: true,
      // If the line chart should draw an area
      showArea: false,
      // The base for the area chart that will be used to close the area shape (is normally 0)
      areaBase: 0,
      // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
      lineSmooth: true,
      // If the line chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
      fullWidth: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var axisX, axisY;

      if (options.axisX.type === undefined) {
        axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          ticks: data.normalized.labels,
          stretch: options.fullWidth
        }));
      } else {
        axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if (options.axisY.type === undefined) {
        axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
          low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
        }));
      } else {
        axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }

      axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        var pathCoordinates = [],
            pathData = [];
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var p = {
            x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
          };
          pathCoordinates.push(p.x, p.y);
          pathData.push({
            value: value,
            valueIndex: valueIndex,
            meta: Chartist.getMetaData(series, valueIndex)
          });
        }.bind(this));
        var seriesOptions = {
          lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
          showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
          showLine: Chartist.getSeriesOption(series, options, 'showLine'),
          showArea: Chartist.getSeriesOption(series, options, 'showArea'),
          areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
        };
        var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
        // index, value and meta data

        var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
        // Points are drawn from the pathElements returned by the interpolation function
        // Small offset for Firefox to render squares correctly

        if (seriesOptions.showPoint) {
          path.pathElements.forEach(function (pathElement) {
            var point = seriesElement.elem('line', {
              x1: pathElement.x,
              y1: pathElement.y,
              x2: pathElement.x + 0.01,
              y2: pathElement.y
            }, options.classNames.point).attr({
              'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
              'ct:meta': Chartist.serialize(pathElement.data.meta)
            });
            this.eventEmitter.emit('draw', {
              type: 'point',
              value: pathElement.data.value,
              index: pathElement.data.valueIndex,
              meta: pathElement.data.meta,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: point,
              x: pathElement.x,
              y: pathElement.y
            });
          }.bind(this));
        }

        if (seriesOptions.showLine) {
          var line = seriesElement.elem('path', {
            d: path.stringify()
          }, options.classNames.line, true);
          this.eventEmitter.emit('draw', {
            type: 'line',
            values: data.normalized.series[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            series: series,
            seriesIndex: seriesIndex,
            seriesMeta: series.meta,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: line
          });
        } // Area currently only works with axes that support a range!


        if (seriesOptions.showArea && axisY.range) {
          // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

          path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
            // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
            return pathSegment.pathElements.length > 1;
          }).map(function convertToArea(solidPathSegments) {
            // Receiving the filtered solid path segments we can now convert those segments into fill areas
            var firstElement = solidPathSegments.pathElements[0];
            var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
            // We then insert a new move that should start at the area base and draw a straight line up or down
            // at the end of the path we add an additional straight line to the projected area base value
            // As the closing option is set our path will be automatically closed

            return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
          }).forEach(function createArea(areaPath) {
            // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
            // and adding the created DOM elements to the correct series group
            var area = seriesElement.elem('path', {
              d: areaPath.stringify()
            }, options.classNames.area, true); // Emit an event for each area that was drawn

            this.eventEmitter.emit('draw', {
              type: 'area',
              values: data.normalized.series[seriesIndex],
              path: areaPath.clone(),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              index: seriesIndex,
              group: seriesElement,
              element: area
            });
          }.bind(this));
        }
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: axisY.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new line chart.
     *
     * @memberof Chartist.Line
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple line chart
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // As options we currently only set a static size of 300x200 px
     * var options = {
     *   width: '300px',
     *   height: '200px'
     * };
     *
     * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
     * new Chartist.Line('.ct-chart', data, options);
     *
     * @example
     * // Use specific interpolation function with configuration from the Chartist.Interpolation module
     *
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [
     *     [1, 1, 8, 1, 7]
     *   ]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 0.2
     *   })
     * });
     *
     * @example
     * // Create a line chart with responsive options
     *
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
     * var responsiveOptions = [
     *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
     *     showPoint: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return Mon, Tue, Wed etc. on medium screens
     *         return value.slice(0, 3);
     *       }
     *     }
     *   }],
     *   ['screen and (max-width: 640px)', {
     *     showLine: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return M, T, W etc. on small screens
     *         return value[0];
     *       }
     *     }
     *   }]
     * ];
     *
     * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
     *
     */


    function Line(query, data, options, responsiveOptions) {
      Chartist.Line.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating line chart type in Chartist namespace


    Chartist.Line = Chartist.Base.extend({
      constructor: Line,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
  *
  * @module Chartist.Bar
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Bar
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
      referenceValue: 0,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // Specify the distance in pixel of bars in a group
      seriesBarDistance: 15,
      // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
      stackBars: false,
      // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
      // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
      stackMode: 'accumulate',
      // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
      horizontalBars: false,
      // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
      distributeSeries: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If the bar chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data;
      var highLow;

      if (options.distributeSeries) {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
        data.normalized.series = data.normalized.series.map(function (value) {
          return [value];
        });
      } else {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      } // Create new svg element


      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

      if (options.stackBars && data.normalized.series.length !== 0) {
        // If stacked bars we need to calculate the high low from stacked values from each series
        var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
          return Array.prototype.slice.call(arguments).map(function (value) {
            return value;
          }).reduce(function (prev, curr) {
            return {
              x: prev.x + (curr && curr.x) || 0,
              y: prev.y + (curr && curr.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
      } else {
        highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
      } // Overrides of high / low from settings


      highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
      highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

      if (options.distributeSeries && options.stackBars) {
        // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
        // use only the first label for the step axis
        labelAxisTicks = data.normalized.labels.slice(0, 1);
      } else {
        // If distributed series are enabled but stacked bars aren't, we should use the series labels
        // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
        // as the bars are normalized
        labelAxisTicks = data.normalized.labels;
      } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


      if (options.horizontalBars) {
        if (options.axisX.type === undefined) {
          valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        }

        if (options.axisY.type === undefined) {
          labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
        }
      } else {
        if (options.axisX.type === undefined) {
          labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
        }

        if (options.axisY.type === undefined) {
          valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        }
      } // Projected 0 point


      var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

      var stackedBarValues = [];
      labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
        var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

        var periodHalfLength; // Current series SVG element

        var seriesElement; // We need to set periodHalfLength based on some options combinations

        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
          // which is the series count and divide by 2
          periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
          // length by 2
          periodHalfLength = labelAxis.axisLength / 2;
        } else {
          // On regular bar charts we should just use the series length
          periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
        } // Adding the series group to the series element


        seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

          if (options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
            // on the step axis for label positioning
            labelAxisValueIndex = seriesIndex;
          } else if (options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
            // 0 for projection on the label step axis
            labelAxisValueIndex = 0;
          } else {
            // On regular bar charts we just use the value index to project on the label step axis
            labelAxisValueIndex = valueIndex;
          } // We need to transform coordinates differently based on the chart layout


          if (options.horizontalBars) {
            projected = {
              x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
            };
          } else {
            projected = {
              x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
            };
          } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
          // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
          // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
          // add any automated positioning.


          if (labelAxis instanceof Chartist.StepAxis) {
            // Offset to center bar between grid lines, but only if the step axis is not stretched
            if (!labelAxis.options.stretch) {
              projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
            } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


            projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
          } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


          previousStack = stackedBarValues[valueIndex] || zeroPoint;
          stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

          if (value === undefined) {
            return;
          }

          var positions = {};
          positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
          positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

          if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
            // Stack mode: accumulate (default)
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            // We want backwards compatibility, so the expected fallback without the 'stackMode' option
            // to be the original behaviour (accumulate)
            positions[labelAxis.counterUnits.pos + '1'] = previousStack;
            positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
          } else {
            // Draw from the zero line normally
            // This is also the same code for Stack mode: overlap
            positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
          } // Limit x and y so that they are within the chart rect


          positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
          positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
          positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
          positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
          var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

          bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
            'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(metaData)
          });
          this.eventEmitter.emit('draw', Chartist.extend({
            type: 'bar',
            value: value,
            index: valueIndex,
            meta: metaData,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            group: seriesElement,
            element: bar
          }, positions));
        }.bind(this));
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: valueAxis.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new bar chart and returns API object that you can use for later changes.
     *
     * @memberof Chartist.Bar
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple bar chart
     * var data = {
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
     * new Chartist.Bar('.ct-chart', data);
     *
     * @example
     * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
     * new Chartist.Bar('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5, 6, 7],
     *   series: [
     *     [1, 3, 2, -5, -3, 1, -6],
     *     [-5, -2, -4, -1, 2, -3, 1]
     *   ]
     * }, {
     *   seriesBarDistance: 12,
     *   low: -10,
     *   high: 10
     * });
     *
     */


    function Bar(query, data, options, responsiveOptions) {
      Chartist.Bar.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating bar chart type in Chartist namespace


    Chartist.Bar = Chartist.Base.extend({
      constructor: Bar,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
  *
  * @module Chartist.Pie
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Pie
     */

    var defaultOptions = {
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: 5,
      // Override the class names that are used to generate the SVG structure of the chart
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label'
      },
      // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
      startAngle: 0,
      // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
      total: undefined,
      // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
      donut: false,
      // If specified the donut segments will be drawn as shapes instead of strokes.
      donutSolid: false,
      // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
      // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
      donutWidth: 60,
      // If a label should be shown or not
      showLabel: true,
      // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
      labelOffset: 0,
      // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
      labelPosition: 'inside',
      // An interpolation function for the label value
      labelInterpolationFnc: Chartist.noop,
      // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
      labelDirection: 'neutral',
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If true empty values will be ignored to avoid drawing unncessary slices and labels
      ignoreEmptyValues: false
    };
    /**
     * Determines SVG anchor position based on direction and center parameter
     *
     * @param center
     * @param label
     * @param direction
     * @return {string}
     */

    function determineAnchorPosition(center, label, direction) {
      var toTheRight = label.x > center.x;

      if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
        return 'start';
      } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
        return 'end';
      } else {
        return 'middle';
      }
    }
    /**
     * Creates the pie chart
     *
     * @param options
     */


    function createChart(options) {
      var data = Chartist.normalizeData(this.data);
      var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle; // Create SVG.js draw

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

      chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

      radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

      totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0);
      var donutWidth = Chartist.quantity(options.donutWidth);

      if (donutWidth.unit === '%') {
        donutWidth.value *= radius / 100;
      } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
      // Unfortunately this is not possible with the current SVG Spec
      // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


      radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
      // if regular pie chart it's half of the radius

      if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
        labelRadius = radius;
      } else if (options.labelPosition === 'center') {
        // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
      } else if (options.donutSolid) {
        labelRadius = radius - donutWidth.value / 2;
      } else {
        // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
      } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


      labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      }; // Check if there is only one non-zero value in the series array.

      var hasSingleValInSeries = data.raw.series.filter(function (val) {
        return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
      }).length === 1; // Creating the series groups

      data.raw.series.forEach(function (series, index) {
        seriesGroups[index] = this.svg.elem('g', null, null);
      }.bind(this)); //if we need to show labels we create the label group now

      if (options.showLabel) {
        labelsGroup = this.svg.elem('g', null, null);
      } // Draw the series
      // initialize series groups


      data.raw.series.forEach(function (series, index) {
        // If current value is zero and we are ignoring empty values then skip to next value
        if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

        seriesGroups[index].attr({
          'ct:series-name': series.name
        }); // Use series class from series data or if not set generate one

        seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

        var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

        var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees

        if (endAngle - overlappigStartAngle >= 359.99) {
          endAngle = overlappigStartAngle + 359.99;
        }

        var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
        var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

        var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

        if (!options.donut) {
          path.line(center.x, center.y);
        } else if (options.donutSolid) {
          donutSolidRadius = radius - donutWidth.value;
          innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
          innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
          path.line(innerStart.x, innerStart.y);
          path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
        } // Create the SVG path
        // If this is a donut chart we add the donut class, otherwise just a regular slice


        var pathClassName = options.classNames.slicePie;

        if (options.donut) {
          pathClassName = options.classNames.sliceDonut;

          if (options.donutSolid) {
            pathClassName = options.classNames.sliceDonutSolid;
          }
        }

        var pathElement = seriesGroups[index].elem('path', {
          d: path.stringify()
        }, pathClassName); // Adding the pie series value to the path

        pathElement.attr({
          'ct:value': data.normalized.series[index],
          'ct:meta': Chartist.serialize(series.meta)
        }); // If this is a donut, we add the stroke-width as style attribute

        if (options.donut && !options.donutSolid) {
          pathElement._node.style.strokeWidth = donutWidth.value + 'px';
        } // Fire off draw event


        this.eventEmitter.emit('draw', {
          type: 'slice',
          value: data.normalized.series[index],
          totalDataSum: totalDataSum,
          index: index,
          meta: series.meta,
          series: series,
          group: seriesGroups[index],
          element: pathElement,
          path: path.clone(),
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle
        }); // If we need to show labels we need to add the label for this slice now

        if (options.showLabel) {
          var labelPosition;

          if (data.raw.series.length === 1) {
            // If we have only 1 series, we can position the label in the center of the pie
            labelPosition = {
              x: center.x,
              y: center.y
            };
          } else {
            // Position at the labelRadius distance from center and between start and end angle
            labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
          }

          var rawValue;

          if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
            rawValue = data.normalized.labels[index];
          } else {
            rawValue = data.normalized.series[index];
          }

          var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

          if (interpolatedValue || interpolatedValue === 0) {
            var labelElement = labelsGroup.elem('text', {
              dx: labelPosition.x,
              dy: labelPosition.y,
              'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
            }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

            this.eventEmitter.emit('draw', {
              type: 'label',
              index: index,
              group: labelsGroup,
              element: labelElement,
              text: '' + interpolatedValue,
              x: labelPosition.x,
              y: labelPosition.y
            });
          }
        } // Set next startAngle to current endAngle.
        // (except for last slice)


        startAngle = endAngle;
      }.bind(this));
      this.eventEmitter.emit('created', {
        chartRect: chartRect,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new pie chart and returns an object that can be used to redraw the chart.
     *
     * @memberof Chartist.Pie
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object with a version and an update method to manually redraw the chart
     *
     * @example
     * // Simple pie chart example with four series
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * });
     *
     * @example
     * // Drawing a donut chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * }, {
     *   donut: true
     * });
     *
     * @example
     * // Using donut, startAngle and total to draw a gauge chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   donut: true,
     *   donutWidth: 20,
     *   startAngle: 270,
     *   total: 200
     * });
     *
     * @example
     * // Drawing a pie chart with padding and labels that are outside the pie
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   chartPadding: 30,
     *   labelOffset: 50,
     *   labelDirection: 'explode'
     * });
     *
     * @example
     * // Overriding the class names for individual series as well as a name and meta data.
     * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
     * // to a ct:meta attribute.
     * new Chartist.Pie('.ct-chart', {
     *   series: [{
     *     value: 20,
     *     name: 'Series 1',
     *     className: 'my-custom-class-one',
     *     meta: 'Meta One'
     *   }, {
     *     value: 10,
     *     name: 'Series 2',
     *     className: 'my-custom-class-two',
     *     meta: 'Meta Two'
     *   }, {
     *     value: 70,
     *     name: 'Series 3',
     *     className: 'my-custom-class-three',
     *     meta: 'Meta Three'
     *   }]
     * });
     */


    function Pie(query, data, options, responsiveOptions) {
      Chartist.Pie.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating pie chart type in Chartist namespace


    Chartist.Pie = Chartist.Base.extend({
      constructor: Pie,
      createChart: createChart,
      determineAnchorPosition: determineAnchorPosition
    });
  })(this || global, Chartist);

  return Chartist;
});

/***/ }),

/***/ "xyAz":
/*!********************************************************************!*\
  !*** ./src/app/citas/components/citas-reg/citas-reg.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdGFzL2NvbXBvbmVudHMvY2l0YXMtcmVnL2NpdGFzLXJlZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "y/Q2":
/*!***********************************!*\
  !*** ./src/app/_model/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map