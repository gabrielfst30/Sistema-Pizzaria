"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/apiClient */ \"./src/services/apiClient.ts\");\n\nvar _s = $RefreshSig$();\n\n//importanto o destruidor de cookies\n\n//importando o router para acessar as rotas\n\n\n//recebendo o contexto doq vamos usar e recebendo a tipagem com as propriedades\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n//função de deslogar\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@nextauth.token\") //destruindo a sessão do usuário\n        ;\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\") // mandando o usuário de volta a tela inicial (login)\n        ;\n    } catch (e) {\n        console.log(\"erro ao deslogar\");\n    }\n}\n//onde vai prover informaçoes e ter os métodos\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    //armazenar as informações de quando o usuário fizer o login\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    //uma variável com base no user\n    //se o usário não estiver logado o isAuthenticated será falso, se tiver logado será verdadeiro\n    const isAuthenticated = !!user; //convertendo a variável do user como booleano com as interrogações\n    //recebendo os dados de LOGIN\n    async function signIn(param) {\n        let { email , password  } = param;\n        //tentanto logar buscando os dados da rota /session da API\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.post(\"/session\", {\n                email,\n                password\n            });\n            //desconstruindo o response data\n            const { id , name , token  } = response.data;\n            //SALVANDO o cookie de autenticação em session\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24,\n                path: \"/\" //Quais caminhos terão acesso aos cookies\n            });\n            //console.log(response.data);\n            //passando para o user os dados de login (ja logado)\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passando o token para manter-lo nas próximas requisiçoes\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n            //Redirecionar o user para o /dashboard\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/dashboard\");\n        } catch (err) {\n            console.log(\"ERRO AO ACESSAR\", err);\n        }\n    }\n    async function signUp() {}\n    return(//retornando o provider\n    //dentro do value qualquer componente depois poderá acessar\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Documents\\\\Sistema Pizzaria\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 109,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"kGLk6m4BT90iK1d91zRYm0C2usk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dFO0FBRWhFLG9DQUFvQztBQUM2QjtBQUNqRSwyQ0FBMkM7QUFDVjtBQUNVO0FBNEIzQywrRUFBK0U7QUFDeEUsTUFBTU0sNEJBQWNOLG9EQUFhQSxDQUFDLENBQUMsR0FBcUI7QUFHL0Qsb0JBQW9CO0FBQ2IsU0FBU08sVUFBUztJQUNyQixJQUFHO1FBQ0NMLHNEQUFhQSxDQUFDTSxXQUFXLG1CQUFtQixnQ0FBZ0M7O1FBQzVFSix1REFBVyxDQUFDLEtBQUkscURBQXFEOztJQUN6RSxFQUFDLFVBQUs7UUFDRk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0osQ0FBQztBQUdELDhDQUE4QztBQUN2QyxTQUFTQyxhQUFhLEtBQStCLEVBQUM7UUFBaEMsRUFBRUMsU0FBUSxFQUFxQixHQUEvQjs7SUFFekIsNERBQTREO0lBQzVELE1BQUssQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUE7SUFFL0IsK0JBQStCO0lBQy9CLDhGQUE4RjtJQUM5RixNQUFNZSxrQkFBa0IsQ0FBQyxDQUFDRixNQUFNLG1FQUFtRTtJQUduRyw2QkFBNkI7SUFDN0IsZUFBZUcsT0FBTyxLQUFnQyxFQUFDO1lBQWpDLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFlLEdBQWhDO1FBQ2xCLDBEQUEwRDtRQUMxRCxJQUFHO1lBQ0MsTUFBTUMsV0FBVyxNQUFNZix5REFBUSxDQUFDLFlBQVc7Z0JBQ3ZDYTtnQkFDQUM7WUFDUjtZQUVBLGdDQUFnQztZQUNoQyxNQUFNLEVBQUVHLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0osU0FBU0ssSUFBSTtZQUV6Qyw4Q0FBOEM7WUFDOUN0QixrREFBU0EsQ0FBQ0ssV0FBVyxtQkFBbUJnQixPQUFNO2dCQUMxQ0UsUUFBUSxLQUFLLEtBQUs7Z0JBQ2xCQyxNQUFNLElBQUkseUNBQXlDO1lBQ3ZEO1lBQ0EsNkJBQTZCO1lBRTdCLG9EQUFvRDtZQUNwRFosUUFBUTtnQkFDSk87Z0JBQ0FDO2dCQUNBTDtZQUNKO1lBRUEsMERBQTBEO1lBQzFEYixtRkFBcUMsR0FBRyxVQUFnQixPQUFObUI7WUFJbEQsdUNBQXVDO1lBQ3ZDcEIsdURBQVcsQ0FBQztRQUVaLEVBQUMsT0FBTTBCLEtBQUk7WUFDUHBCLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJtQjtRQUNuQztJQUNKO0lBRUEsZUFBZUMsU0FBUyxDQUV4QjtJQUdBLE9BQ0ksdUJBQXVCO0lBQ3ZCLDJEQUEyRDtrQkFDM0QsOERBQUN6QixZQUFZMEIsUUFBUTtRQUFDQyxPQUFPO1lBQUVuQjtZQUFNRTtZQUFpQkM7WUFBUVY7UUFBUTtrQkFDakVNOzs7Ozs7QUFHYixDQUFDO0dBN0RlRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4PzFmYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbiB9IGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vL2ltcG9ydGFudG8gbyBkZXN0cnVpZG9yIGRlIGNvb2tpZXNcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHNldENvb2tpZSwgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcbi8vaW1wb3J0YW5kbyBvIHJvdXRlciBwYXJhIGFjZXNzYXIgYXMgcm90YXNcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcblxuXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcbiAgICB1c2VyOiBVc2VyUHJvcHMgfCB1bmRlZmluZWQ7IC8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgaW5mb3JtYcOnw7VlcyBkbyB1c3XDoXJpb1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjsgLy9yZWNlYmVuZG8gYSBwcm9wcmllZGFkZSBkZSBzZSBvIHVzdcOhcmlvIGVzdGEgbG9nYWRvXG4gICAgc2lnbkluOiAoY3JlZGVudGlhbHM6IFNpZ25JblByb3BzKSA9PiAgUHJvbWlzZTx2b2lkPiAvL3JlY2ViZW5kbyBhIHByb3ByaWVkYWRlIGRlIGRhZG9zIGRlIGxvZ2luIGRvIHVzdcOhcmlvXG4gICAgc2lnbk91dDogKCkgPT4gdm9pZCAvL3JlY2ViZW5kbyBhIHByb3ByaWVkYWRlIGRlIGRlc2xvZ2FyXG59XG5cbi8vdGlwYWdlbSBkZSBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvXG50eXBlIFVzZXJQcm9wcyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xufVxuXG4vL2NyZWRlbmNpYWlzIGRlIGVtYWlsIGUgc2VuaGEgcGFyYSBsb2dpblxudHlwZSBTaWduSW5Qcm9wcyA9IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XG4gICAgLy9jaGlsZHJlbiDDqSBvIGNvbXBvbmVudGUgcGFyYSByZW5kZXJpemFyIGFzIHDDoWdpbmFzXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG4vL3JlY2ViZW5kbyBvIGNvbnRleHRvIGRvcSB2YW1vcyB1c2FyIGUgcmVjZWJlbmRvIGEgdGlwYWdlbSBjb20gYXMgcHJvcHJpZWRhZGVzXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSlcblxuXG4vL2Z1bsOnw6NvIGRlIGRlc2xvZ2FyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpe1xuICAgIHRyeXtcbiAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICdAbmV4dGF1dGgudG9rZW4nKSAvL2Rlc3RydWluZG8gYSBzZXNzw6NvIGRvIHVzdcOhcmlvXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJykvLyBtYW5kYW5kbyBvIHVzdcOhcmlvIGRlIHZvbHRhIGEgdGVsYSBpbmljaWFsIChsb2dpbilcbiAgICB9Y2F0Y2h7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvIGFvIGRlc2xvZ2FyJylcbiAgICB9XG59XG5cblxuLy9vbmRlIHZhaSBwcm92ZXIgaW5mb3JtYcOnb2VzIGUgdGVyIG9zIG3DqXRvZG9zXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMpe1xuICAgIFxuICAgIC8vYXJtYXplbmFyIGFzIGluZm9ybWHDp8O1ZXMgZGUgcXVhbmRvIG8gdXN1w6FyaW8gZml6ZXIgbyBsb2dpblxuICAgIGNvbnN0W3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclByb3BzPigpXG4gICAgXG4gICAgLy91bWEgdmFyacOhdmVsIGNvbSBiYXNlIG5vIHVzZXJcbiAgICAvL3NlIG8gdXPDoXJpbyBuw6NvIGVzdGl2ZXIgbG9nYWRvIG8gaXNBdXRoZW50aWNhdGVkIHNlcsOhIGZhbHNvLCBzZSB0aXZlciBsb2dhZG8gc2Vyw6EgdmVyZGFkZWlyb1xuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjsgLy9jb252ZXJ0ZW5kbyBhIHZhcmnDoXZlbCBkbyB1c2VyIGNvbW8gYm9vbGVhbm8gY29tIGFzIGludGVycm9nYcOnw7Vlc1xuXG5cbiAgICAvL3JlY2ViZW5kbyBvcyBkYWRvcyBkZSBMT0dJTlxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9OiBTaWduSW5Qcm9wcyl7XG4gICAgICAgIC8vdGVudGFudG8gbG9nYXIgYnVzY2FuZG8gb3MgZGFkb3MgZGEgcm90YSAvc2Vzc2lvbiBkYSBBUElcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Nlc3Npb24nLHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vZGVzY29uc3RydWluZG8gbyByZXNwb25zZSBkYXRhXG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIC8vU0FMVkFORE8gbyBjb29raWUgZGUgYXV0ZW50aWNhw6fDo28gZW0gc2Vzc2lvblxuICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnQG5leHRhdXRoLnRva2VuJywgdG9rZW4se1xuICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQsIC8vdGVtcG8gZGUgZXhwaXJhw6fDo28gZGUgdW0gbWVzXG4gICAgICAgICAgICBwYXRoOiBcIi9cIiAvL1F1YWlzIGNhbWluaG9zIHRlcsOjbyBhY2Vzc28gYW9zIGNvb2tpZXNcbiAgICAgICAgfSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAvL3Bhc3NhbmRvIHBhcmEgbyB1c2VyIG9zIGRhZG9zIGRlIGxvZ2luIChqYSBsb2dhZG8pXG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9QYXNzYW5kbyBvIHRva2VuIHBhcmEgbWFudGVyLWxvIG5hcyBwcsOzeGltYXMgcmVxdWlzacOnb2VzXG4gICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YFxuXG5cblxuICAgICAgICAvL1JlZGlyZWNpb25hciBvIHVzZXIgcGFyYSBvIC9kYXNoYm9hcmRcbiAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpXG5cbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk8gQU8gQUNFU1NBUlwiLCBlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzaWduVXAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICAvL3JldG9ybmFuZG8gbyBwcm92aWRlclxuICAgICAgICAvL2RlbnRybyBkbyB2YWx1ZSBxdWFscXVlciBjb21wb25lbnRlIGRlcG9pcyBwb2RlcsOhIGFjZXNzYXJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgc2lnbkluLCBzaWduT3V0IH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiZGVzdHJveUNvb2tpZSIsInNldENvb2tpZSIsIlJvdXRlciIsImFwaSIsIkF1dGhDb250ZXh0Iiwic2lnbk91dCIsInVuZGVmaW5lZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJpZCIsIm5hbWUiLCJ0b2tlbiIsImRhdGEiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiZXJyIiwic2lnblVwIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});