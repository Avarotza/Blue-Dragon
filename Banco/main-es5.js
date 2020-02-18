function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./auth.guard.ts":
  /*!***********************!*\
    !*** ./auth.guard.ts ***!
    \***********************/

  /*! exports provided: AuthGuard */

  /***/
  function authGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          // Verifica se existe Token
          if (localStorage.getItem("cadastro")) {
            // Caso exista token retorna true
            return true;
          } else {
            // Caso não exista envia para página de cpf não é cadastrado
            this.router.navigate(['']);
            return false;
          }
        }
      }, {
        key: "canLogin",
        value: function canLogin() {
          // Verifica se existe Token
          if (localStorage.getItem("cadastro")) {
            return false;
          } else {
            this.router.navigate(['/login']);
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div [@routeAnimations]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-cliente/cadastro-cliente.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-cliente/cadastro-cliente.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCadastroClienteCadastroClienteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row box-cadastro\">\n        <div class=\"col-12\">\n            <h3 class=\"text-center\">Você está a um passo de criar sua conta Blue Dragon</h3>\n            <form class=\"mt-5\" (ngSubmit)='cadastro()' [formGroup]='formCadastro'>\n                <div class=\"form-group\"><input id=\"NOME\" type=\"text\" class=\"form-control cadastro shadow-none\" placeholder=\"Nome\" formControlName='nome'></div>\n                <div class=\"form-group\"><input id=\"CPF\" type=\"text\" class=\"form-control cadastro shadow-none\" placeholder=\"CPF\" formControlName='cpf'></div>\n                <div class=\"form-group\"><input id=\"EMAIL\" type=\"email\" class=\"form-control cadastro shadow-none\" placeholder=\"E-mail\" formControlName='email'></div>\n                <div class=\"form-group\"><input id=\"TEL\" type=\"tel\" class=\"form-control cadastro shadow-none\" placeholder=\"Telefone\" formControlName='telefone'></div>\n                <div class=\"form-group\"><input id=\"ENDE\" type=\"text\" class=\"form-control cadastro shadow-none\" placeholder=\"Endereço\" formControlName='endereco'></div>\n                <button type=\"submit\" class=\"btn btn-cadastro shadow none rounded-0 btn-block btn-lg\">Cadastrar</button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-concluido/cadastro-concluido.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-concluido/cadastro-concluido.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCadastroConcluidoCadastroConcluidoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"space\">\n        <h1>Cadastro concluído com <span class=\"succ\">sucesso</span>!</h1>\n        <p>Ficamos felizes em tê-lo como nosso cliente. Em <span id=\"tempo\"></span> você será redirecionado para a página de Login, utilize seu CPF e seu E-mail para realizar acessar o seu painel.</p>\n        <button (click)=\"navegarParaLogin()\" class=\"btn btn-continue btn-big btn-block shadow-none\">Não quero esperar leve-me para página de Login</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper-content\">\n    <div class=\"bg_img\">\n        <div class=\"box-tile\">\n            <h1><span class=\"tag\">#</span><span class=\"typing-element\"></span></h1>\n        </div>\n        <button class=\"btn btn-cadastro btn-lg\" (click)=\"gotoCadastroClientes()\">Crie sua conta</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"topicos\">\n        <div class=\"container-fluid\">\n            <div class=\"row align-content-center\">\n                <div class=\"col-4\">\n                    <ul class=\"topicos-footer\">\n                        <h6>Blue Dragon</h6>\n                        <li>Quem somos</li>\n                        <li>Nossos serviços</li>\n                        <li>Carreiras</li>\n                        <li>Desenvolvedores</li>\n                    </ul>\n                </div>\n                <div class=\"col-4\">\n                    <ul class=\"topicos-footer\">\n                        <h6>Para você</h6>\n                        <li (click)=\"cadastro()\">Abra sua conta</li>\n                        <li>Cartões de crédito</li>\n                        <li>Créditos e finaciamentos</li>\n                        <li>Investimentos pessoa fisica</li>\n                    </ul>\n                </div>\n                <div class=\"col-4\">\n                    <ul class=\"topicos-footer\">\n                        <h6>Segmentos</h6>\n                        <li>Comercial banking</li>\n                        <li>Seguros </li>\n                        <li>Tesouro direto</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"rodape\">\n        <p class=\"text-center\">&copy; Todos os Direitos reservados a &copy;Blue Dragon  <span id=\"ano\"></span></p>\n    </footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-banco justify-content-between\">\n    <div (click)=\"home()\" class=\"navbar-brand\">\n        <img class=\"shadow-sm\" src=\"/assets/img/BlueDbn.png\">\n    </div>\n    <button class=\"navbar-toggler border-0\" (click)=\"SearchB()\" [attr.aria-expanded]=\"!isCollapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navb\" aria-controls=\"navb\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div [ngbCollapse]=\"isCollapsed\" class=\"collapse navbar-collapse\" id=\"navb\">\n        <ul class=\"navbar-nav text-center\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link btn-large\" (click)=\"cad_homeL()\">Abra sua conta</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link btn-large\">Investimentos</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link btn-large\">Planos</a>\n            </li>\n        </ul>\n    </div>\n        <div id=\"pesquisa\" class=\"col-4\">\n            <form [formGroup]=\"formLogin\" (ngSubmit)=\"Finder()\">\n                <div class=\"form-row align-items-center\">\n                    <div class=\"col-auto col-sm-12 my-1\">\n                            <label id=\"empurra\" class=\"form-check-label\" for=\"autoSizingCheck2\"><b>Acesse</b> sua conta</label>\n                        <div class=\"input-group\">\n                            <input formControlName=\"email\" id=\"HEMAIL\" type=\"text\" class=\"form-control border-0 rounded-0 shadow-none\" placeholder=\"Digite seu e-mail\">\n                        <input formControlName=\"cpf\" id=\"HCPF\" type=\"text\" class=\"form-control border-0 rounded-0 shadow-none\" placeholder=\"Digite seu CPF\">\n                        <div class=\"input-group-append\">\n                            <button type=\"submit\" class=\"btn btn-acess shadow acessar-conta shadow\">Acessar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-logada/home-logada.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-logada/home-logada.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeLogadaHomeLogadaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card rounded-0 mb-6 shadow-lg border-0\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-4\">\n                    <img src=\"/assets/img/deposito.jpg\" class=\"card-img rounded-0\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Depositos</h5>\n                    <p class=\"card-text\">Clique aqui para depositar o seu dinheiro de outra conta e ver os ultimos registros.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card rounded-0 mb-6 shadow-lg border-0\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-4\">\n                    <img src=\"/assets/img/saque.jpg\" class=\"card-img rounded-0\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Saques</h5>\n                    <p class=\"card-text\">Clique aqui para enviar o seu dinheiro para outra conta e ver os ultimos registros de saque.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card rounded-0 mb-6 shadow-lg border-0\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-4\">\n                    <img src=\"/assets/img/ajuda.jpg\" class=\"card-img rounded-0\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Ajuda</h5>\n                    <p class=\"card-text\">Olá {{Nome}}, precisa de ajuda? clique aqui.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card rounded-0 mb-6 shadow-lg border-0\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-4\">\n                    <img src=\"/assets/img/usuario.jpg\" class=\"card-img rounded-0\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Usuário</h5>\n                    <p class=\"card-text\">Olá {{Nome}}, clique aqui para mudar as suas configurações.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row box-login\">\n        <div class=\"col-12\">\n            <h3 class=\"text-center\">Login</h3>\n            <form class=\"mt-5\" (ngSubmit)='login()' [formGroup]='formLogin'>\n                <div class=\"form-group\"><input id=\"EMAIL\" type=\"email\" class=\"form-control login shadow-none\" placeholder=\"E-mail\" formControlName='email'></div>\n                <div class=\"form-group\"><input id=\"CPF\" type=\"text\" class=\"form-control login shadow-none\" placeholder=\"CPF\" formControlName='cpf'></div>\n                <button type=\"submit\" class=\"btn btn-login shadow none rounded-0 btn-block btn-lg\">Entrar</button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cadastro-cliente/cadastro-cliente.component */
    "./src/app/cadastro-cliente/cadastro-cliente.component.ts");
    /* harmony import */


    var _cadastro_concluido_cadastro_concluido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cadastro-concluido/cadastro-concluido.component */
    "./src/app/cadastro-concluido/cadastro-concluido.component.ts");
    /* harmony import */


    var _home_logada_home_logada_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-logada/home-logada.component */
    "./src/app/home-logada/home-logada.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! auth.guard */
    "./auth.guard.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]
    }, {
      path: 'cadastro',
      component: _cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_4__["CadastroClienteComponent"]
    }, {
      path: 'cadastro-completo',
      component: _cadastro_concluido_cadastro_concluido_component__WEBPACK_IMPORTED_MODULE_5__["CadastroConcluidoComponent"],
      canActivate: [auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'home-logada',
      component: _home_logada_home_logada_component__WEBPACK_IMPORTED_MODULE_6__["HomeLogadaComponent"],
      canActivate: [auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Blue Dragon';
      }

      _createClass(AppComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData[''];
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, PizzaPartyAppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PizzaPartyAppModule", function () {
      return PizzaPartyAppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! auth.guard */
    "./auth.guard.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./cadastro-cliente/cadastro-cliente.component */
    "./src/app/cadastro-cliente/cadastro-cliente.component.ts");
    /* harmony import */


    var _home_logada_home_logada_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home-logada/home-logada.component */
    "./src/app/home-logada/home-logada.component.ts");
    /* harmony import */


    var _cadastro_concluido_cadastro_concluido_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./cadastro-concluido/cadastro-concluido.component */
    "./src/app/cadastro-concluido/cadastro-concluido.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts"); //Segurança
    //bs4
    //Programa
    //


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_13__["CadastroClienteComponent"], _home_logada_home_logada_component__WEBPACK_IMPORTED_MODULE_14__["HomeLogadaComponent"], _cadastro_concluido_cadastro_concluido_component__WEBPACK_IMPORTED_MODULE_15__["CadastroConcluidoComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      providers: [auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);

    var PizzaPartyAppModule = function PizzaPartyAppModule() {
      _classCallCheck(this, PizzaPartyAppModule);
    };
    /***/

  },

  /***/
  "./src/app/cadastro-cliente/cadastro-cliente.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/cadastro-cliente/cadastro-cliente.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCadastroClienteCadastroClienteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box-cadastro {\r\n    margin: 30px;\r\n    padding: 30px;\r\n}\r\n\r\n.cadastro {\r\n    padding: 10px;\r\n    border: none;\r\n    border-bottom: 2px solid #ddd;\r\n    border-radius: 0;\r\n    outline: none;\r\n    height: 50px;\r\n}\r\n\r\n.cadastro:hover\r\n{\r\n    border-bottom: 2px solid var(--bg-cor-mute);\r\n}\r\n\r\n.cadastro:focus\r\n{\r\n    border-bottom: 2px solid var(--bg-cor-pri);\r\n}\r\n\r\n.btn-cadastro\r\n{\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-size: 26px;\r\n    color: #fff;\r\n    background-color: var(--btn-cor-pri);\r\n    -webkit-transition: ease-in-out .250s;\r\n    transition: ease-in-out .250s;\r\n}\r\n\r\n.err\r\n{\r\n    border-bottom: 2px solid var(--bg-cor-err);\r\n}\r\n\r\n.btn-cadastro:hover\r\n{\r\n    color: #000;\r\n    background-color: var(--btn-cor-pri-hov);\r\n}\r\n\r\n.btn-cadastro:active\r\n{\r\n    color: #f6f6f6;\r\n    background-color: var(--btn-cor-pri-act);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSwyQ0FBMkM7QUFDL0M7O0FBRUE7O0lBRUksMENBQTBDO0FBQzlDOztBQUVBOztJQUVJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMscUNBQTZCO0lBQTdCLDZCQUE2QjtBQUNqQzs7QUFDQTs7SUFFSSwwQ0FBMEM7QUFDOUM7O0FBQ0E7O0lBRUksV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2Qsd0NBQXdDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWNhZGFzdHJvIHtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jYWRhc3RybyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmNhZGFzdHJvOmhvdmVyXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iZy1jb3ItbXV0ZSk7XHJcbn1cclxuXHJcbi5jYWRhc3Rybzpmb2N1c1xyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmctY29yLXByaSk7XHJcbn1cclxuXHJcbi5idG4tY2FkYXN0cm9cclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvci1wcmkpO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjI1MHM7XHJcbn1cclxuLmVyclxyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmctY29yLWVycik7XHJcbn1cclxuLmJ0bi1jYWRhc3Rybzpob3ZlclxyXG57XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb3ItcHJpLWhvdik7XHJcbn1cclxuXHJcbi5idG4tY2FkYXN0cm86YWN0aXZlXHJcbntcclxuICAgIGNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvci1wcmktYWN0KTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cadastro-cliente/cadastro-cliente.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/cadastro-cliente/cadastro-cliente.component.ts ***!
    \****************************************************************/

  /*! exports provided: CadastroClienteComponent */

  /***/
  function srcAppCadastroClienteCadastroClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroClienteComponent", function () {
      return CadastroClienteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CadastroClienteComponent =
    /*#__PURE__*/
    function () {
      function CadastroClienteComponent(fb, router) {
        _classCallCheck(this, CadastroClienteComponent);

        this.fb = fb;
        this.router = router;
        this.valido = false;
      }

      _createClass(CadastroClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.formCadastro = this.fb.group({
            nome: [''],
            cpf: [''],
            email: [''],
            telefone: [''],
            endereco: ['']
          });
          this.formCadastro.valueChanges.pipe().subscribe(function (res) {
            //console.log(res);
            _this.valoresForm = res;
          });
        }
      }, {
        key: "cpfCheck",
        value: function cpfCheck(trial) {
          var A = trial;
          var BKP = "";
          var B = true;
          var C = true;
          var D = true;
          var E = "";
          A = A.replace(/[^\d]+/g, '');

          if (A == 0 || A == 111111111 || A == 222222222 || A == 333333333 || A == 444444444 || A == 555555555 || A == 666666666 || A == 777777777 || A == 888888888 || A == 99999999999) {
            B = false;
          } else if (A == 0 || A == 1111111111 || A == 2222222222 || A == 3333333333 || A == 4444444444 || A == 5555555555 || A == 6666666666 || A == 7777777777 || A == 8888888888 || A == 999999999999) {
            C = false;
          } else if (A == 0 || A == 11111111111 || A == 22222222222 || A == 33333333333 || A == 44444444444 || A == 55555555555 || A == 66666666666 || A == 77777777777 || A == 88888888888 || A == 9999999999999) {
            D = false;
          }

          if (B || C || D) {
            //alert("Realizando calculo")
            var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, s1, s2;
            c1 = parseInt(A.charAt(0));
            c2 = parseInt(A.charAt(1));
            c3 = parseInt(A.charAt(2));
            c4 = parseInt(A.charAt(3));
            c5 = parseInt(A.charAt(4));
            c6 = parseInt(A.charAt(5));
            c7 = parseInt(A.charAt(6));
            c8 = parseInt(A.charAt(7));
            c9 = parseInt(A.charAt(8));
            s1 = (c1 * 10 + c2 * 9 + c3 * 8 + c4 * 7 + c5 * 6 + c6 * 5 + c7 * 4 + c8 * 3 + c9 * 2) * 10;
            c10 = s1 % 11;

            if (c10 == 10) {
              c10 = 0;
            }

            s2 = (c1 * 11 + c2 * 10 + c3 * 9 + c4 * 8 + c5 * 7 + c6 * 6 + c7 * 5 + c8 * 4 + c9 * 3 + c10 * 2) * 10;

            if (c11 == 10) {
              c11 = 0;
            }

            c11 = s2 % 11;
            BKP = c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString() + c6.toString() + c7.toString() + c8.toString() + c9.toString() + c10.toString() + c11.toString();
            E = c1.toString() + c2.toString() + c3.toString() + "." + c4.toString() + c5.toString() + c6.toString() + "." + c7.toString() + c8.toString() + c9.toString() + "-" + c10.toString() + c11.toString();
          }

          if (A === BKP) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "emailCheck",
        value: function emailCheck(trial) {
          var c1, c2, c3, c4, i, teste, resul;
          teste = trial.replace(/.br| /g, "");
          i = teste.length;
          c1 = teste.charAt(i - 4);
          c2 = teste.charAt(i - 3);
          c3 = teste.charAt(i - 2);
          c4 = teste.charAt(i - 1);
          resul = c1 + c2 + c3 + c4;

          if (resul == ".com" || resul == ".net" || resul == ".org" || resul == ".gov" || resul == ".info") {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "formCheck",
        value: function formCheck() {
          var nome = document.getElementById("NOME").value,
              cpf = document.getElementById("CPF").value,
              email = document.getElementById("EMAIL").value,
              telefone = document.getElementById("TEL").value,
              endereço = document.getElementById("ENDE").value,
              passe = 0;

          if (nome.length < 3) {
            passe += 1;
            document.getElementById("NOME").className = "form-control cadastro shadow-none err";
            setTimeout(function () {
              document.getElementById("NOME").className = "form-control cadastro shadow-none";
            }, 1500);
          }

          if (!this.cpfCheck(cpf)) {
            passe += 1;
            document.getElementById("CPF").className = "form-control cadastro shadow-none err";
            setTimeout(function () {
              document.getElementById("CPF").className = "form-control cadastro shadow-none";
            }, 1500);
          }

          if (!this.emailCheck(email)) {
            passe += 1;
            document.getElementById("EMAIL").className = "form-control cadastro shadow-none err";
            setTimeout(function () {
              document.getElementById("EMAIL").className = "form-control cadastro shadow-none";
            }, 1500);
          }

          if (telefone.length <= 10) {
            passe += 1;
            document.getElementById("TEL").className = "form-control cadastro shadow-none err";
            setTimeout(function () {
              document.getElementById("TEL").className = "form-control cadastro shadow-none";
            }, 1500);
          }

          if (endereço.length <= 5) {
            passe += 1;
            document.getElementById("ENDE").className = "form-control cadastro shadow-none err";
            setTimeout(function () {
              document.getElementById("ENDE").className = "form-control cadastro shadow-none";
            }, 1500);
          }

          if (passe == 0) {
            this.valido = true;
          }
        }
      }, {
        key: "cadastro",
        value: function cadastro() {
          this.formCheck();

          if (this.valido) {
            this.conversao = JSON.stringify(this.valoresForm);
            localStorage.setItem('cadastro', this.conversao);
            localStorage.setItem('aprovado', 'Unique');
            this.router.navigate(['cadastro-completo']);
          } else {//console.error("invalido");
          }
        }
      }]);

      return CadastroClienteComponent;
    }();

    CadastroClienteComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CadastroClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro-cliente.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-cliente/cadastro-cliente.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro-cliente.component.css */
      "./src/app/cadastro-cliente/cadastro-cliente.component.css")).default]
    })], CadastroClienteComponent);
    /***/
  },

  /***/
  "./src/app/cadastro-concluido/cadastro-concluido.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/cadastro-concluido/cadastro-concluido.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCadastroConcluidoCadastroConcluidoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container\r\n{\r\n    margin-top: 5vh;\r\n    margin-bottom: 5vh;\r\n    text-align: center;\r\n}\r\n\r\n.succ\r\n{\r\n    color: var(--success);\r\n}\r\n\r\n.btn-continue\r\n{\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-size: 26px;\r\n    color: #fff;\r\n    background-color: var(--btn-cor-pri);\r\n    border-radius: 26px;\r\n    -webkit-transition: ease-in-out .250s;\r\n    transition: ease-in-out .250s;\r\n}\r\n\r\n.btn-continue:hover\r\n{\r\n    color: #000;\r\n    background-color: var(--btn-cor-pri-hov);\r\n}\r\n\r\n.btn-continue:active\r\n{\r\n    color: #f6f6f6;\r\n    background-color: var(--btn-cor-pri-act);\r\n}\r\n\r\n@media (max-width: 1080px)\r\n{\r\n    .space\r\n    {\r\n        margin-top: 18vh;\r\n        margin-bottom: 18vh;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8tY29uY2x1aWRvL2NhZGFzdHJvLWNvbmNsdWlkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixxQ0FBNkI7SUFBN0IsNkJBQTZCO0FBQ2pDOztBQUNBOztJQUVJLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7O0FBRUE7O0lBRUksY0FBYztJQUNkLHdDQUF3QztBQUM1Qzs7QUFFQTs7SUFFSTs7UUFFSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryby1jb25jbHVpZG8vY2FkYXN0cm8tY29uY2x1aWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Y2Ncclxue1xyXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcbi5idG4tY29udGludWVcclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvci1wcmkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4yNTBzO1xyXG59XHJcbi5idG4tY29udGludWU6aG92ZXJcclxue1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29yLXByaS1ob3YpO1xyXG59XHJcblxyXG4uYnRuLWNvbnRpbnVlOmFjdGl2ZVxyXG57XHJcbiAgICBjb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb3ItcHJpLWFjdCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpXHJcbntcclxuICAgIC5zcGFjZVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE4dmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTh2aDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cadastro-concluido/cadastro-concluido.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/cadastro-concluido/cadastro-concluido.component.ts ***!
    \********************************************************************/

  /*! exports provided: CadastroConcluidoComponent */

  /***/
  function srcAppCadastroConcluidoCadastroConcluidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroConcluidoComponent", function () {
      return CadastroConcluidoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CadastroConcluidoComponent =
    /*#__PURE__*/
    function () {
      function CadastroConcluidoComponent(router) {
        _classCallCheck(this, CadastroConcluidoComponent);

        this.router = router;
        this.Contador = 10;
      }

      _createClass(CadastroConcluidoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Contando();
          console.log(1);
        }
      }, {
        key: "navegarParaLogin",
        value: function navegarParaLogin() {
          this.router.navigate(['login']);
        }
      }, {
        key: "temporizador",
        value: function temporizador() {
          var Contador = this.Contador;
          document.getElementById("tempo").innerHTML = "".concat(Contador, " segundos");

          if (Contador == 1) {
            document.getElementById("tempo").innerHTML = "".concat(Contador, " segundo");
          }

          this.Contador -= 1;
          console.log(Contador);
        }
      }, {
        key: "Contando",
        value: function Contando() {
          var _this2 = this;

          setInterval(function () {
            _this2.temporizador();

            if (_this2.Contador == -1) {
              _this2.navegarParaLogin();
            }
          }, 1000);
        }
      }]);

      return CadastroConcluidoComponent;
    }();

    CadastroConcluidoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CadastroConcluidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro-concluido',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro-concluido.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-concluido/cadastro-concluido.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro-concluido.component.css */
      "./src/app/cadastro-concluido/cadastro-concluido.component.css")).default]
    })], CadastroConcluidoComponent);
    /***/
  },

  /***/
  "./src/app/content/content.component.css":
  /*!***********************************************!*\
    !*** ./src/app/content/content.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentContentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css?family=Crete+Round|Poppins');\r\n.wrapper-content {\r\n    width: auto;\r\n    height: 70vh;\r\n    z-index: -9999;\r\n    top: -60px;\r\n}\r\n.box-tile {\r\n    width: 80%;\r\n    height: auto;\r\n    position: relative;\r\n    top: 30%;\r\n    left: 10%;\r\n    padding: 10px;\r\n}\r\n.wrapper-content h1 {\r\n    font-size: 68px;\r\n    color: #fff;\r\n    text-shadow: 2px 2px #333;\r\n    font-family: 'Crete Round', serif !important;\r\n}\r\n.tag {\r\n    font-size: 2-pt;\r\n    color: var(--bg-cor-pri);\r\n    font-weight: bold;\r\n}\r\n.bg_img {\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -1000;\r\n    background: url('/assets/img/bg_banking.png') no-repeat;\r\n    background-size: cover;\r\n}\r\n.btn-cadastro\r\n{\r\n    position: absolute;\r\n    border-radius: 26px;\r\n    left: 10%;\r\n    top: 390px;;\r\n    font-size: 19px;\r\n    color: #ffffff;\r\n    background-color: var(--btn-cor-pri);\r\n    -webkit-transition: ease-in-out .250s;\r\n    transition: ease-in-out .250s;\r\n}\r\n.btn-cadastro:hover\r\n{\r\n    color: #000000;\r\n    background-color: var(--btn-cor-pri-hov);\r\n}\r\n.btn-cadastro:active\r\n{\r\n    color: #f6f6f6;\r\n    background-color: var(--btn-cor-pri-act);\r\n}\r\n@media(max-width: 768px)\r\n{\r\n    .btn-cadastro\r\n    {\r\n        top: 690px;\r\n    }\r\n    .wrapper-content h1\r\n    {\r\n        font-size: 60px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDRDQUE0QztBQUNoRDtBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdURBQXVEO0lBQ3ZELHNCQUFzQjtBQUMxQjtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxxQ0FBNkI7SUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7O0lBRUksY0FBYztJQUNkLHdDQUF3QztBQUM1QztBQUVBOztJQUVJLGNBQWM7SUFDZCx3Q0FBd0M7QUFDNUM7QUFFQTs7SUFFSTs7UUFFSSxVQUFVO0lBQ2Q7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q3JldGUrUm91bmR8UG9wcGlucycpO1xyXG4ud3JhcHBlci1jb250ZW50IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgei1pbmRleDogLTk5OTk7XHJcbiAgICB0b3A6IC02MHB4O1xyXG59XHJcblxyXG4uYm94LXRpbGUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLndyYXBwZXItY29udGVudCBoMSB7XHJcbiAgICBmb250LXNpemU6IDY4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogJ0NyZXRlIFJvdW5kJywgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgICBmb250LXNpemU6IDItcHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tYmctY29yLXByaSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJnX2ltZyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTAwMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmdfYmFua2luZy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYnRuLWNhZGFzdHJvXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB0b3A6IDM5MHB4OztcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvci1wcmkpO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjI1MHM7XHJcbn1cclxuXHJcbi5idG4tY2FkYXN0cm86aG92ZXJcclxue1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29yLXByaS1ob3YpO1xyXG59XHJcblxyXG4uYnRuLWNhZGFzdHJvOmFjdGl2ZVxyXG57XHJcbiAgICBjb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb3ItcHJpLWFjdCk7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KVxyXG57XHJcbiAgICAuYnRuLWNhZGFzdHJvXHJcbiAgICB7XHJcbiAgICAgICAgdG9wOiA2OTBweDtcclxuICAgIH1cclxuICAgIC53cmFwcGVyLWNvbnRlbnQgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! typed.js */
    "./node_modules/typed.js/lib/typed.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContentComponent =
    /*#__PURE__*/
    function () {
      function ContentComponent(router) {
        _classCallCheck(this, ContentComponent);

        this.router = router;
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var options = {
            stringsElement: '#typed-strings',
            strings: ['Blue Dragon juros Amigos', 'Peça a portabilidade e venha ser Blue Dragon hoje mesmo', 'Inovavor digital e seguro'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 200,
            smartBackspace: true,
            fadeOut: true,
            showCursor: false,
            startDelay: 1000,
            loop: true
          };
          var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a('.typing-element', options);
        }
      }, {
        key: "gotoCadastroClientes",
        value: function gotoCadastroClientes() {
          this.router.navigate(['cadastro']);
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content.component.css */
      "./src/app/content/content.component.css")).default]
    })], ContentComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topicos \r\n{\r\n    text-transform: capitalize;\r\n    width: auto;\r\n    height: auto;\r\n    background: var(--bg-cor-pri);\r\n    text-align: center;\r\n    color: #fff !important;\r\n    padding: 90px;\r\n}\r\n\r\n.topicos h6 \r\n{\r\n    color: #fff;\r\n    font-weight: 650;\r\n}\r\n\r\n.topicos li \r\n{\r\n    list-style: none;\r\n    line-height: 3;\r\n    -webkit-transition: ease-in-out .250s;\r\n    transition: ease-in-out .250s;\r\n}\r\n\r\n.topicos li:hover\r\n{\r\n    cursor: pointer;\r\n    color: #000;\r\n}\r\n\r\n.rodape \r\n{\r\n    background: var(--bg-cor-sec);\r\n    color: #fff;\r\n    padding-top: 10px;\r\n    padding-bottom: 5px;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFDQUE2QjtJQUE3Qiw2QkFBNkI7QUFDakM7O0FBQ0E7O0lBRUksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTs7SUFFSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BpY29zIFxyXG57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29yLXByaSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogOTBweDtcclxufVxyXG5cclxuLnRvcGljb3MgaDYgXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcclxufVxyXG5cclxuLnRvcGljb3MgbGkgXHJcbntcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMztcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4yNTBzO1xyXG59XHJcbi50b3BpY29zIGxpOmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59IFxyXG4ucm9kYXBlIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb3Itc2VjKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var Ano = document.getElementById("ano");
          Ano.innerHTML = new Date().getFullYear();
        }
      }, {
        key: "cadastro",
        value: function cadastro() {
          this.router.navigate(['cadastro']);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-banco\r\n{\r\n    background-color: var(--bg-cor-pri);\r\n}\r\n.navbar-brand img\r\n{\r\n    width: 40px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    -webkit-transition: ease-in-out .375s;\r\n    transition: ease-in-out .375s;\r\n}\r\n.navbar-brand img:hover\r\n{\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n    cursor: pointer;\r\n}\r\nnav ul li a.nav-link\r\n{\r\n    color: #fff;\r\n    font-weight: 550;\r\n    font-size: 18px;\r\n    -webkit-transition: ease-in-out .250s !important;\r\n    transition: ease-in-out .250s !important;\r\n    cursor: pointer;\r\n}\r\n.form-check-label\r\n{\r\n    color: #fff;\r\n}\r\nnav ul li a.nav-link:hover\r\n{\r\n    color: #000;\r\n}\r\n.btn-acess\r\n{\r\n    background-color: var(--btn-cor-pri);\r\n    color: #fff;\r\n    -webkit-transition: ease-in-out .175s;\r\n    transition: ease-in-out .175s;\r\n    border-top-right-radius:  50px;\r\n    border-bottom-right-radius:  50px;\r\n}\r\n.btn-acess:hover\r\n{\r\n    background-color: var(--btn-cor-pri-hov);\r\n    color: #000;\r\n}\r\n.btn-acess:active\r\n{\r\n    background-color: var(--btn-cor-pri-act);\r\n    color: #f3f3f3;\r\n}\r\n.form-control:hover\r\n{\r\n    border-bottom: var(--bg-cor-mute);\r\n}\r\n.form-control:focus\r\n{\r\n    border-bottom: var(--bg-cor-sec);\r\n}\r\n.err\r\n{\r\n    border-bottom: 1px solid var(--bg-cor-err) !important;\r\n    border-top: 1px solid var(--bg-cor-err) !important;\r\n}\r\n.E-err\r\n{\r\n    border-left: 1px solid var(--bg-cor-err) !important;\r\n    border-right: 0 solid var(--bg-cor-err) !important;\r\n}\r\n.D-err\r\n{\r\n    border-right: 2px solid var(--bg-cor-err) !important;\r\n    border-left: 0 solid var(--bg-cor-err) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1DQUFtQztBQUN2QztBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQ0FBNkI7SUFBN0IsNkJBQTZCO0FBQ2pDO0FBQ0E7O0lBRUksNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQXdDO0lBQXhDLHdDQUF3QztJQUN4QyxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxxQ0FBNkI7SUFBN0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTs7SUFFSSx3Q0FBd0M7SUFDeEMsV0FBVztBQUNmO0FBQ0E7O0lBRUksd0NBQXdDO0lBQ3hDLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFDQTs7SUFFSSxnQ0FBZ0M7QUFDcEM7QUFDQTs7SUFFSSxxREFBcUQ7SUFDckQsa0RBQWtEO0FBQ3REO0FBQ0E7O0lBRUksbURBQW1EO0lBQ25ELGtEQUFrRDtBQUN0RDtBQUNBOztJQUVJLG9EQUFvRDtJQUNwRCxpREFBaUQ7QUFDckQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctYmFuY29cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29yLXByaSk7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWdcclxue1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjM3NXM7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWc6aG92ZXJcclxue1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbm5hdiB1bCBsaSBhLm5hdi1saW5rXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4yNTBzICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvcm0tY2hlY2stbGFiZWxcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxubmF2IHVsIGxpIGEubmF2LWxpbms6aG92ZXJcclxue1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmJ0bi1hY2Vzc1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29yLXByaSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4xNzVzO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICA1MHB4O1xyXG59XHJcbi5idG4tYWNlc3M6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvci1wcmktaG92KTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5idG4tYWNlc3M6YWN0aXZlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb3ItcHJpLWFjdCk7XHJcbiAgICBjb2xvcjogI2YzZjNmMztcclxufVxyXG4uZm9ybS1jb250cm9sOmhvdmVyXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJnLWNvci1tdXRlKTtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJnLWNvci1zZWMpO1xyXG59XHJcbi5lcnJcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvci1lcnIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmctY29yLWVycikgIWltcG9ydGFudDtcclxufVxyXG4uRS1lcnJcclxue1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1iZy1jb3ItZXJyKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHZhcigtLWJnLWNvci1lcnIpICFpbXBvcnRhbnQ7XHJcbn1cclxuLkQtZXJyXHJcbntcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJnLWNvci1lcnIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMCBzb2xpZCB2YXIoLS1iZy1jb3ItZXJyKSAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(fb, router, elementRef) {
        _classCallCheck(this, HeaderComponent);

        this.fb = fb;
        this.router = router;
        this.elementRef = elementRef;
        this.Changer = localStorage.getItem('aprovado');
        this.isCollapsed = true;
      }

      _createClass(HeaderComponent, [{
        key: "home",
        value: function home() {
          this.router.navigate(['']);
        }
      }, {
        key: "cad_homeL",
        value: function cad_homeL() {
          if (this.Changer == "Unique") {
            this.router.navigate(['home-logada']);
          } else {
            this.router.navigate(['cadastro']);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          window.addEventListener("resize", function () {
            _this3.SearchBerror();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.info("Este Projeto foi concluido por Weider T.");
          this.formLogin = this.fb.group({
            email: [''],
            cpf: ['']
          });
        }
      }, {
        key: "SearchBerror",
        value: function SearchBerror() {
          if (!this.isCollapsed && window.innerWidth > window.innerHeight / 1.45) {
            this.isCollapsed = true;
            document.getElementById("pesquisa").className = "col-4";
          } else if (this.isCollapsed && window.innerWidth > window.innerHeight / 1.45) {
            this.isCollapsed = true;
            document.getElementById("pesquisa").className = "col-4";
          } else {
            this.isCollapsed = !this.isCollapsed;
            this.SearchB();
          }

          clearTimeout;
        }
      }, {
        key: "SearchB",
        value: function SearchB() {
          this.isCollapsed = !this.isCollapsed;

          if (this.isCollapsed) {
            document.getElementById("pesquisa").className = "col-4";
          } else {
            document.getElementById("pesquisa").className = "col-12";
          }
        }
      }, {
        key: "Finder",
        value: function Finder() {
          this.getCadastro = JSON.parse(localStorage.getItem('cadastro')); //email

          var emailDB = this.getCadastro['email'],
              emailL = this.formLogin.get('email').value; //cpf

          var cpfDB = this.getCadastro['cpf'],
              cpfL = this.formLogin.get('cpf').value;

          if (emailDB === emailL && cpfDB === cpfL) //sucesso
            {
              localStorage.setItem('aprovado', 'Unique');
              this.router.navigate(['home-logada']);
            } else //erro
            {
              document.getElementById("HEMAIL").className = "form-control rounded-0 shadow-none err E-err";
              document.getElementById("HCPF").className = "form-control rounded-0 shadow-none err D-err";
              setTimeout(function () {
                document.getElementById("HEMAIL").className = "form-control rounded-0 shadow-none border-0";
                document.getElementById("HCPF").className = "form-control rounded-0 shadow-none border-0";
              }, 1500);
            }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home-logada/home-logada.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/home-logada/home-logada.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeLogadaHomeLogadaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card\r\n{\r\n    width: 540px;\r\n    margin: 3.9px 2.5px;\r\n    -webkit-transition: ease-in-out .27s;\r\n    transition: ease-in-out .27s;\r\n}\r\n.card:hover\r\n{\r\n    z-index: 50;\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n    cursor: pointer;\r\n}\r\n.card-img\r\n{\r\n    height: 200px;\r\n}\r\n@media (max-width: 1080px)\r\n{\r\n    .card{ width: 100%; -webkit-transition: ease-in-out .25s; transition: ease-in-out .25s; }\r\n    .card:hover { -webkit-transform: scale(1.04); transform: scale(1.04); }\r\n    .card-img{ height: 280px; }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1sb2dhZGEvaG9tZS1sb2dhZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUE0QjtJQUE1Qiw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUVBOztJQUVJLE9BQU8sV0FBVyxFQUFFLG9DQUE0QixFQUE1Qiw0QkFBNEIsRUFBRTtJQUNsRCxjQUFjLDhCQUFzQixFQUF0QixzQkFBc0IsRUFBRTtJQUN0QyxXQUFXLGFBQWEsRUFBRTtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbG9nYWRhL2hvbWUtbG9nYWRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxyXG57XHJcbiAgICB3aWR0aDogNTQwcHg7XHJcbiAgICBtYXJnaW46IDMuOXB4IDIuNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjI3cztcclxufVxyXG4uY2FyZDpob3ZlclxyXG57XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmQtaW1nXHJcbntcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpXHJcbntcclxuICAgIC5jYXJkeyB3aWR0aDogMTAwJTsgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjI1czsgfVxyXG4gICAgLmNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpOyB9XHJcbiAgICAuY2FyZC1pbWd7IGhlaWdodDogMjgwcHg7IH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-logada/home-logada.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/home-logada/home-logada.component.ts ***!
    \******************************************************/

  /*! exports provided: HomeLogadaComponent */

  /***/
  function srcAppHomeLogadaHomeLogadaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeLogadaComponent", function () {
      return HomeLogadaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeLogadaComponent =
    /*#__PURE__*/
    function () {
      function HomeLogadaComponent(router) {
        _classCallCheck(this, HomeLogadaComponent);

        this.router = router;
        this.Usuario = JSON.parse(localStorage.getItem('cadastro'));
        this.Nome = this.Usuario.nome;
        this.Acesso = localStorage.getItem('aprovado');
        this.codekey = this.Acesso;
      }

      _createClass(HomeLogadaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.codekey != 'Unique') {
            this.router.navigate(['login']);
          }
        }
      }]);

      return HomeLogadaComponent;
    }();

    HomeLogadaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeLogadaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-logada',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-logada.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-logada/home-logada.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-logada.component.css */
      "./src/app/home-logada/home-logada.component.css")).default]
    })], HomeLogadaComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box-login {\r\n    margin: 30px;\r\n    padding: 30px;\r\n}\r\n\r\n.login {\r\n    padding: 10px;\r\n    border: none;\r\n    border-bottom: 2px solid #ddd;\r\n    border-radius: 0;\r\n    outline: none;\r\n    height: 50px;\r\n}\r\n\r\n.login:hover\r\n{\r\n    border-bottom: 2px solid var(--bg-cor-mute);\r\n}\r\n\r\n.login:focus\r\n{\r\n    border-bottom: 2px solid var(--bg-cor-pri);\r\n}\r\n\r\n.btn-login\r\n{\r\n    display: block;\r\n    margin: 30px auto 0;\r\n    font-size: 26px;\r\n    color: #fff;\r\n    background-color: var(--btn-cor-pri);\r\n    -webkit-transition: ease-in-out .250s;\r\n    transition: ease-in-out .250s;\r\n}\r\n\r\n.err\r\n{\r\n    border-bottom: 2px solid var(--bg-cor-err);\r\n}\r\n\r\n.btn-login:hover\r\n{\r\n    color: #000;\r\n    background-color: var(--btn-cor-pri-hov);\r\n}\r\n\r\n.btn-login:active\r\n{\r\n    color: #f6f6f6;\r\n    background-color: var(--btn-cor-pri-act);\r\n}\r\n\r\n@media (max-width: 1080px)\r\n{\r\n    .box-login\r\n    {\r\n        margin-top: 14vh;\r\n        margin-bottom: 14vh;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLDJDQUEyQztBQUMvQzs7QUFFQTs7SUFFSSwwQ0FBMEM7QUFDOUM7O0FBRUE7O0lBRUksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxxQ0FBNkI7SUFBN0IsNkJBQTZCO0FBQ2pDOztBQUNBOztJQUVJLDBDQUEwQztBQUM5Qzs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBOztJQUVJLGNBQWM7SUFDZCx3Q0FBd0M7QUFDNUM7O0FBRUE7O0lBRUk7O1FBRUksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtbG9naW4ge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubG9naW46aG92ZXJcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJnLWNvci1tdXRlKTtcclxufVxyXG5cclxuLmxvZ2luOmZvY3VzXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iZy1jb3ItcHJpKTtcclxufVxyXG5cclxuLmJ0bi1sb2dpblxyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb3ItcHJpKTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4yNTBzO1xyXG59XHJcbi5lcnJcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJnLWNvci1lcnIpO1xyXG59XHJcbi5idG4tbG9naW46aG92ZXJcclxue1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29yLXByaS1ob3YpO1xyXG59XHJcblxyXG4uYnRuLWxvZ2luOmFjdGl2ZVxyXG57XHJcbiAgICBjb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb3ItcHJpLWFjdCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpXHJcbntcclxuICAgIC5ib3gtbG9naW5cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0dmg7XHJcbiAgICB9XHJcbn0iXX0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formLogin = this.fb.group({
            email: [''],
            cpf: ['']
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.getCadastro = JSON.parse(localStorage.getItem('cadastro')); //email

          var emailDB = this.getCadastro['email'],
              emailL = this.formLogin.get('email').value; //cpf

          var cpfDB = this.getCadastro['cpf'],
              cpfL = this.formLogin.get('cpf').value;

          if (emailDB === emailL && cpfDB === cpfL) //sucesso
            {
              localStorage.setItem('aprovado', 'Unique');
              this.router.navigate(['home-logada']);
            } else //erro
            {
              document.getElementById("EMAIL").className = "form-control login shadow-none err";
              document.getElementById("CPF").className = "form-control login shadow-none err";
              setTimeout(function () {
                document.getElementById("EMAIL").className = "form-control login shadow-none";
                document.getElementById("CPF").className = "form-control login shadow-none";
              }, 1500);
            }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\weide\Desktop\Angular\Banco\Banco\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map