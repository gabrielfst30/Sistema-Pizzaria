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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/apiClient */ \"./src/services/apiClient.ts\");\n\nvar _s = $RefreshSig$();\n\n//importanto o destruidor de cookies\n\n//importando o router para acessar as rotas\n\n\n//recebendo o contexto doq vamos usar e recebendo a tipagem com as propriedades\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n//função de deslogar\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@nextauth.token\") //destruindo a sessão do usuário\n        ;\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\") // mandando o usuário de volta a tela inicial (login)\n        ;\n    } catch (e) {\n        console.log(\"erro ao deslogar\");\n    }\n}\n//onde vai prover informaçoes e ter os métodos\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    //armazenar as informações de quando o usuário fizer o login\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    //uma variável com base no user\n    //se o usário não estiver logado o isAuthenticated será falso, se tiver logado será verdadeiro\n    const isAuthenticated = !!user; //convertendo a variável do user como booleano com as interrogações\n    //recebendo os dados de LOGIN\n    async function signIn(param) {\n        let { email , password  } = param;\n        //tentanto logar buscando os dados da rota /session da API\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.post(\"/session\", {\n                email,\n                password\n            });\n            //desconstruindo o response data\n            const { id , name , token  } = response.data;\n            //SALVANDO o cookie de autenticação em session\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24,\n                path: \"/\" //Quais caminhos terão acesso aos cookies\n            });\n            //console.log(response.data);\n            //passando para o user os dados de login (ja logado)\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passando o token para manter-lo nas próximas requisiçoes\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n            //Redirecionar o user para o /dashboard\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/dashboard\");\n        } catch (err) {\n            console.log(\"ERRO AO ACESSAR\", err);\n        }\n    }\n    //recebendo dados de CADASTRO\n    async function signUp(param) {\n        let { name , email , password  } = param;\n        try {\n            //salvando os dados na API\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            console.lof;\n        } catch (err) {\n            console.log(\"Erro ao cadastrar\", err);\n        }\n    }\n    return(//retornando o provider\n    //dentro do value qualquer componente depois poderá acessar\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Documents\\\\Sistema Pizzaria\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"kGLk6m4BT90iK1d91zRYm0C2usk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dFO0FBRWhFLG9DQUFvQztBQUM2QjtBQUNqRSwyQ0FBMkM7QUFDVjtBQUNVO0FBbUMzQywrRUFBK0U7QUFDeEUsTUFBTU0sNEJBQWNOLG9EQUFhQSxDQUFDLENBQUMsR0FBcUI7QUFHL0Qsb0JBQW9CO0FBQ2IsU0FBU08sVUFBUztJQUNyQixJQUFHO1FBQ0NMLHNEQUFhQSxDQUFDTSxXQUFXLG1CQUFtQixnQ0FBZ0M7O1FBQzVFSix1REFBVyxDQUFDLEtBQUkscURBQXFEOztJQUN6RSxFQUFDLFVBQUs7UUFDRk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0osQ0FBQztBQUdELDhDQUE4QztBQUN2QyxTQUFTQyxhQUFhLEtBQStCLEVBQUM7UUFBaEMsRUFBRUMsU0FBUSxFQUFxQixHQUEvQjs7SUFFekIsNERBQTREO0lBQzVELE1BQUssQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUE7SUFFL0IsK0JBQStCO0lBQy9CLDhGQUE4RjtJQUM5RixNQUFNZSxrQkFBa0IsQ0FBQyxDQUFDRixNQUFNLG1FQUFtRTtJQUduRyw2QkFBNkI7SUFDN0IsZUFBZUcsT0FBTyxLQUFnQyxFQUFDO1lBQWpDLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFlLEdBQWhDO1FBQ2xCLDBEQUEwRDtRQUMxRCxJQUFHO1lBQ0MsTUFBTUMsV0FBVyxNQUFNZix5REFBUSxDQUFDLFlBQVc7Z0JBQ3ZDYTtnQkFDQUM7WUFDUjtZQUVBLGdDQUFnQztZQUNoQyxNQUFNLEVBQUVHLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0osU0FBU0ssSUFBSTtZQUV6Qyw4Q0FBOEM7WUFDOUN0QixrREFBU0EsQ0FBQ0ssV0FBVyxtQkFBbUJnQixPQUFNO2dCQUMxQ0UsUUFBUSxLQUFLLEtBQUs7Z0JBQ2xCQyxNQUFNLElBQUkseUNBQXlDO1lBQ3ZEO1lBQ0EsNkJBQTZCO1lBRTdCLG9EQUFvRDtZQUNwRFosUUFBUTtnQkFDSk87Z0JBQ0FDO2dCQUNBTDtZQUNKO1lBRUEsMERBQTBEO1lBQzFEYixtRkFBcUMsR0FBRyxVQUFnQixPQUFObUI7WUFJbEQsdUNBQXVDO1lBQ3ZDcEIsdURBQVcsQ0FBQztRQUVaLEVBQUMsT0FBTTBCLEtBQUk7WUFDUHBCLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJtQjtRQUNuQztJQUNKO0lBRUEsNkJBQTZCO0lBQzdCLGVBQWVDLE9BQU8sS0FBc0MsRUFBQztZQUF2QyxFQUFFUixLQUFJLEVBQUVMLE1BQUssRUFBRUMsU0FBUSxFQUFlLEdBQXRDO1FBQ2xCLElBQUc7WUFFQywwQkFBMEI7WUFDMUIsTUFBTUMsV0FBVyxNQUFNZix5REFBUSxDQUFDLFVBQVM7Z0JBQ3JDa0I7Z0JBQ0FMO2dCQUNBQztZQUNKO1lBRUFULFFBQVFzQixHQUFHO1FBRWYsRUFBQyxPQUFNRixLQUFJO1lBQ1BwQixRQUFRQyxHQUFHLENBQUMscUJBQXFCbUI7UUFDckM7SUFDSjtJQUdBLE9BQ0ksdUJBQXVCO0lBQ3ZCLDJEQUEyRDtrQkFDM0QsOERBQUN4QixZQUFZMkIsUUFBUTtRQUFDQyxPQUFPO1lBQUVwQjtZQUFNRTtZQUFpQkM7WUFBUVY7WUFBU3dCO1FBQU87a0JBQ3pFbEI7Ozs7OztBQUdiLENBQUM7R0EzRWVEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWduIH0gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2UsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vaW1wb3J0YW50byBvIGRlc3RydWlkb3IgZGUgY29va2llc1xuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSwgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuLy9pbXBvcnRhbmRvIG8gcm91dGVyIHBhcmEgYWNlc3NhciBhcyByb3Rhc1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xuXG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICAgIHVzZXI6IFVzZXJQcm9wcyB8IHVuZGVmaW5lZDsgLy9yZWNlYmVuZG8gYSBwcm9wcmllZGFkZSBkZSBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuOyAvL3JlY2ViZW5kbyBhIHByb3ByaWVkYWRlIGRlIHNlIG8gdXN1w6FyaW8gZXN0YSBsb2dhZG9cbiAgICBzaWduSW46IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+ICBQcm9taXNlPHZvaWQ+IC8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgZGFkb3MgZGUgbG9naW4gZG8gdXN1w6FyaW9cbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkIC8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgZGVzbG9nYXJcbiAgICBzaWduVXA6IChjcmVkZW50aWFsczogU2lnblVwUHJvcHMpID0+IFByb21pc2U8dm9pZD4vL3JlY2ViZW5kbyBhIHByb3ByaWVkYWRlIGRlIGluZm9ybWHDp8O1ZXMgZGUgY2FkYXN0cm9cbn1cblxuLy90aXBhZ2VtIGRlIGluZm9ybWHDp8O1ZXMgZG8gdXN1w6FyaW9cbnR5cGUgVXNlclByb3BzID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG59XG5cbi8vY3JlZGVuY2lhaXMgZGUgZW1haWwgZSBzZW5oYSBwYXJhIGxvZ2luXG50eXBlIFNpZ25JblByb3BzID0ge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxudHlwZSBTaWduVXBQcm9wcyA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG50eXBlIEF1dGhQcm92aWRlclByb3BzID0ge1xuICAgIC8vY2hpbGRyZW4gw6kgbyBjb21wb25lbnRlIHBhcmEgcmVuZGVyaXphciBhcyBww6FnaW5hc1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuLy9yZWNlYmVuZG8gbyBjb250ZXh0byBkb3EgdmFtb3MgdXNhciBlIHJlY2ViZW5kbyBhIHRpcGFnZW0gY29tIGFzIHByb3ByaWVkYWRlc1xuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXG5cblxuLy9mdW7Dp8OjbyBkZSBkZXNsb2dhclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKXtcbiAgICB0cnl7XG4gICAgICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnQG5leHRhdXRoLnRva2VuJykgLy9kZXN0cnVpbmRvIGEgc2Vzc8OjbyBkbyB1c3XDoXJpb1xuICAgICAgICBSb3V0ZXIucHVzaCgnLycpLy8gbWFuZGFuZG8gbyB1c3XDoXJpbyBkZSB2b2x0YSBhIHRlbGEgaW5pY2lhbCAobG9naW4pXG4gICAgfWNhdGNoe1xuICAgICAgICBjb25zb2xlLmxvZygnZXJybyBhbyBkZXNsb2dhcicpXG4gICAgfVxufVxuXG5cbi8vb25kZSB2YWkgcHJvdmVyIGluZm9ybWHDp29lcyBlIHRlciBvcyBtw6l0b2Rvc1xuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKXtcbiAgICBcbiAgICAvL2FybWF6ZW5hciBhcyBpbmZvcm1hw6fDtWVzIGRlIHF1YW5kbyBvIHVzdcOhcmlvIGZpemVyIG8gbG9naW5cbiAgICBjb25zdFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJQcm9wcz4oKVxuICAgIFxuICAgIC8vdW1hIHZhcmnDoXZlbCBjb20gYmFzZSBubyB1c2VyXG4gICAgLy9zZSBvIHVzw6FyaW8gbsOjbyBlc3RpdmVyIGxvZ2FkbyBvIGlzQXV0aGVudGljYXRlZCBzZXLDoSBmYWxzbywgc2UgdGl2ZXIgbG9nYWRvIHNlcsOhIHZlcmRhZGVpcm9cbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7IC8vY29udmVydGVuZG8gYSB2YXJpw6F2ZWwgZG8gdXNlciBjb21vIGJvb2xlYW5vIGNvbSBhcyBpbnRlcnJvZ2HDp8O1ZXNcblxuXG4gICAgLy9yZWNlYmVuZG8gb3MgZGFkb3MgZGUgTE9HSU5cbiAgICBhc3luYyBmdW5jdGlvbiBzaWduSW4oeyBlbWFpbCwgcGFzc3dvcmQgfTogU2lnbkluUHJvcHMpe1xuICAgICAgICAvL3RlbnRhbnRvIGxvZ2FyIGJ1c2NhbmRvIG9zIGRhZG9zIGRhIHJvdGEgL3Nlc3Npb24gZGEgQVBJXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zZXNzaW9uJyx7XG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfSlcblxuICAgICAgICAvL2Rlc2NvbnN0cnVpbmRvIG8gcmVzcG9uc2UgZGF0YVxuICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCB0b2tlbiB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAvL1NBTFZBTkRPIG8gY29va2llIGRlIGF1dGVudGljYcOnw6NvIGVtIHNlc3Npb25cbiAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ0BuZXh0YXV0aC50b2tlbicsIHRva2VuLHtcbiAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0LCAvL3RlbXBvIGRlIGV4cGlyYcOnw6NvIGRlIHVtIG1lc1xuICAgICAgICAgICAgcGF0aDogXCIvXCIgLy9RdWFpcyBjYW1pbmhvcyB0ZXLDo28gYWNlc3NvIGFvcyBjb29raWVzXG4gICAgICAgIH0pXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgLy9wYXNzYW5kbyBwYXJhIG8gdXNlciBvcyBkYWRvcyBkZSBsb2dpbiAoamEgbG9nYWRvKVxuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vUGFzc2FuZG8gbyB0b2tlbiBwYXJhIG1hbnRlci1sbyBuYXMgcHLDs3hpbWFzIHJlcXVpc2nDp29lc1xuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWBcblxuXG5cbiAgICAgICAgLy9SZWRpcmVjaW9uYXIgbyB1c2VyIHBhcmEgbyAvZGFzaGJvYXJkXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKVxuXG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPIEFPIEFDRVNTQVJcIiwgZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9yZWNlYmVuZG8gZGFkb3MgZGUgQ0FEQVNUUk9cbiAgICBhc3luYyBmdW5jdGlvbiBzaWduVXAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogU2lnblVwUHJvcHMpe1xuICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgIC8vc2FsdmFuZG8gb3MgZGFkb3MgbmEgQVBJXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvdXNlcnMnLHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZlxuXG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvIGFvIGNhZGFzdHJhclwiLCBlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybihcbiAgICAgICAgLy9yZXRvcm5hbmRvIG8gcHJvdmlkZXJcbiAgICAgICAgLy9kZW50cm8gZG8gdmFsdWUgcXVhbHF1ZXIgY29tcG9uZW50ZSBkZXBvaXMgcG9kZXLDoSBhY2Vzc2FyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIHNpZ25Jbiwgc2lnbk91dCwgc2lnblVwIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiZGVzdHJveUNvb2tpZSIsInNldENvb2tpZSIsIlJvdXRlciIsImFwaSIsIkF1dGhDb250ZXh0Iiwic2lnbk91dCIsInVuZGVmaW5lZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJpZCIsIm5hbWUiLCJ0b2tlbiIsImRhdGEiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiZXJyIiwic2lnblVwIiwibG9mIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});